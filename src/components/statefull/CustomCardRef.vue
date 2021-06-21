<template>
  <custom-card class="custom-card-ref">
    <template #header>
      <div class="custom-card-ref__header">
        <img
          class="custom-card-ref__icon"
          v-img="srcIconQuotes"
          alt="icon"
        />
      </div>
    </template>
    <div class="custom-card-ref__content">
      <slot />
    </div>
    <div class="custom-card-ref__cirle"></div>
  </custom-card>
</template>

<script>
import CustomCard from '@/components/stateless/CustomCard';
import srcIconQuotes from '@/assets/images/quotes.png';

export default {
  name: 'CustomCardRef',

  components: {
    CustomCard,
  },

  data: () => ({
    srcIconQuotes,
  }),
};
</script>

<style lang="scss">
.custom-card-ref {
  $this: &;

  padding: fn.rem(50);
  border-radius: fn.rem(25);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 90%;
    top: calc(50% - 20px);
    background-color: colors.$body-bg;
    z-index: 1;
    right: -20px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 45px;
    height: 3px;
    background-color: #e6e6f0;
    right: -60px;
    top: calc(50% - 1px);
    z-index: 2;
  }

  &__cirle {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 90%;
    right: -15px;
    top: calc(50% - 1px);
    transform: translateY(-12px);
    transition: background-color .3s;
    border: 3px solid colors.$white-1;
    box-sizing: content-box;
    z-index: 2;
    cursor: pointer;

    &:hover {
      background-color: colors.$white-1;
    }
  }

  &.\--left {
    @include mx.mq($BREAKPOINT-LG) {
      &::before {
        left: -20px;
      }

      &::after {
        left: -60px;
      }

      #{$this}__cirle {
        left: -15px;
      }
    }
  }

  &__icon {
    width: fn.rem(40);
    height: auto;
  }
}
</style>
