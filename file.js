// 如何优雅的处理前端开发中的File

// lastModified: 只读。文件最后修改时间(UNIX时间戳)。
// name: 只读。文件名（不包含完整路径）。
// size: 只读。文件大小。
// type: 只读。MIME TYPE。

// 构造一个file对象
var json = `{"a":1}`;
var f = new File([json], "test.json", {
    type: "application/json",
});
console.log(f);

// 获取file对象
{
    /* <input type="file"> */
}
const el = document.querySelector("input");
el.addEventListener("change", (e) => {
    const fileList = e.target.files;
    [].slice.call(fileList).forEach((file) => {
        console.log(file);
    });
});

// input标签multiple属性多选 accept可选择的文件类型

// 用btn点击事件触发input-change
// <input type="file" style="display:none">
// <button>漂亮的按钮</button>
const inputEl = document.querySelector("input");
inputEl.addEventListener("change", (e) => {
    const fileList = e.target.files;
    [].slice.call(fileList).forEach((file) => {
        console.log(file);
    });
});

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
    inputEl.click();
});

// 读取file对象内容
// 1.声明一个FileReader对象实例
var fileReader = new FileReader();
// 2.监听读取完成事件
fileReader.onload = function (e) {
    const result = e.target.result;
};
// 3.读取文件内容
fileReader.readAsDataURL(file); //以base64的方式读取
fileReader.readAsArrayBuffer(file); // ArrayBufferduq
fileReader.readAsText(); // 以字符串方式读取

// 一个很常见的场景：读取本地图片，并展示缩略图。实现起来十分简单。
// <input type='file' accept='image/*' />
const el = document.querySelector("input");
el.addEventListener("change", (e) => {
    const imgFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        const base64 = e.target.result;
        const imgEl = new Image();
        imgEl.src = base64;
        imgEl.onload = function () {
            document.body.appendChild(imgEl);
        };
    };
});
