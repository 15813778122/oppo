<template>
  <div style="overflow:hidden">
    <header>
      <div class="top">
        <div class="logo"></div>
        <div class="search-shop" @click="jumpToseac">
          <div class="search-icon el-icon-search"></div>
          <div class="search-text">
            <input type="text" />
            <div class="search-box">
              <!-- <ul class="shopName">
                <li>新品Reno4系列</li>
                <li>W31蓝牙耳机</li>
                <li>A92s</li>
                <li>W51真无线降噪耳机</li>
                <li>Find X2系列</li>
                <li>OPPO手环</li>
                <li>Ace2</li>
                <li>游戏手柄</li>
              </ul>-->
              <van-swipe style="height: 33px;" vertical :autoplay="3000" class="shopName">
                <van-swipe-item class="shopName-li">新品Reno4系列</van-swipe-item>
                <van-swipe-item class="shopName-li">W31蓝牙耳机</van-swipe-item>
                <van-swipe-item class="shopName-li">W51真无线降噪耳机</van-swipe-item>
                <van-swipe-item class="shopName-li">Find X2系列</van-swipe-item>
                <van-swipe-item class="shopName-li">OPPO手环</van-swipe-item>
                <van-swipe-item class="shopName-li">Ace2</van-swipe-item>
                <van-swipe-item class="shopName-li">游戏手柄</van-swipe-item>
                <div class="van-swipe__indicators van-swipe__indicators--vertical"></div>
              </van-swipe>
            </div>
          </div>
        </div>
        <div class="login" @click="jumpToLogin">{{ name ? '' : '登录' }}</div>
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item class="my-van-swipe">
          <img src="../../assets/img/banner1.jpg" alt />
        </van-swipe-item>
        <van-swipe-item class="my-van-swipe">
          <img src="../../assets/img/banner2.jpg" alt />
        </van-swipe-item>
        <van-swipe-item class="my-van-swipe">
          <img src="../../assets/img/banner3.jpg" alt />
        </van-swipe-item>
      </van-swipe>
    </header>
    <section class="nav-icon">
      <ul class="nav-icon-top">
        <li>
          <div>官方正品</div>
        </li>
        <span>|</span>
        <li>
          <div>全场包邮</div>
        </li>
        <span>|</span>
        <li>
          <div>1年全国联保</div>
        </li>
        <span>|</span>
        <li>
          <div>30天换货</div>
        </li>
      </ul>
      <ul class="nav-icon-bottom">
        <li>
          <div class="item-img">
            <div class="oc-image">
              <img src="../../assets/img/2-1.png" alt />
            </div>
            <div class="title">以旧换新</div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <div class="oc-image">
              <img src="../../assets/img/2-2.png" alt />
            </div>
            <div class="title">积分抵现</div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <div class="oc-image">
              <img src="../../assets/img/2-3.png" alt />
            </div>
            <div class="title">新人福利</div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <div class="oc-image">
              <img src="../../assets/img/2-4.png" alt />
            </div>
            <div class="title">配件馆</div>
          </div>
        </li>
        <li>
          <div class="item-img">
            <div class="oc-image">
              <img src="../../assets/img/2-5.png" alt />
            </div>
            <div class="title">下载APP</div>
          </div>
        </li>
      </ul>
    </section>
    <article class="main">
      <div class="floor-one">
        <img src="../../assets/img/3-1.png" alt />
      </div>
      <div class="floor-two">
        <ul>
          <li>
            <div @click="jumpToShop">
              <img src="../../assets/img/3-2.png" alt />
            </div>
            <div>
              <img src="../../assets/img/3-3.png" alt />
            </div>
          </li>
          <li>
            <div>
              <img src="../../assets/img/3-4.png" alt />
            </div>
            <div>
              <img src="../../assets/img/3-5.png" alt />
            </div>
          </li>
          <li>
            <div>
              <img src="../../assets/img/3-6.png" alt />
            </div>
            <div>
              <img src="../../assets/img/3-7.png" alt />
            </div>
          </li>
          <li>
            <div class="item-box">
              <div>
                <img src="../../assets/img/3-8.png" alt />
              </div>
              <div>
                <img src="../../assets/img/3-9.png" alt />
              </div>
            </div>
            <div class="item-box">
              <div>
                <img src="../../assets/img/3-10.png" alt />
              </div>
              <div>
                <img src="../../assets/img/3-11.png" alt />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <section class="finish">
        <div class="finish-top">
          <div class="title-item-left">
            <div class="title">今日必抢</div>
            <div class="title-time">
              <!-- <div class="flash-time-number">00</div>:
              <div class="flash-time-number">00</div>:
              <div class="flash-time-number">00</div>-->
              <van-count-down :time="1594033386000">
                <template v-slot="timeData">
                  <span class="block">{{ timeData.hours }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.minutes }}</span>
                  <span class="colon">:</span>
                  <span class="block">{{ timeData.seconds }}</span>
                </template>
              </van-count-down>
            </div>
            <div class="title-end">后结束</div>
          </div>
          <div class="title-item-right">
            <div class="more">更多 ></div>
          </div>
        </div>
        <div class="finish-bot">
          <!-- <ul>
            <li>
              <div class="product-img-box">
                <img src="../../assets/img/4-1.png" alt />
              </div>
              <div class="product-description">
                <div class="product-identity">半入耳式耳机 3.5mm接口</div>
                <div class="price-wrapper">
                  <div class="price-panel">
                    <div class="young-price">￥29.90</div>
                    <div class="old-price">￥59</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="product-img-box">
                <img src="../../assets/img/4-2.png" alt />
              </div>
              <div class="product-description">
                <div class="product-identity">Reno 10 倍变焦版 8G+256G 极夜黑</div>
                <div class="price-wrapper">
                  <div class="price-panel">
                    <div class="young-price">￥2499</div>
                    <div class="old-price">￥4799</div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="product-img-box">
                <img src="../../assets/img/4-3.png" alt />
              </div>
              <div class="product-description">
                <div class="product-identity">10000mAh 快充移动电源</div>
                <div class="price-wrapper">
                  <div class="price-panel">
                    <div class="young-price">￥99</div>
                    <div class="old-price">￥149</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>-->

          <swiper :options="swiperOption" class="item-box">
            <swiper-slide
              class="swiper-slide item"
              v-for="item in shoplist"
              :key="item.id"
              style="width:0rem;!important"
            >
              <img :src="item.img" alt />
              <div class="item-name">{{item.gname}}</div>
              <div class="price">
                <div class="young-price">￥{{item.price}}</div>
                <div class="old-price">￥{{item.oldprice}}</div>
              </div>
            </swiper-slide>
          </swiper>

        </div>
      </section>
      <div class="product-container">
        <div class="title-box">
          <div class="title-left">手机专区</div>
          <div class="more">更多 ></div>
        </div>
        <div class="floor-panel">
          <img src="../../assets/img/5-1.jpg" alt />
        </div>
        <div class="product-panel">
          <ul>
            <li v-for="item in one" :key="item.id">
              <div class="img-tag">
                <div class="product-img">
                  <img :src="item.img" alt />
                </div>
              </div>
              <div class="translate">
                <div class="tag">立减350</div>
              </div>
              <div class="dis">
                <div class="product-identity">{{item.gname}}</div>
                <div class="price-wrapper">
                  <div class="price-panel">
                    <div class="young-price">￥{{item.price}}</div>
                    <div class="old-price">{{item.oldprice ? '￥' : ''}}{{item.oldprice}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="product-container">
        <div class="title-box">
          <div class="title-left">智能硬件</div>
          <div class="more">更多 ></div>
        </div>
        <div class="floor-panel">
          <img src="../../assets/img/6-1.jpg" alt />
        </div>
        <div class="product-panel">
          <ul>
            <li v-for="item in two" :key="item.id">
              <div class="img-tag">
                <div class="product-img">
                  <img :src="item.img" alt />
                </div>
              </div>
              <div class="translate">
                <div class="tag tag-green">新品</div>
              </div>
              <div class="dis">
                <div class="product-identity">{{item.gname}}</div>
                <div class="price-wrapper">
                  <div class="price-panel">
                    <div class="young-price">￥{{item.price}}</div>
                    <div class="old-price">{{item.oldprice ? '￥' : ''}}{{item.oldprice}}</div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="article-end"></div>
    </article>
    <section class="hung-bar">
      <button class="listen" v-show="isShowimg === true">
        <div></div>
      </button>
      <button class="returntop" v-show="isShowimg === true">
        <div @click="goTop"></div>
      </button>
    </section>
    <footer>
      <ul>
        <li>
          <i class="el-icon-mobile-phone"></i>
          <span>下载APP</span>
        </li>
        <li>
          <i class="el-icon-finished"></i>
          <span>登录账号</span>
        </li>
      </ul>
      <div class="footer-detail">
        <div class="clause">
          <ul>
            <li>营业执照</li>
            <li>隐私政策</li>
            <li>用户协议</li>
          </ul>
        </div>
        <div class="copyright">&copy; 2005 - 2020 OPPO 版权所有 粤ICP备14056724号-2</div>
      </div>
    </footer>
    <AppBottom />
  </div>
</template>

<script>
import AppBottom from "@/components/AppBottom";
export default {
  data() {
    return {
      name: this.$store.state.user.username,
      one: [],
      two: [],
      shoplist:[],
      isShowimg: false,
      swiperOption:{},
    };
  },

  components: { AppBottom },

  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleScroll)
    document.body.scrollTop = document.documentElement.scrollTop = 0
  },

  methods: {
    jumpToseac() {
      this.$router.push("/search");
    },
    jumpToShop() {
      this.$router.push("/shop");
    },
    jumpToLogin() {
      this.$router.push("/login");
    },
    async GetData() {
      let p = await this.$store.dispatch("GetShopInf");
      this.one = p.data.p.slice(10, 19);
      this.two = p.data.p.slice(19);
    },
    async GetData2() {
      let p = await this.$store.dispatch("GetShopInf");
      this.shoplist = p.data.p.slice(0, 24);
      Array.from(this.shoplist).forEach(item => (item.flag = false));
    },
    goTop() {
        // 回到顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0
      this.isShowimg = false
    },
    handleScroll(e) {
      // 滚动操作监听
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      let offsetTop = 0
      try {
        offsetTop = document.querySelector('.main').offsetTop
      } catch (e) {
        offsetTop = 0
      }
      if (scrollTop > offsetTop) {
        // this.searchBarFixed = true
        // this.scrollStatus = {
        //   display: 'block',
        //   background: '#fff',
        //   h: this.statusBarHeight.h
        // }
        if (scrollTop > 500) {
          this.isShowimg = true
        } else {
          this.isShowimg = false
        }
      } else {
        // this.searchBarFixed = false
        this.isShowimg = false
        // this.scrollStatus = {
        //   display: 'none',
        //   background: 'transparent',
        //   h: 0
        // }
      }
    }
  },

  created() {
    this.GetData(),
    this.GetData2()
  }
};
</script>

