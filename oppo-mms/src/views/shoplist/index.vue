<template>
  <div>
    <div class="search-wrapper">
      <div class="search-header">
        <div class="next" @click="jumpToseac">
          <img src="../../assets/img/next.png" alt />
        </div>
        <form action class="search-form">
          <div class="search-panel">
            <div class="search-icon">
              <span class="el-icon-search"></span>
            </div>
            <div class="search-box">
              <input type="text" placeholder="W31" />
            </div>
          </div>
          <input type="submit" class="search-inp" value="搜索" />
        </form>
      </div>
      <ul class="shoplist">
        <li>
          <div class="shop-box">
            <div class="shop-img">
              <img src="../../assets/img/shoplist/1-1.png" alt />
            </div>
            <div class="search-product">
              <div class="shop-title">OPPO Enco W31 真无线耳机 真爱「粉」</div>
              <div class="prcie-box">
                <div class="price">
                    <div class="young-price">￥299</div>
                    <div class="old-price">￥399</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="shop-box">
            <div class="shop-img">
              <img src="../../assets/img/shoplist/1-1.png" alt />
            </div>
            <div class="search-product">
              <div class="shop-title">OPPO Enco W31 真无线耳机 真爱「粉」</div>
              <div class="prcie-box">
                <div class="price">
                    <div class="young-price">￥299</div>
                    <div class="old-price">￥399</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="shop-box">
            <div class="shop-img">
              <img src="../../assets/img/shoplist/1-1.png" alt />
            </div>
            <div class="search-product">
              <div class="shop-title">OPPO Enco W31 真无线耳机 真爱「粉」</div>
              <div class="prcie-box">
                <div class="price">
                    <div class="young-price">￥299</div>
                    <div class="old-price">￥399</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="shop-box">
            <div class="shop-img">
              <img src="../../assets/img/shoplist/1-1.png" alt />
            </div>
            <div class="search-product">
              <div class="shop-title">OPPO Enco W31 真无线耳机 真爱「粉」</div>
              <div class="prcie-box">
                <div class="price">
                    <div class="young-price">￥299</div>
                    <div class="old-price">￥399</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="shop-box">
            <div class="shop-img">
              <img src="../../assets/img/shoplist/1-1.png" alt />
            </div>
            <div class="search-product">
              <div class="shop-title">OPPO Enco W31 真无线耳机 真爱「粉」</div>
              <div class="prcie-box">
                <div class="price">
                    <div class="young-price">￥299</div>
                    <div class="old-price">￥399</div>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="shop-box">
            <div class="shop-img">
              <img src="../../assets/img/shoplist/1-1.png" alt />
            </div>
            <div class="search-product">
              <div class="shop-title">OPPO Enco W31 真无线耳机 真爱「粉」</div>
              <div class="prcie-box">
                <div class="price">
                    <div class="young-price">￥299</div>
                    <div class="old-price">￥399</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="endding">
          <div class="text">已经到底了</div>
      </div>
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
    jumpToseac() {
      this.$router.push("/search")
    }
  }
};
</script>

<style scoped lang="scss">
.search-wrapper {
  min-height: 100vh;
  background: #fff;
  .search-header {
    right: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 7.68rem;
    height: 0.92rem;
    margin: 0 auto;
    background: #fff;
    border-bottom: 1px solid rgb(242, 242, 242);
    box-sizing: border-box;
    .next {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 0.98rem;
      height: 100%;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    .search-form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .search-panel {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: calc(100% - 1.3rem);
        height: 0.66rem;
        background: #f7f8fa;
        border-radius: 0.09rem;
        opacity: 0.9;
        align-items: center;
        .search-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 0.62rem;
          height: inherit;
          color: #b2b2b2;
          span {
            font-size: 0.26rem;
            font-weight: 800;
            color: #b2b2b2;
          }
        }
        .search-box {
          position: relative;
          width: 4.5rem;
          color: #b2b2b2;
          font-weight: 400;
          font-size: 0.26rem;
          line-height: 0.39rem;
          input {
            width: 100%;
            color: #333;
            border: none;
            background: transparent;
            outline: none;
          }
        }
      }
      .search-inp {
        width: 1.28rem;
        height: 100%;
        color: #333;
        font-weight: 500;
        font-size: 0.3rem;
        text-align: center;
        background: transparent;
        border: none;
      }
    }
  }
  .shoplist {
    padding: 0.16rem;
    overflow: hidden;
    background: #f7f8fa;
    li {
      box-sizing: border-box;
      padding: 0.08rem;
      width: 50%;
      float: left;
      .shop-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.18rem;
        overflow: hidden;
        background: #fff;
        border-radius: 0.16rem;
        .shop-img {
          width: 100%;
          min-height: 1rem;
          position: relative;
          display: inline-block;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .search-product {
          margin-top: 0.12rem;
          text-align: left;
          .shop-title {
            color: #000;
            font-weight: 500;
            font-size: 0.3rem;
            line-height: 1.5;
          }
          .prcie-box {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-top: 0.12rem;
            .price {
              display: flex;
              flex-direction: row;
              align-items: flex-end;
              justify-content: center;
              .young-price {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #f63434;
                  font-weight: 500;
                  font-size: .26rem;
              }
              .old-price {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-left: .06rem;
                  color: rgba(0,0,0,.3);
                  font-weight: 400;
                  font-size: .21rem;
                  text-decoration: line-through;
              }
            }
          }
        }
      }
    }
  }
  .endding {
      padding: .2rem 0;
      text-align: center;
      background: #f7f8fa;
      .text {
          margin: .6rem 0;
          color: #b2b2b2;
          font-size: .26rem;
      }
  }
}
</style>