<template>
  <transition name="fade">
    <section id="home" class="section women-section">
      <div class="home-content">
        <transition-group name="fade-stagger" tag="div">
          <p v-if="show" key="title" class="title-m">Rangkaian Acara</p>
          <p v-if="show" key="event" class="date">Pemberkatan & Resepsi</p>

          <div v-if="show" key="blessing" class="date event-details">
            <strong>Ibadah Pemberkatan Pernikahan Gereja</strong><br />
            Hari/Tanggal: Sabtu, 07 Juni 2025<br />
            Waktu: 13.00 - 15.00 WIB
          </div>

          <div v-if="show" key="reception" class="date event-details">
            <strong>Resepsi Pernikahan</strong><br />
            Hari/Tanggal: Sabtu, 07 Juni 2025<br />
            Waktu: 16.00 - Selesai
          </div>

          <p v-if="show" key="dresscode" class="date">
            <strong>Dress Code:</strong> Bebas rapi dan formal
          </p>
        </transition-group>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'ReligionView',
  props: {
    tamu: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 300);
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-stagger-enter-active {
  transition: all 0.6s ease;
}
.fade-stagger-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

/* Hapus nth-child, karena tidak efektif */
.event-details {
  margin-bottom: 20px;
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

.date {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

.women-section {
  background-color: #ffffff;
  color: #922f2f;
}

/* Tambahan styling lainnya */
.greeting, .invitation-text {
  font-size: 1.2rem;
}
</style>
