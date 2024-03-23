// /devflex/src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router' // 한 줄 추가
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueApexCharts from "vue3-apexcharts";

library.add(fas, far, fab)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router) // router를 use 메서드로 추가
app.mount('#app')

app.use(VueApexCharts);
app.component('ApexChart', VueApexCharts); // 이름 변경

function closeMobileMenu() {
    const mobileMenuModal = document.getElementById('mobileMenuModal');
    if (mobileMenuModal) {
      mobileMenuModal.style.display = 'none';
    }
  }
  
  router.afterEach(() => {
    closeMobileMenu(); // 모바일 메뉴 닫기 함수 호출
  });