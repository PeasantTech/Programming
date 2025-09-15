import os
import re

path = r"C:\Rulers\Rulers" #hard-coded file path
files = os.listdir(path)

for i in files :
    newPath = path + "\\" + i
    newFiles = os.listdir(newPath)
    rulerNum = re.sub(" ", "", i) + "_"
    count = 1
    os.getcwd
    for j in newFiles :
        fileName, fileExtension = os.path.splitext(j)
        fileNameParts = fileName.split("_")
        cameraNum = fileNameParts[0] + "_"
        quality = fileNameParts[4]
        inchNum = "Inch" + str(count) + "_"
        #print(fileNameParts[0],fileNameParts[4], inchNum)
        newName = rulerNum + inchNum + cameraNum + quality + fileExtension
        #print(newName)
        #os.rename(j, newName)
        os.rename(os.path.join(newPath, j), os.path.join(newPath, newName))
        count += 1