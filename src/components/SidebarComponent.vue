<!-- /devflex/src/components/HeaderComponent.vue -->
<template>
  <div id="header" :class="{ 'scroll_header': isScrolling}">
    <nav id="menu">

     
      <router-link to="/"> <img class="logo" src="@/assets/logo.png" alt="Logo" /></router-link>
     
      <div class="menu">
        <ul> 
          <li> <router-link to="/">HOME</router-link> </li>
          <li> <router-link to="/about">ABOUT</router-link> </li>
          <li> <router-link to="/portfolio">PORTFOLIO</router-link> </li> 
          <li> <router-link to="/career">CAREER</router-link> </li>
          <li> <router-link to="/skill">SKILL</router-link> </li> 

        </ul>
      </div>
    </nav>
    <nav id="sec_nav" @click.stop.prevent="showModal">
      <img :src="profileimg" alt="Profile" />
      <div class="triangle"></div> 
    </nav> 
    <nav id="mobile_menu">
      <div class="menu">
        <ul>
          <li> <router-link to="/"><img class="logo" src="@/assets/logo.png" alt="Logo" /></router-link> </li>
        </ul>
        <ul>
          <li><FontAwesomeIcon icon="bars"  @click.stop.prevent="mobileMenu"/></li>
        
          <div v-if="mobile" id="mobileMenuModal" >
            <ul class="mobile_menu" >
              <div class="menu_cover" @click.stop.prevent='hideMobileMenu' style="background-color: rgba(0,0,0,0.8); width: 100%; height: 100%; position: absolute; top:0; left:0; z-index: -1;"></div>
              <li> <router-link to="/">HOME</router-link> </li>
              <li> <router-link to="/about">ABOUT</router-link> </li>
              <li> <router-link to="/portfolio">PORTFOLIO</router-link> </li> 
              <li> <router-link to="/career">CAREER</router-link> </li>
              <li> <router-link to="/skill">SKILL</router-link> </li> 
            </ul>
          </div>
        </ul>
      </div>
    </nav>
</div>
<canvas ref="canvas" :width="cWidth" :height="cHeight"></canvas>

<div id="profile_modal" class="modal"  v-if='isVisible'>
  <div class="modal_position">
      <div class="modal_cover" @click.stop.prevent='hideModal'></div>
       <div class="modal_content"> 
       <!-- <span class='close' @click.stop.prevent='hideModal'>&times;</span>-->
        
       <div v-for="(item, index) in profile" :key="index">
        <img :src="item.img" @click.stop.prevent='updateProfileImg(item.img)' />
        <p>{{ item.text }}</p>
      </div>

        
      </div>
    </div>
</div>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


export default {
    name: 'SidebarComponent',
    data() {
        return {
          profileimg:require("@/assets/sec_nav.png"),
            isVisible: false,
            mobile : false,
            profile: [{ img: require("@/assets/profile01.png"), text: '프로필01', }, { img: require("@/assets/profile02.png"), text: '프로필02', }, { img: require("@/assets/profile03.png"), text: '프로필03', }, { img: require("@/assets/profile04.png"), text: '프로필04', }]
        };
    },
    methods: {
      updateProfileImg(imgSrc) {
      this.profileimg = imgSrc; // 클릭한 이미지의 src로 profileimg 업데이트
      alert('프로필 이미지가 변경되었습니다.');
      this.hideModal(); // 모달창 닫기
    },
        showModal() {
            this.isVisible = true;
        },
        hideModal() {
            this.isVisible = false;
        }
        ,
        mobileMenu(){
          this.mobile = !this.mobile;
        }
        ,
        hideMobileMenu(){
          this.mobile = false;
        }
    },
    components: { FontAwesomeIcon }
};
</script>
<style scoped>
#mobileMenuModal{
  position: fixed; right: 0; top: 0; margin: 0; padding: 0; display: flex; align-items: center; width: 100%; height: 100%; z-index: 100;
}

#mobile_menu .menu{display: flex; width: 90vw; align-items: center; justify-content: space-between;}
#mobile_menu .menu ul:last-child{
   display: flex;

}
#mobile_menu{display:none;}
#mobile_menu .menu img{width: 120px; margin-top:5px;}
#mobile_menu svg{height: 28px;}
.mobile_menu{
  display: flex; flex-direction: column; align-items: center; 
  width: 100%; font-size: 3rem; line-height: 5rem;
}
@media screen and (max-width: 1000px) {
    #menu,#sec_nav{display: none !important;}
    #mobile_menu{display:block;}
}

#header{display: flex; align-items: center; justify-content: space-between; margin: 0 auto; padding: 0.9rem 5vw 0.9rem 5vw; position: fixed; width: 90vw; 
  background: rgb(0, 0, 0); background: linear-gradient( 180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.0) 80% ); z-index:999;
}
.scroll_header{background: rgb(0, 0, 0); background: linear-gradient( 180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100% );}
#header #menu .logo{width:100%;max-width: 95px;vertical-align: middle;padding-top:5px;}
#sec_nav{display:flex;align-items: center;}
#sec_nav{cursor:pointer;}
#sec_nav img{max-width:30px;}
#menu{display:flex;align-items: center;}
#menu .menu ul{display: flex; width: 100%; margin: 0; padding:0; margin-left:2rem;}
#menu .menu ul li{padding-left:1rem;}
.close{cursor:pointer; font-size: 2rem; font-weight: 700; }
#profile_modal{
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  
}
.modal_position{
  position: relative;
  width: 100%;
  height: 100%;
}
.modal_cover{
  background-color: rgba(0,0,0,0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 1;
}
.modal_content{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex; justify-content: space-between; width: 70vw;
}
.modal_content > div{
  margin-left:1rem;
}
.modal_content p{
  text-align: center;
}




</style>
