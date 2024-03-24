<!-- /devflex/src/components/About.vue -->
<template>
  <div className="banner" :style="{backgroundImage: `url(${logoImage})`}">
    <div className="banner_cover">
      <ul className="banner_list">
        <li className="banner_title">
          <button type="button" className="mbti f4 button01">INTP-T</button>
          <h1 class="f13">ByungHoon Jun</h1>
          <h2  class="f7 b3 mb3">Novice Developer</h2>

          <ul>
            <li v-for="(info, index) in limitedContactInfo" :key="index" class="mb0_5 flex">
              <a :href="info.href" class="flex">
                <span class="icons"><font-awesome-icon :icon="info.icon" /></span>
                <span class="pl1">{{ info.value }}</span>
              </a>
            </li>
          </ul>

      

          <ul className="mt2 flex ml0_4">
            <li v-for="(info, index) in limitedContactInfo02" :key="index" class="mr1">
              <a :href="info.href" target="_blank">
                <span class="icons"><font-awesome-icon :icon="info.icon" /></span>
             
              </a>
            </li>
          </ul>


        </li>
        <li className="banner_profile">
          <p><img src="@/assets/profile.png" alt="Profile" /></p>
        </li>
      </ul>  
    </div>
  </div>

  <section class="about01">
    <div className="container pt6 flex ">
        <div className="w50 about_left"><img :src="postImg" alt="Post" /></div>
        <div className="w40 about_right" style="margin-left: 10%; ">
          <p className="f6 b6 pb2 center  ">About Me</p>
          <div className="mo about01_mo_img"><img :src="postImg" alt="Post" /></div>
          <p className="f09 l4 b3">
            안녕하세요! 퍼블리셔로 시작해 풀스택 개발자로 성장을 꿈꾸는 초보 개발자입니다. 나라에서 지원하는 취업 웹디자인 과정을 듣고 디자인 교육을 통해 웹 디자이너 처음 취업하였습니다. 하지만 회사의 방침 상 코딩 작업이 많아지면서 디자인보다 자잘한 코딩을 더 많이 하였고 그러다 보니 개발에 대한 흥미가 생겼습니다. 
            <br><br>
            그 이후 퇴직금으로 다시 코딩 학원에 들어가 교육을 받고 공부하다가 워드프레스를 배우고 재능 판매 사이트에서 워드프레스로 홈페이지 개발을 하면서 6개월간 프리랜서로 일하기도 했습니다.퍼블리셔로 활동하며 개발팀장으로 회사 전반의 개발이나 홈페이지 관리를 하다 보니 PHP, Node.js 등 백엔드 기술에 대한 경험도 쌓고 카페24, 고도몰을 이용한 쇼핑몰을 만들기도 하며 워드프레스 기반의 홈페이지 제작, 파이썬을 활용한 크롤링 자동화 작업 등 다양한 분야에서 경험을 얻었습니다. 
            <br><br>
            그러다 보니  어느새 풀스택 개발자를 목표로 하게 되었습니다. 또한  AI 기술이 발전하면서 누구든 흥미만 있다면 새로운 언어로 개발을 하는개발 난이도가 낮아졌습니다. 지금이야말로 풀스택 개발자를 노리면서 여러 가지 개발 영역을 늘려나가기에 가장 좋은 시기라고 생각하게 되었습니다. 제 꿈을 이루어 풀 스택 개발자로써 성장해 나갈 수 있는 회사를 기다리고 있습니다.
          </p>
          <button type="button" className="button01 f4 b6"><router-link to="/skill">View Dev Skills</router-link></button>

        </div>
    </div>
  </section>
  <section className="about_do mb4 about02">
  <h3 className="container center mt6 f6">What I Can Do</h3>
  <ol className="container flex mt4 about_do">
  
    <li className="w33_1" v-for="(img, index) in post" :key="index">
        <div className="pt4 pb4 pl2 pr2">
          <img :src="img.icon" alt="Post" />
          <h4 className="f6 b6 pt1_5 pb2_5">{{img.title}}</h4>
          <p className="f09 l4 b3 word">{{img.desc}}</p>
        
        </div>
    </li>

  </ol>
  </section>

</template>

