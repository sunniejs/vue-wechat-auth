<template>
  <div class="app-container">
    <div class="warpper">
      <div class="list">
        <div class="logo"></div>
        <div class="demo-home__title"> VUE 微信授权解决方案</div>
        <div class="item">项目地址: <a target="_blank" href="https://github.com/sunniejs/vue-wechat-auth">https://github.com/sunniejs/vue-wechat-auth</a></div>
        <div class="item">项目作者: sunnie</div>
        <div class="item"></div>
        <div class="wechat">
          <img src="https://imgs.solui.cn/wx/640.gif" alt="">
        </div>
        <div class="item">关注公众号：回复“加群”即可加 前端仙女群</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

  computed: {
  },

  mounted() {
  },

  methods: {
  }
}
</script>
<style lang="scss" scoped>
.app-container {
  background: #fff;
  height: 100vh;
  box-sizing: border-box;
  .warpper {
    padding: 50px 12px 12px 12px;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      font-size: 14px;
      .demo-home__title {
        margin: 0 0 6px;
        font-size: 32px;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .item {
        font-size: 14px;
        line-height: 34px;
        a {
          text-decoration: underline;
        }
      }

      .logo {
        width: 120px;
        height: 120px;
        background: url('https://imgs.solui.cn/weapp/logo.png') center / contain no-repeat;
      }
      .wechat {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
