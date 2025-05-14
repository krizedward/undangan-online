<template>
  <section id="profile" class="section profile-section">
    <!-- <div class="content">
      <h2 class="section-title">The Bride & The Groom</h2>
      <div class="profile-container">
        
        <div class="profile-box">
          <img src="#" alt="Edward" class="profile-img" />
          <h3 class="profile-name">Edward</h3>
          <p class="profile-desc">Putra dari Bapak A & Ibu B</p>
        </div>

        <div class="love-icon">❤️</div>

        <div class="profile-box">
          <img src="#" alt="Ruth" class="profile-img" />
          <h3 class="profile-name">Ruth</h3>
          <p class="profile-desc">Putri dari Bapak X & Ibu Y</p>
        </div>
      </div>
    </div> -->
    <!-- Start About us -->
    <div id="about" class="about-box">
      <div class="about-a1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="title-box">
                <h2>Leida <span>&</span> Dominic</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <div class="row align-items-center about-main-info">
                <div class="col-lg-8 col-md-6 col-sm-12">
                  <h2> About <span>Leida</span></h2>
                  <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="about-img">
                    <img class="img-fluid rounded" src="images/about-img-01.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div class="row align-items-center about-main-info">
                <div class="col-lg-4 col-md-6 col-sm-12">
                  <div class="about-img">
                    <img class="img-fluid rounded" src="images/about-img-02.jpg" alt="" />
                  </div>
                </div>
                <div class="col-lg-8 col-md-6 col-sm-12">
                  <h2> About <span>Dominic</span></h2>
                  <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End About us -->
  </section>
</template>

<script>
export default {
  name: 'ProfileView'
}
</script>

<style scoped>
.profile-section {
  background-color: #ffffff;
  color: #922f2f;
}

.content {
  text-align: center;
  padding: 20px;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #922f2f;
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.profile-box {
  max-width: 200px;
}

.profile-img {
  width: 100%;
  border-radius: 50%;
  border: 4px solid #feca57;
  margin-bottom: 15px;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #922f2f;
}

.profile-desc {
  font-size: 1rem;
  color: #922f2f;
}

.love-icon {
  font-size: 2rem;
}
</style>
