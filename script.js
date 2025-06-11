const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    return new Promise((resolve) => {
        video.onloadedmetadata = () => {
            resolve(video);
        };
    });
}

async function loadModel() {
    console.log('Carregando modelo COCO-SSD...');
    const model = await cocoSsd.load();
    console.log('Modelo carregado!');
    return model;
}

async function main() {
    const videoElement = await setupCamera();
    videoElement.play();

    const model = await loadModel();

    // Agora, podemos começar a usar o modelo e a câmera!
    // ...
}

main();