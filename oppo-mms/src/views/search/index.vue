<template>
  <div>
    <div class="search-wrapper">
      <div class="search-header">
        <div class="next" @click="jumpTohome">
          <img src="../../assets/img/next.png" alt />
        </div>
        <form action class="search-form">
          <div class="search-panel">
            <div class="search-icon">
              <span class="el-icon-search"></span>
            </div>
            <div class="search-box">
              <input type="text" placeholder="新品Reno4系列" />
            </div>
          </div>
          <input type="submit" class="search-inp" value="搜索" @click="jumpToShopList"/>
        </form>
      </div>
      <div class="search-bot">
        <div class="hot-name">热门推荐</div>
        <div class="hot-label">
          <span>新品Reno4系列</span>
          <span @click="jumpToW31">W31</span>
          <span>A92s</span>
          <span>W51真无线降噪耳机</span>
          <span>Find X2系列</span>
          <span>OPPO手环</span>
          <span>Ace2</span>
          <span>游戏手柄</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    jumpTohome() {
      this.$router.push("/")
    },
    jumpToW31() {
      this.$router.push("/shoplist")
    },
    jumpToShopList() {
      this.$router.push("/shoplist")
    }
  }
};
</script>

<style scoped lang="scss">
.search-wrapper {
  min-height: 100vh;
  background: #fff;
  .search-header {
    right: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 7.68rem;
    height: 0.92rem;
    margin: 0 auto;
    background: #fff;
    border-bottom: 1px solid rgb(242,242,242);
    box-sizing: border-box;
    .next {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 0.98rem;
      height: 100%;
      img {
        width: 0.5rem;
        height: 0.5rem;
      }
    }
    .search-form {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .search-panel {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        width: calc(100% - 1.3rem);
        height: 0.66rem;
        background: #f7f8fa;
        border-radius: 0.09rem;
        opacity: 0.9;
        align-items: center;
        .search-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 0.62rem;
          height: inherit;
          color: #b2b2b2;
          span {
            font-size: 0.26rem;
            font-weight: 800;
            color: #b2b2b2;
          }
        }
        .search-box {
          position: relative;
          width: 4.5rem;
          color: #b2b2b2;
          font-weight: 400;
          font-size: 0.26rem;
          line-height: 0.39rem;
          input {
            width: 100%;
            color: #333;
            border: none;
            background: transparent;
            outline: none;
          }
        }
      }
      .search-inp {
        width: 1.28rem;
        height: 100%;
        color: #333;
        font-weight: 500;
        font-size: 0.3rem;
        text-align: center;
        background: transparent;
        border: none;
      }
    }
  }
  .search-bot {
    padding: 0.62rem 0.24rem 0;
    .hot-name {
      color: #999;
      font-weight: 400;
      font-size: .26rem;
    }
    .hot-label {
      margin-top: .36rem;
      span {
        color: #666;
        background: #f7f8fa;
        float: left;
        margin-right: .16rem;
        margin-bottom: .16rem;
        padding: .04rem .2rem;
        font-weight: 400;
        font-size: .26rem;
        line-height: .62rem;
        border-radius: .1rem;
      }
    }
  }
}
</style>