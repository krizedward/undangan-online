<template>
  <section id="rsvp" class="section rsvp-section">
    <!-- <div class="content">
      <h2 class="section-title">RSVP</h2>
      <p class="rsvp-text">
        Mohon konfirmasi kehadiran Anda pada acara pernikahan kami.
      </p>

      <form @submit.prevent="submitRSVP" class="rsvp-form">
        <input type="text" v-model="form.nama" placeholder="Nama Lengkap" required />
        <select v-model="form.kehadiran" required>
          <option disabled value="">Konfirmasi Kehadiran</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <input type="number" v-model="form.jumlah" placeholder="Jumlah Orang" min="1" />
        <textarea v-model="form.ucapan" placeholder="Ucapan & Doa" rows="4"></textarea>

        <button type="submit" class="btn-submit">Kirim</button>
      </form>

      <div v-if="submitted" class="success-message">
        Terima kasih atas konfirmasinya! 💌
      </div>
    </div> -->

    <!-- Start Contact -->
    <div id="contact" class="contact-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-box">
              <h2>Contact wth us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="contact-block">
            <form id="contactForm">
              <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" required data-error="Please enter your name">
                  <div class="help-block with-errors"></div>
                </div>                                 
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input type="text" placeholder="Your Email" id="email" class="form-control" name="name" required data-error="Please enter your email">
                  <div class="help-block with-errors"></div>
                </div> 
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <select class="custom-select d-block form-control" id="guest" required data-error="Please select an item in the list.">
                    <option disabled selected>Number Of Guest*</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <div class="help-block with-errors"></div>
                </div> 
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <select class="custom-select d-block form-control" id="event" required data-error="Please select an item in the list.">
                    <option disabled selected>I Am Attending*</option>
                    <option value="1">All events</option>
                    <option value="2">Wedding ceremony</option>
                    <option value="3">Reception party</option>
                  </select>
                  <div class="help-block with-errors"></div>
                </div> 
              </div>
              <div class="col-md-12">
                <div class="form-group"> 
                  <textarea class="form-control" id="message" placeholder="Your Message" rows="8" data-error="Write your message" required></textarea>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="submit-button text-center">
                  <button class="btn btn-common" id="submit" type="submit">Send Message</button>
                  <div id="msgSubmit" class="h3 text-center hidden"></div> 
                  <div class="clearfix"></div> 
                </div>
              </div>
              </div>            
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact -->
  </section>
</template>

<script>
export default {
  name: 'RSVP',
  data() {
    return {
      form: {
        nama: '',
        kehadiran: '',
        jumlah: 1,
        ucapan: ''
      },
      submitted: false
    }
  },
  methods: {
    submitRSVP() {
      console.log('RSVP Data:', this.form)

      // Simulasi pengiriman (bisa dihubungkan ke backend atau Google Form/API)
      this.submitted = true

      // Reset form setelah kirim
      setTimeout(() => {
        this.form = {
          nama: '',
          kehadiran: '',
          jumlah: 1,
          ucapan: ''
        }
        this.submitted = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
.rsvp-section {
  background-color: #f0f9ff;
  color: #2d3436;
}

.content {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.rsvp-text {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

.rsvp-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.rsvp-form input,
.rsvp-form select,
.rsvp-form textarea {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.btn-submit {
  background-color: #00a8ff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-submit:hover {
  background-color: #0097e6;
}

.success-message {
  margin-top: 20px;
  color: #44bd32;
  font-weight: bold;
}
</style>
