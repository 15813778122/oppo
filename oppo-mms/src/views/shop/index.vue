<template>
  <div id="app">
    <ShopHeader />
    <div class="detail">
      <section class="banner-swipe">
        <div class="oc-swipe">
          <!-- <div class="oc-swipe_track">
            <div class="oc-swipe_item">
              <div class="oc-swipe_img">
                <img src="../../assets/img/shop/1-1.png" alt />
              </div>
            </div>
            <div class="oc-swipe_item">
              <div class="oc-swipe_img">
                <img src="../../assets/img/shop/1-2.jpg" alt="">
              </div>
            </div>
            <div class="oc-swipe_item">
              <div class="oc-swipe_img">
                <img src="../../assets/img/shop/1-3.jpg" alt="">
              </div>
            </div>
            <div class="oc-swipe_item">
              <div class="oc-swipe_img">
                <img src="../../assets/img/shop/1-4.jpg" alt="">
              </div>
            </div>
          </div>-->

          <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item class="swipe-item">
              <img src="../../assets/img/shop/1-1.png" alt />
            </van-swipe-item>
            <van-swipe-item class="swipe-item">
              <img src="../../assets/img/shop/1-2.jpg" alt />
            </van-swipe-item>
            <van-swipe-item class="swipe-item">
              <img src="../../assets/img/shop/1-3.jpg" alt />
            </van-swipe-item>
            <van-swipe-item class="swipe-item">
              <img src="../../assets/img/shop/1-4.jpg" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <!-- <div class="oc-swipe-size">1/4</div> -->
      </section>
      <section>
        <div class="count-down">
          <div class="count-down-left">
            <div class="count-down-label">到手价</div>
            <div class="count-down-price">￥899</div>
          </div>
          <div class="count-down-right">
            <div class="count-down-tips">距活动结束</div>
            <!-- <div class="count-down-time">
              <div class="count-down-hour">58</div>:
              <div class="count-down-min">00</div>:
              <div class="count-down-sec">13</div>
            </div>-->
            <van-count-down :time="1598083786000" class="count-down-time">
              <template v-slot="timeData">
                <span class="block count-down-hour">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block count-down-min">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block count-down-sec">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
      </section>
      <section class="shop-label">
        <div class="shop-label-box">
          <div class="title">A11 4G+64G 极夜黑</div>
          <div class="description">
            <font style="color:#f79a47;">【限时立减300 | 到手899】</font>
            <font style="color:#666666;">5000mAh大电池，1200万四摄（视频防抖+夜景模式） ，浅水滴全面屏。</font>
          </div>
          <div class="price">
            <div class="market-price">￥1199</div>
          </div>
        </div>
      </section>
      <section>
        <div class="box">
          <div class="title">促销</div>
          <div class="content">
            <div class="content-top">
              <div class="content-top-left">立减</div>
              <div class="content-top-right">
                下单立减
                <span style="color:#f63434;">￥300</span>
              </div>
            </div>
            <div class="content-top" style="margin-top:0.2rem">
              <div class="content-top-left">积分</div>
              <div class="content-top-right">购买赠送积分</div>
            </div>
            <div class="content-bot"></div>
          </div>
        </div>
      </section>
      <section>
        <div class="shop-box">
          <div class="item-color">
            <div class="title">颜色</div>
            <div class="option">
              <a
                v-for="item in color"
                :key="item.id"
                @click="changecolor(item.id)"
                :class="item.flag ? 'a-active': ''"
                style="text-decoration:none"
              >{{item.name}}</a>
            </div>
          </div>
          <div class="item-size">
            <div class="title">配置</div>
            <div class="option">
              <a
                v-for="item in size"
                :key="item.id"
                :class="item.flag ? 'a-active': ''"
                style="text-decoration:none"
                @click="changesize(item.id)"
              >{{item.name}}</a>
              <!-- <a>4G+64G</a>
              <a class="a-active">6G+256G</a>
              <a>6G+128G</a>-->
            </div>
          </div>
          <div class="item-num">
            <div class="title">数量</div>
            <!-- <div class="symbol-box">
              <b>-</b>
              <div class="num">1</div>
              <b class="a-black">+</b>
            </div>-->
            <van-stepper v-model="value" input-width="0.5rem" button-size=".5rem" />
          </div>
        </div>
      </section>
      <section>
        <div class="box1">
          <div class="title">保障服务</div>
          <div class="content">
            <div class="dec">屏碎保 / O享无忧 / 进液保 / 延长保</div>
          </div>
          <div class="opt">></div>
        </div>
      </section>
      <section>
        <div class="box2">
          <div class="title">
            <span>超值加购</span>
            <span style="color:#f63434;font-size:.24rem;">搭配购买更省钱</span>
          </div>
          <div class="other-shop">
            <!-- <div class="item-box">
              <div class="item" v-for="item in shoplist" :key="item.id">
                <img :src="item.img" alt />
                <div class="item-name">{{item.gname}}</div>
                <div class="price">
                  <div class="young-price">￥{{item.price}}</div>
                  <div class="old-price">￥{{item.oldprice}}</div>
                </div>
                <div class="choose" @click="checkshop(item.id)">
                  <i
                    :class="item.flag ? 'iconfont icon-xuanzhong' : 'iconfont icon-fuxuankuangweigouxuan'"
                  ></i>
                  <span>选购</span>
                </div>
              </div> -->

              <swiper :options="swiperOption" class="item-box">
                <swiper-slide class="swiper-slide item" v-for="item in shoplist" :key="item.id" style="width:0rem;!important">
                  <img :src="item.img" alt />
                  <div class="item-name">{{item.gname}}</div>
                  <div class="price">
                    <div class="young-price">￥{{item.price}}</div>
                    <div class="old-price">￥{{item.oldprice}}</div>
                  </div>
                  <div class="choose" @click="item.flag = !item.flag">
                    <i
                      :class="item.flag ? 'iconfont icon-xuanzhong' : 'iconfont icon-fuxuankuangweigouxuan'"
                    ></i>
                    <span>选购</span>
                  </div>
                </swiper-slide>
              </swiper>
              <!-- <div class="item">
                <img src="../../assets/img/shop/2-2.png" alt />
                <div class="item-name">46mm精钢版</div>
                <div class="price">
                  <div class="young-price">￥2299</div>
                  <div class="old-price">￥2499</div>
                </div>
                <div class="choose">
                  <i class="iconfont icon-fuxuankuangweigouxuan"></i>
                  <span>选购</span>
                </div>
              </div>
              <div class="item">
                <img src="../../assets/img/shop/2-3.png" alt />
                <div class="item-name">A11保护壳-黛蓝</div>
                <div class="price">
                  <div class="young-price">￥44</div>
                  <div class="old-price">￥49</div>
                </div>
                <div class="choose">
                  <i class="iconfont icon-fuxuankuangweigouxuan"></i>
                  <span>选购</span>
                </div>
              </div>-->
            <!-- </div> -->
          </div>
        </div>
      </section>
      <section>
        <div class="box3">
          <div class="title">
            <div class="title-left">用户评论（14116）</div>
            <div class="title-right">
              好评率99.9%
              <span>></span>
            </div>
          </div>
          <div class="title-scroll">
            <div class="item-box">
              <div class="item">
                <div class="item-top">
                  <div class="item-top-left">
                    <img src="../../assets/img/shop/user1.jpg" alt />
                    <div class="user-info">
                      <div class="user-name">義薄雲天輪回王</div>
                      <div class="user-time">2019-10-21 18:57:52</div>
                    </div>
                  </div>
                  <div class="item-top-right">
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                    <i class="iconfont icon-start"></i>
                  </div>
                </div>
                <div class="item-mid">很不错</div>
                <div class="item-img">
                  <div class="more-img">
                    <img src="../../assets/img/shop/phone1.jpg" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="box4">
          <div class="oc-image">
            <img src="../../assets/img/shop/b1.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b2.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b3.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b4.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b5.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b6.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b7.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b8.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b9.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b10.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b11.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b12.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b13.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b14.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b15.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b16.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b17.jpg" alt />
          </div>
          <div class="oc-image">
            <img src="../../assets/img/shop/b18.jpg" alt />
          </div>
        </div>
      </section>
    </div>
    <ShopBottom />
  </div>
