<template>
  <div class="home">
    <span>modules</span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Api from "@/api/Common";

@Options({
  components: {},
})
export default class Home extends Vue {

  getProject() {
    Api.GetModules({"key": ""}).then((res:any) => {
      console.log("res", res);
    })
  }

  mounted() {
    console.log("mounted")
    this.getProject();
  }
}
</script>
