import json

with open('content.json', 'r') as f:
    data = json.load(f)

model_metadata = {}
for type in data["types"]:
    model_metadata[type] = []

for model in data["models"]:
    model_metadata[model["type"]].append(model)

def render_model_line(model):
    return "* **" + model["name"] + "** - " + model["description"] + " [Download](" + data["model_download_url_prefix"] + model["file"] + ") | [Demo](" + model["demo_link"] + ") | [Reference](" + model["reference_link"] + ")\n"

content = """
<!--
Title: Awesome Core ML Models
Description: A curated list of machine learning models in Core ML format.
Author: Kedan Li
-->
<img src="images/coreml.png" width="150" height="150"/>

# Awesome Core ML Models

We've put up the largest collection of machine learning models that work with Apples Core ML standard, to help iOS developers experiment with machine learning techniques. If you've converted a Core ML model and feel free to submit a PR here.

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

# Models

## Image Detection
*Models that takes image data as input and output useful information about the image.*
"""

for model in model_metadata["image_detection"]:
    content += render_model_line(model)

content += """
## Image Processing
*Models that transform image data into other form of image data.*
"""

for model in model_metadata["image_processing"]:
    content += render_model_line(model)

content += """
## Text Analysis
*Models that takes text data as input and output useful information about the text.*
"""

for model in model_metadata["text"]:
    content += render_model_line(model)

content += "## Others\n"

for model in model_metadata["others"]:
    content += render_model_line(model)

content += """

# Supported formats
*List of model formats that could be converted to Core ML with examples*
* [Caffe](https://apple.github.io/coremltools/generated/coremltools.converters.caffe.convert.html)
* [Keras](https://apple.github.io/coremltools/generated/coremltools.converters.keras.convert.html)
* [XGBoost](https://apple.github.io/coremltools/generated/coremltools.converters.xgboost.convert.html)
* [Scikit-learn](https://apple.github.io/coremltools/generated/coremltools.converters.sklearn.convert.html)
* [MXNet](https://aws.amazon.com/blogs/ai/bring-machine-learning-to-ios-apps-using-apache-mxnet-and-apple-core-ml/)
* [LibSVM](https://apple.github.io/coremltools/generated/coremltools.converters.libsvm.convert.html)

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
