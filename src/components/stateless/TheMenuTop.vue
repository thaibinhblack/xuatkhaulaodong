<template>
  <div class="the-menu-top">
    <div class="container">
      <div class="the-menu-top__container">
        <div class="the-menu-top__logo-container">
          <img
            class="the-menu-top__logo"
            :src="srcLogo"
            alt=""
          />
        </div>

        <div class="the-menu-top__bar">
          <span
            @click="onClickBar"
            :class="{
              'bar-menu': true,
              '--active': show,
            }"
          >
            <div class="bar-menu__line"></div>
          </span>
        </div>
      </div>
      <div
        :class="{
          'the-menu-top__sidebar': true,
          '--active': show,
        }"
        v-click-outside="onClickOutside"
      >
        <ul
          class="the-menu-top__list"
        >
          <li
            v-for="(item, index) in value"
            :key="index"
            :class="{
              'the-menu-top__item': true,
              '--active': item.active,
            }"
            @click="onClickItem(item)"
          >
            <span class="the-menu-top__txt">
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import srcLogo from '@/assets/images/logo-mobile.png';

export default {
  name: 'TheMenuTop',

  props: {
    srcLogo: {
      type: String,
      default: srcLogo,
    },
    value: {
      type: Array,
      default: () => ([]),
    },
  },

  data: () => ({
    show: false,
  }),

  methods: {
    onClickBar() {
      this.show = !this.show;
    },

    onClickItem(item) {
      const valueUpdate = this.value.reduce((arr, key) => (
        [
          ...arr,
          {
            ...key,
            active: item === key,
          }
        ]), []);
      this.$emit('input', valueUpdate);
    },

    onClickOutside() {
      console.log(this.show);
    },
  },

};
</script>

<style lang="scss">
.the-menu-top {
  $this: &;

  position: fixed;
  display: block;
  width: 100%;
  top: 0;
  background-color: colors.$color-the-menu-top-bg;
  z-index: 4;

  @include mx.mq($BREAKPOINT-LG) {
    display: none;
  }

  &__logo {
    width: fn.rem(65);
    height: fn.rem(65);
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 fn.rem(15);
  }

  &__sidebar {
    position: fixed;
    width: 0;
    top: fn.rem(64);
    right: 0;
    background-color: colors.$color-the-menu-top-sb-bg;
    height: calc(100% - 65px);
    transition: width .2s ease-in;

    &.\--active {
      width: 65%;
    }
  }

  &__list {
    padding: fn.rem(20) 0 0 fn.rem(50);
  }

  &__item {
    cursor: pointer;
    overflow: hidden;
    padding: fn.rem(10) 0;

    &.\--active {
      &:hover, & #{$this}__txt {
        &::before {
          left: 0;
        }
      }
    }
  }

  &__txt {
    transition: border .5s ease-in;
    position: relative;
    text-transform: uppercase;
    color: colors.$white-1;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      height: fn.rem(3);
      background-color: colors.$white-1;
      border-radius: 3px;
      width: 100%;
      overflow: hidden;
      left: -100%;
      transition: left .2s ease-in;
    }
  }
}
</style>
