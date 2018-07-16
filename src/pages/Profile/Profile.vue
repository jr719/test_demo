<template>
    <div>
      <HeaderTop title="我的"/>
      <div class="logininfo">
        <router-link to="/login">
          <img src="../../../static/images/1.png">
          <div class="info">
            <p>登陆/注册</p>
            <p>暂无绑定手机号</p>
          </div>
        </router-link>
      </div>
      <ul class="account">
        <li>
          <p>0.00元</p>
          <p>我的余额</p>
        </li>
        <li>
          <p>0.00元</p>
          <p>我的余额</p>
        </li>
        <li>
          <p>0.00元</p>
          <p>我的余额</p>
        </li>
      </ul>
      <ul class="menulist">
        <li><img src="../../../static/images/1.png"> 我的订单</li>
        <li><img src="../../../static/images/1.png"> 我的订单</li>
        <li><img src="../../../static/images/1.png"> 我的订单</li>
        <li><img src="../../../static/images/1.png"> 我的订单</li>
      </ul>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  name: 'Profile',
  components: {HeaderTop}
}
</script>

<style scoped>
  .logininfo {
    display: inline-block;
    width: 100%;
    background: green;
    color: #ffffff;
  }
  .info{
    float: left;

  }
  .logininfo img{
    width: 60px;
    float: left;
  }
  .account{
    padding-bottom: 10px;
    border-bottom: 1px solid #eeeeee;
    display: inline-block;
    width: 100%;
  }
  .account li{
    float: left;
    width: 33%;
    display: inline-block;
    text-align: center;
  }
  .account li p:first-child{
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .account li:not(:last-child){
    border-right: 1px solid #eeeeee;
  }
  .menulist img{
    width: 20px;
    position: absolute;
    left: 15px;
    top: 8px;
  }
  .menulist li{
    border-bottom: 1px solid #eeeeee;
    width: 100%;
    /*padding: 10px;*/
    /*padding-left: 40px;*/
    padding: 10px 0px 10px 40px;
    position: relative;
  }
</style>
