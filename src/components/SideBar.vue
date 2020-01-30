<template>
    <div class="sidebar">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red"
    -->
      <div class="sidebar-wrapper">
        <div class="logo">
          <a href="javascript:void(0)" class="simple-text logo-mini">
            CT
          </a>
          <a href="javascript:void(0)" class="simple-text logo-normal">
            Creative Tim
          </a>
        </div>
        <ul class="nav">
          <li :class="currentPage.includes('/dashboard') ? activeClass : ''">
            <router-link to="/dashboard">
              <i class="tim-icons icon-chart-pie-36"></i>
              <p>Dashboard</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/icons') ? activeClass : ''">
            <router-link to="/icons">
              <i class="tim-icons icon-atom"></i>
              <p>Icons</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/appmap') ? activeClass : ''">
            <router-link to="/appmap">
              <i class="tim-icons icon-pin"></i>
              <p>Maps</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/notifications') ? activeClass : ''">
            <router-link to="/notifications">
              <i class="tim-icons icon-bell-55"></i>
              <p>Notifications</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/userProfile') ? activeClass : ''">
            <router-link to="/userProfile">
              <i class="tim-icons icon-single-02"></i>
              <p>User Profile</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/tables') ? activeClass : ''">
            <router-link to="/tables">
              <i class="tim-icons icon-puzzle-10"></i>
              <p>Table List</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/typography') ? activeClass : ''">
            <router-link to="/typography">
              <i class="tim-icons icon-align-center"></i>
              <p>Typography</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/rtl') ? activeClass : ''">
            <router-link to="/rtl">
              <i class="tim-icons icon-world"></i>
              <p>RTL Support</p>
            </router-link>
          </li>
          <li :class="currentPage.includes('/upgradepro') ? activeClass : ''">
            <router-link to ="/upgradepro">
              <i class="tim-icons icon-spaceship"></i>
              <p>Upgrade to PRO</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
       data(){
         return {
           activeClass: 'active'
         }
       },
       computed: {
         currentPage(){
           return this.$route.path;
         }
       }
    }
</script>

<style lang="scss" scoped>
  .router-link-active{
    background-color: aqua;
  }
</style>