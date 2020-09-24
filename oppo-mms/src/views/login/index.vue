<template>
  <div>
    <div class="header">
      <div class="header_wrap">
        <div class="language">
          简体中文
          <span class="arrow"></span>
          <div class="changeBox isshow">
            <div>简体中文</div>
            <div>繁體中文</div>
            <div>English</div>
          </div>
        </div>
        <div class="help">帮助中心</div>
      </div>
    </div>
    <div class="main">
      <div class="main_top">
        <div class="logo"></div>
        <h1>登录 OPPO 账号可享受更多的服务</h1>
      </div>

      <div class="main_bottom">
        <div class="changeLogin">
          <p :class="flag ? 'black' : ''" @click="flag = !flag">短信验证码登录</p>
          <span>|</span>
          <p :class="!flag ? 'black' : ''" @click="flag = !flag">密码登录</p>
        </div>

        <div v-show="flag">
          <div class="input_phone">
            <input type="text" placeholder="请输入手机号码" />
          </div>
          <div class="input_yzm">
            <input type="text" placeholder="请输入验证码" />
            <div class="input_code">获取验证码</div>
          </div>
        </div>

        <div v-show="!flag">
          <div class="input_phone">
            <input type="text" placeholder="请输入手机号码" v-model="ruleForm.name" />
          </div>
          <div class="input_yzm">
            <input type="password" placeholder="请输入密码" class="pwd" v-model="ruleForm.pwd" />
            <i></i>
          </div>
          <div class="forgotpwd">忘记密码</div>
        </div>

        <div class="btn_login" @click="submitForm">登录</div>
        <p class="reg" @click="jumpToreg">注册账号</p>
      </div>
      <!-- <div class="main_bottom">
        <div class="changeLogin">
          <p>短信验证码登录</p>
          <span>|</span>
          <p>密码登录</p>
        </div>
        <div class="input_phone">
          <input type="text" placeholder="请输入手机号码" />
        </div>
        <div class="input_yzm">
          <input type="text" placeholder="请输入密码" class="pwd" />
          <i></i>
        </div>
        <div class="forgotpwd">忘记密码</div>
        <div class="btn_login">登录</div>
        <p class="reg">注册账号</p>
      </div>-->
      <div class="link">账号隐私声明</div>
    </div>
    <div class="footer">
      <p>
        <span>© 2005 - 2020 OPPO 版权所有 粤ICP备14056724号-2 联系方式：4001-666-888</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      flag: true,
      ruleForm: {
        name: "",
        pwd: "",
        keep: true
      }
    };
  },

  components: {},

  methods: {
    jumpToreg() {
      this.$router.push("/register");
    },
    async submitForm() {
      try {
        let p = await this.$store.dispatch("Login", this.ruleForm);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped>
@import "~@/assets/css/public/login.css";
</style>