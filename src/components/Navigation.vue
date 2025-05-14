<template>
  <nav class="navbar">
    <ul>
      <li v-for="item in navItems" :key="item.id">
        <a :href="`#${item.id}`" @click="scrollToSection(item.id)">
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavigationView',
  data() {
    return {
      navItems: [
        { id: 'home', label: 'Home' },
        { id: 'profile', label: 'Profile' },
        { id: 'love-story', label: 'Love Story' },
        { id: 'wedding-event', label: 'Wedding Event' },
        { id: 'rsvp', label: 'RSVP' },
        { id: 'wedding-gift', label: 'Wedding Gift' },
        { id: 'gallery', label: 'Gallery' }
      ]
    }
  },
  methods: {
    scrollToSection(id) {
      const section = document.getElementById(id)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  border-bottom: 1px solid #eee;
  padding: 10px 20px;
  z-index: 1000;
}

ul {
  display: flex;
  justify-content: center;
  gap: 15px;
  list-style: none;
  margin: 0;
  padding: 0;
}

li a {
  text-decoration: none;
  color: #2d3436;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s;
}

li a:hover {
  color: #0984e3;
}
</style>
