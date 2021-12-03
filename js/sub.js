// html2canvas(document.querySelector(".card-img")).then(canvas => {
//     document.body.appendChild(canvas)
// });
const dlBtn = document.querySelector(".download-btn");

dlBtn.addEventListener("click", function(){
    const element = document.querySelector(".card-img");
    saveCapture(element)
})

function download(url) {
    const a = document.createElement('a');
    a.style.display = "none"
    a.setAttribute("id","downloader")
    a.setAttribute("href",url)
    a.setAttribute("download","test.png")
    document.body.appendChild(a);

    a.addEventListener("click",()=>{
        document.body.removeChild(a);
    })
}

function saveCapture(element) {
    html2canvas(element).then(function(canvas) {
      download(canvas.toDataURL("image/png"));
    })
  }