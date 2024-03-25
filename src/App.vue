<!-- /devflex/src/App.vue -->
<template>
  <div id="app">
    <HeaderComponent />
    <router-view :shared-data="{
      contactInfo: contactInfo,
      selectedSlide: selectedSlide,
      logoImage: logoImage,
      logoImage_mobile: logoImage_mobile,
      buttonText: buttonText,
      skillLinkText: skillLinkText,
      section01Title: section01Title,
      section02Title: section02Title,
      section03Title: section03Title,
      section04Title: section04Title,
      section05Title: section05Title,
      swiperOptions: swiperOptions,
      slides01: slides01,
      slides02: slides02,
      slides03: slides03,
      slides04: slides04,
      slides05: slides05,
      slides06: slides06
    }"/>

    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,

  },
  data() {
    return {


      contactInfo: [
      {
        type: 'email', // 연락처 유형 (이메일)
        icon: 'envelope', // Font Awesome 아이콘 클래스명
        value: 'happycat_91@naver.com', // 값 (이메일 주소)
        href: 'mailto:happycat_91@naver.com' // 링크
      },
      {
        type: 'phone', // 연락처 유형 (전화번호)
        icon: 'mobile-alt', // Font Awesome 아이콘 클래스명
        value: '010-5179-7530', // 값 (전화번호)
        href: 'tel:010-5179-7530' // 링크
      },
      {
        type: 'address', // 연락처 유형 (주소)
        icon: 'map-marker-alt', // Font Awesome 아이콘 클래스명
        value: '경기도 김포시 구래동', // 값 (주소)
        href: '' // 링크 (주소에는 href가 필요 없으므로 비워둠)
      },
      {
        type: 'github', // 깃허브
        icon: ['fab', 'github'], // Font Awesome 아이콘 클래스명 
        value: 'devBlackCat', //  깃허브 사용자명
        href: 'https://github.com/devBlackCat' // 깃허브 프로필 링크
      },
      {
        type: 'website',
        icon: ['fas', 'globe'],
        value: 'Visit my site',
        href: 'http://dogmbti.site'
      },
      {
        type: 'resume',
        icon: ['fas', 'file'],
        value: 'View my resume',
        href: '/curriculum_vitae.pdf'
      }

    ],
      selectedSlide: {
      img: "",
      title: "",
      description: ""
    },
      logoImage: require("@/assets/main.jpg"),
      logoImage_mobile: require("@/assets/main_banner_mobile.webp"),
      buttonText: "확인",
      skillLinkText: "경력 보기",
      section01Title: "회사에서 진행한 홈페이지",
      section02Title:"사이드 프로젝트",
      section03Title:"쇼핑몰 홈페이지",
      section04Title:"워드프레스 홈페이지",
      section05Title:"개인 외주 프로젝트",


      swiperOptions: {
        slidesPerView: 6,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          clickable: true,
          dynamicBullets: true,
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
            
      slides01:[
      { img : require("@/assets/01.webp"), title : "에스메 성형외과", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/02.webp"), title : "저스틴푸드", lang : "Vue,Node.js", description : "포트폴리오" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/03.webp"), title : "광일목재", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/04.webp"), title : "더셀렉션", lang : "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/05.webp"), title : "디아트", lang :  "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/07.webp"), title : "발주홈페이지", lang : "HTML, CSS, JS, PHP, MYSQL", description : "고도몰로 제작한 PHP 사이트" , type : "자사 구매목록 페이지 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/08.webp"), title : "사임당 화장품", lang : "HTML, CSS, JS", description : "고도몰 쇼핑몰[홈페이지 관리]" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/09.webp"), title : "에스덤 피부과", lang : "HTML, CSS, JS, PHP", description : "결제기능 있는 워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/10.webp"), title : "연세인몰", lang : "HTML, CSS, JS", description : "고도몰을 이용한 연세인 전용 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/11.webp"), title : "저스틴스테이크", lang : "HTML, CSS, JS", description :"고도몰을 이용한 스테이크 사이트" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/12.webp"), title : "천지빛깔", lang : "HTML, CSS, JS", description : "빌더호스트를 이용한 홈페이지 제작" , type : "빌더 홈페이지 제작" , env : "개발환경 : 최소한의 CMS를 지원하는 정적웹호스팅 " , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/13.webp"), title : "천지빛깔", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP를 이용한 네이버웹툰 쿠키 이벤트 페이지" , type : "홈페이지 개발" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "네이버 쿠키를 주는 이벤트 페이지 개발" , git:""},
      { img : require("@/assets/14.webp"), title : "저스틴케이터링", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP를 이용해서 관리 및 페이지별 리뉴얼하며 직접 코딩한 홈페이지", type : "홈페이지 리뉴얼" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" ,info :"PHP를 이용한 맞춤형 웹 사이트", git:""},
      { img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP 워드프레스 개발하여 제작한 홈페이지" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Elementor " , git:""},
      { img : require("@/assets/22.webp"), title : "비파이브컴퍼니", lang : "REACT,Node.js", description : "REACT를 이용한 반응형 홈페이지" , type : "홈페이지 제작" , env : "Linux CentOS 7.x Node.js React", info : "React 모듈을 사용한 풀스크린 사이트", git:""},
      { img : require("@/assets/15.webp"), title : "LG 오휘 쇼핑몰", lang : "HTML, CSS, JS , 카페24 ", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" , git:""},
      { img : require("@/assets/16.webp"), title : "LG 임프린투 쇼핑몰", lang : "HTML, CSS, JS , 카페24 ", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" , git:""},
      { img : require("@/assets/17.webp"), title : "주에스더 갤러리", lang : "HTML, CSS, JS , 카페24 ", description : "카페24 쇼핑몰로 제작한 미술관 갤러리 홈페이지"  , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" , git:""},
      { img : require("@/assets/06.webp"), title : "르센티 오피스텔",  lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
 
    ],
      slides02:[
      { img : require("@/assets/23.webp"), title : "DEVFLIX" , lang : "Vue, Node.js", description : "Vue.js를 이용한 넷플릭스를 컨셉으로 만든 포트폴리오 사이트", type : "포트폴리오" , env : "개발환경 : Linux CentOS7 , 가상호스트, Node.js, Vue.js" , info : ['넷플릭스 컨셉의 포트폴리오 사이트','Vue.js를 이용한 SPA 사이트'] , git:"https://github.com/devBlackCat/devflix"},
      { img : require("@/assets/24.webp"), title : "DogMBTI" , lang : "vue,Django[REST],SQLite", description : "유저의 MBTI를 받아서 가장 알맞는 강아지 견종을 추천해주는 사이트", type : "포트폴리오" , env : "개발환경 : Linux CentOS7 , 가상호스트, Django, SQLite" ,info : ['장고와 장고 REST를 사용한 사이트','SQLite로 수집한 강아지 데이터와 강아지 성격을 AI를 활용해 MBIT 데이터로 수집', 'MBTI 궁합을 분석해서 나에게 가장 알맞는 견종 추천'] , git:"https://github.com/devBlackCat/DogMBTI"},
      { img : require("@/assets/26.webp"), title : "MyFileChat" , lang : "PHP, React Naive", description : "내가 직접 사용하기 위한 파일이나 이미지나 글을 채팅식으로 옮길수있는 앱", type : "포트폴리오" , env : "개발환경 : Linux CentOS7 , 가상호스트, Django, SQLite" , info : ['핸드폰이나 다른기기간 갤럭시의 경우 자료전달이 불편해 직접 사용하기 위해 만든 앱','나만 쓸수 있는 채팅으로 자신의 서버 주소를 넣어서 사용할수있음','apk 파일만 가지고 있으면 사용할 수 있고 채팅, 파일 첨부, 사진 업로드 전송 가능'], git:"https://github.com/devBlackCat/MyFileChat"},
      ],

      slides03:[
      { img : require("@/assets/15.webp"), title : "LG 오휘 쇼핑몰", lang : "HTML, CSS, JS , 카페24 ", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" , git:""},
      { img : require("@/assets/16.webp"), title : "LG 임프린투 쇼핑몰", lang : "HTML, CSS, JS , 카페24 ", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" , git:""},
      { img : require("@/assets/17.webp"), title : "주에스더 갤러리", lang : "HTML, CSS, JS , 카페24 ", description : "카페24 쇼핑몰로 제작한 미술관 갤러리 홈페이지"  , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" , git:""},
      { img : require("@/assets/08.webp"), title : "사임당 화장품", lang : "HTML, CSS, JS", description : "고도몰 쇼핑몰[홈페이지 관리]" , type : "홈페이지 개발" , env : "고도몰 쇼핑몰 CMS",info:"쇼핑몰 통합 관리 운영 및 개발 ", git:""},
      { img : require("@/assets/05.webp"), title : "디아트", lang :  "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/10.webp"), title : "연세인몰", lang : "HTML, CSS, JS", description : "고도몰을 이용한 연세인 전용 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/08.webp"), title : "사임당 화장품", lang : "HTML, CSS, JS", description : "고도몰 쇼핑몰[홈페이지 관리]" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/07.webp"), title : "발주홈페이지", lang : "HTML, CSS, JS, PHP,MYSQL", description : "고도몰로 제작한 PHP 사이트" , type : "자사 구매목록 페이지 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/10.webp"), title : "연세인몰", lang : "HTML, CSS, JS", description : "고도몰을 이용한 연세인 전용 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/04.webp"), title : "더셀렉션", lang : "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/18.webp"), title : "티셔츠 쇼핑몰", lang : "HTML, CSS, JS", description : "고도몰로 만든 쇼핑몰" ,  type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/11.webp"), title : "저스틴스테이크", lang : "HTML, CSS, JS", description :"고도몰을 이용한 스테이크 사이트" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},

    ],

      slides04:[

      { img : require("@/assets/09.webp"), title : "에스덤 피부과", lang : "HTML, CSS, JS, PHP", description : "결제기능 있는 워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/06.webp"), title : "르센티 오피스텔",  lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/01.webp"), title : "에스메 성형외과", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/03.webp"), title : "광일목재", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " , git:""},
      { img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP 워드프레스 개발하여 제작한 홈페이지" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Elementor " , git:""},
      { img : require("@/assets/19.webp"), title : "ISLE GYM", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient", git:""},
      { img : require("@/assets/20.webp"), title : "OWO", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" ,type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient", git:""},

      ]
      ,slides05:[
      { img : require("@/assets/10.webp"), title : "연세인몰",lang : "HTML, CSS, JS, PHP,MYSQL", description : "쇼핑몰 티켓 개발 시스템 개발" ,type : "홈페이지 기능 개발" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" ,info :['이전 선물하기 시스템은 결제시 보조서버로 데이터를 전달하는데 이 시스템을 튜닝','보조서버에서 전달받은 주문데이터를 보조서버 DB에 넣고 티켓을 발송 개발','관리자에서 티켓 생성 및 추가하고 엑셀로 받고 수동 발송시스템 구축'], git:""},
      { img : require("@/assets/14.webp"), title : "저스틴케이터링", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "컨텐츠 추가 및 관리 유지보수[매달 진행]", type : "홈페이지 유지보수" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" ,info :"주기적인 컨텐츠 추가 작업, 메뉴 DB 등록및 수정 , 트래픽 관리, 퍼블리싱", git:""},
      { img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "홈페이지 수정 및 관리" , type : "홈페이지 유지보수" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "시스템 오류 수정, 수정 및 추가내역 개발" , git:""},
      { img : require("@/assets/20.webp"), title : "OWO", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" ,type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient", git:""},
      { img : require("@/assets/18.webp"), title : "티셔츠 쇼핑몰", lang : "HTML, CSS, JS", description : "고도몰로 만든 쇼핑몰" ,  type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " , git:""},
      { img : require("@/assets/19.webp"), title : "ISLE GYM", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient", git:""},

      ]
     
    };
  },
  
}
</script>
<style>
/* common.css 파일을 import합니다. */
@import './components/common.css';
</style>