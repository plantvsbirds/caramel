from PIL import Image
import numpy as np
import os

for file_name in os.listdir("./"):

    if file_name.split(".")[-1].lower() == "png":
        image = Image.open(file_name)
        image.load()

        image_data = np.asarray(image)
        image_data_bw = image_data.max(axis=2)
        cropBox = (200, 1442, 0, 1242)

        image_data_new = image_data[cropBox[0]:cropBox[1]+1, cropBox[2]:cropBox[3]+1 , :]

        new_image = Image.fromarray(image_data_new)
        new_image.save(file_name)