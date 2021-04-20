<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MaskRight from "@/components/MaskRight.vue"; // @ is an alias to /src

@Options({
  components: {
    MaskRight,
  },
})
export default class Home extends Vue {}
</script>
