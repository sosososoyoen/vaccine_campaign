'use strict'



// 오늘 날짜를 yyyy-mm-dd 형식으로 구하는 함수
function getToday() {
    const date = new Date();
    const hour = date.getHours();
    let getDay = date.getDate();
    if(hour < 10) {
        getDay = getDay -1;
    }
    const year = date.getFullYear();
    const month = ("0"+(1+date.getMonth())).slice(-2);
    const day = ("0" + getDay).slice(-2);
    return `${year}-${month}-${day}`;
}
// 공공데이터 api
const url = `https://api.odcloud.kr/api/15077756/v1/vaccine-stat?page=1&perPage=10&cond%5BbaseDate%3A%3AGTE%5D=${getToday()}&cond%5Bsido%3A%3AEQ%5D=%EC%A0%84%EA%B5%AD&serviceKey=%2BCKn%2BGG39GClOaT%2F%2BAh83gB3jgMe0oV9%2BPmOrfUL6RMGihp0okcQPKDg0xDpc%2BBpW1H%2BQifd0T%2FQ3y2UIcUMLQ%3D%3D`;
// 서버응답 ㄱ
responseApi();
function responseApi(){
    fetch(url)
    .then(res => res.json())
    .then(myJson => {
        const obj= myJson.data[0];
        console.log(obj)
        const totalFirst = obj.totalFirstCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const totalSecond = obj.totalSecondCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const totalthird = obj.totalThirdCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const firstCount = obj.firstCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const secondCount = obj.secondCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const thirdCnt = obj.thirdCnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        document.querySelector(".first-vaccine__numbers").innerHTML = totalFirst;
        document.querySelector(".second-vaccine__numbers").innerHTML = totalSecond;
        document.querySelector(".third-vaccine__numbers").innerHTML = totalthird;
        document.querySelector(".first-vaccine__increase__counts").innerHTML = firstCount
        document.querySelector(".second-vaccine__increase__counts").innerHTML = secondCount;
        document.querySelector(".third-vaccine__increase__counts").innerHTML = thirdCnt;
        document.querySelector(".update-date").innerHTML = "기준: " + obj.baseDate;
    
    })
    
} 
// 공공데이터 링크
//https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15077756

