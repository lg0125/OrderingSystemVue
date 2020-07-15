<template>
  <div>
    <el-button type="button" v-if="this.food.count" @click.prevent="updateFoodCount(false)"><div class="iconfont iconjianshao" ></div></el-button>
    <span class="badge badge-secondary" v-if="this.food.count">{{ this.food.count }}</span>
     <el-button type="button" @click.prevent="updateFoodCount(true)"><div class="iconfont icontianjia" ></div></el-button>
    
  </div>
</template>

<script>

export default {
    props: {
      food: Object
    },
    methods: {
      updateFoodCount(isAdd) {
        console.log(this.food)
        this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
      }
    }
}
</script>

<style>

</style>