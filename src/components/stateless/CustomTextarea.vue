<template>
  <div
    :class="{
      'custom-textarea': true,
    }"
  >
    <div class="custom-textarea__label">
      {{ label }}
    </div>
    <div class="custom-textarea__main">
      <textarea
        class="custom-textarea__tag-textarea"
        v-bind="$attrs"
        @input="onChange($event)"
        @click="onClick"
        ref="textarea"
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
      type: String,
      default: '',
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
.custom-textarea {
  $this: &;

  position: relative;

  &__label {
    color: colors.$white-1;
  }

  &__tag-textarea {
    width: 100%;
    padding: fn.rem(10);
    outline: none;
    border: none;
    border-bottom: 1px solid colors.$white-1;
    background-color: transparent;
    color: colors.$white-1;
    font-size: fn.rem(16);
    line-height: (25/16);
    min-height: fn.rem(150);

    &::placeholder {
      color: colors.$white-1;
    }
  }
}
</style>
