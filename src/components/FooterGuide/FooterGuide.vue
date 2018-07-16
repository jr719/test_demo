<template>
    <!--<div class="footer_guide">-->
      <!--<a href="javascript:;" class="guide_item on">-->
        <!--<span class="item_icon">-->
          <!--<i class="iconfont icon-waimai"></i>-->
        <!--</span>-->
        <!--<span>外卖</span>-->
      <!--</a>-->
      <!--<a href="javascript:;" class="guide_item on">-->
        <!--<span class="item_icon">-->
          <!--<i class="iconfont icon-waimai"></i>-->
        <!--</span>-->
        <!--<span>外卖</span>-->
      <!--</a>-->
      <!--<a href="javascript:;" class="guide_item on">-->
        <!--<span class="item_icon">-->
          <!--<i class="iconfont icon-waimai"></i>-->
        <!--</span>-->
        <!--<span>外卖</span>-->
      <!--</a>-->
      <!--<a href="javascript:;" class="guide_item on">-->
        <!--<span class="item_icon">-->
          <!--<i class="iconfont icon-waimai"></i>-->
        <!--</span>-->
        <!--<span>外卖</span>-->
      <!--</a>-->
    <!--</div>-->
  <mt-tabbar class="footer">
    <mt-tab-item>
      <div class="mint-tab-item-icon" :class="{on: '/msite'===$route.path}" @click="goTo('/msite')">
        <i class="iconfont icon-waimai"></i>
      </div>
      外卖
    </mt-tab-item>
    <mt-tab-item>
      <div class="mint-tab-item-icon" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
        <i class="iconfont icon-search"></i>
      </div>
      搜索
    </mt-tab-item>
    <mt-tab-item>
      <div class="mint-tab-item-icon" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
        <i class="iconfont icon-dingdan"></i>
      </div>
      订单
    </mt-tab-item>
    <mt-tab-item>
      <div class="mint-tab-item-icon" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
        <i class="iconfont icon-geren"></i>
      </div>
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name: 'FooterGuide',
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped>
  .on{
    color: green;
  }
  .footer{
    position: fixed;

  }
</style>
