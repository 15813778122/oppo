<template>
  <div>
    <div class="register">
      <div class="box">
        <div class="box-content">
          <div class="register-content">
            <div class="formtable">
              <h3>注册账号</h3>
              <div class="area">
                <div>
                  <div class="country">国家/地区</div>
                  <input type="text" autocomplete="off" disabled value="中国" class="one" />
                  <i class="changeCountry"></i>
                </div>
              </div>
              <p class="text">成功注册帐号后，国家/地区将不可更改</p>
              <input type="text" placeholder="请输入手机号码或邮箱" class="phone" v-model="rule.name" />
              <div class="yzm">
                <input type="text" placeholder="请输入验证码" class="yzm-inp" />
                <button class="yzm-btn">获取验证码</button>
              </div>
              <div class="pwd">
                <input type="password" placeholder="请输入密码" v-model="rule.pwd" />
                <i></i>
              </div>
              <p class="pwd-text">密码由 6-16 位数字、字母或符号组成，至少包含两种字符</p>
              <div class="agreement">
                <i
                  :class="flag ? 'iconfont icon-xuanzhong' : 'iconfont icon-fuxuankuangweigouxuan'"
                  @click="btn"
                ></i>
                <p class="agreement-text">
                  已阅读并同意
                  <span>《OPPO 帐号使用协议》</span>
                  <span>《OPPO 帐号隐私声明》</span>
                </p>
              </div>
              <button :class="rule.name ? 'button btn_green' : 'button'" @click="jumpTologin">注册</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <span>&copy; 2005 - 2020 OPPO 版权所有 粤ICP备14056724号-2</span>
        <span>联系方式：4001-666-888</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      rule: {
        name: "",
        pwd: ""
      },
      flag: false,
      url1: "background: url('../../assets/img/noeye.png') no-repeat 50%",
      url2: "background: url('../../assets/img/eye.png') no-repeat 50%"
    };
  },

  components: {},

  methods: {
    async jumpTologin() {
      let p = await this.$store.dispatch("Reg", this.rule)
      console.log(p)
      if (p.flag) {
        Dialog({ message: '注册成功，即将跳转到登录页面' });
        this.$router.push('/login')
      }
      
    },
    btn() {
      this.flag = !this.flag;
    }
  }
};
</script>

<style scoped lang="scss">
.register {
  position: relative;
  box-sizing: border-box;
  .box {
    min-height: calc(100vh - 8rem) !important;
    margin: 0 auto;
    .box-content {
      margin-top: 1rem;
      .register-content {
        .formtable {
          width: calc(100% - 1rem);
          padding: 0 0.5rem;
          h3 {
            margin-bottom: 1em;
            font-size: 25px;
            line-height: 36px;
            font-weight: 500;
            width: 100%;
            text-align: center;
          }
          .area {
            width: 100%;
            position: relative;
            margin-top: 1.8rem;
            margin: 0.45rem auto 0.3rem;
            background: #f7f7f7;
            height: 0.9rem;
            border-radius: 0.18rem;
            .country {
              font-size: 0.3rem;
              width: 2rem;
              line-height: 1rem;
              position: relative;
              text-align: center;
              color: #000;
              background: #f7f7f7;
              border-radius: 0.18rem 0 0 0.18rem;
              height: 0.7rem;
              &::after {
                content: "";
                position: absolute;
                right: 0;
                top: 0.4rem;
                height: 12px;
                width: 1px;
                background: #d8d8d8;
              }
            }
            .one {
              text-indent: left;
              height: 0.7rem;
              line-height: 2.2rem;
              font-size: 0.25rem;
              border-radius: 0.35rem;
              background: #f7f7f7;
              position: absolute;
              border: none;
              top: 0.15rem;
              left: 2.3rem;
            }
            .changeCountry {
              position: absolute;
              top: 0.35rem;
              right: 0.35rem;
              display: inline-block;
              width: 0.2rem;
              height: 0.2rem;
              background: url("../../assets/img/shoplist/changeCountry.png")
                no-repeat 50%;
            }
          }
          .text {
            width: 100%;
            margin: 0.1rem auto 0.2rem;
            font-size: 0.25rem;
            margin-left: 0;
            color: #b2b2b2;
          }
          .phone {
            width: 100%;
            background: #f7f7f7;
            height: 0.9rem;
            margin-top: 0.1rem;
            text-indent: 16px;
            font-size: 0.25rem;
            color: #b2b2b2;
            border: none;
            border-radius: 0.18rem;
            outline: none;
            margin-bottom: 0.15rem;
          }
          .yzm {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.2rem;
            .yzm-inp {
              width: 63%;
              background: #f7f7f7;
              height: 0.9rem;
              text-indent: 16px;
              font-size: 0.25rem;
              color: #b2b2b2;
              border: none;
              border-radius: 0.18rem;
              outline: none;
            }
            .yzm-btn {
              width: 34%;
              background: #d8d8d8;
              height: 0.9rem;
              text-align: center;
              color: #fff;
              font-size: 0.25rem;
              border: none;
              border-radius: 0.18rem;
            }
          }
          .pwd {
            margin-bottom: 0.2rem;
            input {
              width: 100%;
              background: #f7f7f7;
              height: 0.9rem;
              text-indent: 16px;
              font-size: 0.25rem;
              color: #b2b2b2;
              border: none;
              border-radius: 0.18rem;
              outline: none;
            }
            i {
              width: 0.4rem;
              height: 0.4rem;
              background: url("../../assets/img/noeye.png") no-repeat 50%;
              background-size: contain;
              float: right;
              position: absolute;
              right: 0.8rem;
              margin-top: 0.25rem;
            }
          }
          .pwd-text {
            width: 100%;
            margin: 0.1rem auto 0.2rem;
            font-size: 0.25rem;
            margin-left: 0;
            color: #b2b2b2;
          }
          .agreement {
            display: flex;
            justify-content: center;
            i {
              height: 0.4rem;
              width: 0.4rem;
              font-size: 0.4rem;
              color: #b2b2b2;
            }
            .agreement-text {
              font-size: 0.25rem;
              margin-left: 0.15rem;
              span {
                color: #2ad181;
                font-size: 0.25rem;
              }
            }
          }
          .button {
            margin-top: 1rem;
            width: 100%;
            height: 0.9rem;
            background: #bef1d9;
            color: #fff;
            line-height: 0.9rem;
            text-align: center;
            border: none;
            outline: none;
            border-radius: 0.2rem;
          }
          .btn_green {
            background: #2ad181;
          }
        }
      }
    }
  }
  .footer {
    position: relative;
    top: 1rem;
    padding: 0 1.5rem;
    span {
      color: #9b9b9b;
    }
  }
}
</style>