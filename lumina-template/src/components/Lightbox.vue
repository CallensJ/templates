<!-- ============================================
   LIGHTBOX COMPONENT - Lumina Template
   Modal fullscreen pour visualiser les photos
   ============================================ -->

<template>
  <Teleport to="body">
    <div class="lightbox" @click="handleBackdropClick">
      
      <!-- Backdrop avec blur -->
      <div class="lightbox__backdrop"></div>

      <!-- Bouton fermer -->
      <button 
        class="lightbox__close"
        @click="$emit('close')"
        aria-label="Fermer"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <!-- Container principal -->
      <div class="lightbox__container">
        
        <!-- Bouton navigation précédent -->
        <button 
          class="lightbox__nav lightbox__nav--prev"
          @click="$emit('navigate', 'prev')"
          aria-label="Photo précédente"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Image principale avec transition -->
        <div class="lightbox__content" @click.stop>
          <transition name="lightbox-fade" mode="out-in">
            <div :key="currentImage.id" class="lightbox__image-wrapper">
              <img 
                :src="currentImage.url" 
                :alt="currentImage.alt"
                class="lightbox__image"
              />
              
              <!-- Infos de l'image -->
              <div class="lightbox__info">
                <h3 class="lightbox__title">{{ currentImage.title }}</h3>
                <p class="lightbox__category">{{ getCategoryLabel(currentImage.category) }}</p>
                <p class="lightbox__counter">{{ currentIndex + 1 }} / {{ images.length }}</p>
              </div>
            </div>
          </transition>
        </div>

        <!-- Bouton navigation suivant -->
        <button 
          class="lightbox__nav lightbox__nav--next"
          @click="$emit('navigate', 'next')"
          aria-label="Photo suivante"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

      </div>

      <!-- Thumbnails en bas (optionnel) -->
      <div class="lightbox__thumbnails">
        <button
          v-for="(image, index) in images"
          :key="image.id"
          :class="['lightbox__thumbnail', { 'lightbox__thumbnail--active': index === currentIndex }]"
          @click="selectImage(index)"
        >
          <img :src="image.url" :alt="image.alt" />
        </button>
      </div>

    </div>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

// ============================================
// PROPS
// ============================================
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  currentIndex: {
    type: Number,
    required: true,
  },
});

// ============================================
// EMITS
// ============================================
const emit = defineEmits(['close', 'navigate']);

// ============================================
// COMPUTED
// ============================================
const currentImage = computed(() => {
  return props.images[props.currentIndex] || {};
});

// ============================================
// METHODS
// ============================================

/**
 * Récupère le label d'une catégorie
 */
const getCategoryLabel = (categoryId) => {
  const categories = {
    portrait: 'Portrait',
    paysage: 'Paysage',
    architecture: 'Architecture',
    street: 'Street',
  };
  return categories[categoryId] || categoryId;
};

/**
 * Sélectionne une image via les thumbnails
 */
const selectImage = (index) => {
  const diff = index - props.currentIndex;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      emit('navigate', 'next');
    }
  } else if (diff < 0) {
    for (let i = 0; i < Math.abs(diff); i++) {
      emit('navigate', 'prev');
    }
  }
};

/**
 * Ferme le lightbox si on clique sur le backdrop
 */
const handleBackdropClick = (e) => {
  if (e.target.classList.contains('lightbox')) {
    emit('close');
  }
};

/**
 * Gestion du clavier (Echap, flèches)
 */
const handleKeydown = (e) => {
  switch (e.key) {
    case 'Escape':
      emit('close');
      break;
    case 'ArrowLeft':
      emit('navigate', 'prev');
      break;
    case 'ArrowRight':
      emit('navigate', 'next');
      break;
  }
};

// ============================================
// LIFECYCLE
// ============================================

onMounted(() => {
  // Active la navigation au clavier
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  // Nettoyage
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Import des styles depuis le fichier CSS dédié */
@import '../styles/lightbox.css';
</style>