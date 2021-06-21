<template functional>
 <div class="custom-list-services">
  <div class="custom-list-services__content">
    <ul class="custom-list-services__list-services row">
      <li
        v-for="(item, index) in props.value"
        :key="index"
        class="custom-list-services__item col-lg-6"
      >
        <span class="custom-list-services__txt">
          {{item.name}}
        </span>
      </li>
    </ul>
  </div>
 </div>
</template>

<script>
export default {
  name: 'CustomListServices',

  props: {
    value: {
      type: Array,
      default: () => ([]),
    }
  }
};
</script>

<style lang="scss">
.custom-list-services {
      &__list-services {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: -(fn.rem(50));
  }

  &__item {
    text-align: center;
  }

  &__txt {
    display: block;
    padding: fn.rem(15);
    margin: fn.rem(15) fn.rem(15) fn.rem(15) 0;
    background-color: colors.$color-section-services-item-bg;
    color: colors.$color-section-services-item-txt;
    border-radius: fn.rem(30);
    font-size: fn.rem(30);
    line-height: (30/30);

    @include mx.font-poppins-bold;

    @include mx.mq($BREAKPOINT-LG) {
      margin: fn.rem(25) fn.rem(25) fn.rem(25) 0;
      padding: fn.rem(50);
      font-size: fn.rem(35);
    }
  }
}
</style>
