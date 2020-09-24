<template>
  <div>
    <ShopHeader />
    <div class="no-parameter">
        <div class="img-box">
            <img src="../../assets/img/shop/noparameter.png" alt="">
        </div>
        <div class="no-parameter-dec">该商品暂无参数</div>
    </div>
    <ShopBottom />
  </div>
</template>

<script>
import ShopHeader from "@/components/ShopHeader"
import ShopBottom from "@/components/ShopBottom"
export default {
  data () {
    return {
    }
  },

  components: {ShopBottom,ShopHeader},

  methods: {}
}
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
.no-parameter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: calc(100vh - 1.2rem);
    .img-box {
        width: 1.3rem;
        height: 1.3rem;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .no-parameter-dec {
        margin-top: .28rem;
        color: #b2b2b2;
        font-size: .28rem;
    }
}

</style>