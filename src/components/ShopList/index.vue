<template>
  <div>
    <ul v-if="this.shops.length">
      <li v-for="(shop,index) in this.shops" :key="index">
        <router-link :to="{path: '/shop',query: {shop_id: shop.info.shopId }}">
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
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ShopList",
  data() {
    return {
      //baseImgUrl: "http://cangdu.org:8001/img/",
      // shops: [
      //   {
      //     info: {
      //       shopId: 12345,
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
      //       shopId: 12345,
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
      //       shopId: 12345,
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
    ...mapState(["shops"])
  }
};
</script>

<style>
</style>