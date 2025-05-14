<template>
  <transition name="fade">
  <section id="home" class="section bg-maroon">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p class="title-maroon center home-title">Undangan Pesta Pernikahan :</p>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h1 class="couple-name center mt-3 mb-1">EDWARD & RUTH</h1>
          <h6 class="date-wedding center text-maroon">- Sabtu, 7 Juni 2025 -</h6>
        </div>
      </div>

      <div class="row bottom-align">
        <div class="col-12">
          <p class="invitation-text center">
            Merupakan kebahagiaan bagi kami atas kehadiran Anda <br>
            <font-awesome-icon icon="arrow-down" />
          </p>
          
        </div>
      </div>
    </div>
    <!-- <transition-group name="fade-stagger" tag="div">
      <p class="title-maroon" v-if="show" key="date">Undangan Pesta Pernikahan :</p>
      <h1 class="couple-name" v-if="show" key="name">EDWARD & RUTH</h1>
      <p class="invitation-text" v-if="show" key="invite">Merupakan kebahagiaan bagi kami atas kehadiran Anda</p>
    </transition-group> -->
  </section>
  </transition>
</template>

<script>
export default {
  name: 'HomeView',
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

.couple-name {
  font-family: 'TAN Mon Cheri', sans-serif;
  color: #ffffff;
  font-size: 27px !important;
  font-weight: bold;
}

.date-wedding {
  font-size: 20px !important;
}

.invitation-text {
  font-size: 1.1rem;
  /* font-family: 'The Seasons', serif; */
}

/* custom page */
.center {
  text-align: center;
}

.home-title {
  font-size: 1.3rem !important;
}

.row.bottom-align {
  display: flex;
  align-items: flex-end;
  height: 200px; /* sesuaikan */
}

#home {
  background-image: url('/public/images/edwardruth/home.JPG'); /* ganti dengan path gambarmu */
  background-size: cover;       /* agar gambar menutupi seluruh area */
  background-position: center;  /* agar fokus tengah gambar */
  background-repeat: no-repeat; /* mencegah gambar terulang */
  min-height: 100vh;            /* pastikan tingginya minimal 1 layar penuh */
  color: white;                 /* jika perlu ubah warna teks agar terbaca */
  position: relative;
}

#home::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* transparansi hitam */
  z-index: 1;
}

#home > * {
  position: relative;
  z-index: 2;
}
</style>
