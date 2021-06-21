<template>
  <section class="section-skill section --pd-left">
    <div class="container-xxl">
      <div class="section-skill__container section --pd">
        <custom-section
          title="Skills"
          class="section-skill__container"
        >
          <template #left>
            <div class="section-skill__left">
              <custom-card class="section-skill__card">
                <template>
                  <div class="section-skill__card-content">
                    <h3 class="section-skill__title">
                      {{ $t('home.section.skill.title') }}
                    </h3>
                    <p class="section-skill__content">
                      {{ $t('home.section.skill.content1') }}
                    </p>
                    <p class="section-skill__content">
                      {{ $t('home.section.skill.content2') }}
                    </p>
                  </div>
                </template>
              </custom-card>
            </div>
          </template>
          <div class="section-skill__content">
            <ul class="section-skill__list">
              <li
                v-for="(item, index) in skills"
                :key="index"
                class="section-skill__item"
              >
                <div class="section-skill__item-label">
                  {{ item.fill }}%
                </div>
                <div class="section-skill__item-line">
                  <div class="section-skill__item-txt">
                    {{ item.label }}
                  </div>
                  <div
                    class="section-skill__fill"
                    :style="{
                      width: `${item.fill}%`
                    }"
                  />
                </div>
              </li>
            </ul>
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
  name: 'SectionSkill',

  components: {
    CustomSection,
    CustomCard,
  },

  data: () => ({
    skills: [
      {
        label: 'Creativity',
        fill: 75,
      },
      {
        label: 'Cooking',
        fill: 45,
      },
      {
        label: 'PhP',
        fill: 90,
      },
      {
        label: 'Marketing',
        fill: 65,
      },
      {
        label: 'Design',
        fill: 85,
      },
    ]
  })
};
</script>

<style lang="scss">
.section-skill {
  position: relative;

  & .custom-section__left {
    @include mx.mq($BREAKPOINT-LG) {
      width: 50%;
    }
  }

  & .custom-section__main {
    @include mx.mq($BREAKPOINT-LG) {
      width: 50%;
      padding-left: fn.rem(50);
    }
  }

  &__card {
    padding: fn.rem(50) fn.rem(25);
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  &__item {
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    padding: fn.rem(20) 0;
  }

  &__item-label {
    margin-right: fn.rem(15);
    font-size: fn.rem(30);
  }

  &__item-line {
    width: 100%;
    position: relative;

     &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 8px;
      background-color: colors.$white-1;
      bottom: 10px;
      left: 0;
      z-index: 1;
      border-radius: 5px;
    }
  }

  &__fill {
    display: block;
    position: relative;
    z-index: 2;
    margin-top: fn.rem(10);
    width: 70%;
    height: fn.rem(28);
    background-color: colors.$color-section-skill-fill;
    border-radius: fn.rem(25);
    z-index: 2;
  }
}
</style>
