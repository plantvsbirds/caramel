
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
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_MobileNet.jpg">](https://coreml.store/mobilenet)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_GoogLeNetPlaces.jpg">](https://coreml.store/googlenetplaces)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_Inceptionv3.jpg">](https://coreml.store/inceptionv3)|
|<b>MobileNet</b><br />Detects the dominant objects present in an image.<br />[Download](https://coreml.store/mobilenet?download) [Demo](https://github.com/hollance/MobileNet-CoreML) [Reference](https://arxiv.org/abs/1704.04861)|<b>Places CNN</b><br />Detects the scene of an image from 205 categories such as bedroom, forest, coast etc.<br />[Download](https://coreml.store/googlenetplaces?download) [Demo](https://github.com/chenyi1989/CoreMLDemo) [Reference](http://places.csail.mit.edu/index.html)|<b>Inception v3</b><br />Detects the dominant objects present in an image.<br />[Download](https://coreml.store/inceptionv3?download) [Demo](https://github.com/yulingtianxia/Core-ML-Sample/) [Reference](https://arxiv.org/abs/1512.00567)|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_Resnet50.jpg">](https://coreml.store/resnet50)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_VGG16.jpg">](https://coreml.store/vgg16)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_CarRecognition.jpg">](https://coreml.store/carrecognition)|
|<b>ResNet50</b><br />Detects the dominant objects present in an image.<br />[Download](https://coreml.store/resnet50?download) [Demo](https://github.com/atomic14/VisionCoreMLSample) [Reference](https://arxiv.org/abs/1512.03385)|<b>VGG16</b><br />Detects the dominant objects present in an image.<br />[Download](https://coreml.store/vgg16?download) [Demo](https://github.com/alaphao/CoreMLExample) [Reference](https://arxiv.org/abs/1409.1556)|<b>Car Recognition</b><br />Predict the brand & model of a car.<br />[Download](https://coreml.store/carrecognition?download) [Demo](https://github.com/likedan/Core-ML-Car-Recognition) [Reference](http://mmlab.ie.cuhk.edu.hk/datasets/comp_cars/index.html)|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_TinyYOLO.jpg">](https://coreml.store/tinyyolo)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_AgeNet.jpg">](https://coreml.store/agenet)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_GenderNet.jpg">](https://coreml.store/gendernet)|
|<b>YOLO</b><br />Recognize what the objects are inside a given image and where they are in the image.<br />[Download](https://coreml.store/tinyyolo?download) [Demo](https://github.com/hollance/YOLO-CoreML-MPSNNGraph) [Reference](http://machinethink.net/blog/object-detection-with-yolo)|<b>AgeNet</b><br />Predict a person's age from one's portrait.<br />[Download](https://coreml.store/agenet?download) [Demo](https://github.com/cocoa-ai/FacesVisionDemo) [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)|<b>GenderNet</b><br />Predict a person's gender from one's portrait.<br />[Download](https://coreml.store/gendernet?download) [Demo](https://github.com/cocoa-ai/FacesVisionDemo) [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_agegender/)|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_MNIST.jpg">](https://coreml.store/mnist)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_CNNEmotions.jpg">](https://coreml.store/cnnemotions)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_VisualSentimentCNN.jpg">](https://coreml.store/visualsentimentcnn)|
|<b>MNIST</b><br />Predict handwritten (drawn) digits from images.<br />[Download](https://coreml.store/mnist?download) [Demo](https://github.com/ph1ps/MNIST-CoreML) [Reference](http://yann.lecun.com/exdb/mnist/)|<b>EmotionNet</b><br />Predict a person's emotion from one's portrait.<br />[Download](https://coreml.store/cnnemotions?download) [Demo](https://github.com/cocoa-ai/FacesVisionDemo) [Reference](http://www.openu.ac.il/home/hassner/projects/cnn_emotions/)|<b>SentimentVision</b><br />Predict positive or negative sentiments from images.<br />[Download](https://coreml.store/visualsentimentcnn?download) [Demo](https://github.com/cocoa-ai/SentimentVisionDemo) [Reference](http://www.sciencedirect.com/science/article/pii/S0262885617300355?via%3Dihub)|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_Food101.jpg">](https://coreml.store/food101)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_Oxford102.jpg">](https://coreml.store/oxford102)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_FlickrStyle.jpg">](https://coreml.store/flickrstyle)|
|<b>Food101</b><br />Predict the type of foods from images.<br />[Download](https://coreml.store/food101?download) [Demo](https://github.com/ph1ps/Food101-CoreML) [Reference](http://visiir.lip6.fr/explore)|<b>Oxford102</b><br />Detect the type of flowers from images.<br />[Download](https://coreml.store/oxford102?download) [Demo](https://github.com/cocoa-ai/FlowersVisionDemo) [Reference](http://jimgoo.com/flower-power/)|<b>FlickrStyle</b><br />Detect the artistic style of images.<br />[Download](https://coreml.store/flickrstyle?download) [Demo](https://github.com/cocoa-ai/StylesVisionDemo) [Reference](http://sergeykarayev.com/files/1311.3715v3.pdf)|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_RN1015k500.jpg">](https://coreml.store/rn1015k500)|
|<b>LocationNet</b><br />Predict the location where a picture was taken.<br />[Download](https://coreml.store/rn1015k500?download) [Demo](https://github.com/awslabs/MXNet2CoreML_iOS_sample_app) [Reference](https://aws.amazon.com/blogs/ai/estimating-the-location-of-images-using-mxnet-and-multimedia-commons-dataset-on-aws-ec2)|

## Style Transfer
*Models that transform image to specific style.*

| | | |
|-|-|-|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_HED_so.jpg">](https://coreml.store/hed_so)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_FNS-Candy.jpg">](https://coreml.store/fns-candy)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_FNS-Feathers.jpg">](https://coreml.store/fns-feathers)|
|<b>HED</b><br />Output the nested edges of a color image.<br />[Download](https://coreml.store/hed_so?download) [Demo](https://github.com/s1ddok/HED-CoreML) [Reference](http://dl.acm.org/citation.cfm?id=2654889)|<b>Candy</b><br />Transfer a color image into Candy style.<br />[Download](https://coreml.store/fns-candy?download) [Demo](https://github.com/prisma-ai/torch2coreml) [Reference](http://cs.stanford.edu/people/jcjohns/eccv16/)|<b>Feathers</b><br />Transfer a color image into Feathers style.<br />[Download](https://coreml.store/fns-feathers?download) [Demo](https://github.com/prisma-ai/torch2coreml) [Reference](http://cs.stanford.edu/people/jcjohns/eccv16/)|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_FNS-La-Muse.jpg">](https://coreml.store/fns-la-muse)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_FNS-The-Scream.jpg">](https://coreml.store/fns-the-scream)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_FNS-Udnie.jpg">](https://coreml.store/fns-udnie)|
|<b>La Muse</b><br />Transfer a color image into La-muse style.<br />[Download](https://coreml.store/fns-la-muse?download) [Demo](https://github.com/prisma-ai/torch2coreml) [Reference](http://cs.stanford.edu/people/jcjohns/eccv16/)|<b>The Scream</b><br />Transfer a color image into The-Scream style.<br />[Download](https://coreml.store/fns-the-scream?download) [Demo](https://github.com/prisma-ai/torch2coreml) [Reference](http://cs.stanford.edu/people/jcjohns/eccv16/)|<b>Udnie</b><br />Transfer a color image into Udnie style.<br />[Download](https://coreml.store/fns-udnie?download) [Demo](https://github.com/prisma-ai/torch2coreml) [Reference](http://cs.stanford.edu/people/jcjohns/eccv16/)|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_FNS-Mosaic.jpg">](https://coreml.store/fns-mosaic)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_AnimeScale2x.jpg">](https://coreml.store/animescale2x)|
|<b>Mosaic</b><br />Transfer a color image into Mosaic style.<br />[Download](https://coreml.store/fns-mosaic?download) [Demo](https://github.com/prisma-ai/torch2coreml) [Reference](http://cs.stanford.edu/people/jcjohns/eccv16/)|<b>AnimeScale2x</b><br />Scale and denoise anime-style artworks.<br />[Download](https://coreml.store/animescale2x?download) [Demo](https://github.com/imxieyi/waifu2x-ios) [Reference](https://arxiv.org/abs/1501.00092)|

## Text Analysis
*Models that takes text data as input and output useful information about the text.*

| | | |
|-|-|-|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_SentimentPolarity.jpg">](https://coreml.store/sentimentpolarity)|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_MessageClassifier.jpg">](https://coreml.store/messageclassifier)|
|<b>Sentiment Polarity</b><br />Predict positive or negative sentiments from sentences.<br />[Download](https://coreml.store/sentimentpolarity?download) [Demo](https://github.com/cocoa-ai/SentimentCoreMLDemo) [Reference](http://boston.lti.cs.cmu.edu/classes/95-865-K/HW/HW3/)|<b>iMessage Spam Detection</b><br />Detect whether a message is spam.<br />[Download](https://coreml.store/messageclassifier?download) [Demo](https://github.com/gkswamy98/imessage-spam-detection/tree/master) [Reference](http://www.dt.fee.unicamp.br/~tiago/smsspamcollection/)|

## Others

| | | |
|-|-|-|
|[<img src="https://s3-us-west-2.amazonaws.com/coreml-assets/cover_Exermote.jpg">](https://coreml.store/exermote)|
|<b>Exermote</b><br />Predicts the type of exercise from movement data.<br />[Download](https://coreml.store/exermote?download) [Demo](https://github.com/Lausbert/Exermote/tree/master/ExermoteInference) [Reference](http://lausbert.com/2017/08/03/exermote/)|


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

