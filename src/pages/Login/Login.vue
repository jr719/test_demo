<template>
    <div>
      <a href="javascript:;" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
      <h1>XX外卖</h1>
      <div>
        <div><a href="#">短信登录</a><a href="#">密码登录</a></div>
        <div>
          <p><input type="text" placeholder="手机号"></p>
          <p><input type="text" placeholder="验证码"></p>
          <p>温馨提示：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
          <p><button>登陆</button></p>
          <p>关于我们</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>

</style>
