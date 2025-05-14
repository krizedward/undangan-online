<template>
  <transition name="fade">
  <section id="home" class="section love-story-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="title-white">Pernikahan Kami</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="story">
            Pernikahan bagi kami adalah perjalanan panjang,
            di mana dua hati berjanji untuk berjalan beriringan.
            Dalam setiap suka dan duka, kita akan saling menggenggam, saling menguatkan,
            menjadi sandaran satu sama lain. <br>
          </p>
          <p class="story">
            Bersama, kita lalui kehidupan ini, dengan cinta yang tumbuh setiap waktu,
            hingga rambut memutih, hingga usia tak lagi muda,
            dan sampai akhirnya hanya maut yang mampu memisahkan kita.
          </p>
        </div>
      </div>
    </div>
    <!-- <transition-group name="fade-stagger" tag="div">
      <p class="title-white" v-if="show" key="date">Kisah Kami Berdua</p>
      <p class="story" v-if="show" key="greeting">
        Pernikahan bagi kami adalah perjalanan panjang,
        di mana dua hati berjanji untuk berjalan beriringan.
        Dalam setiap suka dan duka, kita akan saling menggenggam, saling menguatkan,
        menjadi sandaran satu sama lain.
        Bersama, kita lalui kehidupan ini, dengan cinta yang tumbuh setiap waktu,
        hingga rambut memutih, hingga usia tak lagi muda,
        dan sampai akhirnya hanya maut yang mampu memisahkan kita.
      </p>
    </transition-group> -->
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

.story {
  font-size: 1rem;
  text-align: justify;
}

.love-story-page {
  padding: 15px;
}
</style>
