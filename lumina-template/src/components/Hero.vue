<!-- ============================================
   HERO COMPONENT - Lumina Template
   Section d'accueil fullscreen avec image
   ============================================ -->

<template>
  <section id="hero" class="hero">
    <!-- Image de fond avec overlay -->
    <div class="hero__background">
      <img 
        :src="heroImage" 
        :alt="heroImageAlt"
        class="hero__image"
      />
      <!-- Overlay sombre pour la lisibilité du texte -->
      <div class="hero__overlay"></div>
    </div>

    <!-- Contenu principal -->
    <div class="hero__content">
      <div class="container">
        <div class="hero__text">
          <!-- Titre principal avec animation -->
          <h1 class="hero__title">
            {{ title }}
          </h1>
          
          <!-- Sous-titre -->
          <p class="hero__subtitle">
            {{ subtitle }}
          </p>
          
          <!-- CTA Button (optionnel) -->
          <div class="hero__cta">
            <a 
              href="#gallery" 
              class="btn btn-primary"
              @click.prevent="scrollToGallery"
            >
              Découvrir mon travail
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator animé -->
    <div class="hero__scroll-indicator" @click="scrollToNext">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-wheel"></div>
      </div>
      <span class="hero__scroll-text">Scroll</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import imagesData from '../data/images.json';

// ============================================
// DATA - Contenu du Hero
// ============================================

const title = ref('LUMINA');
const subtitle = ref('Capturer l\'instant, raconter l\'émotion');

// Récupère l'image hero depuis le JSON
const heroImage = ref('');
const heroImageAlt = ref('Hero image');

// ============================================
// METHODS
// ============================================

/**
 * Scroll fluide vers la galerie
 */
const scrollToGallery = () => {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    const offsetTop = gallery.offsetTop - 80; // 80px = hauteur navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Scroll vers la section suivante (About)
 */
const scrollToNext = () => {
  const about = document.getElementById('about');
  if (about) {
    const offsetTop = about.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Charge l'image hero depuis le JSON
 */
const loadHeroImage = () => {
  // Vérifie si le JSON contient une image hero
  if (imagesData.hero && imagesData.hero.url) {
    heroImage.value = imagesData.hero.url;
    heroImageAlt.value = imagesData.hero.alt || 'Hero image';
  } else {
    // Image par défaut si rien dans le JSON
    heroImage.value = 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2074';
    heroImageAlt.value = 'Photographer at work';
  }
};

// ============================================
// LIFECYCLE
// ============================================

onMounted(() => {
  loadHeroImage();
  
  // Animation d'apparition au chargement (optionnel avec GSAP plus tard)
  const heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    heroContent.style.animation = 'fadeIn 1s ease-in';
  }
});
</script>

<style scoped>
/* Import des styles depuis le fichier CSS dédié */
@import '../styles/hero.css';
</style>