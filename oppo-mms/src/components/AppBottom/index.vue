<template>
  <div class="common-tabbar">
    <ul>
      <!-- <li>
        <div class="img-icon el-icon-price-tag red">
        </div>
        <div class="text red" >首页</div>
      </li> -->
      <!-- <li>
        <div class="img-icon el-icon-menu">
        </div>
        <div class="text">分类</div>
      </li>
      <li>
        <div class="img-icon el-icon-shopping-cart-2">
        </div>
        <div class="text">购物车</div>
      </li>
      <li>
        <div class="img-icon el-icon-user">
        </div>
        <div class="text">我的</div>
      </li> -->
      <router-link to="/" tag="li" exact>
        <div :class="$route.path == '/' ? 'img-icon el-icon-price-tag red' : 'img-icon el-icon-price-tag'">
        </div>
        <div :class="$route.path == '/' ? 'text red' : 'text'" >首页</div>
      </router-link>
      <router-link to="/kinds" tag="li">
        <div :class="$route.path == '/kinds' ? 'img-icon el-icon-menu red' : 'img-icon el-icon-menu'">
        </div>
        <div :class="$route.path == '/kinds' ? 'text red' : 'text'" >分类</div>
      </router-link>
      <router-link to="/shopcar" tag="li">
        <div :class="$route.path == '/shopcar' ? 'img-icon el-icon-shopping-cart-2 red' : 'img-icon el-icon-shopping-cart-2'">
        </div>
        <div :class="$route.path == '/shopcar' ? 'text red' : 'text'" >购物车</div>
      </router-link>
      <router-link to="/mine" tag="li">
        <div :class="$route.path == '/mine' ? 'img-icon el-icon-user red' : 'img-icon el-icon-user'">
        </div>
        <div :class="$route.path == '/mine' ? 'text red' : 'text'" >我的</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {}
};
</script>

<style scoped lang="scss">
.common-tabbar {
  position: fixed;
  z-index: 999;
  right: 0;
  bottom: 0;
  width: 100%;
  min-width: 7.68rem;
  margin: auto;
  background: #fff;
  border-top: 1px solid rgb(242, 242, 242);
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    li {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0.14rem auto 0.2rem;
      font-weight: 500;
      font-size: 0.2rem;
      line-height: 1;
      .img-icon {
        margin-bottom: 0.08rem;
        font-size: 0.48rem;
        // img {
        //   display: block;
        //   height: .48rem;
        // }
      }
      .text {
        text-align: center;
      }
      .red {
        color: #f63434;
      }
    }
  }
}
</style>