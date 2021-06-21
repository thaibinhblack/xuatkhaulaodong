<template>
  <section class="section-contact">
    <div class="container-xxl">
      <div class="row">
        <div class="section-contact__container section --pd">
          <custom-section :title="$t('home.section.contact.title')">
            <template #left>
              <custom-card class="section-contact__card">
                <form
                  class="section-contact__form"
                  @sumit.prevent="onSubmit"
                >
                  <div class="section-contact__input">
                      <custom-input
                      :label="$t('home.form.name.label')"
                      type="text"
                      :placeholder="$t('home.form.name.placeholder')"
                      required
                      v-model="form.name"
                    />
                  </div>

                  <div class="section-contact__input">
                    <custom-input
                      :label="$t('home.form.email.label')"
                      type="email"
                      :placeholder="$t('home.form.email.placeholder')"
                      required
                      v-model="form.email"
                    />
                  </div>

                  <div class="section-contact__input">
                    <custom-input
                      :label="$t('home.form.subject.label')"
                      type="email"
                      :placeholder="$t('home.form.subject.placeholder')"
                      required
                      v-model="form.email"
                    />
                  </div>

                  <div class="section-contact__input">
                    <custom-textarea
                      :label="$t('home.form.message.label')"
                      required
                      v-model="form.message"
                    />
                  </div>

                  <div class="section-contact__button">
                    <button
                      class="--link btn --txt-uppercase section-contact__btn --white"
                      type="submit"
                    >
                      {{ $t('home.form.submit') }}
                    </button>
                  </div>
                </form>
              </custom-card>
            </template>
            <div class="section-contact__intro">
              <h3 class="section-contact__title">
                {{ $t('home.section.contact.content.title') }}
              </h3>
              <p class="section-contact__content">
                {{ $t('home.section.contact.content.content1') }}
              </p>
              <p class="section-contact__content">
                {{ $t('home.section.contact.content.content2') }}
              </p>
              <ul class="section-contact__list">
                <li
                  v-for="(item, index) in contact"
                  :key="index"
                  class="section-concat__item"
                >
                  <strong>
                    {{item.label}}:
                  </strong>
                  <span>
                    {{item.value}}
                  </span>
                </li>
              </ul>
            </div>
          </custom-section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CustomSection from '@/components/stateless/CustomSection';
import CustomCard from '@/components/stateless/CustomCard';
import CustomInput from '@/components/stateless/CustomInput';
import CustomTextarea from '@/components/stateless/CustomTextarea';

export default {
  name: 'SectionContact',

  components: {
    CustomSection,
    CustomCard,
    CustomInput,
    CustomTextarea,
  },

  data: () => ({
    form: {},
    contact: [
      {
        label: 'Name',
        value: 'Jacob Hawkins',
      },
      {
        label: 'Address',
        value: 'Jacob Hawkins',
      },
      {
        label: 'Phone',
        value: 'Jacob Hawkins',
      },
      {
        label: 'Hours',
        value: 'Jacob Hawkins',
      }
    ]
  }),

  methods: {
    onSubmit() {}
  }
};
</script>

<style lang="scss">
.section-contact {

  .custom-section__left, .custom-section__main {
    @include mx.mq($BREAKPOINT-LG) {
      width: 50%;
    }
  }

  &__card {
    padding: fn.rem(50) fn.rem(25);
  }

  &__input {
    margin-bottom: fn.rem(50);
  }

  &__btn {
    font-size: fn.rem(20);
    background-color: transparent;
    outline: none;
    border: none;
    color: colors.$white-1;
    padding: 0;
    cursor: pointer;
  }

  &__intro {
    @include mx.mq($BREAKPOINT-LG) {
      padding-left: fn.rem(50);
    }
  }

  &__title {
    font-size: fn.rem(26);
    line-height: (30/26);
  }

  &__content {
    margin: fn.rem(50) 0;
    font-size: fn.rem(15);
  }
}
</style>
