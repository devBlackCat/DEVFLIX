<!-- /devflex/src/components/careerPage.vue -->
<template>
<div :style="{ backgroundImage: 'url(' + banner + ')' }" id="banner" class="pc mb4">
	<p>
		CAREER
	</p>
	<div class="banner_cover">
	</div>
</div>
<div class="mo mb6" :style="{ backgroundImage: 'url(' + banner_mobile + ')' }" id="banner_mobile">
    <p>CAREER</p>
    <div class="banner_cover"></div>
</div>

<div id="career">
	<h1>개발 경력</h1>
	<div class="experience">
		<div class="left">
			<ul class="list">
				<li>
          <div :class="['tab', { active: showCareer }]" @click="showCareer = true; showEducation = false;">
            <img :src="icon[0]" alt="경력 아이콘">
            <p class="f3">CAREER  <span class="f08 mt_06">You can check your career history so far.</span></p>
           
          </div>
				</li>
				<li>
          <div :class="['tab', { active: showCareer }]" @click="showCareer = false; showEducation = true;">
            <img :src="icon[1]" alt="교육 아이콘">
            <p class="f3">EDUCATION<span class="f08 mt_06">It shows the educational curriculum that has been conducted so far.</span></p>
            
          </div>
				</li>
			</ul>
		</div>
		<div class="right career" v-show="showCareer">
			<div class="item" v-for="job in jobs" :key="job.company">
				<h3 class="f3 mb_1">{{ job.company }}</h3>
				<span class="duration">{{ job.duration }}</span>
        
				<p>
					{{ job.description }}
				</p>
        <span class="tools" v-for="tool in job.tools" :key="tool">{{ tool }}</span>
			</div>
		</div>

    <div class="right education" v-show="showEducation">
			<div class="item" v-for="education in educations" :key="education.school">
				<h3 class="f3 mb_1">{{ education.school }}</h3>
				<span class="duration">{{ education.duration }}</span>
        
				<p>
					{{ education.description }}
				</p>
        <span class="tools" v-for="tool in education.tools" :key="tool">{{ tool }}</span>
			</div>
		</div>
	</div>
</div>

  </template>
  
  <script>
  import { gsap } from "gsap";
