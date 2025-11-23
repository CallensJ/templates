<!-- ============================================
   GALLERY COMPONENT - Lumina Template
   Portfolio photographique avec filtres et lightbox
   ============================================ -->

<template>
  <section id="gallery" class="gallery section">
    <div class="container">
      
      <!-- Header de la section -->
      <div class="gallery__header">
        <span class="gallery__label">Portfolio</span>
        <h2 class="gallery__title">Mon Travail</h2>
        <p class="gallery__description">
          Une sélection de mes créations photographiques à travers différents univers
        </p>
      </div>

      <!-- Filtres par catégorie -->
      <div class="gallery__filters">
        <button
          v-for="category in categories"
          :key="category.id"
          :class="['gallery__filter-btn', { 'gallery__filter-btn--active': activeFilter === category.id }]"
          @click="filterGallery(category.id)"
        >
          {{ category.label }}
          <span class="gallery__filter-count">({{ getCategoryCount(category.id) }})</span>
        </button>
      </div>

      <!-- Grille de photos -->
      <div class="gallery__grid" ref="galleryGrid">
        <div
          v-for="(image, index) in filteredImages"
          :key="image.id"
          class="gallery__item"
          :data-category="image.category"
          @click="openLightbox(index)"
        >
          <!-- Image -->
          <div class="gallery__image-container">
            <img
              :src="image.url"
              :alt="image.alt"
              class="gallery__image"
              loading="lazy"
            />
            <!-- Overlay avec infos -->
            <div class="gallery__overlay">
              <div class="gallery__overlay-content">
                <h3 class="gallery__image-title">{{ image.title }}</h3>
                <span class="gallery__image-category">{{ getCategoryLabel(image.category) }}</span>
              </div>
              <!-- Icône zoom -->
              <div class="gallery__zoom-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Message si aucune image -->
      <div v-if="filteredImages.length === 0" class="gallery__empty">
        <p>Aucune image dans cette catégorie</p>
      </div>

    </div>

    <!-- Lightbox Modal -->
    <!-- IMPORTANT: On passe filteredImages au lieu de toutes les images -->
    <Lightbox
      v-if="lightboxOpen"
      :images="filteredImages"
      :current-index="currentLightboxIndex"
      :active-filter="activeFilter"
      @close="closeLightbox"
      @navigate="navigateLightbox"
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imagesData from '../data/images.json';
import Lightbox from './Lightbox.vue';

// Enregistrement du plugin GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// ============================================
// DATA - Images et catégories
// ============================================

const images = ref(imagesData.gallery || []);
const categories = ref(imagesData.categories || []);
const activeFilter = ref('tous');

// Lightbox
const lightboxOpen = ref(false);
const currentLightboxIndex = ref(0);

// Référence au DOM
const galleryGrid = ref(null);

// ============================================
// COMPUTED - Images filtrées
// ============================================

const filteredImages = computed(() => {
  if (activeFilter.value === 'tous') {
    return images.value;
  }
  return images.value.filter(img => img.category === activeFilter.value);
});

// ============================================
// METHODS
// ============================================

/**
 * Filtre la galerie par catégorie avec animation GSAP
 */
const filterGallery = async (categoryId) => {
  if (activeFilter.value === categoryId) return;

  // Animation de sortie des items actuels
  const items = galleryGrid.value?.querySelectorAll('.gallery__item');
  if (items) {
    gsap.to(items, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      stagger: 0.02,
      ease: 'power2.in',
      onComplete: () => {
        // Change le filtre
        activeFilter.value = categoryId;
        
        // Attend le re-render de Vue
        nextTick(() => {
          animateGalleryItems();
        });
      }
    });
  } else {
    activeFilter.value = categoryId;
    nextTick(() => {
      animateGalleryItems();
    });
  }
};

/**
 * Compte le nombre d'images par catégorie
 */
const getCategoryCount = (categoryId) => {
  if (categoryId === 'tous') {
    return images.value.length;
  }
  return images.value.filter(img => img.category === categoryId).length;
};

/**
 * Récupère le label d'une catégorie
 */
const getCategoryLabel = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId);
  return category ? category.label : categoryId;
};

/**
 * Ouvre le lightbox sur une image
 * IMPORTANT: index correspond maintenant à filteredImages, pas à toutes les images
 */
const openLightbox = (index) => {
  currentLightboxIndex.value = index;
  lightboxOpen.value = true;
  // Empêche le scroll du body
  document.body.style.overflow = 'hidden';
};

/**
 * Ferme le lightbox
 */
const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

/**
 * Navigation dans le lightbox (prev/next)
 * IMPORTANT: Navigation limitée aux images filtrées
 */
const navigateLightbox = (direction) => {
  const totalImages = filteredImages.value.length;
  
  if (direction === 'next') {
    currentLightboxIndex.value = (currentLightboxIndex.value + 1) % totalImages;
  } else if (direction === 'prev') {
    currentLightboxIndex.value = currentLightboxIndex.value === 0 
      ? totalImages - 1 
      : currentLightboxIndex.value - 1;
  }
};

/**
 * Animation d'entrée des items de la galerie (GSAP Stagger)
 */
const animateGalleryItems = () => {
  const items = galleryGrid.value?.querySelectorAll('.gallery__item');
  
  if (!items || items.length === 0) return;

  // Reset l'état initial
  gsap.set(items, { opacity: 0, y: 30, scale: 0.9 });

  // Animation en cascade
  gsap.to(items, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.6,
    stagger: {
      amount: 0.6, // Durée totale du stagger
      from: 'start',
      ease: 'power2.out'
    },
    ease: 'power3.out'
  });
};

/**
 * Setup ScrollTrigger pour animation au scroll initial
 */
const setupScrollAnimation = () => {
  const gallerySection = document.querySelector('.gallery');
  
  if (!gallerySection) return;

  ScrollTrigger.create({
    trigger: gallerySection,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      animateGalleryItems();
    }
  });
};

// ============================================
// LIFECYCLE
// ============================================

onMounted(() => {
  setupScrollAnimation();
  
  // Animation des filtres au chargement
  const filterBtns = document.querySelectorAll('.gallery__filter-btn');
  if (filterBtns) {
    gsap.from(filterBtns, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.3
    });
  }
});
</script>

<style scoped>
/* Import des styles depuis le fichier CSS dédié */
@import '../styles/gallery.css';
</style>