</template>

<script>
import ShopHeader from "@/components/ShopHeader";
import ShopBottom from "@/components/ShopBottom";
export default {
  data() {
    return {
      value: 1,
      color: [
        {
          id: 1,
          flag: false,
          name: "湖光绿"
        },
        {
          id: 2,
          flag: true,
          name: "流云白"
        },
        {
          id: 3,
          flag: false,
          name: "极夜黑"
        },
        {
          id: 4,
          flag: false,
          name: "暮辰紫"
        },
        {
          id: 5,
          flag: false,
          name: "香草薄荷"
        }
      ],
      size: [
        {
          id: 1,
          flag: true,
          name: "4G+128G"
        },
        {
          id: 2,
          flag: false,
          name: "4G+64G"
        },
        {
          id: 3,
          flag: false,
          name: "6G+256G"
        },
        {
          id: 4,
          flag: false,
          name: "6G+128G"
        }
      ],
      swiperOption:{},
      shoplist: [],
      talklist:[]
    };
  },

  components: { ShopBottom, ShopHeader },

  methods: {
    // 选择颜色
    changecolor(id) {
      for (let i = 0; i < this.color.length; i++) {
        this.color[i].flag = false;
        if (this.color[i].id == id) {
          this.color[i].flag = !this.color[i].flag;
        }
      }
    },
    // 选择配置
    changesize(id) {
      for (let i = 0; i < this.size.length; i++) {
        this.size[i].flag = false;
        if (this.size[i].id == id) {
          this.size[i].flag = !this.size[i].flag;
        }
      }
    },
    checkshop(id) {
      for (let i = 0; i < this.shop.length; i++) {
        if (this.shop[i].id == id) {
          this.shop[i].flag = !this.shop[i].flag;
        }
      }
    },
    async GetData() {
      let p = await this.$store.dispatch("GetShopInf");
      this.shoplist = p.data.p.slice(0, 24);
      Array.from(this.shoplist).forEach(item => (item.flag = false));
    },
    async GetTalk() {
      let p = await this.$store.dispatch('GetTalkData')
      this.talklist = p.data.p
    }
  },

  created() {
    this.GetData(),
    this.GetTalk()
  }
};
</script>

