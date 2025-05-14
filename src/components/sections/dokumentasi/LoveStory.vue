<template>
  <section id="love-story" class="section love-story-section">
    <!-- <div class="content">
      <h2 class="section-title">Our Love Story</h2>
      <div class="timeline">
        <div v-for="(item, index) in stories" :key="index" class="timeline-item">
          <div class="timeline-date">{{ item.date }}</div>
          <div class="timeline-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div> -->
    <div id="story" class="story-box main-timeline-box">
      <div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="title-box">
						<h2>Our Story</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
					</div>
				</div>
			</div>
			<div class="row timeline-element separline">
				<div class="timeline-date-panel col-xs-12 col-md-6  align-left">         
                    <div class="time-line-date-content">
                        <p class="mbr-timeline-date mbr-fonts-style display-font">
                            1 March 2018  
                        </p>
                    </div>
				</div>
				<span class="iconBackground"></span>
				<div class="col-xs-12 col-md-6 align-left">
					<div class="timeline-text-content">
						<h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-font">First meet</h4>
						<p class="mbr-timeline-text mbr-fonts-style display-7">
						We met at the wedding of our close friends and immediately found a common language, so a year later our first date happened.
						</p>
					</div>
				</div>
			</div>
			<div class="row timeline-element reverse separline">
				<div class="timeline-date-panel col-xs-12 col-md-6  align-left">         
                    <div class="time-line-date-content">
                        <p class="mbr-timeline-date mbr-fonts-style display-font">
                            2 April 2018  
                        </p>
                    </div>
				</div>
				<span class="iconBackground"></span>
				<div class="col-xs-12 col-md-6 align-right">
					<div class="timeline-text-content">
						<h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-font">First date</h4>
						<p class="mbr-timeline-text mbr-fonts-style display-7">
						We met at the wedding of our close friends and immediately found a common language, so a year later our first date happened.
						</p>
					</div>
				</div>
			</div>
			<div class="row timeline-element separline">
				<div class="timeline-date-panel col-xs-12 col-md-6  align-left">         
                    <div class="time-line-date-content">
                        <p class="mbr-timeline-date mbr-fonts-style display-font">
                            1 May 2018  
                        </p>
                    </div>
				</div>
				<span class="iconBackground"></span>
				<div class="col-xs-12 col-md-6 align-left">
					<div class="timeline-text-content">
						<h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-font">Proposal</h4>
						<p class="mbr-timeline-text mbr-fonts-style display-7">
						Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit.
						</p>
					</div>
				</div>
			</div>
			<div class="row timeline-element reverse separline">
				<div class="timeline-date-panel col-xs-12 col-md-6  align-left">         
                    <div class="time-line-date-content">
                        <p class="mbr-timeline-date mbr-fonts-style display-font">
                            2 June 2018  
                        </p>
                    </div>
				</div>
				<span class="iconBackground"></span>
				<div class="col-xs-12 col-md-6 align-right">
					<div class="timeline-text-content">
						<h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-font">Engagement</h4>
						<p class="mbr-timeline-text mbr-fonts-style display-7"> Proin tempus felis quis justo pretium interdum. Praesent sollicitudin lectus eu mattis egestas. Praesent luctus magna at dignissim placerat.</p>
				</div>
				</div>
			</div>
			
		</div> 
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoveStory',
  data() {
    return {
      stories: [
        {
          date: '2018',
          title: 'Pertemuan Pertama',
          description: 'Kami pertama kali bertemu saat ospek kampus. Tidak menyangka akan sejauh ini 😄'
        },
        // {
        //   date: '2020',
        //   title: 'Mulai Serius',
        //   description: 'Setelah berteman cukup lama, kami mulai menjalin hubungan lebih serius.'
        // },
        // {
        //   date: '2024',
        //   title: 'Lamaran',
        //   description: 'Dengan restu keluarga, kami resmi bertunangan dan mulai mempersiapkan pernikahan.'
        // },
        // {
        //   date: '2025',
        //   title: 'Pernikahan',
        //   description: 'Akhirnya kami akan mengikat janji suci pernikahan. Kami sangat bahagia bisa berbagi momen ini dengan Anda.'
        // }
      ]
    }
  }
}
</script>

<!-- <style scoped>
.love-story-section {
  color: #ffffff;
}

.content {
  padding: 20px;
  text-align: center;
  max-width: 800px;
  margin: auto;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.timeline-item {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  text-align: left;
}

.timeline-date {
  font-weight: bold;
  color: #57606f;
  margin-bottom: 10px;
}

.timeline-content h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #2d3436;
}

.timeline-content p {
  margin: 5px 0 0;
  color: #636e72;
}
</style> -->
