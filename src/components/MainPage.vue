<!-- /devflex/src/components/MainPage.vue -->
<template>
  
  <div id="mainBanner" class="pc">
    <img class="logo" :src="logoImage"  alt="Logo" />
    <div class="main_text">
      <div class="left">
            <div class="main_top_bottom"></div>
            <h1>PORTFOLIO</h1>
            <p class="f08">Developer Portfolio</p>
            <span>devBlackCat</span>

            <ul class="button_box mt2">
     
                <li>
                  <router-link to="/projects">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
                    <span>{{ buttonText }}</span>
                  </router-link>
                </li>
                <li><router-link to="/skill">{{ skillLinkText }}</router-link></li>
            </ul>
      </div>
      
  
    </div>
  
  </div>
  <div id="mainBanner_mobile" class="mo">
    <!--   --->
    <img class="logo" :src="logoImage_mobile"  alt="Logo" />
    <div class="main_text">
      <div class="left">
            <div class="main_top_bottom"></div>
            <h1>PORTFOLIO</h1>
            <p class="f08">Developer Portfolio</p>
            <span>devBlackCat</span>

            <ul class="button_box mt2">
     
                <li>
                  <router-link to="/projects">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg>
                    <span>{{ buttonText }}</span>
                  </router-link>
                </li>
                <li><router-link to="/skill">{{ skillLinkText }}</router-link></li>
            </ul>
      </div>
   
  
    </div>
  </div>


  <section id="section02" class="portfolio-section">
    <h3 class="f1 b4 pb1">{{ section02Title }}</h3>
    <div>
      <swiper :swiperOptions="swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(item, index) in slides02" :key="index">
            <img :src="item.img" :alt="'Slide ' + (index + 1)" />
          </swiper-slide>
        </template>
      </swiper>
    </div>
   
  </section>
  
  <section id="section01" class="portfolio-section">
    <h3 class="f1 b4 pb1">{{ section01Title }}</h3>
    <div>
      <swiper :swiperOptions="swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(item, index) in slides01" :key="index">
            <img :src="item.img" :alt="'Slide ' + (index + 1)" />
          </swiper-slide>
        </template>
      </swiper>
    </div>
    <router-link to="/portfolio" class="link_button">더보기</router-link>
  </section>

 
<section class="contact-section">
    
    <img src="@/assets/greetings.png" alt="Greetings" class="greetings" />
    <h3 class="b4 pb2 pt2">Contact</h3>
    <ul class="contact-list">
      <!-- 깃허브 -->
      <li class="contact-item">
        <a :href="contactInfo[3].href" class="contact-link">
          <font-awesome-icon :icon="contactInfo[3].icon" />
        </a>
      </li>
      <!-- 이메일 -->
      <li class="contact-item">
        <a :href="contactInfo[0].href" class="contact-link">
          <font-awesome-icon :icon="contactInfo[0].icon" />
        </a>
      </li>
      <!-- 전화번호 -->
      <li class="contact-item">
        <a :href="contactInfo[1].href" class="contact-link">
          <font-awesome-icon :icon="contactInfo[1].icon" />
        </a>
      </li>
    </ul>
</section>





