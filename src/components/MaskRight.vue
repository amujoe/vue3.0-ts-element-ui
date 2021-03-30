<template>
  <div class="mask">
    <!-- 背景 -->
    <div class="mask-bg"></div>
    <!-- 内容插槽 -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class MaskRight extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  .mask-bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
  }
}
</style>
