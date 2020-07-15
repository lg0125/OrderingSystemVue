<template>
  <div>
    <ul v-if="this.goods.length">
      <li v-for="(good,index) in this.goods" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="good.food.imageUrl" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ good.food.foodName }}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">口味:{{ good.food.flavor }}</li>
            <li class="list-group-item">单价:{{ good.food.foodPrice}}</li>
            <li class="list-group-item">类型:{{ good.foodType.name}}</li>
          </ul>
          <div class="card-body">
            <CartControl :food="good" />
          </div>
        </div>
      </li>
    </ul>
    <ShopCart/>
  </div>
</template>

<script>
import CartControl from "../../../components/CartControl/index";
import ShopCart from "../../../components/ShopCart/index";
import { mapState } from "vuex";
export default {
  name: "ShopGoods",
  data() {
    return {
      // food: {},
      // goods: [
      //   {
      //     shopId: 101,
      //     foodId: 101,
      //     foodName: "肉蛋葱鸡",
      //     foodPrice: 30,
      //     flavor: "五香"
      //   },
      //   {
      //     shopId: 101,
      //     foodId: 101,
      //     foodName: "肉蛋葱鸡",
      //     foodPrice: 30,
      //     flavor: "五香"
      //   }
      // ]
    };
  },
  methods: {},
  mounted() {
    const shop_id = this.$route.query.shop_id;
    console.log(shop_id);
    this.$store.dispatch("getShopGoods", shop_id);
  },
  computed: {
    ...mapState(["goods"])
  },
  components: {
    CartControl,
    ShopCart
  }
};
</script>

<style>
</style>