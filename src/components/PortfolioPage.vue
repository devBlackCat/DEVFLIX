<!-- /devflex/src/components/PortfolioPage.vue -->
<template>
  <div :style="{ backgroundImage: 'url(' + banner + ')' }" id="banner" class="pc mb6">

    <p>PORTFOLIO</p>
    <div class="banner_cover"></div>

  </div>
  <div class="mo mb6" :style="{ backgroundImage: 'url(' + mobile_banner + ')' }" id="banner_mobile">
    <p>PORTFOLIO</p>
    <div class="banner_cover"></div>
  </div>
    <section id="section02">
    <h3 class="f1 b4 pb1">{{ section02Title }}</h3>
  
    <div class="mb4 post_box">
      <swiper :swiperOptions="swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(best, index) in slides01" :key="index">
            <p class="ov_hidden"><img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)" /></p>
            <h3>{{ best.title }}</h3>
            <h4>{{ best.description }}</h4>
            <p class="lang_text">{{ best.lang }}</p>
          </swiper-slide>
         
        </template>
      </swiper>
    </div> 

    <div class="mb4 post_box">
      <swiper :swiperOptions="swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(best, index) in slides02" :key="index">
            <p class="ov_hidden"><img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)" /></p>
            <h3>{{ best.title }}</h3>
            <h4>{{ best.description }}</h4>
            <p class="lang_text">{{ best.lang }}</p>
          </swiper-slide>
         
        </template>
      </swiper>
    </div> 

    <div class="mb4 post_box">
      <swiper :swiperOptions="swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(best, index) in slides03" :key="index">
            <p class="ov_hidden"><img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)" /></p>
            <h3>{{ best.title }}</h3>
            <h4>{{ best.description }}</h4>
            <p class="lang_text">{{ best.lang }}</p>
          </swiper-slide>
         
        </template>
      </swiper>
    </div> 

    <div class="mb4 post_box">
      <swiper :swiperOptions="swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(best, index) in slides05" :key="index">
            <p class="ov_hidden"><img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)" /></p>
            <h3>{{ best.title }}</h3>
            <h4>{{ best.description }}</h4>
            <p class="lang_text">{{ best.lang }}</p>
          </swiper-slide>
         
        </template>
      </swiper>
    </div> 

    <div class="mb4 post_box">
      <swiper :swiperOptions="swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(best, index) in slides04" :key="index">
            <p class="ov_hidden"><img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)" /></p>
            <h3>{{ best.title }}</h3>
            <h4>{{ best.description }}</h4>
            <p class="lang_text">{{ best.lang }}</p>
          </swiper-slide>
         
        </template>
      </swiper>
    </div> 
  </section>

  <div class="portfolio_modal" ref="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="X" aria-labelledby="preview-modal-80117781" data-uia="previewModal-closebtn" role="button" aria-label="close" tabindex="0"><title id="preview-modal-80117781">close</title><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg></span>
      <p class="post-img"><router-link to="/portfolio"><img :src="selectedSlide.img" /></router-link></p>
      <div class="modal-cover">
        <h5 class="pl2 pt1 b5 f3" style="padding-bottom: 0.5rem; ">{{ selectedSlide.title }} [{{ selectedSlide.type }}]</h5>
        <p class="pl2 pb1 f09">{{ selectedSlide.description }}</p>
        
        <p class="pl2 pb1 f09">{{ selectedSlide.env }}</p>
        <p class="pl2 pb1 f09">{{ selectedSlide.info }}</p>
        <p class="pl2 pt2 pb2"><router-link to="/portfolio"><span style="margin-left:0.7rem;" class="lang" v-for="(lang, index) in splittedLanguages" :key="index">{{ lang }}</span></router-link></p>
      </div>
    </div>
  </div>

  </template>
  

  <script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";
