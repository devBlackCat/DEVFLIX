<!-- /devflex/src/App.vue -->
<template>
  <div id="app">
    <HeaderComponent />
    <router-view />     <!-- 해당하는 페이지 컴포넌트 (예: MainPage.vue)가 이 위치에 출력됩니다. -->

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
}
</script>
<style>
/* common.css 파일을 import합니다. */
@import './components/common.css';
</style>