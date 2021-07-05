<template>
  <div class="header-home">
    <div class="container-xxl">
      <header class="page-home__header">
        <div class="row">
          <hero
            :srcImage="srcHero"
            v-bind="hero"
            hasMenu
            :title="$t('home.intro.title')"
          />
          <the-menu
            v-model="menus"
            class="page-home__menu"
          />
          <the-menu-top
            v-model="menus"
          />
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import srcHero from '@/assets/images/hero/main_img.jpg';
import Hero from '@/components/stateless/Hero';
import TheMenu from '@/components/stateless/TheMenu';
import TheMenuTop from '@/components/stateless/TheMenuTop';

export default {
  name: 'HeaderHome',

  components: {
    Hero,
    TheMenu,
    TheMenuTop,
  },

  data: () => ({
    srcHero,
    hero: {
      description: 'UI designer, photographer and travel enthusiast'
    },
    menus: [
      {
        name: 'Home',
        active: true,
      },
      {
        name: 'About',
        active: false,
      },
      {
        name: 'Services',
        active: false,
      }
    ]
  }),
};
</script>
