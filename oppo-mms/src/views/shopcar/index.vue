<template>
  <div id="shopcar">
    <header>
      <div class="nav-bar">
        <div class="nav-bar-left" @click="jumpTohome">
          <i class="el-icon-back"></i>
        </div>
        <div class="shopcar">购物车</div>
      </div>
    </header>
    <div class="cart">
      <div class="cart-empty" v-show="shoplist ? false : true">
        <div class="pull-shop">
          <div class="pull-shop-head"></div>
          <div class="pull-shop-bot">
            <img src="../../assets/img/shopcar/noshop.png" alt />
            <h2>购物车空空，该补货啦！</h2>
          </div>
        </div>
      </div>
      <div class="cart-content">
        <div class="have-shop">
          <div class="pull-shop-head"></div>
          <ul class="cart-list">
            <li v-for="item in shoplist" :key="item.id">
              <div class="cart-content2">
                <div class="cart-product">
                  <div class="cart-chosen">
                    <div class="cart-checkbox">
                      <div class="icon-checkbox">
                        <i
                          :class="item.flag ? 'iconfont icon-xuanzhong red' : 'iconfont icon-fuxuankuangweigouxuan'"
                          @click="item.flag = !item.flag"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <a class="cart-img">
                    <div class="oc-img">
                      <img :src="item.img" alt />
                    </div>
                  </a>
                  <div class="cart-info">
                    <div class="cart-title">{{ item.gname }}</div>
                    <div class="price">
                      <div class="young-price">￥{{ item.price }}</div>
                      <div
                        class="old-price"
                      >{{item.oldprice ? '￥' : ''}}{{ item.oldprice ? item.oldprice : '' }}</div>
                    </div>
                    <div class="cart-btn">
                      <!-- <div class="cart-btn-left">
                        <button class="sub">-</button>
                        <input type="number" v-model="item.num" class="num" />
                        <button class="add">+</button>
                      </div>-->
                      <van-stepper v-model="item.stock"/>
                      <button class="cart-btn-right" @click="del(item.id)">
                        <i class="iconfont icon-lajitong3x"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <!-- <li>
              <div class="cart-content2">
                <div class="cart-product">
                  <div class="cart-chosen">
                    <div class="cart-checkbox">
                      <div class="icon-checkbox">
                        <i
                          :class="flag ? 'iconfont icon-xuanzhong red' : 'iconfont icon-fuxuankuangweigouxuan'"
                          @click="btn"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <a class="cart-img">
                    <div class="oc-img">
                      <img src="../../assets/img/shopcar/1-1.png" alt />
                    </div>
                  </a>
                  <div class="cart-info">
                    <div class="cart-title">Find X2 Pro 12G+256G 竹青</div>
                    <div class="price">
                      <div class="young-price">￥6999</div>
                      <div class="old-price"></div>
                    </div>
                    <div class="cart-btn">
                      <div class="cart-btn-left">
                        <button class="sub">-</button>
                        <input type="number" v-model="num" class="num" />
                        <button class="add">+</button>
                      </div>
                      <button class="cart-btn-right">
                        <i class="iconfont icon-lajitong3x"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>-->
          </ul>
        </div>
      </div>
      <div class="submit-shop">
        <!-- <div class="submit-shop-bar">
          <div class="submit-shop-left">
            <span>合计</span>
            <span class="submit-shop-price">￥0</span>
          </div>
          <button class="submit-shop-right">
              <span>去结算</span>
          </button>
        </div>-->
        <van-submit-bar :price="add2 * 100" button-text="提交订单" @submit="onSubmit" />
      </div>
    </div>
    <AppBottom />
  </div>
</template>

