<template>
  <div class="page-container">
    <audio ref="audioPlayer" :src="audioFile" loop></audio>

    <!-- Welcome Section -->
    <transition name="fade">
      <!-- <section v-if="showWelcome" id="welcome" class="section home-section"> -->
      <section v-if="showWelcome" id="welcome" class="section bg-maroon">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="welcome-text">
                <p>We Invite You To Celebrate Our Wedding</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <h1 class="couple-name">EDWARD & RUTH</h1>
            </div>
          </div>

          <img class="img-fluid mb-3 mt-2 photo-cover" src="images/edwardruth/cover.jpg">

          <!-- <div class="row">
            <div class="col-12">
              <p class="date-text">7 Juni 2025</p>
            </div>
          </div> -->

          <div class="row">
            <div class="col-12">
              <p class="title-cover text-maroon">Dear :</p>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <h2 class="guest-name">{{ tamu || 'Tamu Undangan' }}</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <p class="sub-text">We apologize for any misspelling of your name or title</p>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <button @click="playAudio" class="open-button">LET'S OPEN</button>
            </div>
          </div>
        </div>
        <!-- <p class="welcome-text">We Invite You To Celebrate</p> -->
      </section>
    </transition>

    <!-- All other sections -->
    <div v-if="!showWelcome">
      <Home :tamu="tamu" />
      <LoveStory />
      <Profile />
      <Location />
      <Event />
      <Religion />
      <Gift />
      <Gallery />
      <Closing />
    </div>
  </div>
</template>


<script>
import Home from '@/components/sections/style_edwardruth/Home.vue'
import Religion from '@/components/sections/style_edwardruth/Religion.vue'
import LoveStory from '@/components/sections/style_edwardruth/LoveStory.vue'
import Profile from '@/components/sections/style_edwardruth/Profile.vue'
import Location from '@/components/sections/style_edwardruth/Location.vue'
import Event from '@/components/sections/style_edwardruth/Event.vue'
import Gift from '@/components/sections/style_edwardruth/Gift.vue'
import Closing from '@/components/sections/style_edwardruth/Closing.vue'
import Gallery from '@/components/sections/style_edwardruth/Gallery.vue'

export default {
  // mounted() {
  //   // Listen to the scroll event
  //   let timeout;
  //   window.addEventListener('scroll', () => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {}, 10000); // Delay scroll 1 detik (1000ms)
  //   });
  // },
  components: {
    // Navigation,
    Home, 
    Religion,
    Profile,
    // Women,
    Location,
    Event,
    Gift,
    Closing,
    LoveStory,
    Gallery,
    // WeddingEvent,
    // Acara,
    // WeddingGift,
    // RSVP
  },
  data() {
    return {
      tamu: this.formatNama(this.$route.query.to || ''),
      audioFile: '/audio/wedding-song.mp3',
      showWelcome: true,
    };
  },
  methods: {
    formatNama(nama) {
      return nama.replace(/-/g, ' ').split(' ').map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    },
    playAudio() {
      this.showWelcome = false; // trigger fade out
      this.$refs.audioPlayer.volume = 0.5; // Set volume ke 50%

      // Memulai pemutaran audio ketika tombol ditekan
      this.$refs.audioPlayer.play().then(() => {
        console.log("Audio is playing");
      }).catch(error => {
        console.error("Error playing audio:", error);
      });
    }
  },
};
</script>

<style scoped>
/* teks */

.guest-name {
  color: #fff;
  font-family: 'The Seasons', serif;
  font-size: 2rem;
}

.to-guest {
  color: #fff;
  font-size: 1.3rem;
  font-family: 'Amsterdam One', cursive;
}

.welcome-text {
  font-size: 1rem;
}

.date-text {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.sub-text {
  font-size: 0.8rem;
  margin-bottom: 20px;
  font-style: italic;
}

.couple-name {
  color: #fff;
  font-size: 28px !important;
  font-family: 'TAN Mon Cheri', sans-serif;
}

/* Styling section welcome */
#welcome {
  /* background: linear-gradient(120deg, #922f2f, #a94444, #922f2f); */
  /* color: #fff; */
  text-align: center;
  padding: 100px 20px;
  position: relative;
  z-index: 10;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.open-button {
  background-color: #fff;
  color: #922f2f;
  border: none;
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.open-button:hover {
  background-color: #CCC5B9;
  color: #FFFCF2;
}

.photo-cover {
  border-radius: 20px;
  width: 80%;
}

.title-cover {
  font-size: 1rem;
  font-family: 'Amsterdam One', cursive;
}
</style>