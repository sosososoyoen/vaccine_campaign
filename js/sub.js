
const dlBtn = document.querySelector(".download-btn");

dlBtn.addEventListener("click", function(){
    html2canvas(document.querySelector("#capture")).then(canvas => {
        saveAs(canvas.toDataURL("image/png"),"test.png")
        //다운로드 되는 파일 이름 지정
    })
})

// 캡쳐된 파일을 이미지 파일로 내보냄
function saveAs(uri, filename) {
    const link = document.createElement("a");
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}