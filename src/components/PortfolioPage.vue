<!-- /devflex/src/components/PortfolioPage.vue -->
<template>
<div :style="{ backgroundImage: 'url(' + banner + ')' }" id="banner" class="pc mb6">
	<p>
		PORTFOLIO
	</p>
	<div class="banner_cover">
	</div>
</div>
<div class="mo mb6" :style="{ backgroundImage: 'url(' + mobile_banner + ')' }" id="banner_mobile">
	<p>
		PORTFOLIO
	</p>
	<div class="banner_cover">
	</div>
</div>
<section id="section02">
<div class="mb4 post_box">
	<h2 class="f1 b4 pb1">{{ sharedData.section02Title }}</h2>
	<swiper :swiperoptions="sharedData.swiperOptions">
	<template v-slot:wrapper>
	<swiper-slide v-for="(best, index) in sharedData.slides02" :key="index">
	<p class="ov_hidden">
		<img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)"/>
	</p>
	<div class="w95 auto">
		<h3>{{ best.title }}<span class="type"> [{{ best.type }}]</span></h3>
		<p class="langbox">
			<span class="lang" v-for="lang in best.lang.split(',')" :key="lang">{{ lang }}</span>
		</p>
	</div>
	</swiper-slide>
	</template>
	</swiper>
</div>
<div class="mb4 post_box">
	<h2 class="f1 b4 pb1">{{ sharedData.section05Title }}</h2>
	<swiper :swiperoptions="sharedData.swiperOptions">
	<template v-slot:wrapper>
	<swiper-slide v-for="(best, index) in sharedData.slides05" :key="index">
	<p class="ov_hidden">
		<img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)"/>
	</p>
	<div class="w95 auto">
		<h3>{{ best.title }}<span class="type"> [{{ best.type }}]</span></h3>
		<p class="langbox">
			<span class="lang" v-for="lang in best.lang.split(',')" :key="lang">{{ lang }}</span>
		</p>
	</div>
	</swiper-slide>
	</template>
	</swiper>
</div>
<div class="mb4 post_box">
	<h2 class="f1 b4 pb1">{{ sharedData.section01Title }}</h2>
	<swiper :swiperoptions="sharedData.swiperOptions">
	<template v-slot:wrapper>
	<swiper-slide v-for="(best, index) in sharedData.slides01" :key="index">
	<p class="ov_hidden">
		<img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)"/>
	</p>
	<div class="w95 auto">
		<h3>{{ best.title }}<span class="type"> [{{ best.type }}]</span></h3>
		<p class="langbox">
			<span class="lang" v-for="lang in best.lang.split(',')" :key="lang">{{ lang }}</span>
		</p>
	</div>
	</swiper-slide>
	</template>
	</swiper>
</div>
<div class="mb4 post_box">
	<h2 class="f1 b4 pb1">{{ sharedData.section03Title }}</h2>
	<swiper :swiperoptions="sharedData.swiperOptions">
	<template v-slot:wrapper>
	<swiper-slide v-for="(best, index) in sharedData.slides03" :key="index">
	<p class="ov_hidden">
		<img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)"/>
	</p>
	<div class="w95 auto">
		<h3>{{ best.title }}<span class="type"> [{{ best.type }}]</span></h3>
		<p class="langbox">
			<span class="lang" v-for="lang in best.lang.split(',')" :key="lang">{{ lang }}</span>
		</p>
	</div>
	</swiper-slide>
	</template>
	</swiper>
</div>
<div class="mb4 post_box">
	<h2 class="f1 b4 pb1">{{ sharedData.section04Title }}</h2>
	<swiper :swiperoptions="sharedData.swiperOptions">
	<template v-slot:wrapper>
	<swiper-slide v-for="(best, index) in sharedData.slides04" :key="index">
	<p class="ov_hidden">
		<img :src="best.img" :alt="'Slide ' + (index + 1)" @click="modalClick(best)"/>
	</p>
	<div class="w95 auto">
		<h3>{{ best.title }}<span class="type"> [{{ best.type }}]</span></h3>
		<p class="langbox">
			<span class="lang" v-for="lang in best.lang.split(',')" :key="lang">{{ lang }}</span>
		</p>
	</div>
	</swiper-slide>
	</template>
	</swiper>