</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";
import { gsap } from "gsap";
import {  ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
   
    this.fadeInAnimation(document.querySelector("#section01 h3"), 1); // 1초 지속
this.fadeInAnimation(document.querySelector("#section02 h3"), 1.5); // 1.5초 지속

this.fadeInAnimation02(document.querySelectorAll('#section01 .swiper-wrapper .swiper-slide img'), document.querySelector('#section01 .swiper-wrapper'), 0.7, 0.2); // 각 슬라이드는 0.7초 지속, 슬라이드 간 0.2초 딜레이
this.fadeInAnimation02(document.querySelectorAll('#section02 .swiper-wrapper .swiper-slide img'), document.querySelector('#section02 .swiper-wrapper'), 0.8, 0.25); // 각 슬라이드는 0.8초 지속, 슬라이드 간 0.25초 딜레이
this.fadeInAnimation(document.querySelector(".link_button"), 4); // 2초 지속
this.fadeInAnimation(document.querySelector(".contact-section"), 2.5); // 2.5초 지속


    this.$nextTick(() => {
    gsap.from("#mainBanner", { duration: 1, y: -50, opacity: 0 }); // 변경된 부분
    gsap.from("#mainBanner_mobile", { duration: 1, y: -50, opacity: 0 }); // 변경된 부분
  });
}
,

  methods: {

    fadeInAnimation02(elements, triggerElement, duration, delay) {
  elements.forEach((element, index) => {
    gsap.from(element, {
      x: '-100%', // 시작 시 X축 위치 (왼쪽)
      opacity: 0, // 시작 시 투명도는 0 (완전히 투명)
      duration: duration, // 지속 시간
      delay: index * delay, // 딜레이 시간
      scrollTrigger: {
        trigger: triggerElement,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none reverse', 
      }
    });
  });
},

  fadeInAnimation(h3s,time) {
    
    gsap.from(h3s, {
      scrollTrigger: {
        trigger: h3s,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
      opacity: 0,
      duration: time,
    });
  },



  },

  components: {
    Swiper,
    SwiperSlide
  },
  name: 'MainPage',
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
      { img : require("@/assets/01.webp"), title : "에스메 성형외과", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/02.webp"), title : "저스틴푸드", lang : "HTML, CSS, JS, Vue Node.js", description : "포트폴리오" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/03.webp"), title : "광일목재", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/04.webp"), title : "더셀렉션", lang : "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/05.webp"), title : "디아트", lang :  "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/06.webp"), title : "르센티 오피스텔",  lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/07.webp"), title : "발주홈페이지", lang : "HTML, CSS, JS, PHP,MYSQL", description : "고도몰로 제작한 PHP 사이트" , type : "자사 구매목록 페이지 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/08.webp"), title : "사임당 화장품", lang : "HTML, CSS, JS", description : "고도몰 쇼핑몰[홈페이지 관리]" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/09.webp"), title : "에스덤 피부과", lang : "HTML, CSS, JS, PHP", description : "결제기능 있는 워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/10.webp"), title : "연세인몰", lang : "HTML, CSS, JS", description : "고도몰을 이용한 연세인 전용 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/11.webp"), title : "저스틴스테이크", lang : "HTML, CSS, JS", description :"고도몰을 이용한 스테이크 사이트" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/12.webp"), title : "천지빛깔", lang : "HTML, CSS, JS", description : "빌더호스트를 이용한 홈페이지 제작" , type : "빌더 홈페이지 제작" , env : "개발환경 : 최소한의 CMS를 지원하는 정적웹호스팅 " , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/13.webp"), title : "천지빛깔", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP를 이용한 네이버웹툰 쿠키 이벤트 페이지" , type : "홈페이지 개발" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "네이버 쿠키를 주는 이벤트 페이지 개발" },
      { img : require("@/assets/14.webp"), title : "저스틴케이터링", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP를 이용해서 관리 및 페이지별 리뉴얼하며 직접 코딩한 홈페이지", type : "홈페이지 리뉴얼" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" ,info :"PHP를 이용한 맞춤형 웹 사이트"},
      { img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP 워드프레스 개발하여 제작한 홈페이지" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Elementor " },
      { img : require("@/assets/22.webp"), title : "비파이브컴퍼니", lang : "HTML, CSS, JS, REACT,Ndoe.js", description : "REACT를 이용한 반응형 홈페이지" , type : "홈페이지 제작" , env : "Linux CentOS 7.x Node.js React", info : "React 모듈을 사용한 풀스크린 사이트"},
      ],
      slides02:[
      { img : require("@/assets/23.webp"), title : "DEVFLIX" , lang : "HTML, CSS, JS, Vue, Node.js", description : "Vue.js를 이용한 넷플릭스를 컨셉으로 만든 포트폴리오 사이트"},
      { img : require("@/assets/24.webp"), title : "DogMBTI" , lang : "vue,Django,SQLite,Django REST Framework", description : "유저의 MBTI를 받아서 가장 알맞는 강아지 견종을 추천해주는 사이트"},
      { img : require("@/assets/25.webp"), title : "저스틴 케이터링" , lang : "HTML, CSS, JS, PHP", description : "[개인외주] 고도몰에서 보조서버로 데이터 전달하는 이전 선물하기 알림 기능을 이용한 새로운 티켓 전송 시스템 및 관리자 구축"},
      { img : require("@/assets/26.webp"), title : "MyFileChat" , lang : "PHP, React Naive", description : "내가 직접 사용하기 위한 파일이나 이미지나 글을 채팅식으로 옮길수있는 앱"},
      ],

      slides03:[
      { img : require("@/assets/15.webp"), title : "LG 오휘 쇼핑몰", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
      { img : require("@/assets/16.webp"), title : "LG 임프린투 쇼핑몰", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
      { img : require("@/assets/17.webp"), title : "주에스더 갤러리", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 미술관 갤러리 홈페이지"  , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
      { img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP 워드프레스 개발하여 제작한 홈페이지" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Elementor " },
      { img : require("@/assets/06.webp"), title : "르센티 오피스텔",  lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/14.webp"), title : "저스틴케이터링", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP를 이용해서 관리 및 페이지별 리뉴얼하며 직접 코딩한 홈페이지", type : "홈페이지 리뉴얼" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" ,info :"PHP를 이용한 맞춤형 웹 사이트"},
      { img : require("@/assets/08.webp"), title : "사임당 화장품", lang : "HTML, CSS, JS", description : "고도몰 쇼핑몰[홈페이지 관리]" , type : "홈페이지 개발" , env : "고도몰 쇼핑몰 CMS",info:"쇼핑몰 통합 관리 운영 및 개발 "},
      { img : require("@/assets/05.webp"), title : "디아트", lang :  "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      ],

      slides04:[
      { img : require("@/assets/09.webp"), title : "에스덤 피부과", lang : "HTML, CSS, JS, PHP", description : "결제기능 있는 워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/06.webp"), title : "르센티 오피스텔",  lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/01.webp"), title : "에스메 성형외과", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/03.webp"), title : "광일목재", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/19.webp"), title : "ISLE GYM", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
      { img : require("@/assets/20.webp"), title : "OWO", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" ,type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
      { img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP 워드프레스 개발하여 제작한 홈페이지" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Elementor " },
      
      ]
      ,slides05:[
      { img : require("@/assets/23.webp"), title : "DEVFLIX" , lang : "HTML, CSS, JS, Vue, Node.js", description : "Vue.js를 이용한 넷플릭스를 컨셉으로 만든 포트폴리오 사이트", type : "포트폴리오 제작" , env : "개발환경 : Linux CentOS7 , node.js 14.17.0 " , info : "개인 포트폴리오 사이트" },
      { img : require("@/assets/24.webp"), title : "DogMBTI" , lang : "vue,Django,SQLite,Django REST Framework", description : "유저의 MBTI를 받아서 가장 알맞는 강아지 견종을 추천해주는 사이트", type : "사이드 프로젝트 제작" , env : "개발환경 : Linux CentOS7 , python , Django,SQLite,Django REST Framework ",info:"강아지 MBTI 사이트"},
      { img : require("@/assets/18.webp"), title : "티셔츠 쇼핑몰", lang : "HTML, CSS, JS", description : "고도몰로 만든 쇼핑몰" ,  type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/19.webp"), title : "ISLE GYM", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
      { img : require("@/assets/20.webp"), title : "OWO", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" ,type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
        
      ]
      ,slides06:[
      { img : require("@/assets/07.webp"), title : "발주홈페이지", lang : "HTML, CSS, JS, PHP,MYSQL", description : "고도몰로 제작한 PHP 사이트" , type : "자사 구매목록 페이지 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/08.webp"), title : "사임당 화장품", lang : "HTML, CSS, JS", description : "고도몰 쇼핑몰[홈페이지 관리]" , type : "홈페이지 개발" , env : "고도몰 쇼핑몰 CMS",info:"쇼핑몰 통합 관리 운영 및 개발 "},
      { img : require("@/assets/10.webp"), title : "연세인몰", lang : "HTML, CSS, JS", description : "고도몰을 이용한 연세인 전용 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/04.webp"), title : "더셀렉션", lang : "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/05.webp"), title : "디아트", lang :  "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/01.webp"), title : "에스메 성형외과", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
      { img : require("@/assets/18.webp"), title : "티셔츠 쇼핑몰", lang : "HTML, CSS, JS", description : "고도몰로 만든 쇼핑몰" ,  type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/11.webp"), title : "저스틴스테이크", lang : "HTML, CSS, JS", description :"고도몰을 이용한 스테이크 사이트" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
      { img : require("@/assets/15.webp"), title : "LG 오휘 쇼핑몰", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
      { img : require("@/assets/16.webp"), title : "LG 임프린투 쇼핑몰", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
      { img : require("@/assets/17.webp"), title : "주에스더 갤러리", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 미술관 갤러리 홈페이지"  , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
      ]



    };
  },
};
</script>

<style scoped>.link_button {
  background-color: #fff;
  border-radius: 5px;
  color: #000;
  padding: 0.7rem 1rem;
  width: 6rem;
  display: block;
  text-align: center;
  font-weight: 400;
  /* margin-left:5vw;*/
  margin: 0 auto;
  margin-top: 3rem;
}

#mainBanner .main_text {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 5vw;
  width: calc(100% - 10vw);
  margin-right: 5vw;
  display: flex;
}

#mainBanner .main_text .left {
  width: 40%;
}

#mainBanner .main_text .left h1 {
  font-size: 4rem;
  transform: scaleY(1.3);
  margin-bottom: 1.3rem;
}

#mainBanner .main_text .left p {
  font-size: 1.3rem;
  margin-bottom: .8rem;
}

#mainBanner_mobile {
  margin-bottom: 4rem;
}

#mainBanner_mobile .main_text {
  display: none;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 5vw;
  width: calc(100% - 10vw);
  margin-right: 5vw;
  display: flex;
}



