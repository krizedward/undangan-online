<template>
  <transition name="fade">
    <section id="home" class="section image-wrapper">
      <!-- Gambar latar -->
      <img src="/images/edwardruth/home.JPG" class="bg-img" alt="Background" />

      <!-- Overlay hitam transparan -->
      <div class="overlay"></div>

      <!-- Konten utama -->
      <div class="container content-over-bg">
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
.image-wrapper {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.bg-img {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1;
}

.content-over-bg {
  position: relative;
  z-index: 2;
  color: white;
  padding-top: 100px;
}

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
}

.center {
  text-align: center;
}

.home-title {
  font-size: 1.3rem !important;
}

.row.bottom-align {
  display: flex;
  align-items: flex-end;
  height: 200px;
}
</style>
