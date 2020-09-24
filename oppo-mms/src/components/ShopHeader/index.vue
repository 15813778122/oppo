<template>
  <div class="shop-header">
    <div class="next" @click="jumpTohome">
      <i class="el-icon-back"></i>
    </div>
    <div class="changetab">
      <!-- <div class="oc-tab">
        <span class="active">商品详情</span>
      </div>
      <div class="oc-tab">
        <span>用户评论</span>
      </div>
      <div class="oc-tab">
        <span>参数包装</span>
      </div> -->
      <router-link to="/shop" tag="div" class="oc-tab">
        <span :class="$route.path == '/shop' ? 'active' : ''">商品详情</span>
      </router-link>
      <router-link to="/userTalk" tag="div" class="oc-tab">
        <span :class="$route.path == '/userTalk' ? 'active' : ''">用户评论</span>
      </router-link>
      <router-link to="/noparameter" tag="div" class="oc-tab">
        <span :class="$route.path == '/noparameter' ? 'active' : ''">参数包装</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    jumpTohome() {
      this.$router.push("/")
    }

  }
};
</script>

<style scoped lang="scss">
.shop-header {
  display: flex;
  height: 0.79rem;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  overflow: hidden;
  border-bottom: 1px solid rgb(242, 242, 242);
  box-sizing: border-box;
  .next {
    position: relative;
    top: 75%;
    left: 0.44rem;
    z-index: 100;
    transform: translateY(-50%);
    margin-right: 1rem;
    i {
      color: rgb(246, 52, 52);
      font-size: 0.46rem;
    }
  }
  .changetab {
    display: flex;
    min-width: 4.5rem;
    .oc-tab {
      flex: 1;
      box-sizing: border-box;
      min-width: 0;
      padding: 0 0.06rem;
      color: #666;
      font-size: 0.28rem;
      line-height: 0.8rem;
      text-align: center;
      .active {
        color: #f63434;
        font-weight: 500;
      }
    }
  }
}
</style>