#mainBanner_mobile .main_text .left {
  width: 100%;
}

#mainBanner_mobile .main_text .left .main_top_bottom {
  width: 12rem;
}

#mainBanner_mobile .main_text .left h1 {
  font-size: 5rem;
  transform: scaleY(1.3);
  margin-bottom: 1.3rem;
}

.greetings {
  max-width: 300px;
  width: 100%;

}

.contact-section {
  text-align: center;
  margin-top: -17vh;
  margin-bottom: 6rem;
}

.contact-section h3 {
  font-size: 2.5rem;


}

.contact-list {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  /* 리스트 앞의 점을 제거 */
  padding: 0;
  /* 기본 패딩 제거 */
  margin: 0;
  /* 기본 마진 제거 */
  display: flex;
  /* 리스트 항목들을 가로로 배치 */
  justify-content: center;
  /* 가운데 정렬 */
  align-items: center;
  /* 세로 중앙 정렬 */
}

.contact-list .svg-inline--fa {
  height: 3rem;
}

.contact-item {
  margin: 0 2rem;
  /* 항목 사이의 간격 */
}

.contact-link,
.contact-text {
  display: flex;
  align-items: center;
  text-decoration: none;
  /* 링크의 밑줄 제거 */
  color: inherit;
  /* 링크의 기본 색상 상속 */
}

