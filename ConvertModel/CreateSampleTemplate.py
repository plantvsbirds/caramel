import os, json

metadata_files = os.path.join(os.curdir, "..", "content", "metadata")
output_dir = os.path.join(os.curdir, "..", "content", "samples")
existing_files = os.listdir(output_dir)

for file_name in os.listdir(metadata_files):
    if '.json' in file_name and file_name not in existing_files:

        result = {}
        with open(os.path.join(metadata_files, file_name)) as data_file:
            data = json.load(data_file)
            result["primary_input"] = ""
            result["primary_output"] = ""
            sample = {"input": {}, "output": {}}
            for input in data["input"]:
                sample["input"][input["name"]] = {"type": "", "content": ""}
            for output in data["output"]:
                sample["output"][output["name"]] = {"type": "", "content": ""}
            result["samples"] = [sample]

        with open(os.path.join(output_dir, file_name), 'w') as outfile:
            json.dump(result, outfile, indent=4)
#        os.mkdir(os.path.join(output_dir, file_name.replace(".json", "")))

