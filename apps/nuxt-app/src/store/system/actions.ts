import { ActionTree } from 'vuex';
import { SystemState } from './models';

export const actions: ActionTree<SystemState, any> = {
  setKioskId({ commit }, url: string) {
    commit('setKioskId', url);
  },

  async loadLanguage({ commit }, lang: string) {
    commit('setIsLanguageLoading', true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    commit('setIsLanguageLoading', false);
    commit('setLanguage', lang);
  }
};