.contact-text {
  cursor: default;
  /* 텍스트에 일반 커서 사용 */
}

.font-awesome-icon {
  margin-right: 8px;
  /* 아이콘과 텍스트 사이의 간격 */
}


/*400이하*/
@media screen and (max-width: 400px) {
  #mainBanner_mobile .main_text .left h1 {
      font-size: 4rem;
  }
}

@media screen and (max-width: 320px) {
  #mainBanner_mobile .main_text .left h1 {
      font-size: 3rem;
  }
}

#mainBanner_mobile li a span {
  color: #000 !important;
}

#mainBanner_mobile .main_text .left p {
  font-size: 2rem;
}

#mainBanner_mobile .main_text .left span {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7)
}

#mainBanner_mobile .main_text {
  display: flex;
  flex-direction: column;

}

#mainBanner .main_text .left>span {
  color: rgba(255, 255, 255, 0.7);
}

#mainBanner_mobile .main_text .right {
  width: 100%;
}

#mainBanner .main_text .right {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  max-width: 240px;
  line-height: 1.5;
  display: flex;
  align-items: flex-end;
}

.main_top_bottom {
  border-top: .5rem solid #fff;
  width: 5vw;
  margin-bottom: 1rem;
}

#mainBanner .logo {
  width: 100%;
}

#mainBanner,
#mainBanner_mobile {
  position: relative;
}

