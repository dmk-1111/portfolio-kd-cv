<template>
  <header id="header" :class="`header dark-background d-flex flex-column ${menuActive}`">
    <i :class="`header-toggle d-xl-none ${menuIcon}`" @click="toggleMenu"></i>
    <!-- bi-x-lg -->
    <div class="profile-img">
      <img src="../assets/img/profile/me.png" alt="" class="img-fluid rounded-circle">
    </div>

    <a href="/#hero" class="logo d-flex align-items-center justify-content-center">
         <h1 class="sitename" v-if="data">{{ data.name === '' ? 'Alex Smit' : data.name }}</h1>
    </a>

    <div class="social-links text-center">
      <a href="#" class="twitter"><i class="bi bi-twitter-x"></i></a>
      <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
      <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
      <a href="#" class="google-plus"><i class="bi bi-telegram"></i></a>
      <a href="#" class="linkedin"><i class="bi bi-whatsapp"></i></a>
    </div>

    <nav id="navmenu" class="navmenu">
      <ul>
        <li>
            <a href="/#hero" class="active" id="home"><i class="bi bi-house navicon"></i>Home</a>
        </li>
        <li>
            <a href="/#about" id="m-about"><i class="bi bi-person navicon"></i>About</a>
        </li>
        <li>
            <a href="/#skills" id="m-skill"><i class="bi bi-briefcase navicon"></i>Skill</a>
        </li>
        <li>
            <a href="/#resume" id="m-resume"><i class="bi bi-file-earmark-text navicon"></i>Resume</a>
        </li>
        <li>
            <a href="/#contact" id="m-contact"><i class="bi bi-envelope navicon"></i>Contact</a>
        </li>
      </ul>
    </nav>

  </header>
</template>
<script>
  import('@/assets/js/link')
  
  export default {
    data(){
      return {
        data:null,
        error:null,
        menuActive:null,
        menuIcon:'bi bi-list'
      }
    },
    mounted(){
      fetch('https://raw.githubusercontent.com/K-Oudom/vue-project-02/refs/heads/master/data/hero.json')
        .then((res) => (res.json()))
        .then((json) => (this.data = json))
        .catch((err) => console.log(err.message));
    },

    methods:{
      toggleMenu(){
        if(this.menuActive === null){
          this.menuActive = 'active';
          this.menuIcon = 'bi bi-x-lg';
        }
        else{
          this.menuActive = null;
          this.menuIcon = 'bi bi-list';
        }
      }
    }
    
  }
</script>
<style scoped>
  ul li a{
    text-decoration:none;
  }
  ul li a.active i{
    color: #149ddd;
  }
  .header > a{
    text-decoration: none;
  }
</style>