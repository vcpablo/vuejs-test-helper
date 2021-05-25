import { createLocalVue } from "@vue/test-utils";
import { render } from "@testing-library/vue";

const localVue = createLocalVue();

export const customRender = (component, options = {}) =>
  render(component, { localVue, ...options });

export * from "@testing-library/vue";
