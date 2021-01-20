<template>
    <div class="home">
        <BannerHome></BannerHome>

        <Intro></Intro>

        <About></About>

        <Portfolio></Portfolio>

        <Contact></Contact>
    </div>
</template>

<script>
// @ is an alias to /src
import BannerHome from '@/components/banners/BannerHome.vue'
import Intro from '@/components/sections/Intro.vue'
import About from '@/components/sections/SecAbout.vue'
import Portfolio from '@/components/sections/Portfolio.vue'
import Contact from '@/components/sections/Contact.vue'

export default {
  name: 'Home',
  components: {
    BannerHome,
    Intro,
    About,
    Portfolio,
    Contact
  }
}
</script>
