<template>
  <section id="wedding-event" class="section wedding-event-section">
    <!-- <div class="content">
      <h2 class="section-title">Wedding Event</h2>

      <div class="event-box">
        <h3>Akad Nikah</h3>
        <p><strong>Hari/Tanggal:</strong> Sabtu, 21 Juni 2025</p>
        <p><strong>Waktu:</strong> 09.00 WIB</p>
        <p><strong>Tempat:</strong> Gedung Kebahagiaan, Jakarta</p>
      </div>

      <div class="event-box">
        <h3>Resepsi</h3>
        <p><strong>Hari/Tanggal:</strong> Sabtu, 21 Juni 2025</p>
        <p><strong>Waktu:</strong> 11.00 - 13.00 WIB</p>
        <p><strong>Tempat:</strong> Gedung Kebahagiaan, Jakarta</p>
      </div>

      <div class="maps-button">
        <a
          href="https://www.google.com/maps/place/Gedung+Kebahagiaan"
          target="_blank"
          rel="noopener"
          class="btn-maps"
        >
          📍 Lihat Lokasi di Google Maps
        </a>
      </div>
    </div> -->
    <!-- Start Family -->
    <div id="family" class="family-box">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="title-box">
              <h2>Family</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-team-member">
              <div class="family-img">
                <img class="img-fluid" src="images/family-01.jpg" alt="" />
              </div>
              <div class="family-info">
                <h4>Mr. Alonso Wiles </h4>
                <p>{ Leida’s Father }</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-team-member">
              <div class="family-img">
                <img class="img-fluid" src="images/family-02.jpg" alt="" />
              </div>
              <div class="family-info">
                <h4>Mr. Evon Wiles </h4>
                <p>{ Leida’s Mother }</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-team-member">
              <div class="family-img">
                <img class="img-fluid" src="images/family-03.jpg" alt="" />
              </div>
              <div class="family-info">
                <h4>Mr. Chris Wiles </h4>
                <p>{ Leida’s Brother }</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-team-member">
              <div class="family-img">
                <img class="img-fluid" src="images/family-04.jpg" alt="" />
              </div>
              <div class="family-info">
                <h4>Mr. Adina Wiles </h4>
                <p>{ Leida’s Sister }</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-team-member">
              <div class="family-img">
                <img class="img-fluid" src="images/family-05.jpg" alt="" />
              </div>
              <div class="family-info">
                <h4>Mr. Annetta Wiles </h4>
                <p>{ Leida’s Sister }</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="single-team-member">
              <div class="family-img">
                <img class="img-fluid" src="images/family-06.jpg" alt="" />
              </div>
              <div class="family-info">
                <h4>Mr. Ladonna Wiles </h4>
                <p>{ Leida’s Sister }</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Family -->
  </section>
</template>

<script>
export default {
  name: 'WeddingEvent'
}
</script>

<style scoped>
.wedding-event-section {
  background-color: #fff;
  color: #2d3436;
}

.content {
  padding: 20px;
  text-align: center;
  max-width: 700px;
  margin: auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.event-box {
  background: #f1f2f6;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  text-align: left;
}

.event-box h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.maps-button {
  margin-top: 20px;
}

.btn-maps {
  display: inline-block;
  padding: 12px 20px;
  background: #feca57;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-maps:hover {
  background: #ffa502;
}
</style>