<style scoped lang="scss">
.detail {
  background: rgb(247, 248, 250);
  width: 100%;
  margin-top: 0.7rem;
  .banner-swipe {
    height: 7.5rem;
    .oc-swipe {
      .oc-swipe_track {
        // width: 1500.8px;
        width: 375.2px;
        height: 750px;
        transition-duration: 500ms;
        transform: translateX(0);
        .oc-swipe_item {
          width: 375.2px;
          transform: translateX(0px);
          position: relative;
          background: #fff;
          float: left;
          .oc-swipe_img {
            width: 100%;
            position: relative;
            display: inline-block;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
    .oc-swipe-size {
      position: absolute;
      top: 7.6rem;
      right: 0.24rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 0.69rem;
      height: 0.42rem;
      color: #fff;
      font-size: 0.24rem;
      background: #000;
      border-radius: 0.1rem;
      opacity: 0.3;
    }
  }
  .count-down {
    position: absolute;
    width: 93.5%;
    display: flex;
    justify-content: space-between;
    height: 0.8rem;
    padding: 0 0.24rem;
    color: #fff;
    line-height: 0.42rem;
    background: linear-gradient(228deg, #ff4343, #ff8243);
    .count-down-left {
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      font-size: 0.36rem;
      .count-down-label {
        width: 0.84rem;
        height: 0.42rem;
        margin-right: 0.16rem;
        font-size: 0.2rem;
        text-align: center;
        background: hsla(0, 0%, 100%, 0.2);
        border-radius: 0.1rem;
      }
    }
    .count-down-right {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;
      font-size: 0.24rem;
      .count-down-tips {
        margin-left: 0.12rem;
      }
      .count-down-time {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 -0.12rem 0 0;
        font-size: 0.28rem;
        .count-down-hour {
          position: relative;
          min-width: 0.48rem;
          height: 0.42rem;
          margin: 0.12rem;
          padding: 0 0.06rem;
          text-align: center;
          background: hsla(0, 0%, 100%, 0.2);
          border-radius: 0.1rem;
        }
        .count-down-min {
          position: relative;
          min-width: 0.48rem;
          height: 0.42rem;
          margin: 0.12rem;
          padding: 0 0.06rem;
          text-align: center;
          background: hsla(0, 0%, 100%, 0.2);
          border-radius: 0.1rem;
        }
        .count-down-sec {
          position: relative;
          min-width: 0.48rem;
          height: 0.42rem;
          margin: 0.12rem;
          padding: 0 0.06rem;
          text-align: center;
          background: hsla(0, 0%, 100%, 0.2);
          border-radius: 0.1rem;
        }
      }
    }
  }
  .shop-label-box {
    position: relative;
    top: 1rem;
    margin: 0 0.24rem;
    padding: 0 0.24rem 0.32rem 0.24rem;
    overflow: hidden;
    background: #fff;
    border-radius: 0.16rem;
    .title {
      height: 0.6rem;
      margin-top: 0.32rem;
      overflow: hidden;
      color: #333;
      font-weight: 500;
      line-height: 0.6rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 0.34rem;
    }
    .description {
      margin-top: 0.18rem;
      font-weight: 400;
      font-size: 0.26rem;
      line-height: 0.39rem;
    }
    .price {
      margin-top: 0.22rem;
      .market-price {
        color: #f63434;
        font-weight: 500;
        font-size: 0.38rem;
      }
    }
  }
  .box {
    top: 1rem;
    position: relative;
    margin: 0.2rem 0.24rem 0 0.24rem;
    padding: 0 0 0.2rem 0.96rem;
    overflow: hidden;
    background: #fff;
    border-radius: 0.21rem;
    .title {
      position: absolute;
      top: 0.22rem;
      left: 0.24rem;
      color: #666;
      font-size: 0.26rem;
    }
    .content {
      margin-top: 0.24rem;
      overflow: hidden;
      .content-top {
        margin-top: 0;
        display: flex;
        align-items: center;
        .content-top-left {
          width: 0.64rem;
          height: 0.32rem;
          color: #ff722c;
          font-size: 0.2rem;
          background: #fff5e8;
          border-radius: 0.08rem;
          text-align: center;
          line-height: 0.32rem;
        }
        .content-top-right {
          margin-left: 0.16rem;
          font-size: 0.24rem;
        }
      }
    }
  }
  .shop-box {
    position: relative;
    top: 1rem;
    margin: 0.2rem 0.24rem 0 0.24rem;
    padding: 0.32rem 0 0.32rem 0;
    overflow: hidden;
    background: #fff;
    border-radius: 0.21rem;
    .item-color {
      position: relative;
      display: flex;
      font-size: 0.26rem;
      .title {
        margin: 0.02rem 0.2rem 0.15rem 0.24rem;
        color: #666;
        font-size: 0.26rem;
        white-space: nowrap;
      }
      .option {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        a {
          color: #333;
          background-color: #f7f8fa;
          border: 0.02rem solid transparent;
          height: 0.56rem;
          margin: 0 0.16rem 0.2rem 0;
          padding: 0 0.2rem;
          font-size: 0.26rem;
          background: #f7f8fa;
          border-radius: 0.1rem;
          text-align: center;
          line-height: 0.5rem;
        }
        .a-active {
          color: #f63434;
          background: #fff;
          border: 0.02rem solid #f63434;
        }
      }
    }
    .item-size {
      position: relative;
      display: flex;
      font-size: 0.26rem;
      .title {
        margin: 0.02rem 0.2rem 0.15rem 0.24rem;
        color: #666;
        font-size: 0.26rem;
        white-space: nowrap;
      }
      .option {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        a {
          color: #b2b2b2;
          background-color: #f7f8fa;
          border: 0.02rem solid transparent;
          height: 0.56rem;
          margin: 0 0.16rem 0.2rem 0;
          padding: 0 0.2rem;
          font-size: 0.26rem;
          background: #f7f8fa;
          border-radius: 0.1rem;
          text-align: center;
          line-height: 0.5rem;
        }
        .a-active {
          color: #f63434;
          background: #fff;
          border: 0.02rem solid #f63434;
        }
      }
    }
    .item-num {
      position: relative;
      display: flex;
      font-size: 0.26rem;
      .title {
        margin: 0.02rem 0.2rem 0.15rem 0.24rem;
        color: #666;
        font-size: 0.26rem;
        white-space: nowrap;
      }
      .symbol-box {
        display: flex;
        align-items: center;
        width: 0.56rem;
        height: 0.56rem;
        line-height: 0.38rem;
        text-align: center;
        border-radius: 0.1rem;
        b {
          font-size: 0.4rem;
          vertical-align: middle;
          font-style: normal;
          display: inline-block;
          color: #b2b2b2;
          background-color: #f7f8fa;
          border: 0.02rem solid transparent;
          height: 0.56rem;
          padding: 0 0.2rem;
          border-radius: 0.1rem;
          text-align: center;
          line-height: 0.5rem;
        }
        .a-black {
          color: #000;
        }
        .num {
          margin: 0 0.24rem;
          font-weight: 500;
          font-size: 0.24rem;
          line-height: 0.36rem;
        }
      }
    }
  }
  .box1 {
    position: relative;
    margin: 0.2rem 0.24rem 0 0.24rem;
    padding: 0.28rem 0;
    overflow: hidden;
    background: #fff;
    border-radius: 0.16rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 1rem;
    .title {
      position: relative;
      top: 0.02rem;
      left: 0.24rem;
      display: flex;
      align-items: center;
      color: #666;
      font-size: 0.26rem;
      line-height: 1.5;
    }
    .content {
      padding: 0 0 0 0.18rem;
      position: relative;
      .dec {
        display: flex;
        align-items: center;
        width: 4.52rem;
        font-size: 0.26rem;
        line-height: 1.5;
      }
    }
    .opt {
      color: #b2b2b2;
    }
  }
  .box2 {
    position: relative;
    top: 1rem;
    margin: 0.4rem 0 0 0;
    .title {
      display: flex;
      align-items: center;
      span {
        margin: 0 0.13rem 0 0.24rem;
        color: #333;
        font-weight: 700;
        font-size: 0.3rem;
      }
    }
    .other-shop {
      white-space: nowrap;
      border-radius: 0.16rem;
      .item-box {
        position: relative;
        display: flex;
        height: 3.6rem;
        background: #fff;
        border-radius: 0.16rem;
        padding: 0.1rem 0 0 0.24rem;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 2.04rem;
          padding: 0.24rem 0.4rem 0 0;
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
  .box3 {
    position: relative;
    margin: 0.42rem 0 0 0;
    top: 1rem;
    .title {
      display: flex;
      justify-content: space-between;
      padding: 0 0.24rem 0 0.24rem;
      color: #333;
      font-weight: 700;
      font-size: 0.3rem;
      .title-right {
        span {
          color: #b2b2b2;
        }
      }
    }
    .title-scroll {
      margin-right: 0.24rem;
      padding: 0.22rem 0 0 0.24rem;
      white-space: nowrap;
      border-radius: 0.16rem;
      .item-box {
        .item {
          flex-shrink: 0;
          width: 6.08rem;
          height: 4.48rem;
          margin-right: 0.2rem;
          padding: 0.24rem;
          background: #fff;
          border-radius: 0.16rem;
          .item-top {
            display: flex;
            height: 0.66rem;
            justify-content: space-between;
            .item-top-left {
              display: flex;
              img {
                width: 0.66rem;
                height: 0.66rem;
                margin-right: 0.16rem;
                border-radius: 0.33rem;
              }
              .user-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                .user-name {
                  width: 2.5rem;
                  margin-bottom: 0.1rem;
                  color: #666;
                  font-size: 0.24rem;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .user-time {
                  color: #b2b2b2;
                  font-size: 0.22rem;
                }
              }
            }
            .item-top-right {
              display: flex;
              align-items: center;
              i {
                color: #ff722b;
                font-size: 0.32rem;
              }
            }
          }
          .item-mid {
            height: 0.96rem;
            margin: 0.2rem 0 0.3rem 0;
            overflow: hidden;
            font-size: 0.24rem;
            line-height: 0.32rem;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .item-img {
            display: flex;
            .more-img {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 1.8rem;
              height: 1.8rem;
              margin-right: 0.1rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
  .box4 {
    margin: 0.6rem 0 0 0;
    position: relative;
    top: 1rem;
    .oc-image {
      display: block;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #851825;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>