<template>
  <transition name="fade">
  <section id="profile" class="section bg-maroon">
    <div class="profile-page">
      <div class="container">
        <div class="row align-items-center about-main-info">
          <!-- <div class="col-lg-4 col-md-6 col-sm-12"> -->
          <div class="col-12">
            <p class="title-maroon mt-3 mb-4">Mempelai Pria</p>
            <div class="about-img">
              <img class="img-fluid rounded" src="images/edwardruth/profile-img-02.JPG" alt="" />
            </div>
          </div>

          <!-- <div class="col-lg-8 col-md-6 col-sm-12"> -->
          <div class="col-12">
            <p class="date">Edward Kristian M., S.Kom.</p>
            <p class="greeting" v-if="show" key="greeting">Putra Pertama dari <br> Bapak Deni Brandes & Ibu Neni Wijayanti</p>
          </div>
        </div>

        <div class="row align-items-center about-main-info mt-4 mb-4">
          <!-- <div class="col-lg-4 col-md-6 col-sm-12"> -->
          <div class="col-12">
            <div class="about-img">
              <p class="title-maroon mt-3 mb-4">Mempelai Wanita</p>
              <img class="img-fluid rounded" src="images/edwardruth/profile-img-01.JPG" alt="" />
            </div>
          </div>

          <!-- <div class="col-lg-8 col-md-6 col-sm-12"> -->
          <div class="col-12">
            <p class="women-name">apt. Ruth Agustina R., S.Farm.</p>
            <p class="greeting" v-if="show" key="greeting">Putri Pertama dari <br> Bapak Hadi Sukirno & Ibu Mudji Rahayu</p>
          </div>
        </div>
      </div>
      
      <!-- <transition-group name="fade-stagger" tag="div">
        <p class="title-m" v-if="show" key="date">Mempelai Pria</p>
      </transition-group> -->
      

      <!-- <transition-group name="fade-stagger" tag="div">
        <p class="title-m" v-if="show" key="date">Mempelai Wanita</p>
      </transition-group> -->
      
    </div>
  </section>
  </transition>
</template>

<script>
export default {
  name: 'ReligionView',
  data() {
    return {
      show: false,
    };
  },

  mounted() {
    // Tampilkan section dengan animasi fade-in setelah mount
    // this.show = true;
    // Delay biar animasi kelihatan natural
    setTimeout(() => {
      this.show = true;
    }, 300);
  },

  props: {
    tamu: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.fade-stagger-enter-active {
  transition: all 0.6s ease;
}

.fade-stagger-enter {
  opacity: 0;
  transform: translateY(10px);
}

/* Efek stagger: delay bertingkat per elemen */
.fade-stagger-enter-active:nth-child(1) { transition-delay: 0.1s; }
.fade-stagger-enter-active:nth-child(2) { transition-delay: 0.3s; }
.fade-stagger-enter-active:nth-child(3) { transition-delay: 0.5s; }
.fade-stagger-enter-active:nth-child(4) { transition-delay: 0.7s; }
.fade-stagger-enter-active:nth-child(5) { transition-delay: 0.9s; }
  
.guest-name {
  font-size: 60px;
  font-family: 'The Seasons', serif;
  color: #ffffff;
  margin-bottom: 18px !important;
}
.couple-name {
  font-family: 'TAN Mon Cheri', sans-serif;
  color: #ffffff;
  font-size: 28px !important;
}
.title-box h2 {
  font-size: 60px;
  font-family: 'Amsterdam One', cursive;
  color: #ffffff;
  margin-bottom: 50px;
}
.men-section {
  /* background: linear-gradient(to bottom right, #ff9ff3, #feca57); */
  background-color: #922f2f;
  color: #ffffff;
}

.title-m {
  color: #fff;
  font-size: 1.3rem;
  font-family: 'Amsterdam One', cursive;
  margin-bottom: 2rem !important;
}

.profile-page {
  text-align: center;
  padding: 20px;
}

.couple-name {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.date {
  font-size: 1.5rem;
  margin-bottom: 3px;
}

.women-name {
  font-size: 1.4rem;
  margin-bottom: 3px;
}

.greeting {
  font-size: 0.8rem;
}

.guest-name {
  font-size: 2rem;
  margin: 10px 0;
}

.invitation-text {
  font-size: 1.2rem;
  /* font-family: 'The Seasons', serif; */
}
</style>
