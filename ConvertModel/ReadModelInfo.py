import coremltools
import os
import json
from subprocess import Popen, PIPE, STDOUT
from google.protobuf import descriptor_pb2
import google.protobuf
import os

def convert_bytes(num):
    """
    this function will convert bytes to MB.... GB... etc
    """
    for x in ['bytes', 'KB', 'MB', 'GB', 'TB']:
        if num < 1024.0:
            return "%3.1f %s" % (num, x)
        num /= 1024.0


def file_size(file_path):
    """
    this function will return the file size
    """
    if os.path.isfile(file_path):
        file_info = os.stat(file_path)
        return convert_bytes(file_info.st_size)

def get_input_output_info(test, lines):

    result = {}

    index = 0
    for line in lines:
        if '    name: "' in line:
            result["name"] = line[11: -2]
        if '    shortDescription: "' in line:
            result["description"] = line[23: -2]
        if line == "    type {\n":
            types, type_lines = get_block_code(lines[index:])
            types = "".join(type_lines[1: -1])
            type = types.split(" {")[0].strip(" ")
            if type == "int64Type":
                result["type"] = "Int64"
            elif type == "stringType":
                result["type"] = "String"
            elif type == "doubleType":
                result["type"] = "Double"
            elif type == "dictionaryType":
                dict_type = type_lines[2].split(" {")[0].strip(" ")
                if dict_type == "stringKeyType":
                    result["type"] = "Dictionary (String -> Double)"
                elif dict_type == "int64KeyType":
                    result["type"] = "Dictionary (Int64 -> Double)"
            elif type == "imageType":
                width = ""
                height = ""
                for t in type_lines:
                    if "width:" in t:
                        width = t.replace("width:", "").strip("\n").strip(" ")
                    elif "height:" in t:
                        height = t.replace("height:", "").strip("\n").strip(" ")
                if "GRAYSCALE" in types:
                    result["type"] = "Image (Gray scale " + width + " x " + height + ")"
                else:
                    result["type"] = "Image (Color " + width + " x " + height + ")"
            elif type == "multiArrayType":
                dataType = types.split("dataType: ")[1].split("\n")[0]
                array_result = "MultiArray (" + dataType[0] + dataType[1:].lower()
                isFirst = True
                for t in type_lines:
                    if "shape:" in t:
                        if isFirst:
                            isFirst = False
                        else:
                            array_result += " x"
                        array_result += " " + t.replace("shape:", "").strip("\n").strip(" ")
                array_result += ")"
                result["type"] = array_result
            else:
                result["type"] = type
            break
        index += 1

    return result


def get_block_code(iterator):
    start_counting = False
    count = 0
    data = ""
    lines = []

    for line in iterator:
        lines.append(line)
        data += line
        if "{" in line:
            start_counting = True
            count += 1
        if "}" in line:
            count -= 1
        if start_counting and count == 0:
            break
    return data, lines

model_files = os.path.join(os.curdir, "..", "content", "models")
output_path = os.path.join(os.curdir, "..", "content", "metadata")


for file_name in os.listdir(model_files):
    if '.mlmodel' in file_name:
        print file_name
        result = {}

        file_path = os.path.join(model_files, file_name)
        reader = Popen("cat " + file_path + " | protoc --decode CoreML.Specification.Model Model.proto | less", stdout=PIPE,
                       stderr=STDOUT, shell=True)
        data, lines = get_block_code(reader.stdout)
        try:
            reader.terminate()
        except OSError:
            # can't kill a dead proc
            pass

        if 'metadata {\n    shortDescription: "' in data:
            descriptions = data.split('metadata {\n    shortDescription: "')[1]
            result["description"] = descriptions.split('"\n    author: "')[0]
            result["author"] = descriptions.split('    author: "')[1].split('"\n    license: "')[0]
            result["license"] = descriptions.split('"\n    license: "')[1].split('"\n  }\n}')[0]

        result["name"] = file_name.split(".mlmodel")[0]
        result["size"] = file_size(file_path)
        result["input"] = []
        result["output"] = []

        index = 0
        while index < len(lines):
            line = lines[index]
            if line == "  input {\n":
                input, ls = get_block_code(lines[index:])
                result["input"].append(get_input_output_info("".join(ls[1: -1]), ls[1: -1]))
            elif line == "  output {\n":
                input, ls = get_block_code(lines[index:])
                result["output"].append(get_input_output_info("".join(ls[1: -1]), ls[1: -1]))
            index += 1

        with open(os.path.join(output_path, result["name"] + ".json"), 'w') as outfile:
            json.dump(result, outfile, indent=4)