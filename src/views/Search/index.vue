<template>
  <div>
    <HeaderTop :title="title"></HeaderTop>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="口味">
          <el-input v-model="flavor" placeholder="请输入口味flavor"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <ul v-if="!noSearchShops">
        <li v-for="(shop,index) in searchShops" :key="index">
          <router-link :to="{path:'/shop', query:{shop_id:shop.info.shopId}}">
            <div class="card mb-3" style="max-width: 540px;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img :src="shop.info.imageUrl" class="card-img" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{{ shop.info.shopId }}</h5>
                    <p class="card-text">月售{{ shop.info.sellNum }}单</p>
                    <p class="card-text">¥{{ shop.info.minPrice }}起送</p>
                    <p class="card-text">配送费约¥{{ shop.info.deliveryPrice }}</p>
                    <p class="card-text">距离你{{ shop.info.distance }}公里</p>
                    <p class="card-text">
                      <small
                        class="text-muted"
                      >{{ shop.support.iconName }} => {{ shop.support.description }}</small>
                    </p>
                    <p class="card-text">
                      <small
                        class="text-muted"
                      >{{ shop.activity.activityName }} => {{ shop.activity.activityDescription }}</small>
                    </p>
                    <p class="card-text">
                      <small
                        class="text-muted"
                      >{{ shop.address.city }}{{ shop.address.name }}{{ shop.address.address }}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
      <div v-else>
        <h1>很抱歉！无搜索结果</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import HeaderTop from "../../components/HeaderTop/index";
export default {
  name: "Search",
  data() {
    return {
      title: "Search",
      flavor: "",
      noSearchShops: false
      // form: {
      //   key: ""
      // },
      // searchShops: [
      //   {
      //     info: {
      //       name: "烧烤场",
      //       imageUrl:
      //         "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=833991909,3885934376&fm=26&gp=0.jpg",
      //       sellNum: 956,
      //       minPrice: 20,
      //       deliveryPrice: 3,
      //       distance: 6
      //     },
      //     support: {
      //       iconName: "准"
      //     },
      //     activity: {
      //       activityName: "满30减6"
      //     },
      //     address: {
      //       city: "北京市",
      //       name: "昌平区",
      //       address: "霍营"
      //     }
      //   },
      //   {
      //     info: {
      //       name: "烧烤场",
      //       imageUrl:
      //         "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=833991909,3885934376&fm=26&gp=0.jpg",
      //       sellNum: 956,
      //       minPrice: 20,
      //       deliveryPrice: 3,
      //       distance: 6
      //     },
      //     support: {
      //       iconName: "准"
      //     },
      //     activity: {
      //       activityName: "满30减6"
      //     },
      //     address: {
      //       city: "北京市",
      //       name: "昌平区",
      //       address: "霍营"
      //     }
      //   },
      //   {
      //     info: {
      //       name: "烧烤场",
      //       imageUrl:
      //         "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=833991909,3885934376&fm=26&gp=0.jpg",
      //       sellNum: 956,
      //       minPrice: 20,
      //       deliveryPrice: 3,
      //       distance: 6
      //     },
      //     support: {
      //       iconName: "准"
      //     },
      //     activity: {
      //       activityName: "满30减6"
      //     },
      //     address: {
      //       city: "北京市",
      //       name: "昌平区",
      //       address: "霍营"
      //     }
      //   }
      // ]
    };
  },
  computed: {
    ...mapState(["searchShops"])
  },
  methods: {
    ...mapActions(["searchShops"]),
    onSubmit() {},
    search() {
      const flavor = this.flavor.trim();
      if (flavor) {
        searchShops(flavor);
        //this.$store.dispatch('searchShops', flavor)
      }
    }
  },
  watch: {
    searchShops(value) {
      if (!value.length) {
        // 没有数据
        this.noSearchShops = true;
      } else {
        // 有数据
        this.noSearchShops = false;
      }
    }
  },
  components: {
    HeaderTop
  }
};
</script>

<style>
</style>