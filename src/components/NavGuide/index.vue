<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-bottom navbar-dark bg-dark">
      <a class="navbar-brand" href="javascript:">多吃青菜</a>
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

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
           <li class="nav-item">
            <a class="nav-link" href="javascript:;" @click="goTo('/home')">
                首页
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;"  @click="goTo('/search')">
              <i class="iconfont iconwaimai"></i>
              搜索
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;"  @click="goTo('/order')">
              <i class="iconfont icondingdan"></i>
              订单
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:;"  @click="goTo('/profile')">
              <i class="iconfont icongeren"></i>
              我的
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavGuide",
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style>
</style>