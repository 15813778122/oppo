<template>
  <div id="app">
    <div class="page">
      <div class="page-main">
        <div class="page-main-header">
          <div class="page_user">
            <div class="page_user_wrap">
              <div class="page_user_peo">
                <img :src="name ? 'https://fs-uc-nearme-com-cn.oss-cn-hangzhou.aliyuncs.com/avatar/1.png?imgModifyTime=null' : 'data:image/png;base64,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'" alt />
              </div>
              <div class="page_user_content">
                <div class="user-name">{{name ? `用户 ${name}` : '登录 OPPO 账号'}}</div>
                <!-- <div class="user-id">{{name ? '' : '体验更多功能'}}</div> -->
              </div>
              <button class="page_user_btn">
                <span @click="name ? logout() : jumpTologin()">{{name ? '退出' :'登录'}}</span>
              </button>
            </div>
          </div>
          <div class="page_property">
            <ul>
              <li>
                <div class="page_one">{{name ? '0' : '--'}}</div>
                <div class="page_two">优惠卷</div>
              </li>
              <li>
                <div class="page_one">{{name ? '0' : '--'}}</div>
                <div class="page_two">回收代金卷</div>
              </li>
              <li>
                <div class="page_one">{{name ? '0' : '--'}}</div>
                <div class="page_two">积分</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="page-main-middle">
          <div class="order-header">
            <div class="order-header-left">
              <span>我的订单</span>
            </div>
            <div class="order-header-right">
              <span>全部订单 ></span>
            </div>
          </div>
          <div class="order-bot">
            <ul>
              <li>
                <div class="order-item">
                  <i class="iconfont icon-fukuan"></i>
                  <div class="list-name">待付款</div>
                </div>
              </li>
              <li>
                <div class="order-item">
                  <i class="iconfont icon-fahuo"></i>
                  <div class="list-name">待发货</div>
                </div>
              </li>
              <li>
                <div class="order-item">
                  <i class="iconfont icon-yifahuo"></i>
                  <div class="list-name">已发货</div>
                </div>
              </li>
              <li>
                <div class="order-item">
                  <i class="iconfont icon-weibiaoti-"></i>
                  <div class="list-name">待评价</div>
                </div>
              </li>
              <li>
                <div class="order-item">
                  <i class="iconfont icon-huishou"></i>
                  <div class="list-name">回收单</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="page-main-bot">
          <div class="main-bot-img">
            <div class="cart-item">
              <img src="../../assets/img/mine/1-1.jpg" alt />
            </div>
          </div>
          <div class="main-bot-mid">
            <div class="order-header">互动乐园</div>
            <div class="order-module">
              <ul>
                <li>
                  <div class="oc-text">
                    <h3>积分翻倍</h3>
                    <p>40%中奖概率</p>
                  </div>
                  <div class="oc-img">
                    <img src="../../assets/img/mine/1-2.png" alt />
                  </div>
                </li>
                <li>
                  <div class="oc-text">
                    <h3>幸运锦鲤</h3>
                    <p>一人独享礼包</p>
                  </div>
                  <div class="oc-img">
                    <img src="../../assets/img/mine/1-3.png" alt />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="main-bot-bot">
            <div class="order-header">常用工具</div>
            <div class="order-module">
              <ul>
                <li>
                  <div>
                    <div class="oc-image">
                      <img src="../../assets/img/mine/1-4.png" alt />
                    </div>
                    <div class="item-name">服务网点</div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="oc-image">
                      <img src="../../assets/img/mine/1-5.png" alt />
                    </div>
                    <div class="item-name">保障服务</div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="oc-image">
                      <img src="../../assets/img/mine/1-6.png" alt />
                    </div>
                    <div class="item-name">真伪查询</div>
                  </div>
                </li>
                <li>
                  <div>
                    <div class="oc-image">
                      <img src="../../assets/img/mine/1-7.png" alt />
                    </div>
                    <div class="item-name">维修服务</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
    </div>
    <AppBottom />
  </div>
</template>

<script>
import AppBottom from "@/components/AppBottom"
import { Dialog } from "vant";
export default {
  data() {
    return {
       name:this.$store.state.user.username
    };
  },

  components: {AppBottom},

  methods: {
    jumpTologin() {
      this.$router.push("/login")
    },
    logout() {
      this.$store.dispatch('Logout')
      Dialog({ message: '退出成功' });
      this.$router.push("/")
    }
  }
};
</script>

