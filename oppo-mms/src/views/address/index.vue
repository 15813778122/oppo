<template>
  <div>
    <header>
      <div class="nav-bar">
        <div class="nav-bar-left" @click="jumpTobook">
          <i class="el-icon-back"></i>
        </div>
        <div class="shopcar">添加地址</div>
      </div>
    </header>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-area
      show-set-default
      show-search-result
      area-placeholder
      tel-validator="true"
      postal-validator="true"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      class="content"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import areaData from'@/utils/areaData.js'
export default {
  data() {
    return {
      searchResult: [],
      areaList:areaData,
      // obj:{
      //   uname, phone,area,address,coding
      // }
    };
  },

  components: {},

  methods: {
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    jumpTobook() {
        this.$router.push("/book")
    }
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
  border-bottom: 1px solid rgb(242,242,242);
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
.content {
    position: relative;
    top: 1rem;
}
</style>