import {  ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


  export default {
    mounted() {
   
     
      this.$nextTick(() => {
        gsap.from("#banner", { duration: 1, y: -50, opacity: 0 }); // 변경된 부분
        
      });

      this.$nextTick(() => {
    const h1 = document.querySelector("#career h1");

    gsap.from(h1, { duration: 1.5, y: -50, opacity: 0});
  });
  
  this.fadeInAnimation01(document.querySelector('.experience .left'),'-100%');
   this.fadeInAnimation01(document.querySelector('.experience .right'),'100%');
  

},
methods: {


  fadeInAnimation01(el,x_pos) {


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
},

    name: 'careerPage', // 컴포넌트의 이름을 지정하십시오.
    data() {
    return {
      banner :require("@/assets/careerBanner.webp"),
      banner_mobile :require("@/assets/careerBanner_mobile.webp"),
      icon: [require("@/assets/carrerIcon01.png"), require("@/assets/carrerIcon02.png")],
      showCareer: true, 
      showEducation: false,
      giveActive: false,
      jobs: [
      {
      company: "선화기술단사무소",
      duration: "2011.04 ~ 2011.10 ",
      description:"전기설계",
      tools: ["AutoCAD"]
    },
    {
      company: "타임즈코어 [웹디자이너]",
      duration: "2018.04 ~ 2019.04 ",
      description: "웹디자인, 홈페이지관리, 웹코딩, 웹전반업무, 가벼운영상편집, 사이트 배너및 팝업디자인, 고객원격",
      tools : ["PHOTOSHOP", "ILLUSTRATOR", "PREMIERE", "HTML", "CSS", "JAVASCRIPT", "JQUERY",]
      
    },
    {
      company: "라마르조코코리아 [웹퍼블리셔]",
      duration: "2019.09 ~ 2019.10",
      description: "라마르조코 마그마 홈페이지 제작(약2주) PC / 모바일",
      tools: ["카페24 CMS","HTML", "CSS", "JAVASCRIPT", "JQUERY", "PHOTOSHOP", "ILLUSTRATOR"]
    },
    {
      company: "프리랜서[재능판매 사이트 홈페이지 제작]",
      duration: "2020.01 ~ 2020.06 ",
      description: "워드프레스를 이용한 홈페이지 제작",
      tools: ["WORDPRESS","카페24 CMS", "고도몰 CMS", "HTML", "CSS", "JAVASCRIPT", "JQUERY", "PHOTOSHOP", "ILLUSTRATOR"]
    },
    {
      company: "비파이브 컴퍼니 [웹퍼블리셔]",
      duration: "2020.06 ~ 2023.08",
      description: "웹퍼블리싱, 백엔드개발, 웹개발 , 개발팀장",
      tools: ["Python","PHP","MYSQL","NODE.JS","VUE.JS","REACT","WORDPRESS","카페24 CMS", "고도몰 CMS", "HTML", "CSS", "JAVASCRIPT", "JQUERY", "PHOTOSHOP", "ILLUSTRATOR"]
    },
  ],
  educations: [
      {
      school: "한국조리사관학교대학(2·3년제)",
      duration: "2014.03 ~ 2016.03 (졸업) ",
      description:"제과제빵",
    },
    {
      school: "고려iT전문학교",
      duration: "2017.08 ~ 2018.01  (졸업) ",
      description:"3D 프린팅융합산업디자인 과정(인디자인,포토샵,일러스트,3D 맥스,CAD)",
    },
    {
      school: "이젠아카데미컴퓨터학원",
      duration: "2019.04.26 ~ 2019.09.05",
      description:"[스마트UXUI] 디지털디자인 (웹디자인,웹퍼블리셔)양성과정 (포토샵,일러스트,HTML,CSS,JavaScript,jQuery)",
    },
    {
      school: "서울 디지털 대학교[4년제]",
      duration: "2022.01.03 ~ 2023.12.31",
      description:"소프트웨어학과",
    },
   
  ],
    }
  },
    // Vue 컴포넌트 옵션(properties) 등록
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
  .tab{cursor: pointer;}
  .list{
    margin-top: 1rem;
  }
 .tab{
  width: 80%; background-color: rgba(255,255,255,0.2); text-align: center; padding: 2rem 0; border-radius: 10px;
  margin-bottom: 2rem; display: flex; align-items: center;
  padding-left:5%;
  padding-right:5%;
  color: #fff;
 }
 .tab:hover{
  background-color: rgba(255,255,255,0.4); color: #000;
 
 }
 .tab img + p{
  display: flex; flex-direction: column; align-items: flex-start; font-weight: 800; color: inherit;
 } 
 
 .tab img + p span[data-v-732cdebd] { max-width: 300px; text-align: left; font-weight: 400; word-break: keep-all; color: inherit;}

 .tab img{border-radius: 30px; border: 3px solid #E50914; width: 30px; padding: 10px; margin-right: 2rem; }
  h1{padding:1rem;margin: 0 5vw}
.experience{width:90vw; margin: 0 5vw; display: flex; margin-bottom: 5rem;}
.experience .left{width:40%;}
.experience .right{width:60%;}
.experience .right{height: 30rem; overflow-y: scroll; padding-right: 1rem;
  scrollbar-width: thin;

  

}
.experience .right::-webkit-scrollbar {
    width: 10px; /* Specify a width */
    border-radius: 10px;
  }
.experience .right::-webkit-scrollbar-track {
  background-color: rgba(255,255,255,.1); 
  border-radius: 10px;
}
.experience .right::-webkit-scrollbar-thumb {
  background-color: rgba(255,255,255,.6); 
  border-radius: 10px;
    
}
.experience .right .item p {

  word-break: keep-all;
}


.experience .item{border-bottom:1px solid rgba(255,255,255,.4);padding:1rem;}
.duration { font-size: 0.9rem; font-weight: 500; color: #999; margin-bottom: 0.5rem; display: block; }

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

.tools{
 font-size:.8rem;
 padding-right:.4rem;
}

@media screen and (max-width: 1000px) {
  .experience{flex-direction: column;}
  .experience .left{width:100%; }
  .experience .list{    display: flex; flex-direction: row; margin-bottom:4rem;}
  .experience .list li{width: 48%;}
  .experience .list li:first-child{margin-right: 4%;}
  .experience .list li .tab{width: 90%; margin:0;    height: 10vh;}
  .experience .right {height: auto; overflow-y: unset; width: 100%;}
}
@media screen and (max-width: 720px) {
  .experience .list li{width: 100%; }
  .experience .list {display: flex; flex-direction: column; margin-bottom: 4rem;}
  .experience .list li:first-child{margin-bottom:2rem;}
}
</style>
