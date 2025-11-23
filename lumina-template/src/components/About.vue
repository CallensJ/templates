<!-- ============================================
   ABOUT COMPONENT - Lumina Template
   Section présentation du photographe
   ============================================ -->

<template>
  <section id="about" class="about section">
    <div class="container">
      <div class="about__wrapper">
        
        <!-- Colonne Image -->
        <div class="about__image-container">
          <div class="about__image-frame">
            <img 
              :src="aboutImage" 
              :alt="aboutImageAlt"
              class="about__image"
            />
          </div>
        </div>

        <!-- Colonne Texte -->
        <div class="about__content">
          <!-- Titre de section -->
          <div class="about__header">
            <span class="about__label">À Propos</span>
            <h2 class="about__title">{{ title }}</h2>
          </div>

          <!-- Paragraphes de présentation -->
          <div class="about__text">
            <p v-for="(paragraph, index) in paragraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>

          <!-- Statistiques / Points forts (optionnel) -->
          <div class="about__stats">
            <div 
              v-for="stat in stats" 
              :key="stat.id"
              class="about__stat-item"
            >
              <h3 class="about__stat-number">{{ stat.number }}</h3>
              <p class="about__stat-label">{{ stat.label }}</p>
            </div>
          </div>

          <!-- CTA vers Portfolio -->
          <div class="about__cta">
            <a 
              href="#gallery" 
              class="btn btn-outline"
              @click.prevent="scrollToGallery"
            >
              Voir mon portfolio
            </a>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import imagesData from '../data/images.json';

// ============================================
// DATA - Contenu de la section About
// ============================================

const title = ref('Capturer l\'émotion derrière chaque instant');

// Paragraphes de présentation
const paragraphs = ref([
  'Photographe passionné depuis plus de 10 ans, je crois que chaque image raconte une histoire unique. Mon approche se concentre sur l\'authenticité et l\'émotion brute, capturant des moments qui transcendent le temps.',
  'Spécialisé dans le portrait, le paysage et la photographie urbaine, mon travail explore la beauté dans la simplicité et la complexité de notre monde. Chaque projet est une nouvelle aventure, une opportunité de créer quelque chose de mémorable.',
  'Basé entre Paris et la nature, je combine techniques modernes et sensibilité artistique pour créer des images qui résonnent avec l\'âme.'
]);

// Statistiques / Points forts
const stats = ref([
  { id: 1, number: '500+', label: 'Projets réalisés' },
  { id: 2, number: '10+', label: 'Années d\'expérience' },
  { id: 3, number: '50+', label: 'Clients satisfaits' }
]);

// Image About
const aboutImage = ref('');
const aboutImageAlt = ref('Portrait du photographe');

// ============================================
// METHODS
// ============================================

/**
 * Scroll vers la galerie
 */
const scrollToGallery = () => {
  const gallery = document.getElementById('gallery');
  if (gallery) {
    const offsetTop = gallery.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Charge l'image About depuis le JSON
 */
const loadAboutImage = () => {
  if (imagesData.about && imagesData.about.url) {
    aboutImage.value = imagesData.about.url;
    aboutImageAlt.value = imagesData.about.alt || 'Portrait du photographe';
  } else {
    // Image par défaut
    aboutImage.value = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964';
    aboutImageAlt.value = 'Portrait du photographe';
  }
};

/**
 * Animation au scroll (Intersection Observer)
 * Détecte quand la section entre dans le viewport
 */
const setupScrollAnimation = () => {
  const aboutSection = document.querySelector('.about');
  
  if (!aboutSection) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajoute la classe d'animation quand visible
          entry.target.classList.add('about--visible');
        }
      });
    },
    {
      threshold: 0.2 // Se déclenche quand 20% de la section est visible
    }
  );

  observer.observe(aboutSection);
};

// ============================================
// LIFECYCLE
// ============================================

onMounted(() => {
  loadAboutImage();
  setupScrollAnimation();
});
</script>

<style scoped>
/* Import des styles depuis le fichier CSS dédié */
@import '../styles/about.css';
</style>