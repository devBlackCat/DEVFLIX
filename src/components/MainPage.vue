<!-- /devflex/src/components/MainPage.vue -->
<template>
  
  <div id="mainBanner" class="pc">
    <img class="logo" :src="sharedData.logoImage"  alt="Logo" />
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
                    <span>{{ sharedData.buttonText }}</span>
                  </router-link>
                </li>
                <li><router-link to="/skill">{{ sharedData.skillLinkText }}</router-link></li>
            </ul>
      </div>
      
  
    </div>
  
  </div>
  <div id="mainBanner_mobile" class="mo">
    <!--   --->
    <img class="logo" :src="sharedData.logoImage_mobile"  alt="Logo" />
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
                    <span>{{ sharedData.buttonText }}</span>
                  </router-link>
                </li>
                <li><router-link to="/skill">{{ sharedData.skillLinkText }}</router-link></li>
            </ul>
      </div>
   
  
    </div>
  </div>


  <section id="section02" class="portfolio-section">
    <h3 class="f1 b4 pb1">{{ sharedData.section02Title }}</h3>
    <div>
      <swiper :swiperOptions="sharedData.swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(item, index) in sharedData.slides02" :key="index">
            <img :src="item.img" :alt="'Slide ' + (index + 1)" />
          </swiper-slide>
        </template>
      </swiper>
    </div>
   
  </section>
  
  <section id="section01" class="portfolio-section">
    <h3 class="f1 b4 pb1">{{ sharedData.section01Title }}</h3>
    <div>
      <swiper :swiperOptions="sharedData.swiperOptions">
        <template v-slot:wrapper>
          <swiper-slide v-for="(item, index) in sharedData.slides01" :key="index">
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
      <li class="contact-item" v-if="sharedData.contactInfo">
        <a :href="sharedData.contactInfo[3].href" class="contact-link">
          <font-awesome-icon :icon="sharedData.contactInfo[3].icon" />
        </a>
      </li>
      <!-- 이메일 -->
      <li class="contact-item" v-if="sharedData.contactInfo">
        <a :href="sharedData.contactInfo[0].href" class="contact-link">
          <font-awesome-icon :icon="sharedData.contactInfo[0].icon" />
        </a>
      </li>
      <!-- 전화번호 -->
      <li class="contact-item" v-if="sharedData.contactInfo">
        <a :href="sharedData.contactInfo[1].href" class="contact-link">
          <font-awesome-icon :icon="sharedData.contactInfo[1].icon" />
        </a>
      </li>
    </ul>
</section>





</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';

// GSAP의 ScrollTrigger 플러그인을 등록합니다.
gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'MainPage',
  
  // 컴포넌트에서 사용할 외부 컴포넌트를 등록합니다.
  components: {
    Swiper,
    SwiperSlide
  },

  // 부모 컴포넌트로부터 받는 props를 정의합니다.
  props: {
    'sharedData': Object, // props 이름은 대시(-) 대신 카멜케이스를 사용해야 합니다.
  },

  mounted() {
    console.log(this.sharedData); // 'shared-data' props의 값을 콘솔에 출력
    // 섹션 제목에 대한 페이드인 애니메이션을 적용합니다.
    this.fadeInAnimation(document.querySelector("#section01 h3"), 1);
    this.fadeInAnimation(document.querySelector("#section02 h3"), 1.5);

    // 슬라이더 이미지에 대한 페이드인 애니메이션을 적용합니다.
    this.fadeInAnimationForSlides('#section01 .swiper-wrapper', 0.7, 0.2);
    this.fadeInAnimationForSlides('#section02 .swiper-wrapper', 0.8, 0.25);

    // 링크 버튼과 연락처 섹션에 대한 페이드인 애니메이션을 적용합니다.
    this.fadeInAnimation(document.querySelector(".link_button"), 4);
    this.fadeInAnimation(document.querySelector(".contact-section"), 2.5);

    // 메인 배너에 대한 애니메이션을 적용합니다.
    this.$nextTick(() => {
      gsap.from("#mainBanner", { duration: 1, y: -50, opacity: 0 });
      gsap.from("#mainBanner_mobile", { duration: 1, y: -50, opacity: 0 });
    });
  },

  methods: {
    fadeInAnimation(element, duration) {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 20%",
          scrub: true,
        },
        opacity: 0,
        duration: duration,
      });
    },

    fadeInAnimationForSlides(selector, duration, delay) {
      const elements = document.querySelectorAll(`${selector} .swiper-slide img`);
      const triggerElement = document.querySelector(selector);
      
      elements.forEach((element, index) => {
        gsap.from(element, {
          x: '-100%',
          opacity: 0,
          duration: duration,
          delay: index * delay,
          scrollTrigger: {
            trigger: triggerElement,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          }
        });
      });
    },
  },
};
</script>


<style scoped>
.link_button {
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