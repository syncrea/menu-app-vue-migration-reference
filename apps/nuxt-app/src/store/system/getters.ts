import { GetterTree } from 'vuex';
import { SystemState } from './models';

export const getters: GetterTree<SystemState, any> = {
  kioskId(state) {
    return state.kioskId;
  },
  language(state) {
    return state.language;
  },
  isLanguageLoaded(state) {
    return state.isLanguageLoaded;
  }
};
