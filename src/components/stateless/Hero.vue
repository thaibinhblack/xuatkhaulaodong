<template>
  <div class="hero">
    <div class="hero__container">
      <div class="hero__intro">
        <slot name="intro">
          <div class="hero__intro-container">
            <h1
              class="hero__title-intro"
              v-html="$t('home.intro.title')"
            />
            <span class="hero__description-intro">
              {{ description }}
            </span>
          </div>
        </slot>
      </div>
      <div :class="{
        'hero__image-container': true,
        '--has-menu': hasMenu,
      }">
        <img
          class="hero__image"
          :src="srcImage"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',

  props: {
    srcImage: {
      type: String,
      default: '',
    },

    description: {
      type: String,
      default: '',
    },

    hasMenu: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.hero {
  &__container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;

    @include mx.mq($BREAKPOINT-LG) {
      flex-direction: row;
    }
  }

  &__intro {
    width: 100%;
    position: relative;
    text-align: left;

    @include mx.mq($BREAKPOINT-LG) {
      width: 32%;
    }
  }

  &__intro-container {
    position: relative;
    top: 0;

    @include mx.mq($BREAKPOINT-LG) {
      position: absolute;
    }
  }

  &__title-intro {
    color: colors.$color-hero-intro-title;
    margin-bottom: 0;
    font-size: fn.rem(60);
    line-height: (60/60);

    @include mx.font-poppins-bold;

    @include mx.mq($BREAKPOINT-LG) {
      font-size: fn.rem(120);
      line-height: (118/120);
    }
  }

  &__description-intro {
    display: block;
    padding: fn.rem(15) 0;
    font-size: fn.rem(18);

    @include mx.mq($BREAKPOINT-LG) {
      font-size: fn.rem(22);
    }
  }

  &__image-container {
    width: 100%;

    @include mx.mq($BREAKPOINT-LG) {
      width: 68%;

      &.\--has-menu {
        width: calc(68% - 230px);
      }
    }
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: fn.rem(30);
  }
}
</style>
