<template>
  <div>
    <HeaderTop :title="title"></HeaderTop>
    <div>
      <router-link :to="userInfo.userId ? '/home': '/login'" class="profile-link">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <p class="card-text" v-if="!userInfo.userId">
              <button type="button" class="btn btn-light">登录</button>
            </p>
            <p v-else>
              <span class="h1">{{ userInfo.userName }}</span>
            </p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="card" style="width: 18rem;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <router-link to="/home">
            <span class="h3">我的金额</span>
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/home">
            <span class="h3">我的积分</span>
          </router-link>
        </li>
        <li class="list-group-item">
          <router-link to="/home">
            <span class="h3">我的优惠</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-secondary btn-lg btn-block"
        v-if="userInfo.userId"
        @click="loginout"
      >退出登录</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HeaderTop from "../../components/HeaderTop/index";
export default {
  name: "Profile",
  data() {
    return {
      title: "我的"
      // userInfo: {
      //   userId: 12345,
      //   userName: 'chris'
      // }
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  methods: {
    loginout() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.dispatch('logout')
          this.$message({
            type: "success",
            message: "退出成功!"
          })
          this.$router.push('/home')
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消退出"
          });
        });
    }
  },
  components: {
    HeaderTop
  }
};
</script>

<style>
</style>