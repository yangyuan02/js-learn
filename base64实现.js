// 实现点击/拖拽/粘贴图片，填充base64到文本框
// 图片文件base64
// utils.js
const utils = (() => ({
    getBase64: (file) =>
        new Promise((resolve) => {
            let reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        }),
}))();

// mian.js

(() => {
    const input = document.querySelector("input");
    const button = document.querySelector("button");
    const area = document.querySelector(".area"); // 区域
    const textarea = document.querySelector("textarea");

    input.addEventListener("change", handleInput);
    button.addEventListener("click", handleButton);
    area.addEventListener("drop", handleAreaDrop);
    area.addEventListener("dragover", handleAreadragover);
    area.addEventListener("paste", handleAreaPaste);

    let store = {
        // 简单的set
        set imgSrc(value) {
            textarea.value = value;
        },
    };
    async function handleInput(e) {
        const imgSrc = await utils.getBase64(e.target.files[0]);
        store.imgSrc = imgSrc;
    }
    function handleButton() {
        input.click();
    }
    async function handleAreaDrop(e) {
        e.preventDefault();
        const imgSrc = await utils.getBase64(e.dataTransfer.file[0]);
        store.imgSrc = imgSrc;
    }
    async function handleAreadragover(e) {
        e.preventDefault();
    }
    async function handleAreaPaste(e) {
        const imgSrc = await utils.getBase64(e.clipboardDate.file[0]);
        store.imgSrc = imgSrc;
    }
})();
