<template>
  <header class="header">
    <!--<i class="iconfont icon-sousuo"></i>-->
    <slot name="left"></slot>
    <h3 class="ellipsis">{{title}}</h3>
    <!--<span class="login">登陆/注册</span>-->
    <slot name="right"></slot>
  </header>
</template>

<script>
export default {
  name: 'HeaderTop',
  props: {
    title: String
  }
}
</script>

<style scoped>
  .header{
    height: 30px;
    line-height: 30px;
    background: green;
    color: #ffffff;
    padding: 5px;
    text-align: center;
  }
  .icon-sousuo{
    position: absolute;
    left: 15px;
  }
  .login{
    position: absolute;
    right: 15px;
    top: 5px;
    font-size: 14px;
  }
</style>
