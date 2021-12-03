//버튼 애니메이션
const btns = document.querySelectorAll(".btn");
btns.forEach(btn =>{
    btn.onmousemove = function(e){
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;
    
        btn.style.setProperty("--x", x+"px");
        btn.style.setProperty("--y", y+"px");
    }

})