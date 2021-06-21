<template>
  <div
    :class="{
      'custom-input': true,
    }"
  >
    <div class="custom-input__label">
      {{ label }}
    </div>
    <div class="custom-input__main">
      <input
        class="custom-input__tag-input"
        v-bind="$attrs"
        @input="onChange($event)"
        @click="onClick"
        ref="input"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',

  props: {
    label: {
      type: String,
      default: '',
    },

    value: {
      type: [String, Number],
    }
  },

  methods: {
    onChange(event) {
      this.$emit('input', event.target.value);
    },

    onClick() {
      this.focus = true;
    },

  }
};
</script>

<style lang="scss">
.custom-input {
  $this: &;

  position: relative;

  &__label {
    color: colors.$white-1;
  }

  &__tag-input {
    width: 100%;
    padding: fn.rem(10);
    outline: none;
    border: none;
    border-bottom: 1px solid colors.$white-1;
    background-color: transparent;
    color: colors.$white-1;
    font-size: fn.rem(16);
    line-height: (25/16);

    &::placeholder {
      color: colors.$white-1;
    }
  }
}
</style>