<script>
import { gsap } from "gsap";
import {  ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
   
   this.fadeInAnimation03(document.querySelector('.about01 .about_left'),'-100%');
   this.fadeInAnimation03(document.querySelector('.about01 .about_right'),'100%');
   this.fadeInAnimation04();
   this.$nextTick(() => {
    gsap.from(".banner", { duration: 1, y: -50, opacity: 0 }); // 변경된 부분
  });
  this.fadeInAnimation05(document.querySelectorAll('.about_do li'),document.querySelectorAll('.about_do'));
},
  name: 'BannerComponent',
  props: {
    sharedData: Object
    //contactInfo
  },
  computed: {
    limitedContactInfo() {
      return this.sharedData.contactInfo.slice(0, 3);
    },
    limitedContactInfo02() {
      //뒤에서 3개만 가져오기
      return this.sharedData.contactInfo.slice(-3);
    },
  },
  data() {
    return {
      logoImage: require("@/assets/about_banner.webp"),
      postImg : require("@/assets/about_img01.png"),
      post: [
        {icon : require("@/assets/about_001.png") , title : "Web Publishing" , desc : "저는 나라에서 지원하는 취업지원 과정을 거쳐 웹디자인과 웹 코딩의 기초를 배운 뒤 워드프레스를 독학하여 프리랜서와 퍼블리셔로 3년간 업무를 하면서 여러 사이트를 퍼블리싱 하였습니다."},
        {icon : require("@/assets/about_002.png") , title : "Web Development" , desc : "퍼블리셔로 입사하여 자사사이트를 관리하면서 PHP 사이트를 운영하기 위해 스스로 PHP를 독학 하였고 그과정에서 MYSQL을 배우고 다른 영역의 개발에 관심이 생겨 node.js를 공부하며 자사사이트를 추가 제작할떄 VUE나 REACT를 활용하여 Node.js 기반의 사이트를 제작하였습니다."},
        {icon : require("@/assets/about_003.png") , title : "Web Service " , desc : "회사 사이트를 운영하면서 좀 더 나은 호스트 관리와 테스트 서버를 위해, 나스 서버를 구축하기도 하고 나스 서버로는 웹에 한계가 있어 가상 호스트를 직접 구축하여 웹서버를 일부 서비스해 보았습니다. 이 분야는 매우 기초적이지만 계속 공부하여 더 좋은 서비스를 만들고 싶습니다."},
    ]
    }
  }

  ,
  methods:{

    fadeInAnimation03(el,x_pos) {


      // 해당 요소에 대해 GSAP 애니메이션 정의
      gsap.from(el, {
        x: x_pos, // 시작 시 X축 위치 (왼쪽)
        opacity: 0, // 시작 시 투명도는 0 (완전히 투명)
        duration: 1, // 애니메이션이 완료되는 데 걸리는 시간 (초 단위)
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom top',
          toggleActions: 'play none none reverse', 
        }
      });
  
      },
        fadeInAnimation04() {
          const h3s = document.querySelector(".about_do h3");

          // 해당 요소에 대해 GSAP 애니메이션 정의
          gsap.from(h3s, {
          scrollTrigger: {
            trigger: h3s,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
          },
          opacity: 0,
          duration: 4,
        });
  
      },
      fadeInAnimation05(el,triggerElement) {


        el.forEach((elements, index) => {
            gsap.from(elements, {
          y: '100%', // 시작 시 X축 위치 (왼쪽)
          opacity: 0, // 시작 시 투명도는 0 (완전히 투명)
          duration: 1, // 애니메이션이 완료되는 데 걸리는 시간 (초 단위)
          delay: index * 0.4, // 각 요소마다 반 초의 딜레이를 줌 (요소 순서대로 애니메이션 실행)
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

    .banner {
  position: relative;
  height: 80vh;
  background-attachment: fixed;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
.banner .banner_cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0,0.7);

  display: flex;
  align-items: center;

}
.banner .banner_list{
  width: 90vw;
  margin: 0 auto;
  display: flex;
}
.banner .banner_title{
  width: 65%;
}
.banner .banner_title .icons{
  width: 1.5rem;
  display: inline-block;
  text-align: center;
}
.banner .banner_title .mbti{
     border: 0;
    background: #E50914;
    border-radius: 2rem;
    width: 8rem;
    height: 3rem;
    color: #000;
    font-weight: 800;
    
}

.banner .banner_profile{
  width: 35%;
}


.banner .banner_profile p{

  width: calc(100% - 2rem);
    box-shadow: 0 0 0 1px
 var(--avatar-borderColor, var(--color-avatar-border));
    display: inline-block;
    flex-shrink: 0;
    line-height: 0;
    overflow: hidden;
    vertical-align: middle;
    border-radius: 50%;
    border:1rem solid rgba(0,0,0,0.7);
    

}
.banner .banner_profile p img{
  width: 100%;
}
.about_right .button01{
padding:.7rem 2rem;
border-radius: 2rem;
margin-top: 2rem;

}

.svg-inline--fa {

    height: 1.6em;

}
.about_do ol{
  justify-content: space-around;
}
.about_do ol li{ background-color: #1d1d22; border-radius: .5rem;}
.about02 ol {padding:0}


@media screen and (max-width: 1400px) {
  .about01 .container .w50{width: 40% !important; display: flex; align-items: center; justify-content: center; position: relative; top: -2rem; }
  .about01 .container .about_right{width: 60% !important;}
}
@media screen and (max-width: 1000px) {
  .about01 .container .w50{display: none;}
  .about01 .container .about_right{width: calc(100% - 4rem) !important; margin: 0 auto; margin-left: 2rem !important;
   }
  .about01 .container .about_right .f09{    font-size: 1.1rem;   line-height: 2rem;}
  .about01 .container .about_right .about01_mo_img{    width: 50%;  margin-bottom: 2rem;}
  .banner .banner_title{
    width: 60%;
  }

.banner .banner_profile{
  width: 40%;
}
.banner .banner_profile p{
border: 0.5rem solid rgba(0,0,0,0.7)
}
.about02 ol{display: flex; flex-direction: column;} 
.about02 ol li{width:100%;margin-bottom:2rem;}
.about02 ol li .word{font-size: 1.3rem; line-height: 2.2rem; }
}

@media screen and (max-width: 870px)  {
  .banner .banner_title{
    width: 100%;
  }
  .banner .banner_profile{display:none}

.banner .banner_profile p{
display: none;

}

}

@media screen and (max-width: 720px){
  .banner_list{width: fit-content !important;}
  .banner_title{text-align: center;}

}

</style>
