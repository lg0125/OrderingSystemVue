<template>
  <div id="app">
    <NavGuide v-show="$route.meta.showFooter" />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavGuide from "./components/NavGuide/index";
export default {
  mounted() {
    this.getAddress();
  },
  methods: {
    ...mapActions(["getAddress"])
  },
  components: {
    NavGuide
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
}
</style>
