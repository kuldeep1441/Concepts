import os

folder_path = "/Users/kuldeep/Desktop/PYTHON"
files = os.listdir(folder_path)

for file in files:
    print(file)