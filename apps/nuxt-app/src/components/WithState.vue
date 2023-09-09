<template>
  <div>
    <p>kioskId: {{ kioskId }}</p>
    <p>language: {{ language }}</p>
    <p>isLanguageLoaded: {{ isLanguageLoaded }}</p>
    <ClientOnly>
      <LocalAppButton @click="loadLanguage('en')">Load Language</LocalAppButton>
    </ClientOnly>
    <div>Enter kioskId:
      <input type="text" @input="setKioskId(($event.target as HTMLInputElement).value)"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue as VueClass } from 'vue-facing-decorator';
import { Getter, Action } from 'vuex-facing-decorator';
import {namespace as systemNamespace} from '../store/system';

import LocalAppButton from './LocalAppButton.vue';

@Component({
  components: {
    LocalAppButton
  }
})
export default class WithState extends VueClass {
  @Getter('kioskId', { namespace: systemNamespace }) kioskId!: string;
  @Getter('language', { namespace: systemNamespace }) language!: string;
  @Getter('isLanguageLoaded', { namespace: systemNamespace }) isLanguageLoaded!: boolean;

  @Action('loadLanguage', { namespace: systemNamespace }) loadLanguage: (lang: string) => void;
  @Action('setKioskId', { namespace: systemNamespace }) setKioskId: (id: string) => void;
}
</script>
