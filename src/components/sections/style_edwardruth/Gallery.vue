<template>
  <section id="gallery" class="section gallery-section">
    <!-- Start Gallery -->
	<div id="gallery" class="gallery-box">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12">
        <!-- <div class="col-lg-12"> -->
					<h2 style="font-size: 2rem; color: #922f2f;">Captured Moments</h2>
          <div class="title-box">
						
						<!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> -->
					</div>
				</div>
			</div>
			<div class="row">
				<ul class="popup-gallery clearfix">
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-01.jpg" alt="single image">
					</li>
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-02.jpg" alt="single image">
					</li>
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-04.jpg" alt="single image">
					</li>
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-03.jpg" alt="single image">
					</li>
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-05.JPG" alt="single image">
					</li>
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-06.JPG" alt="single image">
					</li>
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-07.jpg" alt="single image">
					</li>
					<li>
            <img class="img-fluid" src="images/edwardruth/gallery-08.jpg" alt="single image">
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- End Gallery -->
  </section>
</template>

<script>
export default {
  name: 'GalleryView',
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.title-m {
  color: #fff;
  font-size: 1.3rem;
  font-family: 'Amsterdam One', cursive;
}

.gallery-section {
  background-color: #fefefe;
  color: #2d3436;
  padding-bottom: 60px;
}

.content {
  padding: 20px;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.gallery-subtitle {
  color: #636e72;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item img:hover {
  transform: scale(1.03);
}
</style>
