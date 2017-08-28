import coremltools
import os
import json

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

def getTypeInfo(type):
    if "int64Type" == str(type).split(" ")[0]:
        return "Int64"
    elif "dictionaryType" == str(type).split(" ")[0]:
        if str(type).split("dictionaryType {\n  ")[0].split(" ")[0] == "int64KeyType":
            key = "Int64"
        else:
            key = "String"
        return "Dictionary (" + key + " -> Double)"
    elif "imageType" == str(type).split(" ")[0]:
        return "Image (" + str(type).split("colorSpace: ")[-1].split("\n")[0] + " " + str(type.imageType.width) + " x " + str(type.imageType.height) + ")"

result = {}

file_path = 'MNIST.mlmodel'
model = coremltools.models.MLModel(file_path)


result["description"] = model.short_description
result["author"] = model.author
result["license"] = model.license
result["name"] = file_path.split("/")[-1].split(".mlmodel")[0]
result["size"] = file_size(file_path)
result["input"] = []
result["output"] = []

for output in model.get_spec().description.output:
    result["output"].append({"name": output.name, "description": output.shortDescription, "type": getTypeInfo(output.type)})

for input in model.get_spec().description.input:
    result["input"].append({"name": input.name, "description": input.shortDescription, "type": getTypeInfo(input.type)})

with open(result["name"] + ".json", 'w') as outfile:
    json.dump(result, outfile, indent=4)
