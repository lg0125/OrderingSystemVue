<template>
  <div>
    <HeaderTop :title="title"></HeaderTop>

    <div class="jumbotron" v-if="!userInfo.userId">
      <h1 class="display-4">登录后查看</h1>
      <img src="./image/person.png" />
      <router-link to="/login">
        <button type="button" class="btn btn-primary">立即登录</button>
      </router-link>
    </div>

    <ul v-if="orders.length">
      <li v-for="(order,order_index) in orders" :key="order_index">
        <ul v-if="order.items.length">
          <li v-for="(item,item_index) in order.items" :key="item_index">
            <div class="card" style="width: 18rem;">
              <!-- <img :src="item.imageUrl" /> -->
              <div class="card-body">
                <h5 class="card-title">{{ item.foodName }}</h5>
                <p class="card-text">{{ item.foodNum }}</p>
                <p class="card-text">{{ item.foodPrice }}</p>
                <p class="card-text">{{ item.flavor }}</p>
                <p class="card-text">{{ item.typeName }}</p>
              </div>
            </div>
          </li>
        </ul>
        <p>订单编号: {{ order.info.orderId }}</p>
        <p>订单金额: {{ order.info.orderAccount }}</p>
        <p>地址: {{ order.shop.city}}{{order.shop.name}} {{order.shop.address}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HeaderTop from "../../components/HeaderTop/index";
export default {
  name: "Order",
  data() {
    return {
      title: "订单列表",
      // userInfo: {
      //   userId: 12345
      // },
      orders: [
        {
          items: [
            {
              foodName: "肉蛋葱鸡",
              foodNum: 3,
              foodPrice: 39,
              flavor: "五香",
              typeName: "热菜",
              imageUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594470937009&di=40cc156a56d289b335a983f265c9459e&imgtype=0&src=http%3A%2F%2Fimg.ysoow.com%2Fyuxiangyuan%2F2019%2F03%2F20190316lfd1552716360.jpg"
            },
            {
              foodName: "肉蛋葱鸡",
              foodNum: 3,
              foodPrice: 39,
              flavor: "五香",
              typeName: "热菜",
              imageUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594470937009&di=40cc156a56d289b335a983f265c9459e&imgtype=0&src=http%3A%2F%2Fimg.ysoow.com%2Fyuxiangyuan%2F2019%2F03%2F20190316lfd1552716360.jpg"
            }
          ],
          shop: {
            address: "故宫",
            city: "北京市",
            name: "海淀区"
          },
          info: {
            orderAccount: 234,
            orderId: 101
          }
        },
        {
          items: [
            {
              foodName: "肉蛋葱鸡",
              foodNum: 3,
              foodPrice: 39,
              flavor: "五香",
              typeName: "热菜",
              imageUrl: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594470937009&di=40cc156a56d289b335a983f265c9459e&imgtype=0&src=http%3A%2F%2Fimg.ysoow.com%2Fyuxiangyuan%2F2019%2F03%2F20190316lfd1552716360.jpg"
            },
            {
              foodName: "肉蛋葱鸡",
              foodNum: 3,
              foodPrice: 39,
              flavor: "五香",
              typeName: "热菜",
              imageUrl:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594470937009&di=40cc156a56d289b335a983f265c9459e&imgtype=0&src=http%3A%2F%2Fimg.ysoow.com%2Fyuxiangyuan%2F2019%2F03%2F20190316lfd1552716360.jpg"
            }
          ],
          shop: {
            address: "故宫",
            city: "北京市",
            name: "海淀区"
          },
          info: {
            orderAccount: 234,
            orderId: 101
          }
        }
      ]
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  components: {
    HeaderTop
  }
};
</script>

<style>
</style>