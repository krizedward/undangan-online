<template>
  <transition name="fade">
  <section id="home" class="section women-section">
    <div class="home-content">
      <transition-group name="fade-stagger" tag="div">
        <p class="title-white" v-if="show" key="date">Terimakasih</p>
        <p class="date" v-if="show" key="date">Terima kasih atas kehadiran dan dukungan anda. Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila anda berkenan hadir dan memberikan restu kepada kami.</p>
      </transition-group>
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
.women-section {
  /* background: linear-gradient(to bottom right, #ff9ff3, #feca57); */
  background-color: #ffffff;
  color: #922f2f;
}

.title-m {
  color: #922f2f;
  font-size: 1.3rem;
  font-family: 'Amsterdam One', cursive;
}

.home-content {
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
  margin-bottom: 30px;
}

.greeting {
  font-size: 1.2rem;
}

.guest-name {
  font-size: 2rem;
  margin: 10px 0;
}

.invitation-text {
  font-size: 1.2rem;
  /* font-family: 'The Seasons', serif; */
}

.section {
  min-height: 100vh !important;
  /* scroll-snap-align: start; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 2rem; */
  /* font-weight: bold; */
}
</style>
