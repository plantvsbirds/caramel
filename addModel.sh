# This gets run after the model metadata is added to the content.json

# Copy model file under content/models
cd ConvertModel
python ReadModelInfo.py
python CreateSampleTemplate.py
# Afterward
# 1. fill out the sample json file
# 2. use script to crop thumbnail
# 3. upload model and image file to s3
# 4. npm run db
# 5. generate_readme.py
# 6. update Awesome Page
