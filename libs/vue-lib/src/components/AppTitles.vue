<template>
  <div>
    <h1 v-if="headingLevel === 1" :class="[headingClass]">
      <slot></slot>
    </h1>
    <h2 v-else-if="headingLevel === 2" :class="[headingClass]">
      <slot></slot>
    </h2>
    <h3 v-else-if="headingLevel === 3" :class="[headingClass]">
      <slot></slot>
    </h3>
    <h4 v-else-if="headingLevel === 4" :class="[headingClass]">
      <slot></slot>
    </h4>
    <h5 v-else-if="headingLevel === 5" :class="[headingClass]">
      <slot></slot>
    </h5>
    <h6 v-else-if="headingLevel === 6" :class="[headingClass]">
      <slot></slot>
    </h6>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-facing-decorator';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingClass = 'c-orderCard' | 'c-loyaltyCard' | 'c-cardNews';

@Component
export class AppTitles extends Vue {
  @Prop({ type: Number, required: true }) public headingLevel!: HeadingLevel;
  @Prop({ type: String, required: true }) public headingClass!: HeadingClass;
}

export default AppTitles;
</script>

<style lang="scss" scoped>
.c-orderCard,
.c-loyaltyCard,
.c-newsSlider {
  &__title {
    font-weight: bold;
    font-size: 22px;
    line-height: 32px;
  }
}

.c-news {
  &__title {
    position: relative;
    left: 2px;
    margin: 40px 0 32px;
    font-size: 28px;
    line-height: 1.25;
    letter-spacing: -0.68px;
    word-break: break-word;
  }
}

.c-guest-checkout-selection-modal__title {
  font-size: 17px;
  font-family: var(--title-font);
  line-height: 24px;
  font-weight: var(--title-weight);
}
.c-tierPoints {
  margin-bottom: 3px;
  font-size: 17px;
  font-family: var(--title-font);
  font-weight: 700;
}
.status-title {
  padding: 40px 24px 10px;
  margin: 0 auto;
  color: var(--headers-inv-color);
  font-size: 28px;
  line-height: 1.25;
  letter-spacing: -0.7px;

  @media screen and (min-width: 768px) {
    padding: 40px 0 10px;
    max-width: 456px;
  }
}
</style>
