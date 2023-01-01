import blurhash
import numpy as np
import PIL.Image
from glob import glob
import json
from multiprocessing import Pool
from tqdm import tqdm
import os

def getHash(imgPath):        
    img = np.array(PIL.Image.open(imgPath).convert("RGB"))
    UBL = blurhash.encode(img)
    return { "name": os.path.basename(imgPath),"blurhash":UBL,"width":img.shape[0],"height":img.shape[1]}
# Result: 'UBL_:rOpGG-oBUNG,qRj2so|=eE1w^n4S5NH'
if __name__ == '__main__':
    imagesList = glob("../public/*.JPG")
    with Pool(3) as pool:
        imagesEncoded = list(tqdm(pool.imap(getHash,imagesList),total=len(imagesList)))
        with open("encodedImages.json","w",encoding='utf-8') as f:
            print(imagesEncoded)
            json.dump(imagesEncoded,f,indent=2)
    # os.system("shutdown now -h")
