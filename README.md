
# VACCINE Campaign 
나만의 백신 인증서 만들기 사이트(옷입히기 게임) 제작 
https://soonmac.github.io/vaccine_campaign/
![메인페이지](cap_05.PNG)


## 프로젝트 목표

JavaScript와 SCSS를 이용해 옷입히기 게임 구현

## 프로젝트 제작 과정
블로그에 기획부터 디자인, 구현까지의 과정을 정리했습니다.

📎[velog - 토이 프로젝트: 나만의 백신 인증 카드 만들기](https://velog.io/@soonmac/%ED%86%A0%EC%9D%B4-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%82%98%EB%A7%8C%EC%9D%98-%EB%B0%B1%EC%8B%A0-%EC%9D%B8%EC%A6%9D-%EC%B9%B4%EB%93%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0)

## 프로젝트에서 사용한 기술
### JavaScript ES6

jQuery를 사용하지 않고 순수 JavaScript으로만 작성

### SCSS 

7-1 패턴을 참고해 컴포넌트별로 나눠 작성했으며, main.scss에 임포트한 후 CSS로 컴파일

## 프로젝트의 기능 설명
### fetch()를 이용하여 공공데이터 API 호출 
![공공데이터 API 이용](cap_01.PNG)
* 코로나19 예방접종 통계 데이터 조회 서비스 이용
* Date 객체를 이용하여 오전 10시를 기준으로 통계 날짜를 업데이트

벨로그에 코드에 관한 포스트를 작성했습니다.

📎[velog - fetch()를 이용하여 공공데이터 API 호출](https://velog.io/@soonmac/fetch%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B3%B5%EA%B3%B5%EB%8D%B0%EC%9D%B4%ED%84%B0-API-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0)

### 옷입히기 기능
#### 옷입히기 아이템 버튼
![아이템버튼](cap_02.PNG)
* 아이템 버튼 클릭시 팝업창이 나오며 data 속성값에 해당하는 항목의 타이틀과 이미지가 출력됩니다.
  
#### 옷입히기 기능
![옷입히기기능](cap_03.PNG)
* 팝업창의 화살표 버튼을 누르면 팝업창에 뜬 아이템 이미지가 화면의 '백신 접종 인증서' 영역에 적용됩니다.
* html2cavnas 라이브러리를 이용하여 '백신 접종 인증서' 영역을 이미지로 저장할 수 있도록 작성했습니다.

옷입히기 기능 코드에 관한 포스트를 작성했습니다.

📎[velog - 바닐라 JS로 옷입히기 게임 만들기](https://velog.io/@soonmac/%EB%B0%94%EB%8B%90%EB%9D%BC-JS%EB%A1%9C-%EC%98%B7%EC%9E%85%ED%9E%88%EA%B8%B0-%EA%B2%8C%EC%9E%84-%EB%A7%8C%EB%93%A4%EA%B8%B0)

![이미지저장](cap_04.PNG)
* 저장한 이미지의 모습
  

### 반응형 웹페이지
*PC(1200px), 타블렛(768px), 모바일(480px) 해상도에 따라 보이도록 미디어 쿼리 작성


 
