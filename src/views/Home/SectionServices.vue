<template>
  <section class="section-services section --pd-left">
    <div class="container-xxl">
      <div class="section-services__container section --pd">
        <custom-section
          title="Svcs"
          class="section-services__container"
          hideLeft
        >
         <custom-list-services v-model="services" />
        </custom-section>
      </div>
    </div>
  </section>
</template>

<script>
import CustomSection from '@/components/stateless/CustomSection';
import CustomListServices from '@/components/stateless/CustomListServices';

export default {
  name: 'SectionAbout',

  components: {
    CustomSection,
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
      {
        name: 'Dịch vụ 4'
      },
      {
        name: 'Dịch vụ 5'
      }
    ]
  })
};
</script>

<style lang="scss">
.section-services {
  position: relative;
}
</style>
