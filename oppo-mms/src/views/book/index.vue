<template>
  <div>
    <header>
      <div class="nav-bar">
        <div class="nav-bar-left" @click="jumpToShop">
          <i class="el-icon-back"></i>
        </div>
        <div class="shopcar">提交订单页</div>
      </div>
    </header>
    <div class="content-page">
      <div class="address">
        <div class="address-content" @click="jumpToaddress">
          <i class="iconfont icon-jia"></i>
          <div class="address-text">新增收货地址</div>
        </div>
      </div>
      <div class="card-wrap">
        <div class="oc-card">
          <div class="oc-card-content" v-for="item in shoplist" :key="item.id">
            <div class="oc-card-product">
              <a href class="oc-card-img">
                <div>
                  <img :src="item.img" alt />
                </div>
              </a>
              <div class="oc-card-text">
                <div class="oc-card-title">{{item.gname}}</div>
                <div class="oc-card-price">
                  <div class="young-price">￥{{item.price}}</div>
                  <div class="old-price">{{item.oldprice ? '￥' : ''}}{{item.oldprice}}</div>
                </div>
                <div class="oc-card-num">X{{item.stock}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content-bill">
          <div class="content-bill-group">
            <div class="content-bill-top">
              <div class="title">
                <span>商品金额</span>
              </div>
              <div class="value">
                <!-- <span>￥0</span> -->
                <input type="text" :value="'￥' + add / 100">
              </div>
            </div>
            <div class="content-bill-top">
              <div class="title">
                <span>运费</span>
              </div>
              <div class="value" style="color:#666;">
                <span>￥0</span>
              </div>
            </div>
            <div class="content-bill-bot">
              <div class="content-bill-cell">
                <div class="title">
                  <span>优惠卷</span>
                </div>
                <div class="value">
                  <span>无可用 ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="content-bottom">
        <div class="content-bottom-box">
          <div class="content-bottom-item">
            <div class="content-bottom-left">发票抬头</div>
            <div class="content-bottom-right">
              <div class="group">
                <div class="pro">
                    <div class="oc-radio">
                        <i class="iconfont icon-xuanze1"></i>
                        <span>个人</span>
                    </div>
                    <div class="oc-radio">
                        <i class="iconfont icon-weixuanzhong2"></i>
                        <span>公司</span>
                    </div>
                </div>
                <div class="gongshi"></div>
              </div>
            </div>
          </div>
          <div class="content-bottom-item"></div>
        </div>
      </div>-->
    </div>
    <van-submit-bar :price="add" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
  data() {
    return {
      shoplist: [],
      sum1 : 0
    };
  },

  components: {},

  computed: {
    add() {
       Array.from(this.shoplist).forEach(item => {
        this.sum1 += Number(item.stock) * Number(item.price)
      })
      if (this.sum1) {
        return this.sum1 * 100
      }
    }
  },

  methods: {
    jumpToaddress() {
      this.$router.push("/address");
    },
    jumpToShop() {
      this.$router.push("/shopcar");
    },
    async getData() {
      let str = await this.$store.dispatch("getlocalid");
      let obj = { str };
      let p = await this.$store.dispatch("searchIdData", obj);
      this.shoplist = p.data.p;
    },
    onSubmit() {
      Dialog({ message: '由于疫情影响，暂时不允许购买' });
    }
  },

  created() {
    this.getData()
    
  }
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  .nav-bar {
    position: relative;
    height: 0.92rem;
    line-height: 0.92rem;
    text-align: center;
    background: #fff;
    .nav-bar-left {
      left: 0.32rem;
      position: absolute;
      bottom: 0;
      font-size: 0.28rem;
      i {
        vertical-align: middle;
        color: #f63434;
        min-width: 1rem;
        font-size: 0.48rem;
      }
    }
    .shopcar {
      max-width: 60%;
      margin: 0 auto;
      color: #000;
      font-weight: 500;
      font-size: 0.34rem;
    }
  }
}
.content-page {
  padding: 0.24rem 0.24rem 0 0.24rem;
  overflow: hidden;
  background: rgb(242, 242, 242);
  height: 11rem;
  position: relative;
  top: 1rem;
  .address {
    width: 100%;
    margin-bottom: 0.2rem;
    background: #fff;
    border-radius: 0.16rem;
    .address-content {
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: center;
      height: 0.94rem;
      i {
        color: rgb(246, 52, 52);
        font-size: 0.3rem;
        font-style: normal;
      }
      .address-text {
        margin-left: 0.03rem;
        color: #666;
        font-size: 0.3rem;
      }
    }
  }
  .card-wrap {
    overflow: hidden;
    border-radius: 0.16rem;
    .oc-card {
      position: relative;
      box-sizing: border-box;
      color: #333;
      font-size: 0.3rem;
      line-height: 0.3rem;
      background: #fff;
      .oc-card-content {
        padding: 0.28rem 0.24rem;
        flex: 1;
        position: relative;
        display: flex;
        .oc-card-product {
          flex: 1;
          min-width: 0;
          min-height: 1.1rem;
          position: relative;
          display: flex;
          .oc-card-img {
            position: relative;
            width: 1.1rem;
            height: 1.1rem;
            margin-right: 0.16rem;
            div {
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .oc-card-text {
            display: flex;
            flex: 1;
            flex-direction: column;
            .oc-card-title {
              font-weight: 500;
              line-height: normal;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .oc-card-price {
              margin-top: 0.1rem;
              .young-price {
                display: inline-block;
                color: #f63434;
                font-weight: 500;
              }
              .old-price {
                display: inline-block;
                margin-left: 0.06rem;
                color: #b2b2b2;
                font-size: 0.2rem;
                text-decoration: line-through;
              }
            }
            .oc-card-num {
              margin-top: 0.14rem;
              font-size: 0.2rem;
              text-align: right;
            }
          }
        }
      }
    }
  }
  .content {
    .content-bill {
      position: relative;
      margin-top: 0.22rem;
      overflow: hidden;
      border-radius: 0.16rem;
      .content-bill-group {
        background: #fff;
        .content-bill-top {
          position: relative;
          display: flex;
          box-sizing: border-box;
          width: 100%;
          padding: 0.24rem 0.24rem;
          color: #333;
          font-size: 0.3rem;
          line-height: 0.46rem;
          background: #fff;
          justify-content: space-between;
          .title {
            display: flex;
            align-items: center;
            flex: 1;
          }
          .value {
            color: #f63434;
            position: relative;
            overflow: hidden;
            text-align: right;
            vertical-align: middle;
            flex: 1;
            input {
              border: none;
              width: 1rem;
            }
          }
        }
        .content-bill-bot {
          .content-bill-cell {
            display: flex;
            box-sizing: border-box;
            width: 100%;
            padding: 0.24rem 0.24rem;
            color: #333;
            font-size: 0.3rem;
            line-height: 0.46rem;
            background: #fff;
            .title {
              width: calc(100% - 0.9rem) !important;
              flex: 1;
            }
            .value {
              position: relative;
              overflow: hidden;
              color: #666;
              text-align: right;
              vertical-align: middle;
              flex: 1;
            }
          }
        }
      }
    }
  }
  //   .content-bottom {
  //     margin-bottom: 1.56rem;
  //     .content-bottom-box {
  //       width: 100%;
  //       margin-top: 0.2rem;
  //       font-size: 0.36rem;
  //       background: #fff;
  //       border-radius: 0.16rem;
  //       .content-bottom-item {
  //         height: 0.94rem;
  //         font-size: 0.3rem;
  //         display: flex;
  //         align-content: center;
  //         justify-content: space-between;
  //         .content-bottom-left {
  //           margin-left: 0.24rem;
  //         }
  //         .content-bottom-right {
  //           margin-right: 0.24rem;
  //           .group {
  //             display: flex;
  //             .pro {
  //               margin-right: 0.3rem;
  //               display: flex;
  //               align-items: center;
  //               .oc-radio {
  //                   flex: none;
  //                   width: .6rem;
  //                   height: .6rem;
  //                   color: #b2b2b2;
  //                   font-size: .3rem;
  //                   line-height: 2em;
  //                   i {
  //                       color: #f63434;
  //                       display: block;
  //                       width: 0.3em;
  //                       height: 0.3em;
  //                       font-size: 1.6em;
  //                       line-height: inherit;
  //                       text-align: center;
  //                   }
  //                   span {
  //                       margin-left: .08rem;
  //                       color: #333;
  //                       line-height: .3rem;
  //                   }
  //               }
  //             }
  //             .gongshi {
  //               display: flex;
  //               align-items: center;
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
}
</style>