</div>
</section>
<div class="portfolio_modal" ref="modal">
	<div class="modal-content">
		<span class="close" @click="closeModal"><svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="X" aria-labelledby="preview-modal-80117781" data-uia="previewModal-closebtn" role="button" aria-label="close" tabindex="0"><title id="preview-modal-80117781">close</title><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L2.29291 3.70706L3.70712 2.29285L12 10.5857L20.2929 2.29285L21.7071 3.70706L13.4142 12L21.7071 20.2928L20.2929 21.7071L12 13.4142L3.70712 21.7071L2.29291 20.2928L10.5858 12Z" fill="currentColor"></path></svg></span>
		<p class="post-img">
			<router-link to="/portfolio"><img :src="selectedSlide.img"/></router-link>
		</p>
		<div class="modal-cover">
			<h5 class="pl2 pt1 b5 f3" style="padding-bottom: 0.5rem; ">{{ selectedSlide.title }} [{{ selectedSlide.type }}]</h5>
			<p class="pl2 pb1 f09">
				{{ selectedSlide.description }}
			</p>
			<div class="pl2 pb1 f09">
				{{ selectedSlide.env }}
        
      </div>
      
      <ul v-if="Array.isArray(selectedSlide.info)" class="pl2 pb1 f09">
        <li v-for="(infoItem, index) in selectedSlide.info" :key="index">
          * {{ infoItem }}
        </li>
      </ul>
      <ul v-else class="pl2 pb1 f09">
        <li>{{ selectedSlide.info }}</li>
      </ul>
      <p class="pl2 pb1 f09" v-if="selectedSlide.git" >깃허브 : <a :href="selectedSlide.git" target="_blank" ><font-awesome-icon :icon="['fab', 'github']" style="font-size: 1.5rem;position: relative; top: 3px; left: 2px;"/></a></p>

     
   


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
  props: {
    sharedData: Object
    //contactInfo
  },
  data() {
    return {
      banner :require("@/assets/portfolioBanner.webp"),
      mobile_banner :require("@/assets/portfolioBanner_mobile.webp"),
      selectedSlide: {
      img: "",
      title: "",
      description: ""
    },

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
  z-index: 9;
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
  justify-content: left;
  align-items: center;
  width: calc(100% / 4 - 5px) !important;
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
background-color: rgba(0,0,0,.9); /* Black w/ opacity */
              }

 .modal-content {
margin: auto;
display: block;
width: 40vw;

background-color: #181818;
border-radius: .8rem;
position: relative;
z-index: 99999;
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
    height: 1.5rem;
    padding: 8px;
    width: 1.5rem;

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
.langbox{
  margin-top:1rem;
  display: flex;
  overflow: hidden;
}
.lang{
width: fit-content;
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: #000;
  display: inline-block;
  margin-right: 0.5rem;
}
.lang:hover{
  background-color: #000;
  color: #fff;
  border:1px solid #fff;
}

.lang:last-child{
  margin-right: 0 !important;
}

.pl2 .lang:first-child{
  margin-left: 0 !important;
}
.post_box h2{font-size: 2rem; margin-bottom: 0.7rem; font-weight: 600;}
  .post_box h3{
  font-size: 1.4rem;
  margin-top:2%; margin-bottom:2%; font-weight: 400;}
.post_box h4, .post_box .lang_text{display: none}
.post_box h3, .post_box h4, .post_box .lang_text{
  width: 100%;
  text-align: left;

}




@media screen and (max-width: 1400px) {

  .swiper-slide{
    width: calc(100% / 4 - 5px) !important;
  }
  .lang{
    display: none !important;
  }
  .type{
    display: none !important;
  }


}


@media screen and (max-width: 1001px) {
    .pc {
        display: none !important;
    }
    .post-img{
    height: auto;
    }
    .modal-content{
      width:80vw;
    }
    .f3 {
       font-size: 2rem;
    }
    .f09 {
       font-size: 1rem;
    }

}

@media screen and (min-width: 1000px) {
    .mo {
        display: none !important;
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


    .modal-content{
      width:90vw;
    }
}
@media screen and (max-width: 420px) {

  .swiper-slide{
    width: 100% !important;
    margin: 0;
  }
}

</style>
