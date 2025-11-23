<!-- ============================================
   APP.vue - Composant racine de Lumina
   Structure principale de l'application
   ============================================ -->

<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar />

    <!-- Contenu principal (sections à venir) -->
    <main>
      <!-- Hero Section (à ajouter) -->
       <Hero />
      
      <!-- About Section (à ajouter) -->
      <About />
      
      <!-- Gallery Section (à ajouter) -->
      <Gallery />
      
      <!-- Philosophy Section (à ajouter) -->
      <!-- <Philosophy /> -->
      
      <!-- Contact Section (à ajouter) -->
      <!-- <Contact /> -->
    </main>

    <!-- Footer (à ajouter) -->
    <!-- <Footer /> -->
  </div>
</template>

<script setup>
// ============================================
// IMPORTS - Composants
// ============================================
import Navbar from './components/Navbar.vue';

// Au fur et à mesure, tu décommenteras et importeras :
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Gallery from './components/Gallery.vue';
// import Philosophy from './components/Philosophy.vue';
// import Contact from './components/Contact.vue';
// import Footer from './components/Footer.vue';
</script>

<style>
/* Pas de styles scoped ici car App.vue est le conteneur principal */
/* Tous les styles globaux sont dans globals.css */

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1; /* Permet au main de prendre toute la hauteur disponible */
}
</style>