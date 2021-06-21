<template>
  <div class="custom-section">
    <div
      class="custom-section__label-container"
      ref="label"
    >
      <h2 class="custom-section__label">
        {{title}}
      </h2>
    </div>
    <div class="row custom-section__container">
      <div
        :class="{
          'custom-section__left': true,
          '--hide': hideLeft,
        }"
      >
        <slot name="left" />
      </div>
      <div :class="{
          'custom-section__main': true,
          '--full': hideLeft,
        }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSection',

  props: {
    title: {
      type: String,
      default: '',
    },

    hideLeft: {
      type: Boolean,
      default: false,
    }
  },

  data: () => ({
    styleLeft: 390
  }),

  created() {
    console.log(this.$refs);
  }
};
</script>

<style lang="scss">
.custom-section {
  position: relative;
  z-index: 2;

  &__label-container {

    @include mx.mq($BREAKPOINT-LG) {
      position: absolute;
      top: 0;
      left: -230px;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
    }
  }

  &__label {
    font-size: fn.rem(65);
    color: colors.$color-custom-section-label;
    @include mx.font-poppins-bold;

    @include mx.mq($BREAKPOINT-LG) {
      font-size: fn.rem(200);
      padding-bottom: 130%;
    }
  }

  &__left {
    width: 100%;

    &.\--hide {
      width: 0;
    }

    @include mx.mq($BREAKPOINT-LG) {
      width: 45%;
    }
  }

  &__main {
    width: 100%;
    margin-top: fn.rem(15);

    &.\--full {
      width: 100%;
    }

    @include mx.mq($BREAKPOINT-LG) {
      width: 55%;
      margin-top: 0;
    }
  }
}
</style>
