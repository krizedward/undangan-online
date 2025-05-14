<template>
  <section id="wedding-gift" class="section wedding-gift-section">
    <!-- <div class="content">
      <h2 class="section-title">Wedding Gift</h2>
      <p class="gift-text">
        Doa restu Anda merupakan hadiah yang sangat berarti bagi kami. 
        Namun jika Bapak/Ibu/Saudara/i ingin memberikan hadiah, 
        kami juga menyediakan informasi berikut:
      </p>

      <div class="gift-box">
        <h3>Bank BCA</h3>
        <p>No. Rekening: <strong>1234567890</strong></p>
        <p>a.n. Edward Jonathan</p>
      </div>

      <div class="gift-box">
        <h3>Bank Mandiri</h3>
        <p>No. Rekening: <strong>9876543210</strong></p>
        <p>a.n. Ruth Amelia</p>
      </div>

      <p class="thanks-message">Terima kasih atas kasih sayang dan dukungan Anda 💖</p>
    </div> -->
    <!-- Start Events -->
    <div id="events" class="events-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-box">
              <h2>Events</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="event-inner">
              <div class="event-img">
                <img class="img-fluid" src="images/event-img-01.jpg" alt="" />
              </div>
              <h2>2 June 2018 Engagement</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <a href="#">See location ></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="event-inner">
              <div class="event-img">
                <img class="img-fluid" src="images/event-img-02.jpg" alt="" />
              </div>
              <h2>3 June 2018 Main Ceremony </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <a href="#">See location ></a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="event-inner">
              <div class="event-img">
                <img class="img-fluid" src="images/event-img-03.jpg" alt="" />
              </div>
              <h2>4 June 2018 Wedding party </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
              <a href="#">See location ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Events -->
  </section>
</template>

<script>
export default {
  name: 'WeddingGiftView'
}
</script>

<style scoped>
.wedding-gift-section {
  background-color: #922f2f;
  color: #ffffff;
}

.content {
  padding: 20px;
  max-width: 700px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.gift-text {
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.gift-box {
  background: #e58e26;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}

.gift-box h3 {
  margin-bottom: 10px;
  color: #ffffff;
}

.thanks-message {
  margin-top: 30px;
  font-style: italic;
  color: #636e72;
}
</style>