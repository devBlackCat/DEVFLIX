<!-- /devflex/src/components/HeaderComponent.vue -->
<template>
    <div class="header">
   
      <SidebarComponent />
    </div>
  </template>
  
  <script>
  import SidebarComponent from './SidebarComponent.vue'
  
  export default {
    name: 'HeaderComponent', // 컴포넌트의 이름을 지정하십시오.
    components: {
      SidebarComponent,
    },
  };
  </script>
  
  <style scoped>
  .header{height:70px;}
</style>