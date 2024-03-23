<!-- /devflex/src/components/FooterComponent.vue -->
<template>
<!--  <footer>
    <div class="footer-icons">
      <a :href="gitLink">
        <img class="footer-icon" :src="gitIcon" alt="GitHub Icon" />
      </a>
      <a :href="blogLink">
        <img class="footer-icon" :src="blogIcon" alt="Blog Icon" />
      </a>
    </div>

    <div class="footer-info">
      <p>Footer Information</p>
    </div>
  </footer>
  -->
  <div> </div>
</template>

<script>
export default {
  name: "FooterComponent", // 컴포넌트의 이름을 지정하십시오.
  data() {
    return {
      gitIcon: require("@/assets/git.png"),
      blogIcon: require("@/assets/blog.png"),
      gitLink: "https://github.com/devBlackCat", // Replace with your GitHub profile link
      blogLink: "https://post.dev-blog.store/", // Replace with your blog link
    };
  },
};
</script>

<style scoped>
.footer-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.footer-icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}

.footer-info {
  text-align: center;
  font-size: 1rem;
}
</style>