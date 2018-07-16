<template>
    <div>
      <HeaderTop title="首页">
        <i class="iconfont icon-sousuo" slot="left"></i>
        <span class="login" slot="right">登陆/注册</span>
      </HeaderTop>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="banner-list">
              <ul>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="banner-list">
              <ul>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
                <li>
                  <img src="./images/1.png"/>
                  <p>甜品饮品</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="main">
        <p class="title">附近商家</p>
        <ShopList/>
      </div>
    </div>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import ShopList from '../../components/ShopList/ShopList'
export default {
  name: 'MSite',
  components: {ShopList, HeaderTop},
  mounted () {
  //  创建一个swiper实例对象，来实现轮播
    var mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环轮播
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style scoped>
  .swiper-container{
    padding-bottom: 15px;
  }
  .banner-list ul li {
    float: left;
    width: 25%;
    text-align: center;
    line-height: 30px;
    display: inline-block;
    margin-top: 10px;
  }
  .banner-list img {
    width: 30px;
    height: 30px;
  }

  .title{
    padding-bottom: 15px;
  }
  .main {
    padding: 0px 10px;
  }
</style>
