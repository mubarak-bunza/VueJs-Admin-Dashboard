<template>
  <div id="app">
    <div class="wrapper">
      <app-sidebar />
      <div class="main-panel">
        <app-navbar />
        <div class="content">
          <router-view />
        </div>
        <app-footer />
      </div>
    </div>
  </div>
</template>

<script>
  import SideBar from '@/components/SideBar.vue'
  import NavBar from '@/components/NavBar.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components: {
      'app-sidebar': SideBar,
      'app-navbar': NavBar,
      'app-footer': Footer
    }
  }
</script>

<style lang="scss">

</style>
