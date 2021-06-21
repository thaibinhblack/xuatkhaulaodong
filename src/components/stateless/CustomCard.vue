<template>
  <div class="custom-card card">
    <div class="custom-card__container">
      <div class="custom-card__header">
        <slot name="header" />
      </div>
      <div class="custom-card__body">
        <slot />
      </div>
      <div class="custom-card__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomCard',
};
</script>

<style lang="scss">
.custom-card {
  padding: fn.rem(50) fn.rem(100);
  border-radius: fn.rem(30);
  background-color: colors.$color-custom-card-bg;
  color: colors.$color-custom-card-txt;
}
</style>