#mainBanner .button_box,
#mainBanner_mobile .button_box {
  display: flex;

}

#mainBanner li,
#mainBanner_mobile li {
  border-radius: .3rem;
  display: flex;
}

#mainBanner li a,
#mainBanner_mobile li a {
  width: 8rem;
  display: flex;
  align-items: center;
  padding: 0.7rem 0.5rem;
  justify-content: center;
}

#mainBanner li:first-child,
#mainBanner_mobile li:first-child {
  background-color: #fff;
}

#mainBanner li:first-child svg path,
#mainBanner_mobile li:first-child svg path {
  color: #000;
}

#mainBanner li:first-child span,
#mainBanner_mobile li:first-child span {
  color: #000;
  padding-left: 0.8rem;
}

#mainBanner li:last-child,
#mainBanner_mobile li:last-child {
  background-color: rgba(109, 109, 110, 0.4);
  margin-left: 2rem;
}

#mainBanner li:hover,
#mainBanner_mobile li:hover {
  opacity: 0.6;
}

#section01,
#section02,
#section03,
#section04 {
  position: relative;
  z-index: 11;
  top: -17vh;
  margin-bottom: 4rem;
}

#section01 h3,
#section02 h3,
#section03 h3,
#section04 h3 {
  width: 90vw;
  margin-left: 6vw;
}


.swiper {
  width: 90vw;
  height: auto;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 6 - 5px) !important;
  margin-left: 5px;
  overflow: hidden;
  flex-wrap: wrap;
  max-height: 188px;
}

.swiper-slide img {
  /* 이미지 살짝 커지는 애니메이션 */
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}

.swiper-slide img:hover {
  transform: scale(1.1);
}

.portfolio_modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 12;
  /* Sit on top */

  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  padding-top: 11vh;
  background-color: rgba(0, 0, 0, .6);
  /* Black w/ opacity */
}

.modal-content {
  margin: auto;
  display: block;
  width: 48vw;

  background-color: #181818;
  border-radius: .8rem;
  position: relative;
}


.close {
  position: absolute;
  right: 1rem;
  top: 10px;
  z-index: 99;
  cursor: pointer;
  background-color: #181818;
  border-radius: 50%;
  height: 1rem;
  padding: 8px;
  width: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content img {
  border-radius: 0.8rem 0.8rem 0 0;
}

.modal-cover {
  width: 100%;
  background-color: #181818;
  border-radius: 0 0 0.8rem 0.8rem;
}

/* 화이트 배경의 검은색 둥그런 버튼 */
.lang {
  max-width: 200px;
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
  ;
}

.pl2 .lang:first-child {
  margin-left: 0 !important;
}

/* #section01,#section02,#section03,#section04{position: relative; z-index: 11; top:-17vh; margin-bottom:4rem;} 1400 이하 적용 */
@media screen and (max-width: 1400px) {

  #section01,
  #section02,
  #section03,
  #section04 {
      top: 0
  }

  #mainBanner .button_box {
      bottom: 15vh;
  }

  .swiper-slide {
      width: calc(100% / 4 - 5px) !important;
  }
}

@media screen and (max-width: 1000px) {
  #mainBanner_mobile .button_box {
      left: 8vw;
  }

  #mainBanner .button_box {
      bottom: 10vh;
  }

  #mainBanner li a {
      width: 6rem;

  }

  #section01 h3,
  #section02 h3,
  #section03 h3,
  #section04 h3,
  #section05 h3 {
      font-size: 1.3rem;
  }
}

@media screen and (max-width: 768px) {
  #mainBanner_mobile .button_box {
      left: 7vw;
  }

  #mainBanner .button_box {
      display: none;
  }

  .swiper-slide {
      width: calc(100% / 3 - 5px) !important;
  }

}

@media screen and (max-width: 600px) {
  #mainBanner_mobile .button_box {
      left: 6vw;
      bottom: 12vh;
  }

  .swiper-slide {
      width: calc(100% / 2 - 5px) !important;
  }
}

@media screen and (max-width: 420px) {
  #mainBanner_mobile .button_box {
      display: none;
  }

  .swiper-slide {
      width: 100% !important;
      margin: 0;
  }
}

</style>