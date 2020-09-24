<template>
  <div id="app">
    <header>
      <div class="search-box">
        <div class="search-container">
          <em class="el-icon-search"></em>
          <div class="search-content oc-swipe">
            <div @click="jumpToSearch">
              <!-- <ul class="shopName">
                <li>新品Reno4系列</li>
                <li>W31蓝牙耳机</li>
                <li>A92s</li>
                <li>W51真无线降噪耳机</li>
                <li>Find X2系列</li>
                <li>OPPO手环</li>
                <li>Ace2</li>
                <li>游戏手柄</li>
              </ul> -->
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
      </div>
    </header>
    <section class="page">
      <nav>
        <ul>
          <li>
            <span class="item-title">手机</span>
          </li>
          <!-- <li class="active">
            <span>Find X系列</span>
          </li>
          <li>
            <span>Reno系列</span>
          </li>
          <li>
            <span>Ace系列</span>
          </li>
          <li>
            <span>K系列</span>
          </li>
          <li>
            <span>A系列</span>
          </li> -->
          <van-sidebar v-model="activeKey">
            <van-sidebar-item title="Find X系列" />
            <van-sidebar-item title="Reno系列" />
            <van-sidebar-item title="Ace系列" />
            <van-sidebar-item title="A系列" />
          <li>
            <span class="item-title">智能硬件</span>
          </li>
          <!-- <li class="active">
            <span>耳机影音</span>
          </li>
          <li>
            <span>智能穿戴</span>
          </li>
          <li>
            <span>充电必备</span>
          </li>
          <li>
            <span>手机配件</span>
          </li>
          <li>
            <span>游戏文娱</span>
          </li>
          <li>
            <span>日用百货</span>
          </li>
          <li>
            <span>智能家居</span>
          </li> -->
            <van-sidebar-item title="耳机影音" />
            <van-sidebar-item title="智能穿戴" />
            <van-sidebar-item title="充电必备" />
            <van-sidebar-item title="手机配件" />
            <van-sidebar-item title="游戏文娱" />
            <van-sidebar-item title="日用百货" />
          </van-sidebar>
        </ul>
      </nav>
      <div class="mainContent">
        <ul class="content">
          <li>
            <div>
              <h4>Find X系列</h4>
              <ul class="swipers-list">
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-1.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Find X2 Pro 竹青</h4>
                          <div class="product-desc">超感官5G旗舰手机</div>
                          <div class="price">
                            <span class="young-price">￥6999</span>
                            <span class="old-price"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-2.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Find X2 夜海</h4>
                          <div class="product-desc">Find X2 夜海</div>
                          <div class="price">
                            <span class="young-price">￥4999</span>
                            <span class="old-price">￥5499</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-3.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Find X 冰珀蓝</h4>
                          <div class="product-desc">曲面全景屏</div>
                          <div class="price">
                            <span class="young-price">￥4999</span>
                            <span class="old-price"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div>
              <h4>Reno系列</h4>
              <ul class="swipers-list">
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-4.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno4 Pro 晶钻蓝</h4>
                          <div class="product-desc">超级夜景视频</div>
                          <div class="price">
                            <span class="young-price">￥3799</span>
                            <span class="old-price"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-5.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno4 香芋紫</h4>
                          <div class="product-desc">超级夜景视频</div>
                          <div class="price">
                            <span class="young-price">￥2999</span>
                            <span class="old-price"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-6.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno3 元气版 日出印象</h4>
                          <div class="product-desc">一体化双模5G</div>
                          <div class="price">
                            <span class="young-price">￥2699</span>
                            <span class="old-price">￥2999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-7.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno3 Pro 月夜黑</h4>
                          <div class="product-desc">5G视频手机</div>
                          <div class="price">
                            <span class="young-price">￥3699</span>
                            <span class="old-price">￥3999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-8.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno3 蓝色星夜</h4>
                          <div class="product-desc">一体化双模5G</div>
                          <div class="price">
                            <span class="young-price">￥2999</span>
                            <span class="old-price">￥3399</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-9.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno2 深海夜光</h4>
                          <div class="product-desc">视频超级防抖</div>
                          <div class="price">
                            <span class="young-price">￥2499</span>
                            <span class="old-price">￥2999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-10.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno2 Z 晨雾白</h4>
                          <div class="product-desc">4800万夜拍四摄</div>
                          <div class="price">
                            <span class="young-price">￥2199</span>
                            <span class="old-price">￥2499</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="oc-swipe">
                    <div class="oc-swipe_track">
                      <div class="oc-swipe_item">
                        <div class="swipe-img">
                          <img src="../../assets/img/kinds/1-11.png" alt />
                        </div>
                        <div class="product-dsc">
                          <h4>Reno 10倍变焦版</h4>
                          <div class="product-desc">骁龙855,60倍数码变焦</div>
                          <div class="price">
                            <span class="young-price">￥2799</span>
                            <span class="old-price">￥3999</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <AppBottom />
  </div>
