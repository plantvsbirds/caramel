import json
from string import Template

with open('content.json', 'r') as f:
    data = json.load(f)

model_metadata = {}
for type in data["types"]:
    model_metadata[type] = []

for model in data["models"]:
    model_metadata[model["type"]].append(model)

def chunks(l, n):
    for i in range(0, len(l), n):
        yield l[i:i + n]

def render_model_line(model):
    model_template = Template("""|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_$fname.jpg">]($link)|<b>$name</b><br />$desc<br />[Download]($link?download) [Demo]($link_demo) [Reference]($link_reference)|\n""")
    link = data["site_prefix"] + model["pathname"]
    return model_template.substitute(
        fname=model["file"].split('.mlmodel')[0],
        name=model["name"],
        link=link,
        desc=model["description"],
        link_demo=model["demo_link"],
        link_reference=model["reference_link"]
      )

def render_thumbs(line):
    image_template = Template("""[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_$fname.jpg">]($link)|""")
    ans = "|"
    for model in line:
      ans += image_template.substitute(
        fname=model["file"].split('.mlmodel')[0],
        link=data["site_prefix"] + model["pathname"])
    return ans

def render_content(line):
    content_template = Template("""<b>$name</b><br />$desc<br />[Download]($link?download) [Demo]($link_demo) [Reference]($link_reference)|""")
    ans = "|"
    for model in line:
      ans += content_template.substitute(
        desc=model["description"],
        name=model["name"],
        link=data["site_prefix"] + model["pathname"],
        link_demo=model["demo_link"],
        link_reference=model["reference_link"])
    return ans

def render_line(line):
    return "".join(render_thumbs(line)) + "\n" + "".join(render_content(line))

def render_models(models):
    chunks_list = list(chunks(models, 3))
    ans = ""
    for c in chunks_list:
      ans += render_line(c)
      ans += "\n"
    return ans

content = """
<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->
<p align="center">
<img src="images/coreml.png" width="329" height="295"/>
</p>

# Awesome Core ML Models

Since iOS 11, Apple released Core ML framework to help developers integrate machine learning models into applications. [The official documentation](https://developer.apple.com/documentation/coreml)

We've put up the largest collection of machine learning models in Core ML format, to help  iOS, macOS, tvOS, and watchOS developers experiment with machine learning techniques. We've created a site with better visualization of the models [CoreML.Store](https://coreml.store), and are working on more advance features.

If you've converted a Core ML model, feel free to submit a PR here.

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# Models

## Image Processing
*Models that takes image data as input and output useful information about the image.*

| | | |
|-|-|-|
"""

content += render_models(model_metadata["image"])

content += """
## Style Transfer
*Models that transform image to specific style.*

| | | |
|-|-|-|
"""

content += render_models(model_metadata["Style Transfer"])


content += """
## Text Analysis
*Models that takes text data as input and output useful information about the text.*

| | | |
|-|-|-|
"""

content += render_models(model_metadata["text"])

content += """
## Others

| | | |
|-|-|-|
"""

content += render_models(model_metadata["others"])

content += """

# Supported formats
*List of model formats that could be converted to Core ML with examples*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)
* [Torch7](https://github.com/prisma-ai/torch2coreml)

# The Gold
*Collections of machine learning models that could be converted to Core ML*

* [Caffe Model Zoo](https://github.com/BVLC/caffe/wiki/Model-Zoo) - Big list of models in Caffe format.
* [TensorFlow Models](https://github.com/tensorflow/models) - Models for TensorFlow.
* [TensorFlow Slim Models](https://github.com/tensorflow/models/blob/master/slim/README.md) - Another collection of TensorFlow Models.
* [MXNet Model Zoo](https://mxnet.incubator.apache.org/model_zoo/) - Collection of MXNet models.

# Contributing and License
* [See the guide](https://github.com/likedan/Awesome-CoreML-Models/blob/master/.github/CONTRIBUTING.md)
* Distributed under the MIT license. See LICENSE for more information.
"""

with open("README.md", 'w') as out:
    out.write(content + '\n')