<style scoped lang="scss">
header {
  position: relative;
  height: 0.92rem;
  padding: 0.1rem 0 0 0;
  margin-bottom: 3.3rem;
  // display: flex;
  .top {
    position: absolute;
    z-index: 10;
    background: #fff;
    .logo {
      background: url("../../assets/img/logo.png") no-repeat 5%;
      background-size: 100%;
      margin-top: 0.15rem;
      float: left;
      width: 1.85rem;
    }
    .search-shop {
      display: flex;
      padding-right: 0.32rem;
      flex: 1;
      justify-content: flex-start;
      height: 0.66rem;
      line-height: 0.66rem;
      border-radius: 0.09rem;
      opacity: 0.9;
      float: left;
      margin-top: 0.1rem;
      .search-icon {
        background: #f7f8fa;
        color: #b9b9b9;
        font-weight: 800;
        width: 0.48rem;
        font-size: 0.3rem;
        text-align: center;
        line-height: 0.7rem;
        border-radius: 0.1rem 0 0 0.1rem;
      }
      .search-text {
        background: #f7f8fa;
        border-radius: 0 0.1rem 0.1rem 0;
        width: 3.8rem;
        input {
          height: 0.5rem;
          border: none;
          background: #f8f9fb;
        }
        .search-box {
          width: 100%;
          height: 100%;
          // background: #f7f8fa;
          overflow: hidden;
          .shopName {
            height: 33px;
            transition-duration: 500ms;
            transform: translateY(-33px);
            overflow: hidden;
            position: absolute;
            .shopName-li {
              width: 189px;
              height: 33px;
              float: left;
              transform: translateY(0px);
              overflow: hidden;
              color: #b2b2b2;
              font-weight: 400;
              font-size: 0.26rem;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .van-swipe__indicators,
            .van-swipe__indicators--vertical {
              display: none;
              .van-swipe__indicator {
                display: none;
              }
            }
          }
        }
      }
    }
    .login {
      width: 1.045rem;
      color: #333;
      font-weight: 500;
      font-size: 0.33rem;
      float: right;
      margin-top: 0.18rem;
    }
  }
  .my-swipe {
    position: relative;
    width: 100%;
    height: 4.17rem;
    .my-van-swipe {
      width: 375.2px;
      height: 4.17rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
.nav-icon {
  position: relative;
  .nav-icon-top {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    height: 0.48rem;
    overflow: hidden;
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.22rem;
    text-align: center;
    li {
      div {
        padding: 0 0.4rem;
      }
    }
  }
  .nav-icon-bottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-bottom: 0.45rem;
    justify-content: space-around;
    li {
      position: relative;
      width: 20%;
      height: 1.28rem;
      margin-top: 0.25rem;
      text-align: center;
      .oc-image {
        width: 0.9rem;
        height: 0.9rem;
        position: relative;
        display: inline-block;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .title {
        margin-top: 0.12rem;
        color: rgba(0, 0, 0, 0.6);
        font-weight: 400;
        font-size: 0.24rem;
      }
    }
  }
}
.main {
  background: #f7f8fa;
  padding: 0.2rem 0.05rem 0;
  .floor-one {
    padding: 0 0.24rem 0.28rem;
    font-size: 0;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .floor-two {
    padding: 0.24rem 0.24rem 0.28rem;
    ul {
      li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 0.2rem;
        div {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: calc(50% - 0.08rem);
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .item-box {
          div {
            width: calc(50% - 0.08rem);
            overflow: hidden;
            border-radius: 0.16rem;
            height: 2.14rem;
          }
        }
      }
      li:first-child {
        margin-top: 0;
      }
    }
  }
  .finish {
    padding: 0.24rem 0 0.28rem;
    .finish-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 0.6rem;
      margin: 0 0.24rem 0.14rem;
      line-height: 0.6rem;
      .title-item-left {
        display: flex;
        flex-direction: row;
        .title {
          color: #000;
          font-weight: 500;
          font-size: 0.3rem;
        }
        .title-time {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 1.6rem;
          color: #f63434;
          font-weight: 500;
          font-size: 0.26rem;
          .colon {
            display: inline-block;
            margin: 5px 2px;
            color: #ee0a24;
          }
          .block {
            display: inline-block;
            width: 18px;
            color: #f63434;
            font-size: 12px;
            text-align: center;
          }
        }
        .title-end {
          color: rgba(0, 0, 0, 0.3);
          font-weight: 400;
          font-size: 0.26rem;
        }
      }
      .title-item-right {
        .more {
          color: rgba(0, 0, 0, 0.3);
          font-weight: 400;
          font-size: 0.26rem;
        }
      }
    }
    .finish-bot {
      .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 2.04rem;
          padding: 0.24rem 0.4rem 0.24rem 0.03rem;
          background: #fff;
          img {
            width: 1.74rem;
            height: 1.74rem;
          }
          .item-name {
            margin-top: 0.1rem;
            color: #333;
            font-size: 0.24rem;
            width: 2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
          }
          .price {
            margin-top: 0.1rem;
            font-size: 0.24rem;
            .young-price {
              color: #f63434;
              font-weight: 500;
              font-size: 0.24rem;
              display: inline;
            }
            .old-price {
              color: #b2b2b2;
              font-size: 0.2rem;
              display: inline;
              text-decoration: line-through;
            }
          }
          .choose {
            display: flex;
            align-items: center;
            margin: 0.2rem 0 0 0;
            font-size: 0.24rem;
            i {
              color: #b2b2b2;
              font-size: 0.3rem;
              margin-right: 0.1rem;
            }
            span {
              font-size: 0.24rem;
            }
          }
        }
        .item {
          width: 2.04rem;
        }
        .swiper-slide {
          width: 2.04rem;
        }
        .item:first-child {
          border-radius: 0.16rem 0 0 0.16rem;
        }
        .item:last-child {
          border-radius: 0 0.16rem 0.16rem 0;
        }
      }
    }
  }
  .product-container {
    padding: 0.24rem 0.24rem 0;
    .title-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 0.6rem;
      margin-bottom: 0.14rem;
      color: #000;
      font-weight: 500;
      font-size: 0.3rem;
      justify-content: space-between;
      .more {
        color: rgba(0, 0, 0, 0.3);
        font-weight: 400;
        font-size: 0.26rem;
      }
    }
    .floor-panel {
      width: 100%;
      min-height: 1.82rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.14rem;
      }
    }
    .product-panel {
      margin-top: 0.12rem;
      ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow: hidden;
        justify-content: space-between;
        li {
          padding-left: 0;
          border-radius: 0.16rem 0 0 0;
          width: 33%;
          margin-top: 0.5%;
          padding-bottom: 0.3rem;
          overflow: hidden;
          font-size: 0;
          background: #fff;
          .img-tag {
            width: 100%;
            height: 2.32rem;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .translate {
            height: 0.32rem;
            .tag {
              margin-left: 0.16rem;
              transform: translateY(-50%);
              background: linear-gradient(228deg, #ff6363, #ff9339);
              display: inline-block;
              box-sizing: initial;
              max-width: 100em;
              height: 0.32rem;
              padding: 0 0.06rem;
              overflow: hidden;
              color: #fff;
              font-size: 0.2rem;
              line-height: 0.32rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              border-radius: 0.04rem;
            }
            .tag-green {
              background: linear-gradient(49deg, #0bd4b3, #04ddb4);
            }
          }
          .dis {
            padding: 0 0.16rem;
            .product-identity {
              color: #000;
              font-weight: 400;
              font-size: 0.26rem;
              line-height: 0.39rem;
              overflow: hidden;
            }
            .price-wrapper {
              margin-top: 0.12rem;
              .price-panel {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                justify-content: flex-start;
                .young-price {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #f63434;
                  font-weight: 500;
                  font-size: 0.26rem;
                }
                .old-price {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  margin-left: 0.06rem;
                  color: rgba(0, 0, 0, 0.3);
                  font-weight: 400;
                  font-size: 0.21rem;
                  text-decoration: line-through;
                }
              }
            }
          }
        }
      }
    }
  
  .article-end {
    height: 0.48rem;
    color: #b2b2b2;
  }
}
.hung-bar {
  position: fixed;
  right: 0.24rem;
  bottom: 3rem;
  display: flex;
  flex-direction: column;
  .listen {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.74rem;
    height: 0.74rem;
    overflow: hidden;
    line-height: 0.74rem;
    text-align: center;
    background: #fff;
    border-radius: 0.15rem;
    box-shadow: 1px 1px 1px -1px #c8c7cc;
    border: none;
    div {
      width: 0.5rem;
      height: 0.5rem;
      background: url("../../assets/img/listen.png");
      background-size: cover;
    }
  }
  .returntop {
    margin-top: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.74rem;
    height: 0.74rem;
    overflow: hidden;
    line-height: 0.74rem;
    text-align: center;
    background: #fff;
    border-radius: 0.15rem;
    box-shadow: 1px 1px 1px -1px #c8c7cc;
    border: none;
    div {
      width: 0.5rem;
      height: 0.5rem;
      background: url("../../assets/img/returntop.png");
      background-size: cover;
    }
  }
}
footer {
  line-height: normal;
  margin-bottom: 1.2rem;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #fff;
    li {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 0.82rem;
      text-align: center;
      i {
        color: #b2b2b2;
        font-size: 0.48rem;
      }
      span {
        color: #333;
        font-weight: 500;
        font-size: 0.26rem;
      }
    }
  }
  .footer-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 1.41rem;
    color: #666;
    font-weight: 400;
    font-size: 0.2rem;
    text-align: center;
    background: #fff;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0 1.3rem;
    }
  }
}
</style>