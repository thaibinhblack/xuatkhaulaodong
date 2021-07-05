<template>
  <div class="page-home">
    <u-animate-container
      class="--pd-0 --mr-0"
      el="div"
      :target="getTarget"
    >
      <header-home />
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <section-about />
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <section-services />
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <u-animate
          name="pulse"
        class="wow bg-red"
        :iteration="5"
        duration="0.15s"
      >
        <section-intro />
      </u-animate>
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <section-skill />
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <u-animate
        name="pulse"
        class="wow bg-red"
        :iteration="5"
        duration="0.15s"
      >
        <section-exp />
      </u-animate>
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <section-blog />
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <section-ref />
    </u-animate-container>
    <u-animate-container class="--pd-0 --mr-0">
      <section-contact />
    </u-animate-container>
  </div>
</template>

<script>
import HeaderHome from '@/views/Home/HeaderHome';
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
    HeaderHome,
    SectionAbout,
    SectionServices,
    SectionIntro,
    SectionSkill,
    SectionExp,
    SectionBlog,
    SectionRef,
    SectionContact,
  },

  methods: {
    getTarget() {
      return this.$el;
    }
  }
};
</script>

<style lang="scss">
  .page-home {
    margin: 0;
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
