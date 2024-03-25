<!-- /devflex/src/components/skill.vue -->
<template>
  <div :style="{ backgroundImage: 'url(' + banner + ')' }" id="banner" class="pc mb4">
    <p> SKILL </p>
    <div class="banner_cover"> </div>
  </div>
  <div class="mo mb6" :style="{ backgroundImage: 'url(' + mobilebanner + ')' }" id="banner_mobile">
    <p>CAREER</p>
    <div class="banner_cover"></div>
</div>
  <div id="language_skill">
    <h1 class="mb2">언어 숙련도</h1>

    <p> 20% 미만 : 강의를 보고 따라하는 정도 이고 실제 프로젝트에 적용해본 경험이 없습니다.</p>
    <p> 20% ~ 40% : 강의나 검색을 통해 다섯번 이하로 실제 프로젝트에 적용해본 경험이 있습니다.</p>
    <p> 40% ~ 60% : 강의나 검색을 통해 실제 프로젝트에 적용해본 경험이 다수 있습니다.</p>
    <p> 60% ~ 80% : 실제 프로젝트에 적용해본 경험이 많으며 자체적인 개발에 활용해본 경험이 있고 어느정도 전체적인 이해도가 있습니다.</p>
    <p> 80% ~ 100% : 매우 높은 숙련도를 가지고 있으며 간단한 프로젝트는 어렵지 않게 작업할 수 있습니다. 기초라면 어느정도는 설명할 수 있습니다.</p>


    <!-- Add your chart here -->
    
  </div>
  <div id="chart_custom"><ApexChart type="bar" height="700" :options="chartOptions" :series="series"></ApexChart></div>

</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'skillPage', // 컴포넌트의 이름을 지정하십시오.
  
  components: {
    ApexChart: VueApexCharts,
  },

  data() {
    return {
      banner :require("@/assets/skill_banner.webp"),
      mobilebanner :require("@/assets/skill_banner_mobile.webp"),
      
      series: [{
        data: [100, 80 , 80 ,60 ,50 , 65 ,60 , 50 , 70 ,35 , 75 , 10 , 80 , 30 , 20 , 80 , 40 , 30, 50],
      }],
      
      chartOptions: {
        chart: { type:'bar', },
        toolbar: {
      show: false // 툴바 제거
    },
        plotOptions:{
          bar:{
            borderRadius:4,
            horizontal:true,
          }
        },
        //data 라벨에 % 붙이기
       
        dataLabels:{
          enabled:true,
          formatter: function(val){
            return val + "%";
          },

        },
         //data 하단 라벨에 % 붙이기
        tooltip:{
          enabled:true,
          y: {
            formatter: function(val){
              return val + "%";
            },
          },
        },
    

      
        yaxis:{
            max:100,
            
           
        },
        
        xaxis:{

         
          categories:['HTML','CSS','Javascript','Vue.js','React.js','Node.js','Django','python','PHP','Laravel','MySQL','Typescript','jQuery','Bootstrap','Sass','Git','Linux','Apache','Express.js'],
        }
      },
      
      
    };
    
   }, // Vue 컴포넌트 옵션(properties) 등록

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
  #banner .banner_cover{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.8);
  
    position: absolute;
    top: 0;
    left: 0;
  }

  #language_skill,#chart_custom{width: 100%;max-width: 90vw; margin:0 auto;}


  </style>
 
  