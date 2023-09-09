import { MutationTree } from 'vuex';
import { SystemState } from './models';

export const mutations: MutationTree<SystemState> = {
  setKioskId(state, payload: string) {
    state.kioskId = payload;
  },
  setLanguage(state, payload) {
    state.language = payload;
  },
  setIsLanguageLoading(state, payload) {
    state.isLanguageLoaded = payload;
  }
};
