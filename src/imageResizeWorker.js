const { parentPort, workerData } = require("worker_threads");
const sharp = require("sharp");

async function resize() {

    const { imagePath, size, outputPath } = workerData;

    console.log("=======workerData======", workerData);

    await sharp(imagePath)
        .resize(size, size, { fit: "cover" })
        .toFile(outputPath + "/" + "resize-" + size + ".jpg");

    // sending message back to main thread
    parentPort.postMessage({ done: true });
}
resize()