
VanillaTilt.init(document.querySelector(".main__img"), {
    max: 25,
    speed: 400,
});
const pageNumbers = document.querySelectorAll(".page-numbers > li > a");
function scrollEvent() {
    //스크롤 시 nav에 컨테이너가 생기는 함수
    document.querySelector(".main-header").classList.toggle("header--fixed",scrollY > 0);
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

// document.addEventListener("wheel", event => {
//     let delta = event.wheelDelta;
//     const timeNow = new Date().getTime();
//     console.log(delta)
//     console.log(index)
//     index %= sections.length;
//     document.querySelector(".main-header").classList.toggle("header--fixed",delta < 0);
//     // 애니메이션 중일 때 스크롤 취소
//     if(timeNow - lastAnimation < idlePeriod + animationDuration) {
//         event.preventDefault();
//         return;
//     }
//     if (delta < 0) {
//         index++;
//         sections.forEach((section, i)=>{
//             if (i === index) {
//                 section.scrollIntoView({behavior: "smooth", block:"start"})
//             }
//         })
    
//         pageNumbers.forEach((number) => {
//             number.classList.remove("current-page")
//         })
//         pageNumbers[index].classList.toggle("current-page");
//     }  else {
//         if(index < 1) return;
//         index--;
//         sections.forEach((section, i)=>{
//             if (i === index) {
//                 section.scrollIntoView({behavior: "smooth", block:"start"})
//             }
//         })
//         pageNumbers.forEach((number) => {
//             number.classList.remove("current-page")
//         })
//         pageNumbers[index].classList.toggle("current-page");
//     }
// })



// 링크이동
document.querySelector('.btn_go-to-howto').addEventListener('click',()=>{
    window.location.href = '#howto'
});
document.querySelector('.btn-go-to-sub').addEventListener('click',()=>{
    window.location.href = 'sub.html'
});