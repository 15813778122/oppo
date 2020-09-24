<template>
  <div>
    <ShopHeader />
    <div class="talkContent">
      <div class="content">
        <div class="tab">
          <div class="tab-item tab-red">全部 14172</div>
          <div class="tab-item">晒图 381</div>
          <div class="tab-item">追评 196</div>
          <div class="tab-item tab-red">
            推荐评论
            <i class="iconfont icon-xiala xiala"></i>
          </div>
        </div>
        <div>
          <div class="wrapper">
            <div class="item-wrapper">
              <div class="user-info">
                <div class="item-top-left">
                  <img src="../../assets/img/shop/user1.jpg" alt />
                  <div class="user-info2">
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
            <div class="item-wrapper">
              <div class="user-info">
                <div class="item-top-left">
                  <img src="../../assets/img/shop/user1.jpg" alt />
                  <div class="user-info2">
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
            <div class="item-wrapper">
              <div class="user-info">
                <div class="item-top-left">
                  <img src="../../assets/img/shop/user1.jpg" alt />
                  <div class="user-info2">
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
    </div>
    <ShopBottom />
  </div>
</template>

<script>
import ShopHeader from "@/components/ShopHeader"
import ShopBottom from "@/components/ShopBottom"
export default {
  data() {
    return {};
  },

  components: {ShopHeader,ShopBottom},

  methods: {}
};
</script>

<style scoped lang="scss">
.talkContent {
  width: 100%;
  .content {
    padding: 0 0.24rem 0.2rem 0.24rem;
    background: #fff;
    .tab {
      position: relative;
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 0.13rem 0.34rem;
      color: #666;
      font-size: 0.24rem;
      border-bottom: 1px solid rgb(242, 242, 242);
      top: 0.8rem;
      .tab-red {
        color: #f63434;
      }
      .xiala {
        font-size: 14px;
        color: #666;
      }
    }
    .wrapper {
      position: relative;
      top: 0.7rem;
      margin-bottom: 1.3rem;
      padding: 0 0.12rem;
      .item-wrapper {
        margin-top: 0.4rem;
        .user-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .item-top-left {
            display: flex;
            align-items: center;
            img {
              width: 0.66rem;
              height: 0.66rem;
              border-radius: 50%;
            }
            .user-info2 {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              height: 0.66rem;
              margin-left: 0.22rem;
              .user-name {
                width: 3rem;
                overflow: hidden;
                color: #333;
                font-size: 0.24rem;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
              .user-time {
                color: #999;
                font-size: 0.2rem;
              }
            }
          }
          .item-top-right {
            display: flex;
            i {
              padding-right: 0px;
              color: rgb(255, 114, 44);
              font-size: 18px;
              width: 1em;
            }
          }
        }
        .item-mid {
          margin: 0.32rem 0 0 0.78rem;
          color: #333;
          font-size: 0.24rem;
          line-height: 0.36rem;
        }
        .item-img {
          display: flex;
          margin: 0.3rem 0 0 0.78rem;
          .more-img {
            margin-right: 0;
            img {
              width: 1.52rem;
              height: 1.52rem;
            }
          }
        }
      }
    }
  }
}
</style>