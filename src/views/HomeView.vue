<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import LeftMenu from '@/components/LeftMenu/LMGroups.vue'
import LeftMenu from '@/components/LeftMenu/LMMain.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  }
}
</script>
