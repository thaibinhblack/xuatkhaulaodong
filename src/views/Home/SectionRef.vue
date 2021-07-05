<template>
  <section class="section-ref">
    <div class="container-xxl">
      <div class="row">
        <div class="section-ref__container section --pd">
          <custom-section
            class="section-ref__container"
            title="Refs"
          >
            <template #left>
              <div class="section-ref__list-card --left">
                <u-animate
                  name="bounceInLeft"
                  duration=".5s"
                >
                  <div class="section-ref__item-card">
                    <custom-card-ref class="section-ref__card">
                      <div class="section-ref__card-content richtext">
                        <p class="section-ref__card-txt">
                          {{ $t('home.section.ref.ref1.content') }}
                        </p>
                      </div>
                      <div class="section-ref__card-author">
                        <span class="--strong">
                          {{ $t('home.section.ref.ref1.author') }}
                        </span>
                        <span class="--full section-ref__card-link">
                          {{ $t("home.section.ref.ref1.link") }}
                        </span>
                      </div>
                    </custom-card-ref>
                  </div>
                </u-animate>
                <u-animate
                  name="bounceInLeft"
                  duration="1s"
                >
                 <div class="section-ref__item-card">
                  <custom-card-ref class="section-ref__card">
                    <div class="section-ref__card-content richtext">
                      <p class="section-ref__card-txt">
                        {{ $t('home.section.ref.ref1.content') }}
                      </p>
                    </div>
                    <div class="section-ref__card-author">
                      <span class="--strong">
                        {{ $t('home.section.ref.ref1.author') }}
                      </span>
                      <span class="--full section-ref__card-link">
                        {{ $t("home.section.ref.ref1.link") }}
                      </span>
                    </div>
                  </custom-card-ref>
                </div>
                </u-animate>
              </div>
            </template>
            <div class="section-ref__list-card --right">
              <u-animate
                name="bounceInRight"
                duration=".5s"
              >
                <div class="section-ref__item-card">
                  <custom-card-ref class="section-ref__card --left">
                    <div class="section-ref__card-content richtext">
                      <p class="section-ref__card-txt">
                        {{ $t('home.section.ref.ref1.content') }}
                      </p>
                    </div>
                    <div class="section-ref__card-author">
                      <span class="--strong">
                        {{ $t('home.section.ref.ref1.author') }}
                      </span>
                      <span class="--full section-ref__card-link">
                        {{ $t("home.section.ref.ref1.link") }}
                      </span>
                    </div>
                  </custom-card-ref>
                </div>
              </u-animate>
              <u-animate
                name="bounceInRight"
                duration="1s"
              >
                <div class="section-ref__item-card">
                  <custom-card-ref class="section-ref__card --left">
                    <div class="section-ref__card-content richtext">
                      <p class="section-ref__card-txt">
                        {{ $t('home.section.ref.ref1.content') }}
                      </p>
                    </div>
                    <div class="section-ref__card-author">
                      <span class="--strong">
                        {{ $t('home.section.ref.ref1.author') }}
                      </span>
                      <span class="--full section-ref__card-link">
                        {{ $t("home.section.ref.ref1.link") }}
                      </span>
                    </div>
                  </custom-card-ref>
                </div>
              </u-animate>
            </div>
          </custom-section>
          <div class="section-ref__list">
            <custom-list-services v-model="services" />
          </div>
        </div>
      </div>
    </div>
    <div class="section-about__bg-container --right">
      <div class="section-about__bg"></div>
    </div>
  </section>
</template>

<script>
import CustomSection from '@/components/stateless/CustomSection';
import CustomCardRef from '@/components/statefull/CustomCardRef';
import CustomListServices from '@/components/stateless/CustomListServices';

export default {
  name: 'SectionRef',

  components: {
    CustomSection,
    CustomCardRef,
    CustomListServices,
  },

  data: () => ({
    services: [
      {
        name: 'Dịch vụ 1'
      },
      {
        name: 'Dịch vụ 2'
      },
      {
        name: 'Dịch vụ 3'
      },
      {
        name: 'Dịch vụ 4'
      },
    ]
  })
};
</script>

<style lang="scss">
.section-ref {
  $this: &;

  position: relative;

  .custom-section__left, .custom-section__main {
    padding-right: fn.rem(70);
    margin: 0;

    @include mx.mq($BREAKPOINT-LG) {
      width: 50%;
      border-right: 1px solid colors.$white-1;
    }
  }

  .custom-section__main {
    @include mx.mq($BREAKPOINT-LG) {
      padding-right: 0;
      padding-left: fn.rem(70);
      border-left: 1px solid colors.$white-1;
      border-right: none;
    }
  }

  &__card-content {
    margin: fn.rem(15) 0 fn.rem(25);
  }

  &__list-card {
    @include mx.mq($BREAKPOINT-LG) {
      &.\--left #{$this}__item-card {
        padding-bottom: 80%;
      }

      &.\--right #{$this}__item-card {
        padding-top: 80%;
      }
    }
  }

  &__list {
    padding-top: fn.rem(50);

    @include mx.mq($BREAKPOINT-LG) {
      padding-top: fn.rem(100);
    }
  }

  &__item-card {
    margin-bottom: fn.rem(25);

    @include mx.mq($BREAKPOINT-LG) {
      margin-bottom: 0;
    }
  }
}
</style>