<style scoped lang="scss">
.order-header {
  margin-top: 0.36rem;
  padding: 0.24rem 0.24rem;
  color: #333;
  font-size: 0.3rem;
  background: #fff;
  line-height: 0.46rem;
}
.page {
  font-size: 0.26rem;
  min-height: 100vh;
  .page-main {
    width: 100%;
    margin-bottom: 0.24rem;
    padding-bottom: 0.16rem;
    background: url("../../assets/img/mine/bg.png") #fff no-repeat top;
    background-size: 100% auto;
    .page-main-header {
      position: relative;
      height: 3.22rem;
      padding: 0 0.24rem;
      .page_user {
        height: 1.2rem;
        padding: 0.42rem 0;
        .page_user_wrap {
          display: flex;
          align-items: center;
          .page_user_peo {
            width: 1.24rem;
            height: 1.24rem;
            margin-right: 0.18rem;
            overflow: hidden;
            border-radius: 50%;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .page_user_content {
            flex: 1;
            .user-name {
              height: 0.4rem;
              color: #333;
              font-weight: 500;
              font-size: 0.34rem;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .user-id {
              margin-top: 0.16rem;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .page_user_btn {
            min-width: 1.28rem;
            height: 0.5rem;
            font-size: 0.28rem;
            border-radius: 0.12rem;
            border: none;
            background: #f63434;
            span {
              color: #fff;
              box-sizing: border-box;
            }
          }
        }
      }
      .page_property {
        color: #000;
        text-align: center;
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            width: 33.3%;
            box-sizing: border-box;
            min-height: 1px;
            .page_one {
              margin-bottom: 0.23rem;
              font-weight: 500;
              font-size: 0.3rem;
            }
          }
        }
      }
    }
    .page-main-middle {
      .order-header {
        background: initial;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: 0.24rem 0.24rem;
        overflow: hidden;
        color: #333;
        font-size: 0.3rem;
        line-height: 0.46rem;
        .order-header-left {
          color: #000;
          font-weight: 500;
          font-size: 0.3rem;
          flex: 1;
        }
        .order-header-right {
          font-size: 0.26rem;
          overflow: hidden;
          text-overflow: ellipsis;
          flex: 0 0 auto;
          max-width: 50%;
          color: #666;
          text-align: right;
          vertical-align: middle;
        }
      }
      .order-bot {
        margin: 0.15rem 0;
        text-align: center;
        padding: 0 0.24rem;
        ul {
          margin: -0.15rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            flex: 1;
            .order-item {
              margin: 0.15rem;
              i {
                font-size: 0.48rem;
              }
              .list-name {
                margin-top: 0.24rem;
              }
            }
          }
        }
      }
    }
    .page-main-bot {
      padding-bottom: 0.3rem;
      .main-bot-img {
        margin-top: 0.6rem;
        padding: 0 0.24rem;

        .cart-item {
          width: 100%;
          border-radius: 0.16rem;
          height: auto;
          display: block;
          overflow: hidden;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
      .main-bot-mid {
        .order-module {
          padding: 0 0.24rem;
          background: #fff;
          ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            li {
              display: flex;
              align-items: center;
              box-sizing: border-box;
              width: calc(50% - 0.07rem);
              height: 1.34rem;
              margin: 0.07rem 0;
              padding: 0 0.2rem 0 0.24rem;
              background: #f7f8fa;
              border-radius: 0.16rem;
              .oc-text {
                flex: 1;
                overflow: hidden;
                text-overflow: ellipsis;
                h3 {
                  color: #333;
                  font-size: 0.26rem;
                  line-height: 0.36rem;
                }
                p {
                  margin-top: 0.04rem;
                  font-size: 0.24rem;
                  line-height: 0.32rem;
                }
              }
              .oc-img {
                width: 0.94rem;
                height: 0.94rem;
                margin-left: 0.3rem;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
      .main-bot-bot {
        .order-module {
          padding: 0 0.24rem;
          background: #fff;
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            li {
              padding: 0.2rem 0.12rem 0;
              text-align: center;
              flex: 0 0 22%;
              max-width: 22%;
              .oc-image {
                width: 0.62rem;
                height: 0.62rem;
                margin: auto;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .item-name {
                height: 0.32rem;
                margin-top: 0.12rem;
                font-size: 0.26rem;
                line-height: 0.32rem;
              }
            }
          }
        }
      }
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
      height: .82rem;
      text-align: center;
      i {
        color: #b2b2b2;
        font-size: .48rem;
      }
      span {
        color: #333;
        font-weight: 500;
        font-size: .26rem;
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
    font-size: .2rem;
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