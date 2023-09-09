import { mount } from '@vue/test-utils';
import type { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';
import AppTitles from './AppTitles.vue';

// Check migration Guide from test-utils v1 to v2 here:
// https://test-utils.vuejs.org/migration/

const ViewHome: Component = {
  template: '<h1>Hello from Home Page</h1>',
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: ViewHome,
      meta: {
        title: 'Home',
        auth: true,
      },
    },
  ],
});

const store = createStore({
  state: {
    isLoading: false,
  },
  getters: {
    isLoading(state): boolean {
      return state.isLoading;
    },
  },
  mutations: {
    setLoading(state, payload): void {
      state.isLoading = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload): void {
      commit('setLoading', payload);
    },
  },
});

describe('AppTitles', () => {
  it('should render h1 title', async () => {
    const slotText = 'random slot';
    const headingLevel = 1;
    const headingClass = 'my-class';

    const component = mount(AppTitles, {
      global: {
        plugins: [store, router],
        mocks: {
          $route: {
            params: {
              id: 4744,
            },
          },
        },
      },
      propsData: {
        headingLevel,
        headingClass,
      },
      slots: {
        default: slotText,
      },
    });

    await store.dispatch('setLoading', true);
    expect(component.find(`.${headingClass}`).element.tagName).toBe(
      `H${headingLevel}`
    );
    expect(component.find(`.${headingClass}`).text()).toContain(slotText);
  });
});
