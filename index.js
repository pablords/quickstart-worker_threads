const imageResize = require("./src/imageResizeThread")
const path = require("path")
const http = require("http")

for (let index = 100; index < 1000; index += 100) {
    const size = index
    const pathImg = path.resolve("src/image.jpeg")
    const resizedImg = path.resolve("src/resize")

    imageResize(pathImg, size, resizedImg)
}


