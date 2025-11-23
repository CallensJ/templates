<!-- ============================================
   NAVBAR COMPONENT - Lumina Template
   Navigation principale avec effet scroll
   ============================================ -->

<template>
  <nav 
    class="navbar" 
    :class="{ 'navbar--scrolled': isScrolled }"
  >
    <div class="container">
      <div class="navbar__wrapper">
        
        <!-- Logo / Brand -->
        <div class="navbar__brand">
          <a href="#hero" @click.prevent="scrollToSection('hero')">
            <h3 class="navbar__logo">LUMINA</h3>
          </a>
        </div>

        <!-- Menu Desktop -->
        <ul class="navbar__menu" :class="{ 'navbar__menu--open': isMobileMenuOpen }">
          <li 
            v-for="link in navLinks" 
            :key="link.id"
            class="navbar__item"
          >
            <a 
              :href="`#${link.id}`" 
              class="navbar__link"
              :class="{ 'navbar__link--active': activeSection === link.id }"
              @click.prevent="handleNavClick(link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Burger Menu (Mobile) -->
        <button 
          class="navbar__burger" 
          :class="{ 'navbar__burger--open': isMobileMenuOpen }"
          @click="toggleMobileMenu"
          aria-label="Toggle menu"
        >
          <span class="navbar__burger-line"></span>
          <span class="navbar__burger-line"></span>
          <span class="navbar__burger-line"></span>
        </button>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// ============================================
// STATE - États réactifs du composant
// ============================================

// Détecte si on a scrollé (pour changer le style de la navbar)
const isScrolled = ref(false);

// Gère l'ouverture du menu mobile
const isMobileMenuOpen = ref(false);

// Section active (pour highlight dans le menu)
const activeSection = ref('hero');

// ============================================
// DATA - Liens de navigation
// ============================================
const navLinks = [
  { id: 'hero', label: 'Accueil' },
  { id: 'about', label: 'À Propos' },
  { id: 'gallery', label: 'Portfolio' },
  { id: 'philosophy', label: 'Vision' },
  { id: 'contact', label: 'Contact' },
];

// ============================================
// METHODS - Fonctions du composant
// ============================================

/**
 * Gère le scroll pour changer l'apparence de la navbar
 * Si on scroll > 50px, la navbar devient opaque
 */
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
  
  // Détection de la section active (optionnel)
  updateActiveSection();
};

/**
 * Détecte quelle section est visible à l'écran
 * Pour highlight le lien actif dans le menu
 */
const updateActiveSection = () => {
  const sections = navLinks.map(link => link.id);
  
  for (let section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      // Si la section est visible dans le viewport
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = section;
        break;
      }
    }
  }
};

/**
 * Scroll fluide vers une section
 * @param {string} sectionId - ID de la section cible
 */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // 80px = hauteur navbar
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
};

/**
 * Gère le clic sur un lien de navigation
 * Ferme le menu mobile + scroll vers la section
 */
const handleNavClick = (sectionId) => {
  scrollToSection(sectionId);
  activeSection.value = sectionId;
  // Ferme le menu mobile après le clic
  if (isMobileMenuOpen.value) {
    toggleMobileMenu();
  }
};

/**
 * Toggle du menu burger (mobile)
 */
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  
  // Empêche le scroll du body quand le menu est ouvert
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// ============================================
// LIFECYCLE HOOKS
// ============================================

onMounted(() => {
  // Écoute le scroll au montage du composant
  window.addEventListener('scroll', handleScroll);
  
  // Détection initiale de la section active
  updateActiveSection();
});

onUnmounted(() => {
  // Nettoyage : retire l'écouteur d'événement
  window.removeEventListener('scroll', handleScroll);
  
  // Réactive le scroll du body si le menu était ouvert
  document.body.style.overflow = '';
});
</script>

<style scoped>
/* Import des styles depuis le fichier CSS dédié */
@import '../styles/navbar.css';
</style>