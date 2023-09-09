<template>
  <button
    @click.stop.prevent="handleClick"
    @mousedown="handleMousedown"
    @mouseleave="handleMouseleave"
    @mouseup="handleMouseup"
    @touchstart="handleTouchstart"
    @touchend="handleTouchend"
    @touchcancel="handleTouchcancel"
    :disabled="disabled"
    :active="active"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-facing-decorator';

@Component({
  name: 'LocalAppButton',
  components: {},
})
export default class AppButton extends Vue {
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) active!: boolean;

  handleClick($event): void {
    this.$emit('click', $event);
  }

  handleMousedown($event): void {
    this.$emit('mousedown', $event);
  }

  handleMouseleave($event): void {
    this.$emit('mouseleave', $event);
  }

  handleMouseup($event): void {
    this.$emit('mouseup', $event);
  }

  handleTouchstart($event): void {
    this.$emit('touchstart', $event);
  }

  handleTouchend($event): void {
    this.$emit('touchend', $event);
  }

  handleTouchcancel($event): void {
    this.$emit('touchcancel', $event);
  }
}
</script>
