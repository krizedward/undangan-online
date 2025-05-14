<template>
  <transition name="fade">
    <section id="location" class="section bg-white">
      <div class="home-content">
        <transition-group name="fade-stagger" tag="div">
          <p class="title-white" v-if="show" key="title">Lokasi Acara</p>
          <p class="location" v-if="show" key="address">Warung Asep - Jl. Sultan Agung 19, Kota Batu</p>

          <div v-if="show" key="map" class="map-container">
            <iframe
              class="iframe-readonly"
              width="100%"
              height="300"
              style="border:0"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              :src="mapSrc">
            </iframe>
          </div>

          <div v-if="show" key="button" class="button-container">
            <a :href="mapLink" target="_blank" rel="noopener" class="map-button">
              Buka di Google Maps
            </a>
          </div>
        </transition-group>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'LocationView',
  data() {
    return {
      show: false,
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1456982035934!2d112.52273337406905!3d-7.879820278365474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78819683142585%3A0x423156501d3aee64!2sWarung%20Asep!5e0!3m2!1sid!2sid!4v1746601504744!5m2!1sid!2sid',
      mapLink: 'https://maps.app.goo.gl/m1TKMbKCcr6W6xPq6'
    };
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 300);
  }
};
</script>

<style scoped>
.fade-stagger-enter-active {
  transition: all 0.6s ease;
}
.fade-stagger-enter {
  opacity: 0;
  transform: translateY(10px);
}

.men-section {
  background-color: #922f2f;
  color: #ffffff;
}

.home-content {
  text-align: center;
  padding: 20px;
}

.title-m {
  color: #fff;
  font-size: 1.3rem;
  font-family: 'Amsterdam One', cursive;
}

.location {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.map-container {
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
}

.button-container {
  margin-top: 15px;
}

.map-button {
  display: inline-block;
  background-color: #922f2f;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;
}
.map-button:hover {
  background-color: #f2f2f2;
}

.iframe-readonly {
  pointer-events: none;
}
</style>
