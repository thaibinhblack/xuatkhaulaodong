<template>
  <section class="section-about section --pd-left">
    <div class="container-xxl">
      <div class="section-about__container section --pd">
        <custom-section
          title="About"
          class="section-about__container"
        >
          <template #left>
            <div class="section-about__left">
              <custom-card>
                <ul class="section-about__list-about">
                  <li class="section-about__item-about">
                    <span class="section-about__label">NAME</span>
                    <span class="section-about__txt">Jackob Hawkings</span>
                  </li>

                  <li class="section-about__item-about">
                    <span class="section-about__label">Birthday</span>
                    <span class="section-about__txt">29.09.1996</span>
                  </li>

                  <li class="section-about__item-about">
                    <span class="section-about__label">NAME</span>
                    <span class="section-about__txt">Jackob Hawkings</span>
                  </li>

                  <li class="section-about__item-about">
                    <span class="section-about__label">Birthday</span>
                    <span class="section-about__txt">29.09.1996</span>
                  </li>

                  <li class="section-about__item-about">
                    <span class="section-about__label">NAME</span>
                    <span class="section-about__txt">Jackob Hawkings</span>
                  </li>

                  <li class="section-about__item-about">
                    <span class="section-about__label">Birthday</span>
                    <span class="section-about__txt">29.09.1996</span>
                  </li>
                </ul>
              </custom-card>
            </div>
          </template>
          <div class="section-about__content">
            <ul class="section-about__list-content">
              <li class="section-about__item-content">
                <label for="" class="section-about__label-content">
                  AWARDS
                </label>
                <span class="section-about__txt-content">
                  38
                </span>
              </li>
              <li class="section-about__item-content">
                <label for="" class="section-about__label-content">
                  XP YEARS
                </label>
                <span class="section-about__txt-content">
                  38
                </span>
              </li>
              <li class="section-about__item-content">
                <label for="" class="section-about__label-content">
                  CLIENTS
                </label>
                <span class="section-about__txt-content">
                  38
                </span>
              </li>
              <li class="section-about__item-content">
                <label for="" class="section-about__label-content">
                  PROJECTS
                </label>
                <span class="section-about__txt-content">
                  38
                </span>
              </li>
            </ul>
            <div class="section-about__block-content">
              <h3 class="section-about__title-content">
                Nam ultrices ultrices nec tortor pulvinar esteras loremips est
              </h3>
              <div class="section-about__main-block richtext">
                <p>
                  Mauris volutpat estera phasellus. Varius nec orci, quam augue loremes lines pellentesque non identiqum pere.

Tristique amet volutpat nunc euismod mauris ollicitudin est sempe vulputate id in nullam. Purus tincidunt maga ut turpis eu, eu enim. Nisl porttitor elit risus velit urnase morbit mauris at proin laoreet lobortis urna aliquame.
                </p>
              </div>
            </div>
          </div>
        </custom-section>
      </div>
    </div>
    <div class="section-about__bg-container --right">
      <div class="section-about__bg"></div>
    </div>
  </section>
</template>

<script>
import CustomSection from '@/components/stateless/CustomSection';
import CustomCard from '@/components/stateless/CustomCard';

export default {
  name: 'SectionAbout',

  components: {
    CustomSection,
    CustomCard,
  },
};
</script>

<style lang="scss">
.section-about {
  position: relative;

  &__label, &__txt {
    display: block;
    font-size: fn.rem(16);
    line-height: (10/16);
    margin: fn.rem(15) 0;
  }

  &__content {
    @include mx.mq($BREAKPOINT-LG) {
      padding-left: fn.rem(40);
    }
  }

  &__label {
    text-transform: uppercase;
    letter-spacing: fn.rem(5);
  }

  &__item-about {
    margin-bottom: fn.rem(40);
  }

  &__list-content {
    padding-left: fn.rem(20);
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  &__item-content {
    width: 50%;
    text-align: left;
    margin-bottom: fn.rem(50);
  }

  &__label-content {
    display: block;
    width: 100%;
    font-size: fn.rem(14);
    letter-spacing: fn.rem(5);
    text-transform: uppercase;
    margin-bottom: fn.rem(15);

    @include mx.mq($BREAKPOINT-LG) {
      font-size: fn.rem(20);
    }
  }

  &__txt-content {
    font-size: fn.rem(65);
    line-height: (55/65);
    color: colors.$color-section-about-txt-content;

    @include mx.font-poppins-bold;

    @include mx.mq($BREAKPOINT-LG) {
      font-size: fn.rem(80);
    }
  }

  &__bg-container {
    position: absolute;
    top: 0;
    width: 80%;
    z-index: 1;

    &.\--left {
      left: -40%;
    }

    &.\--right {
      right: -40%;
    }
  }

  &__bg {
    padding-top: 100%;
    border-radius: 90%;
    background-color: colors.$color-custom-section-bg-right;
    left: 50%;
  }
}
</style>
