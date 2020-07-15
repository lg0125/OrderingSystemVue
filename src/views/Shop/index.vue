<template>
  <div>
    <ShopHeader></ShopHeader>
    <div class="card">
      <h5 class="card-header">{{ this.info.info.shopId }}</h5>
      <div class="card-body">
        <h5 class="card-title">基本信息</h5>
        <p class="card-text">月售{{ this.info.info.sellNum }}单</p>
        <p class="card-text">¥{{ this.info.info.minPrice }}起送</p>
        <p class="card-text">配送费约¥{{ this.info.info.deliveryPrice }}</p>
        <p class="card-text">距离你{{ this.info.info.distance }}公里</p>
        <p
          class="card-text"
        >地址:{{ this.info.address.city }}{{ this.info.address.name }}{{ this.info.address.address }}</p>
        <el-button type="primary" @click="openSupport">Support</el-button>
        <el-button type="success" @click="openActivity">Activity</el-button>
      </div>
    </div>
    <div>
      <router-link :to="{path:'/shop/goods', query:{shop_id:this.shopId}}">
        <button type="button" class="btn btn-primary btn-lg btn-block">点餐</button>
      </router-link>
    </div>
    
      <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShopHeader from "../../components/ShopHeader/index";
export default {
  name: "Shop",
  data() {
    return {
      shopId: null
      // shop: {
      //   address: {
      //     address: "故宫",
      //     city: "北京市",
      //     name: "海淀区"
      //   },
      //   info: {
      //     shopId: 12345,
      //     name: "烧烤场",
      //     sellNum: 956,
      //     minPrice: 20,
      //     deliveryPrice: 3,
      //     distance: 6
      //   },
      //   support: {
      //     iconName: "准"
      //   },
      //   activity: {
      //     activityName: "满30减6"
      //   }
      // }
    };
  },
  mounted() {
    this.shopId = this.$route.query.shop_id;
    const shop_id = this.$route.query.shop_id;
    this.$store.dispatch("getShopInfo", shop_id);
  },
  computed: {
    ...mapState(["info"])
  },
  methods: {
    openSupport() {
      this.$alert(this.info.support.iconName, "Support", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    },
    openActivity() {
      this.$alert(this.info.activity.activityName, "Activity", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  },
  components: {
    ShopHeader
  }
};
</script>

<style>
</style>