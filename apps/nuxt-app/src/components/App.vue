<template>
  <div>
    <AppTitles :headingLevel="1" headingClass="c-orderCard">
      Vue App Minimal Migration Target
    </AppTitles>
    <h5>Vue2 Like Application with Class and Property Decorators</h5>
    <WithState />
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue';
import { AppTitles } from '@menu-app-vue-migration-reference/vue-lib';
import WithState from './WithState.vue';

defineComponent({
  name: 'App',
  components: {
    WithState,
    AppTitles
  },
});
</script>
