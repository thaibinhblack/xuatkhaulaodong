<template>
  <div class="page-home">
    <div class="container-xxl">
      <header class="page-home__header">
        <div class="row">
          <hero
            :srcImage="srcHero"
            v-bind="hero"
            hasMenu
          />
          <the-menu-top
            v-model="menus"
          />
          <the-menu
            v-model="menus"
            class="page-home__menu"
          />
        </div>
      </header>
    </div>
    <section-about />
    <section-services />
    <u-animate-container>
      <u-animate
        name="fadeIn"
        delay="0s"
        duration="1s"
        :iteration="1"
        :offset="0"
        animateClass="animated"
        :begin="false"
      >
        <section-intro />
      </u-animate>
    </u-animate-container>
    <section-skill />
    <section-exp />
    <section-blog />
    <section-ref />
    <section-contact />
  </div>
</template>

<script>
import Hero from '@/components/stateless/Hero';
import srcHero from '@/assets/images/hero/main_img.jpg';
import TheMenu from '@/components/stateless/TheMenu';
import TheMenuTop from '@/components/stateless/TheMenuTop';
import SectionAbout from '@/views/Home/SectionAbout';
import SectionServices from '@/views/Home/SectionServices';
import SectionIntro from '@/views/Home/SectionIntro';
import SectionSkill from '@/views/Home/SectionSkill';
import SectionExp from '@/views/Home/SectionExp';
import SectionBlog from '@/views/Home/SectionBlog';
import SectionRef from '@/views/Home/SectionRef';
import SectionContact from '@/views/Home/SectionContact';

export default {
  name: 'Home',

  components: {
    Hero,
    TheMenu,
    TheMenuTop,
    SectionAbout,
    SectionServices,
    SectionIntro,
    SectionSkill,
    SectionExp,
    SectionBlog,
    SectionRef,
    SectionContact,
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
  })
};
</script>

<style lang="scss">
  .page-home {
    padding-top: fn.rem(65);
    overflow: hidden;

    @include mx.mq($BREAKPOINT-MD) {
      padding-top: 0;
    }

    &__header, &__menu{
      padding-top: fn.rem(30);

      @include mx.mq($BREAKPOINT-MD) {
        padding-top: fn.rem(50);
      }
    }
  }
</style>
