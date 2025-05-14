<template>
  <transition name="fade">
    <section id="home" class="section bg-maroon wedding-gift-page">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="gift-page">
              <p class="title-maroon mb-4">Wedding Gift</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <p class="mb-4" style="font-size: 12px;">
              Kehadiran Anda adalah yang paling berarti bagi kami. 
              Namun bagi keluarga dan sahabat yang ingin mengirimkan tanda kasih, 
              dengan senang hati kami menerimanya. Anda dapat 
              menggunakan akun rekening di bawah ini:
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>Bank BCA 4350268508 <br> Edward Kristian Mangare</td>
                  <td>
                    <p class="copy-icon clickable" @click="copyToClipboard" v-if="show" key="date">
                      <font-awesome-icon icon="copy" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>Bank BCA 0190876985 <br> Ruth Agustina Rahadi.</td>
                  <td>
                    <p class="copy-icon copyToClipboardWomen" @click="copyToClipboardWomen" v-if="show" key="date">
                      <font-awesome-icon icon="copy" />
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      

      <!-- <div class="home-content">
        <transition-group name="fade-stagger" tag="div">
          <p class="title-m" v-if="show" key="title">Wedding Gift</p>
          <p class="date" v-if="show" key="date">
            Bank BCA 4350268508 a.n Edward Kristian Mangare.
          </p>
          <p class="copy-icon clickable" @click="copyToClipboard" v-if="show" key="date">Salin 📋</p>

          <br>
          <hr>
          <p class="date" v-if="show" key="date">
            Bank BCA 0190876985 a.n Ruth Agustina Rahadi.
          </p>
          <p class="copy-icon copyToClipboardWomen" @click="copyToClipboard" v-if="show" key="date">Salin 📋</p>
        </transition-group>
      </div> -->
    </section>
  </transition>
</template>


<script>
export default {
  name: 'GiftView',
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
  },

  methods: {
    copyToClipboard() {
      const text = "4350268508";
      navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin!");
      }).catch(err => {
        console.error('Gagal menyalin: ', err);
      });
    },

    copyToClipboardWomen() {
      const text = "0190876985";
      navigator.clipboard.writeText(text).then(() => {
        alert("Nomor rekening berhasil disalin!");
      }).catch(err => {
        console.error('Gagal menyalin: ', err);
      });
    },
  }
}
</script>

<style scoped>

.copy-icon {
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 10px;
  transition: transform 0.2s ease;
}

.copy-icon:hover {
  transform: scale(1.2);
}

.clickable {
  cursor: pointer;
  transition: color 0.3s ease;
}

.clickable:hover {
  color: #CCC5B9;
}

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

.title-m {
  color: #fff;
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

.wedding-gift-page {
  padding: 15px;
}

.section {
  min-height: 75vh !important;
  /* scroll-snap-align: start; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 2rem; */
  /* font-weight: bold; */
}
</style>
