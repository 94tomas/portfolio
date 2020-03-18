<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Navigation></Navigation>
    <router-view/>
    <Footer></Footer>

    <notifications group="contact" position="bottom left" class="c-notification"/>
  </div>
</template>
<script>
import Navigation from '@/components/layout/Navigation.vue'
import Footer from '@/components/layout/Footer.vue'
export default {
  name: 'Homepage',
  components: {
    Navigation,
    Footer
  }
}
</script>
<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Oswald', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.c-notification {
  .vue-notification {
    font-size: 18px;
    .notification-title {
      font-weight: 500;
    }
    .notification-content {
      font-weight: lighter;
    }
    &.success {
      background: rgba(104, 205, 134, 0.8);
      border-left-color: #3e734e;
    }
    &.error {
      background: rgba(130, 35, 35, 0.8);
    }
  }
}
</style>
