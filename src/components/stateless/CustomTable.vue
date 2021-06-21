<template>
  <div class="custom-table">
    <div
      class="custom-table__row"
      v-for="(item, index) in value"
      :key="index"
    >
      <div
        class="custom-table__column richtext"
        v-for="(key, indexItem) in Object.keys(item)"
        :key="indexItem"
      >
        <span v-html="item[key]"> </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomTable',

  props: {
    value: {
      type: Array,
      default: () => ([]),
    }
  }
};
</script>

<style lang="scss">
.custom-table {
  &__row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: fn.rem(25) 0;
    border-top: 2px solid colors.$color-custom-table-border-top;

    &:last-child {
      border-bottom: 2px solid colors.$color-custom-table-border-top;
    }
  }

  &__column {
    width: 100%;
    &:first-child {
      @include mx.mq($BREAKPOINT-LG) {
        width: 35%;
      }
    }

    &:last-child {
      @include mx.mq($BREAKPOINT-LG) {
        width: 65%;
      }
    }
  }
}
</style>
