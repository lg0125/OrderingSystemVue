<template>
  <div>
    <HeaderTop :title="getTitle">
      <router-link slot="left" to="/search">
        <button type="button" class="btn btn-primary">
          <i class="iconfont iconsousuo"></i>
        </button>
      </router-link>
      <router-link slot="right" :to="this.userInfo.userId?'/profile':'/login'">
        <span v-if="!this.userInfo.userId">
          <button type="button" class="btn btn-primary">登录|注册</button>
        </span>
        <span v-else>
          <button type="button" class="btn btn-primary">
            <i class="iconfont icongeren"></i>
          </button>
        </span>
      </router-link>
    </HeaderTop>
    <div>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <a class="navbar-brand" href="#">附近商家</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
      <ShopList />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/index";
import ShopList from "../../components/ShopList/index";

export default {
  name: "Home",
  data() {
    return {
      //baseImageUrl: "https://fuss10.elemecdn.com",
      //title: "Home"
    };
  },
  mounted() {
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(["address", "userInfo"]),
    getTitle(){
      return this.address.city + this.address.name + this.address.address
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
};
</script>

<style>
</style>