import { gsap } from "gsap";
import {  ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


export default {
  mounted() {
   
  
   this.$nextTick(() => {
    gsap.from("#banner", { duration: 1, y: -50, opacity: 0 }); // 변경된 부분
  });
  this.fadeInAnimation01(document.querySelectorAll('#section02 .post_box:nth-child(2) .swiper-slide'),document.querySelectorAll('#section02 .post_box:nth-child(2)'));
  this.fadeInAnimation01(document.querySelectorAll('#section02 .post_box:nth-child(3) .swiper-slide'),document.querySelectorAll('#section02 .post_box:nth-child(3)'));
  this.fadeInAnimation01(document.querySelectorAll('#section02 .post_box:nth-child(4) .swiper-slide'),document.querySelectorAll('#section02 .post_box:nth-child(4)'));
  this.fadeInAnimation01(document.querySelectorAll('#section02 .post_box:nth-child(5) .swiper-slide'),document.querySelectorAll('#section02 .post_box:nth-child(5)'));
  this.fadeInAnimation01(document.querySelectorAll('#section02 .post_box:nth-child(6) .swiper-slide'),document.querySelectorAll('#section02 .post_box:nth-child(6)'));
},

  computed: {
    splittedLanguages() {
      return this.selectedSlide && this.selectedSlide.lang
        ? this.selectedSlide.lang.split(',').map((lang) => lang.trim())
        : [];
    },
  },
  methods: {
    modalClick(slide) {
      this.selectedSlide = slide;
      this.$refs.modal.style.display = "block";
    },
    closeModal() {
      this.$refs.modal.style.display = "none";
    },
    fadeInAnimation01(el,triggerElement) {


    el.forEach((elements, index) => {
        gsap.from(elements, {
      y: '100%', // 시작 시 X축 위치 (왼쪽)
      opacity: 0, // 시작 시 투명도는 0 (완전히 투명)
      duration: 1, // 애니메이션이 완료되는 데 걸리는 시간 (초 단위)
      delay: index * 0.4, // 각 요소마다 반 초의 딜레이를 줌 (요소 순서대로 애니메이션 실행)
      scrollTrigger: {
        trigger: triggerElement,
        start: 'center bottom',
        end: 'bottom top',
        toggleActions: 'play none none reverse', 

      }
    });
    });

    },


  },

  components: {
    Swiper,
    SwiperSlide
  },
  name: 'PortfolioPage',
  data() {
    return {
      banner :require("@/assets/portfolioBanner.webp"),
      mobile_banner :require("@/assets/portfolioBanner_mobile.webp"),
      selectedSlide: {
      img: "",
      title: "",
      description: ""
    },

      swiperOptions: {
  slidesPerView: 6,
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
{ img : require("@/assets/15.webp"), title : "LG 오휘 쇼핑몰", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
{ img : require("@/assets/16.webp"), title : "LG 임프린투 쇼핑몰", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 LG 쇼핑몰 반응형" , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
{ img : require("@/assets/17.webp"), title : "주에스더 갤러리", lang : "HTML, CSS, JS , 카페24 모듈개발", description : "카페24 쇼핑몰로 제작한 미술관 갤러리 홈페이지"  , type : "쇼핑몰 제작" , env : "개발환경 : 카페24 쇼핑몰" , info : "쇼핑몰 CMS" },
{ img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP 워드프레스 개발하여 제작한 홈페이지" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Elementor " },
{ img : require("@/assets/06.webp"), title : "르센티 오피스텔",  lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
{ img : require("@/assets/14.webp"), title : "저스틴케이터링", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP를 이용해서 관리 및 페이지별 리뉴얼하며 직접 코딩한 홈페이지", type : "홈페이지 리뉴얼" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" ,info :"PHP를 이용한 맞춤형 웹 사이트"},
{ img : require("@/assets/08.webp"), title : "사임당 화장품", lang : "HTML, CSS, JS", description : "고도몰 쇼핑몰[홈페이지 관리]" , type : "홈페이지 개발" , env : "고도몰 쇼핑몰 CMS",info:"쇼핑몰 통합 관리 운영 및 개발 "},
{ img : require("@/assets/05.webp"), title : "디아트", lang :  "HTML, CSS, JS", description : "고도몰로 제작한 쇼핑몰" , type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },


],

slides03:[
{ img : require("@/assets/09.webp"), title : "에스덤 피부과", lang : "HTML, CSS, JS, PHP", description : "결제기능 있는 워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
{ img : require("@/assets/06.webp"), title : "르센티 오피스텔",  lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
{ img : require("@/assets/01.webp"), title : "에스메 성형외과", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
{ img : require("@/assets/03.webp"), title : "광일목재", lang : "HTML, CSS, JS, PHP", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Avada Theme " },
{ img : require("@/assets/19.webp"), title : "ISLE GYM", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
{ img : require("@/assets/20.webp"), title : "OWO", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" ,type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
{ img : require("@/assets/21.webp"), title : "하베스트 아카데미", lang : "HTML, CSS, JS ,PHP,MYSQL", description : "PHP 워드프레스 개발하여 제작한 홈페이지" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Elementor " },
 
]
,slides04:[
{ img : require("@/assets/23.webp"), title : "DEVFLIX" , lang : "HTML, CSS, JS, Vue, Node.js", description : "Vue.js를 이용한 넷플릭스를 컨셉으로 만든 포트폴리오 사이트", type : "포트폴리오 제작" , env : "개발환경 : Linux CentOS7 , node.js 14.17.0 " , info : "개인 포트폴리오 사이트" },
{ img : require("@/assets/24.webp"), title : "DogMBTI" , lang : "vue,Django,SQLite,Django REST Framework", description : "유저의 MBTI를 받아서 가장 알맞는 강아지 견종을 추천해주는 사이트", type : "사이드 프로젝트 제작" , env : "개발환경 : Linux CentOS7 , python , Django,SQLite,Django REST Framework ",info:"강아지 MBTI 사이트"},
{ img : require("@/assets/18.webp"), title : "티셔츠 쇼핑몰", lang : "HTML, CSS, JS", description : "고도몰로 만든 쇼핑몰" ,  type : "쇼핑몰 제작" , env : "개발환경 : Linux 2.6X이상 , PHP 5.6 , MYSQL 5.6" , info : "CMS 쇼핑몰 " },
{ img : require("@/assets/19.webp"), title : "ISLE GYM", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" , type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
{ img : require("@/assets/20.webp"), title : "OWO", lang : "HTML, CSS, JS", description : "워드프레스로 만든 반응형 사이트" ,type : "홈페이지 제작" , env : "개발환경 : Linux CentOS7 , PHP 7.4 , MYSQL" , info : "테마 : Salient"},
  
]
,slides05:[
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

<style scoped>
#banner{
  aspect-ratio: 1920 / 290;
  background-size: cover;
  position: relative;
}
#banner_mobile{
  aspect-ratio: 100 / 100;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    height:80vh;
    width:100%;
}
#banner>p, #banner_mobile>p{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3rem;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(0,0,0,.8);
  z-index: 99;
}
#banner .banner_cover, #banner_mobile .banner_cover{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);

  position: absolute;
  top: 0;
  left: 0;
}


.swiper {
  width: 100vw;
  height: auto;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 4 - 15px) !important;
  margin-left:5px;

  flex-wrap: wrap;
  aspect-ratio: 15 / 10;
}
.swiper-slide img{
  /* 이미지 살짝 커지는 애니메이션 */
  transition: all 0.4s ease-in-out;
  cursor: pointer;
}
.swiper-slide img:hover{
  transform: scale(1.1);
}

.portfolio_modal {
display: none; /* Hidden by default */
position: fixed; /* Stay in place */
z-index: 12; /* Sit on top */

left: 0;
top: 0;
width: 100%; /* Full width */
height: 100%; /* Full height */
overflow: auto; /* Enable scroll if needed */
padding-top:11vh;
background-color: rgba(0,0,0,.6); /* Black w/ opacity */
              }

 .modal-content {
margin: auto;
display: block;
width: 40vw;

background-color: #181818;
border-radius: .8rem;
position: relative;
}
.post-img{
  height:45vh;
  overflow: hidden;
}


.close{
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

.modal-content img{
  border-radius: 0.8rem 0.8rem 0 0;
}
.modal-cover{
  width: 100%;
  background-color: #181818;
  border-radius: 0 0 0.8rem 0.8rem;
}
/* 화이트 배경의 검은색 둥그런 버튼 */
.lang{
max-width:200px;
width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.3rem 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;;
}
.pl2 .lang:first-child{
  margin-left: 0 !important;
}
.post_box h3{margin-top:2%; font-weight: 400;}
.post_box h4, .post_box .lang_text{display: none}
.post_box h3, .post_box h4, .post_box .lang_text{
  width: 90%;
  text-align: left;
  padding: 0 5%;
}

@media screen and (max-width: 1001px) {
    .pc {
        display: none !important;
    }

}

@media screen and (min-width: 1000px) {
    .mo {
        display: none !important;
    }
}



@media screen and (max-width: 1400px) {

  .swiper-slide{
    width: calc(100% / 4 - 5px) !important;
  }
}


@media screen and (max-width: 768px) {

  .swiper-slide{
    width: calc(100% / 3 - 5px) !important;
  }

}
@media screen and (max-width: 600px) {

  .swiper-slide{
    width: calc(100% / 2 - 5px) !important;
  }
}
@media screen and (max-width: 420px) {

  .swiper-slide{
    width: 100% !important;
    margin: 0;
  }
}

</style>
