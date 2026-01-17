from PIL import Image

img = Image.open('harsh.png')
img.save('harsh.jpg')
print("successfully converted png to jpg")