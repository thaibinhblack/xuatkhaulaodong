<template>
  <section class="section-blog section --pd-left">
    <div class="container-xxl">
      <div class="section-blog__container section --pd">
        <custom-section
          :title="$t('home.section.blogs.label')"
          class="section-blog__container"
        >
          <template #left>
            <div
              class="section-blog__left"
              :data-background="srcBackground"
              :style="{
                backgroundImage: `url(${srcBackground})`
              }"
            />
          </template>
          <div class="section-blog__content">
            <h3 class="section-blog__label title">
              {{ $t('home.section.intro.title') }}
            </h3>
            <p class="section-blog__description">
              {{ $t('home.section.intro.description') }}
            </p>
            <span class="section-blog__link">
              <a class="--link --strong" href="#" target="_blank">
                {{ $t('home.section.intro.link') }}
              </a>
            </span>
          </div>
        </custom-section>

        <custom-section
          class="section-blog__container"
        >
          <template #left>
            <div
              class="section-blog__left"
              :data-background="srcBackground2"
              :style="{
                backgroundImage: `url(${srcBackground2})`
              }"
            />
          </template>
          <div class="section-blog__content">
            <h3 class="section-blog__label title">
              {{ $t('home.section.intro2.title') }}
            </h3>
            <p class="section-blog__description">
              {{ $t('home.section.intro2.description') }}
            </p>
            <span class="section-blog__link">
              <a class="--link --strong" href="#" target="_blank">
                {{ $t('home.section.intro2.link') }}
              </a>
            </span>
          </div>
        </custom-section>

        <custom-section
          class="section-blog__container"
        >
          <template #left>
            <div
              class="section-blog__left"
              :data-background="srcBackground"
              :style="{
                backgroundImage: `url(${srcBackground3})`
              }"
            />
          </template>
          <div class="section-blog__content">
            <h3 class="section-blog__label title">
              {{ $t('home.section.intro2.title') }}
            </h3>
            <p class="section-blog__description">
              {{ $t('home.section.intro2.description') }}
            </p>
            <span class="section-blog__link">
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
  </section>
</template>

<script>
import CustomSection from '@/components/stateless/CustomSection';
import srcBackground from '@/assets/images/blogs/1.jpg';
import srcBackground2 from '@/assets/images/blogs/2.jpg';
import srcBackground3 from '@/assets/images/blogs/3.jpg';

export default {
  name: 'SectionIntro',

  components: {
    CustomSection,
  },

  data: () => ({
    srcBackground,
    srcBackground2,
    srcBackground3,
  })
};
</script>

<style lang="scss">
.section-blog {
  position: relative;

  .custom-section__left {
    @include mx.mq($BREAKPOINT-LG) {
      width: 50%;
      position: relative;
    }
  }

  .custom-section__main {
    @include mx.mq($BREAKPOINT-LG) {
      width: 50%;
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
    padding-top: 100%;
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

  &__description {
    margin: fn.rem(15) 0 fn.rem(30);

    @include mx.mq($BREAKPOINT-LG) {
      margin-top: fn.rem(25);
      margin-bottom: fn.rem(55);
    }
  }
}
</style>
