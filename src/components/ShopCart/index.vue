<template>
  <div>
    <div class="media" @click="toggleShow">
      <div class="media-body">
        <p v-if="this.totalCount">总价: {{ this.totalPrice }}</p>
        <p>另需配送费￥{{info.info.deliveryPrice}}元</p>
      </div>
      <button
        type="button"
        class="btn ml-3"
        :class="payClass"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        @click="dialogFormVisible = true"
      >{{ payText }}</button>
      <button type="button" class="btn btn-primary" @click="clearCart">清空购物车</button>
    </div>
    <div class="collapse" id="collapseExample" v-if="this.listShow">
      <div class="card" style="width: 18rem;">
        <ul v-if="cartFoods.length">
          <li v-for="(food, index) in this.cartFoods" :key="index">
            <div class="card" style="width: 18rem;">
              <img :src="food.food.imageUrl" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ food.food.foodName }}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">口味:{{ food.food.flavor }}</li>
                <li class="list-group-item">单价:{{ food.food.foodPrice}}</li>
                <li class="list-group-item">类型:{{ food.foodType.name}}</li>
              </ul>
              <div class="card-body">
                <CartControl :food="food" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog title="支付信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="支付账号" :label-width="formLabelWidth">
          <el-input v-model="form.cardId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="支付密码" :label-width="formLabelWidth">
          <el-input v-model="form.cardPassword" autocomplete="off" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="pay">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { saveOrder, savePay } from "../../api/index";
import CartControl from "../CartControl/index";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      //isShow: false,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      form: {
        cardId: "",
        cardPassword: ""
      },
      orderId: 1,
      //items: []
      // totalCount: 230,
      // info: {
      //   deliveryPrice: 5
      // }
    };
  },
  computed: {
    ...mapState(["cartFoods", "info", "userInfo"]),
    ...mapGetters(["totalCount", "totalPrice"]),
    payClass() {
      const { totalPrice } = this;
      const { minPrice } = this.info.info;
      return totalPrice >= minPrice ? "btn-success" : "btn-danger";
    },
    payText() {
      const { totalPrice } = this;
      const { minPrice } = this.info.info;
      console.log(totalPrice, minPrice);
      if (totalPrice === 0) {
        return `￥${minPrice}元起送`;
      } else if (totalPrice < minPrice) {
        return `还差￥${minPrice - totalPrice}元起送`;
      } else {
        return "结算";
      }
    },
    listShow() {
      // 如果总数量为0, 直接不显示
      if (this.totalCount === 0) {
        return false;
      }

      return true;
    }
  },
  methods: {
    toggleShow() {
      if (this.totalCount > 0) {
        this.isShow = !this.isShow;
      }
    },

    clearCart() {
      this.$store.dispatch("clearCart");
    },

    pay() {
      const {shopId} = this.info.info;
      const {userId} = this.userInfo;
      console.log(userId);
      // const items = this.cartFoods.reduce((preItems, food) => {
      //   let item = {
      //     foodId: food.food.foodId,
      //     foodAccount: food.food.foodPrice,
      //     foodNum: food.count
      //   };
      //   return preItems.push(item)
      // }, []);

      let items = []
      for (var i = 0; i < this.cartFoods.length; i++) {
        let food = this.cartFoods[i];
        let item = {
          foodId: food.food.foodId,
          foodAccount: food.food.foodPrice,
          foodNum: food.count
        };
        items.push(item);
      }

      saveOrder(userId, shopId, items).then(response => {
        this.orderId = response.orderInfo.orderId;
      });

      const orderId = this.orderId;
      const cardId = Number(this.form.cardId);
      const cardPassword = Number(this.form.cardPassword);
      const { totalPrice } = this;
      const payMoney = totalPrice;
      const orderMoney = totalPrice;

      let payTo = {
        orderId: orderId,
        cardId: cardId,
        cardPassword: cardPassword,
        payMoney: payMoney,
        orderMoney: orderMoney
      };

      savePay(payTo).then(() => {
        this.dialogFormVisible = false;
        this.$router.push("/home");
      });
    }
  },
  components: {
    CartControl
  }
};
</script>

<style>
</style>