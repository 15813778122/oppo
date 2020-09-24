<template>
  <div class="bottom-bar">
    <!-- <div class="oc-box">
      <a href class="box-icon">
        <i class="iconfont icon-home"></i>
        <div class="bot">首页</div>
      </a>
      <a href class="box-icon">
        <i class="iconfont icon-huaban1fuben26"></i>
        <div class="bot">客服</div>
      </a>
      <a href class="box-icon">
        <i class="iconfont icon-shopping-cart"></i>
        <div class="bot">购物车</div>
      </a>
      <div class="button-box">
        <button
          class="oc-button"
          style="background: #f63434;margin-right: 0.2rem;margin-left: 0.2rem;"
        >
          <span>立即购买</span>
        </button>
        <button class="oc-button">
          <span>加入购物车</span>
        </button>
      </div>
    </div>-->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="jumpToshopCar"/>
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addshopcar"/>
      <van-goods-action-button type="danger" text="立即购买" @click="jumpTobook"/>
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant';
// import store from "./store";//vuex存储库
export default {
  data() {
    return {
      thisshop:{
        gname:'A11 4G+64G 极夜黑',
        price:1199,
        oldprice:'',
        stock:2,
        img:'https://dsfs.oppo.com/archives/201910/201910290810505db83442b93ca.png'
      }
    };
  },

  components: {},

  methods: {
    jumpToshopCar() {
      this.$router.push('/shopcar')
    },
    addshopcar() {
      this.$store.dispatch('SetId',this.thisshop)
      this.$store.dispatch('GetToken')
      // if (store.state.user.token) {
      //   Toast('成功加入购物车');
      // } else {
      //   Toast('请先登录，如果没有账号请注册');
      //   this.$router.push('/login')
      // }
    },
    jumpTobook() {
      this.$router.push('/book')
    }
  }
};
</script>

<style scoped lang="scss">
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 1rem;
  background: #fff;
  border-top: 1px solid rgb(242, 242, 242);
  .oc-box {
    display: flex;
    align-items: center;
    height: 1.2rem;
    .box-icon {
      position: relative;
      flex-direction: column;
      width: 0.96rem;
      border-right: 1px solid #f0f0f0;
      display: flex;
      align-items: center;
      i {
        margin-bottom: 0.08rem;
        color: #666;
        font-size: 0.48rem;
      }
      .bot {
        font-size: 0.22rem;
      }
    }
    .button-box {
      display: flex;
      flex: 1;
      flex-direction: row-reverse;
      margin-left: 0.1rem;
      align-items: center;
      .oc-button {
        border: none;
        order: 1;
        margin-right: 0.2rem;
        color: #fff;
        background: #ff722c;
        min-width: 2.04rem;
        height: 0.72rem;
        margin: 0;
        padding: 0 0.12rem;
        font-size: 0.28rem;
        line-height: normal;
        text-align: center;
        border-radius: 0.12rem;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>