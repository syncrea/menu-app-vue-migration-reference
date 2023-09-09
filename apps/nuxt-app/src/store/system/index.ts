import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { SystemState } from './models';
import { mutations } from './mutations';

const namespaced = true;
export const namespace = 'system';

export const state: SystemState = {
  language: '',
  kioskId: '',
  isLanguageLoaded: false,
};

export const system: Module<SystemState, any> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
