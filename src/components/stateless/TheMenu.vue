<template>
  <div class="the-menu">
    <div class="the-menu__container">
      <div class="the-menu__logo-container">
        <slot name="logo">
          <img
            class="the-menu__logo"
            :src="srcLogo"
            alt="logo"
          />
        </slot>
      </div>
      <div class="the-menu__main-container">
        <slot>
          <ul class="the-menu__list">
            <li
              v-for="(item, index) in value"
              :key="index"
              :class="{
                'the-menu__item': true,
                '--active': item.active,
              }"
              @click="onClickItem(item)"
            >
              <span class="the-menu__item-txt">
                {{item.name}}
              </span>
            </li>
          </ul>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import srcLogo from '@/assets/images/logo.png';

export default {
  name: 'TheMenu',

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

  methods: {
    onClickItem(item) {
      const updateValue = this.value.reduce((arr, key) => (
        [
          ...arr,
          {
            ...key,
            active: key === item,
          }
        ]
      ), []);
      this.$emit('input', updateValue);
    }
  }
};
</script>

<style lang="scss">
  .the-menu {
    $this: &;

    display: none;
    width: fn.rem(230);
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 3;
    left: calc(100% - 230px);

    @include mx.mq($BREAKPOINT-LG) {
      display: block;
    }

    @include mx.mq($BREAKPOINT-XXL) {
      left: calc( 100% - (((100% - 1320px) / 2) + 230px));
    }

    &__container {
      padding: fn.rem(50) 0 fn.rem(15) fn.rem(40);
    }

    &__logo-container {
      text-align: left;
    }

    &__logo {
      width: fn.rem(140);
      height: fn.rem(140);
    }

    &__list {
      margin-top: fn.rem(30);
    }

    &__item-txt {
      transition: border .5s ease-in;
      position: relative;
      text-transform: uppercase;

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

    &__item {
      padding: fn.rem(5) 0;
      overflow: hidden;
      cursor: pointer;

      &.\--active, &:hover{
        #{$this}__item-txt {
          &::before {
            left: 0;
          }
        }
      }
    }
  }
</style>
