import { StoreOptions, createStore as vuexCreateStore } from 'vuex';
import { system } from './system';

const storeOptions: StoreOptions<any> = {
  modules: {
    system
  },
};

export const createStore = () => vuexCreateStore(storeOptions);
