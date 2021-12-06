
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

//체크박스에 클릭이벤트가 발생했을 때 선택된 값만 출력됨
const checkBoxes = document.querySelectorAll(".check-vaccine input")

checkBoxes.forEach((checkbox,i)=>{
    checkbox.addEventListener("click",(e)=>{
        let result="";
        if(e.target.checked) {
            result = `코로나19 ${i+1}차 백신 접종 완료했음을 인증합니다.`
        } else {
            result = "현재 상태에 체크해주세요.";
        }

        document.querySelector(".card-text").innerText = result;
    })
})


let photoIndex = 1;
document.querySelector(".hair").addEventListener("click",()=>{
    photoIndex++;
    photoIndex %= 4;
    if(photoIndex ==0) photoIndex = 1;
    const hairImg = document.querySelector(".chara_hair");
    hairImg.src= `img/character/hair_0${photoIndex}.png`
})