</template>

<script>
import AppBottom from "@/components/AppBottom";
export default {
  data() {
    return {
       activeKey: 0,
    };
  },

  components: { AppBottom },

  methods: {
    jumpToSearch() {
      this.$router.push('/search')
    }
  }
};
</script>

<style scoped lang="scss">
.oc-swipe {
  position: relative;
  overflow: hidden;
}
.search-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  width: 100%;
  max-width: 6.9rem;
  height: 0.92rem;
  margin: auto;
  padding: 0.13rem 0.3rem;
  font-size: 0.26rem;
  background: #fff;
  .search-container {
    position: relative;
    height: 0.66rem;
    padding-left: 0.56rem;
    color: #b2b2b2;
    background: #f7f8fa;
    border-radius: 0.1rem;
    em {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0.1rem;
      z-index: 10;
      width: 0.36rem;
      height: 0.3rem;
      margin: auto;
      font-weight: 700;
      font-size: 0.3rem;
    }
    .search-content {
      height: 0.66rem;
      line-height: 0.66rem;
      .shopName {
        height: 264px;
        transition-duration: 500ms;
        transform: translateY(0px);
        overflow: hidden;
        li {
          width: 317.2px;
          height: 33px;
          transform: translateY(0px);
          overflow: hidden;
          text-overflow: ellipsis;
          float: left;
        }
      }
    }
  }
}
.page {
  position: fixed;
  top: 0.92rem;
  right: 0;
  left: 0;
  display: flex;
  flex-flow: nowrap;
  box-sizing: border-box;
  width: 100%;
  max-width: 7.68rem;
  text-align: center;
  margin-bottom: 1.2rem;
  nav {
    width: 1.88rem;
    height: 100%;
    overflow: hidden;
    color: #000;
    font-size: 0.3rem;
    background: #fff;
    ul {
      transform: translateX(0px) translateY(0px) translateZ(0px);
      transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      transition-duration: 0ms;
      li {
        color: rgba(0, 0, 0, 0.6);
        height: 0.9rem;
        overflow: hidden;
        line-height: 0.9rem;
        transition: all 0.35s ease;
        span {
          display: block;
        }
        .item-title {
          position: relative;
          display: inline-block;
          font-size: 0.26rem;
          &::before {
            position: absolute;
            top: 0;
            bottom: 0;
            left: -0.4rem;
            width: 0.25rem;
            height: 1px;
            margin: auto;
            background: rgba(0, 0, 0, 0.3);
            content: "";
          }
          &::after {
            position: absolute;
            top: 0;
            bottom: 0;
            right: -0.4rem;
            width: 0.25rem;
            height: 1px;
            margin: auto;
            background: rgba(0, 0, 0, 0.3);
            content: "";
          }
        }
      }
      .van-sidebar {
        width: 94px;
        .van-sidebar-item {
          padding: 13px 12px;
          background: #fff;
        }
      }
    }
  }
  .mainContent {
    width: calc(100% - 1.88rem);
    height: 100%;
    overflow: hidden;
    color: #333;
    font-size: 0.2rem;
    .content {
      transform: translateX(0px) translateY(0px) translateZ(0px);
      transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
      transition-duration: 0ms;
      padding: 0.36rem 0.24rem;
      background: #f7f8fa;
      li {
        h4 {
          margin-bottom: 0.42rem;
          font-size: 0.3rem;
        }
        .swipers-list {
          li {
            background: #fff;
            margin-bottom: 0.2rem;
            border-radius: 0.3rem;
            .oc-swipe_track {
              width: 1286px;
              transition-duration: 500ms;
              transform: translateX(0px);
              .oc-swipe_item {
                width: 257.2px;
                height: 100%;
                transform: translateX(0px);
                padding: 0.16rem 0.13rem;
                float: left;
                .swipe-img {
                  float: left;
                  width: 1.88rem;
                  height: 1.88rem;
                  margin-right: 0.16rem;
                  img {
                    display: block;
                    width: 100%;
                    height: 100%;
                  }
                }
                .product-dsc {
                  flex: 1;
                  padding-top: 0.32rem;
                  text-align: left;
                  h4 {
                    margin-bottom: 0.02rem;
                    line-height: 1.5;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 0.3rem;
                  }
                  .product-desc {
                    margin-bottom: 0.1rem;
                    color: #666;
                    font-size: 0.2rem;
                    line-height: 1.3;
                    overflow: hidden;
                    text-overflow: ellipsis;
                  }
                  .price {
                    color: #f63434;
                    font-size: 0.26rem;
                    .young-price {
                      font-weight: 500;
                    }
                    .old-price {
                      margin-left: 0.1rem;
                      color: #999;
                      font-size: 0.2rem;
                      text-decoration: line-through;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>