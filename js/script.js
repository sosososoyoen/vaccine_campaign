
VanillaTilt.init(document.querySelector(".main__img"), {
    max: 25,
    speed: 400,
});
const pageNumbers = document.querySelectorAll(".page-numbers > li > a");
function scrollEvent() {
    //스크롤 시 nav에 컨테이너가 생기는 함수
    if (matchMedia("screen and (max-width: 1200px)").matches && window.innerWidth < 1200) {
        return;
    } else {
        document.querySelector(".main-header").classList.toggle("header--fixed",scrollY > 0);

    }
    // 페이지 인디케이터 
    if(scrollY >= window.innerHeight) {
        pageNumbers.forEach(number => {
            number.classList.remove("current-page")
        })
        pageNumbers[1].classList.toggle("current-page");
    } else {
        pageNumbers.forEach(number => {
            number.classList.remove("current-page")
        })
        pageNumbers[0].classList.toggle("current-page");
    }
}
//스크롤 이벤트
window.addEventListener("scroll",scrollEvent);
const sections = document.querySelectorAll(".section")
const idlePeriod = 100;
const animationDuration = 1000;

let lastAnimation = 0;
let index = 0;



// 링크이동
document.querySelector('.btn_go-to-howto').addEventListener('click',()=>{
    window.location.href = '#howto'
});
document.querySelector('.btn-go-to-sub').addEventListener('click',()=>{
    window.location.href = 'sub.html'
});