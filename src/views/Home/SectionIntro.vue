<template>
  <div class="section-intro section --pd-left">
    <div class="container-xxl">
      <div class="section-intro__container section --pd">
        <custom-section
          title="Portfolio"
          class="section-intro__container"
        >
          <template #left>
            <div class="section-intro__left">
              <img
                class="section-intro__left-bg"
                v-img="srcBackground"
                alt="background"
              />
            </div>
          </template>
          <div class="section-intro__content">
            <h3 class="section-intro__label title">
              {{ $t('home.section.intro.title') }}
            </h3>
            <p class="section-intro__description">
              {{ $t('home.section.intro.description') }}
            </p>
            <span class="section-intro__link">
              <a class="--link --strong" href="#" target="_blank">
                {{ $t('home.section.intro.link') }}
              </a>
            </span>
          </div>
        </custom-section>

         <custom-section
          class="section-intro__container"
        >
          <template #left>
            <div class="section-intro__left">
              <img
                class="section-intro__left-bg"
                v-img="srcBackground2"
                alt="background"
              />
            </div>
          </template>
          <div class="section-intro__content">
            <h3 class="section-intro__label title">
              {{ $t('home.section.intro2.title') }}
            </h3>
            <p class="section-intro__description">
              {{ $t('home.section.intro2.description') }}
            </p>
            <span class="section-intro__link">
              <a class="--link --strong" href="#" target="_blank">
                {{ $t('home.section.intro2.link') }}
              </a>
            </span>
          </div>
        </custom-section>
      </div>
    </div>
    <div class="section-about__bg-container --left">
      <div class="section-about__bg"></div>
    </div>
  </div>
</template>

<script>
import CustomSection from '@/components/stateless/CustomSection';
import srcBackground from '@/assets/images/hero/Portfolio.jpg';
import srcBackground2 from '@/assets/images/hero/Portfolio2.jpg';

export default {
  name: 'SectionIntro',

  components: {
    CustomSection,
  },

  data: () => ({
    srcBackground,
    srcBackground2,
  })
};
</script>

<style lang="scss">
.section-intro {
  position: relative;

  .custom-section__left {
    @include mx.mq($BREAKPOINT-LG) {
      width: 65%;
    }
  }

  .custom-section__main {
    @include mx.mq($BREAKPOINT-LG) {
      width: 35%;
      padding-left: fn.rem(25);
    }
  }

  &__container {
    padding-bottom: fn.rem(50);
  }

  &__content {
    padding: fn.rem(25) 0;

    @include mx.mq($BREAKPOINT-LG) {
      padding: fn.rem(50) 0;
    }
  }

  &__left {
    overflow: hidden;
    border-radius: 50px;
  }

  &__left-bg {
    width: 100%;
    height: auto;
    transform: scaleZ(1);
    transition: transform .2s ease-in;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__label {
    color: colors.$color-section-intro-title;
    font-size: fn.rem(28);
    cursor: pointer;

    &:hover {
      color: colors.$white-1;
    }
  }

  &__description {
    margin: fn.rem(15) 0 fn.rem(30);

    @include mx.mq($BREAKPOINT-LG) {
      margin-top: fn.rem(25);
      margin-bottom: fn.rem(55);
    }
  }
}
</style>