<script>
import AppBottom from "@/components/AppBottom";
export default {
  data() {
    return {
      // sum: 0,
      value: 1,
      flag: true,
      num: 1,
      shoplist: [],
      ids:"",
      obj:{
        num:0
      },
      id:""
    };
  },

  components: { AppBottom },

  computed: {
    add2() {
      let num = 0;
      this.shoplist.forEach(item => {
        if (item.flag) {
          num += item.price * item.stock;
        }
      });
      return num;
    }
  },

  methods: {
    onSubmit() {
      this.$router.push("/book");
      let arr = Array.from(this.shoplist).filter(item => item.flag);
      let arr2 = []
      for(let i = 0 ; i < arr.length; i++) {
        arr2.push(arr[i].id)
      }
      let obj = {...arr2}
      let str = ''
      for(let key in obj) {
        str += obj[key] + ','
      }
      str = str.slice(0,-1)
      let obj2 = {str}
      this.$store.dispatch('setId',obj2)
    },
    del(id) {
      this.shoplist = this.shoplist.filter(item => item.id != id);
      this.$store.dispatch("delShopCarData", id).then(res => {
        if (res.flag) {
          Toast("删除成功");
        }
      });
    },
    price() {
      let last = this.shoplist.filter(item => item.flag == true);
      this.sum = 0;
      last.forEach(item => {
        this.sum += item.num * item.price;
      });
      // this.sum = this.sum.toFixed(0)
    },
    jumpTohome() {
      this.$router.push("/");
    },
    async getData() {
      let p = await this.$store.dispatch("GetShopCarData");
      this.shoplist = p.data.p;
    }
  },

  created() {
    this.price();
    this.getData();
  },

  watch: {
    shoplist: {
      deep: true,
      handler(newval) {
        newval.forEach(shop => {
          if (shop.flag || shop.num) {
            this.price();
          }
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
#shopcar {
  min-height: 13rem;
  background: #f7f8fa;
}
.pull-shop-head {
  position: absolute;
  top: -1rem;
  left: 0;
  width: 100%;
  height: 1rem;
  overflow: hidden;
  color: #666;
  font-size: 0.2rem;
  line-height: 1rem;
  text-align: center;
}
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
.cart {
  padding: 0.36rem;
  padding-bottom: 2.4rem;
  .cart-empty {
    margin-top: 0.72rem;
    text-align: center;
    .pull-shop {
      max-height: 100vh;
      .pull-shop-bot {
        margin-top: 2rem;
        img {
          width: 1.4rem;
          height: 1.4rem;
        }
        h2 {
          margin: 0.28rem auto 0.4rem;
          color: #b2b2b2;
          font-size: 0.28rem;
          line-height: 1;
          font-weight: normal;
        }
      }
    }
  }
  .cart-content {
    margin-top: 0.8rem;
    .have-shop {
      min-height: 88vh;
      .cart-list {
        li {
          margin: 0 auto;
          margin-top: 0.2rem;
          border-radius: 0.16rem;
          font-size: 0.3rem;
          line-height: 0.3rem;
          background: #fff;
          position: relative;
          box-sizing: border-box;
          .cart-content2 {
            position: relative;
            padding: 0.28rem 0.24rem;
            .cart-product {
              display: flex;
              flex-direction: row;
              height: 1.8rem;
              align-items: center;
              flex: 1;
              min-width: 0;
              min-height: 1.1rem;
              .cart-chosen {
                padding-bottom: 0.28rem;
                .cart-checkbox {
                  margin-top: 0.32rem;
                  align-items: center;
                  .icon-checkbox {
                    width: 0.48rem;
                    height: 0.48rem;
                    color: #b2b2b2;
                    font-size: 0.3rem;
                    i {
                      display: block;
                      box-sizing: border-box;
                      line-height: inherit;
                      text-align: center;
                      font-weight: 300;
                      font-size: 0.3rem;
                    }
                    .red {
                      color: #f63434;
                    }
                  }
                }
              }
              .cart-img {
                position: relative;
                width: 1.1rem;
                height: 1.1rem;
                margin-right: 0.16rem;
                .oc-img {
                  width: 100%;
                  height: 100%;
                  img {
                    display: block;
                    width: 1.1rem;
                    height: 1.1rem;
                  }
                }
              }
              .cart-info {
                display: flex;
                flex-direction: column;
                .cart-title {
                  font-weight: 500;
                  width: 4.5rem;
                  line-height: normal;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
                .price {
                  margin-top: 0.1rem;
                  .young-price {
                    display: inline-block;
                    color: #f63434;
                    font-weight: 500;
                  }
                  .old-price {
                    position: relative;
                    display: inline-block;
                    margin-left: 0.06rem;
                    color: #b2b2b2;
                    font-size: 0.2rem;
                    text-decoration: line-through;
                  }
                }
                .cart-btn {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 4.5rem;
                  margin-top: 0.34rem;
                  .cart-btn-left {
                    font-size: 0;
                    .sub {
                      border-radius: 0.1rem;
                      color: #b2b2b2;
                      background: #f7f8fa;
                      position: relative;
                      box-sizing: border-box;
                      width: 1em;
                      height: 1em;
                      margin: 0;
                      padding: 0;
                      font-size: 0.42rem;
                      vertical-align: middle;
                      border: none;
                      text-align: center;
                    }
                    .num {
                      box-sizing: border-box;
                      width: 0.6rem;
                      height: 0.42rem;
                      margin: 0 0.02rem;
                      padding: 0;
                      font-size: 0.24rem;
                      text-align: center;
                      vertical-align: middle;
                      border: none;
                      border-width: 1px 0;
                      border-radius: 0;
                    }
                    .add {
                      border-radius: 0.1rem;
                      color: #b2b2b2;
                      background: #f7f8fa;
                      position: relative;
                      box-sizing: border-box;
                      width: 1em;
                      height: 1em;
                      margin: 0;
                      padding: 0;
                      font-size: 0.42rem;
                      vertical-align: middle;
                      border: none;
                      text-align: center;
                    }
                  }
                  .cart-btn-right {
                    border: none;
                    background: transparent;
                    i {
                      color: #666;
                      font-size: 0.36rem;
                    }
                  }
                  .van-stepper__input {
                    height: 18px;
                    height: 18px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .submit-shop {
    position: fixed;
    left: 0;
    z-index: 100;
    width: 100%;
    background: #fff;
    bottom: 1.1rem;
    .submit-shop-bar {
      display: flex;
      height: 1.2rem;
      align-items: center;
      justify-content: space-between;
      padding: 0 0.24rem;
      font-size: 0.28rem;
      .submit-shop-left {
        .submit-shop-price {
          margin-left: 0.08rem;
          color: #f63434;
          font-size: 0.4rem;
          line-height: 0.4rem;
        }
      }
      .submit-shop-right {
        width: 2.06rem;
        color: #fff;
        background: #f63434;
        min-width: 2.04rem;
        height: 0.72rem;
        font-size: 0.28rem;
        line-height: normal;
        text-align: center;
        border: none;
        border-radius: 0.12rem;
      }
    }
    .van-submit-bar {
      bottom: 55px;
    }
  }
}
</style>