<template>
  <section id="love-story" class="section love-story-section">
    <div id="story" class="story-box main-timeline-box">
    <div class="container">
			<div class="row mb-4">
				<div class="col-lg-12">
					<div class="title-box">
						<p class="title-m">Wedding Event</p>
					</div>
				</div>
			</div>
			<div class="row timeline-element separline">
				<div class="timeline-date-panel col-xs-12 col-md-6  align-left">         
          <div class="time-line-date-content">
            <p class="mbr-timeline-date mbr-fonts-style display-font">
              Pemberkatan Gereja
            </p>
          </div>
				</div>
				<span class="iconBackground"></span>
				<div class="col-xs-12 col-md-6 align-left">
					<div class="timeline-text-content">
						<h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-font">Jadwal</h4>
						<p class="mbr-timeline-text mbr-fonts-style display-7">
              Hari/Tanggal : Sabtu, 07 Juni 2025 <br />
              Waktu: 13.00 - 15.00 WIB
						</p>
					</div>
				</div>
			</div>

			<div class="row timeline-element separline">
				<div class="timeline-date-panel col-xs-12 col-md-6  align-left">         
          <div class="time-line-date-content">
            <p class="mbr-timeline-date mbr-fonts-style display-font">
              Resepsi Pernikahan
            </p>
          </div>
				</div>
				<span class="iconBackground"></span>
				<div class="col-xs-12 col-md-6 align-left">
					<div class="timeline-text-content">
						<h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-font">Jadwal</h4>
						<p class="mbr-timeline-text mbr-fonts-style display-7">
              Hari/Tanggal : Sabtu, 07 Juni 2025 <br />
              16.00 - 19.30 WIB
						</p>
					</div>
				</div>
			</div>

      <div class="row timeline-element separline">
				<div class="timeline-date-panel col-xs-12 col-md-6  align-left">         
          <div class="time-line-date-content">
            <p class="mbr-timeline-date mbr-fonts-style display-font">
              Dresscode
            </p>
          </div>
				</div>
				<span class="iconBackground"></span>
				<div class="col-xs-12 col-md-6 align-left">
					<div class="timeline-text-content">
						<h4 class="mbr-timeline-title pb-3 mbr-fonts-style display-font">Pakaian</h4>
            <p class="mbr-timeline-text mbr-fonts-style display-7">
              Untuk tamu undangan <br />
              Bebas rapi dan formal
						</p>
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

<style scoped>
.title-m {
  color:#ffffff;
  font-size: 1.3rem;
  font-family: 'Amsterdam One', cursive;
}
</style>

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
