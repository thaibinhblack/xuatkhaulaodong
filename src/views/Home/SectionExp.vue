<template>
  <section class="section-exp">
    <div class="container-xxl">
        <div class="section-exp__container section --pd">
        <custom-section
          :title="$t('home.section.exp.label')"
          hideLeft
        >
          <custom-table
            class="section-exp__table"
            v-model="table"
          />
        </custom-section>
      </div>
    </div>
  </section>
</template>

<script>
import CustomTable from '@/components/stateless/CustomTable';
import CustomSection from '@/components/stateless/CustomSection';

export default {
  name: 'SectionExp',

  components: {
    CustomTable,
    CustomSection,
  },

  data: () => ({
    table: [
      {
        label: 'September, 2016 – May, 2017',
        value: '<p> Junior Developer </p> <br />  <p>Sed quia consequuntur magni dolores eos quira tione estera voluptatem sequi nesciunt nuncera permano nence of the stars from which we spring. </p> <br /> Lobrissa / Chicago'
      },
      {
        label: 'May, 2017 – Jun, 2018',
        value: '<p>Senior Developer </p> <br />  <p>Consequuntur magni dolores eos quira tione estera voluptatem sequi nesciunt nuncera permanotesa.</p> <br /> Faucibuse / Seattle'
      },
    ]
  })
};
</script>
