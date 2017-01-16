<!--
<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your Vue.js app!
    </p>
    <p>
      To get a better understanding of how this boilerplate works, check out
      <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
      It is also recommended to go through the docs for
      <a href="http://webpack.github.io/" target="_blank">Webpack</a> and
      <a href="http://vuejs.github.io/vue-loader/" target="_blank">vue-loader</a>.
      If you have any issues with the setup, please file an issue at this boilerplate's
      <a href="https://github.com/vuejs-templates/webpack" target="_blank">repository</a>.
    </p>
    <p>
      You may also want to checkout
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
    </p>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
-->
<!--<template>-->
  <!--<h1>这里是vue{{msg}}</h1>-->
  <!--<hello></hello>-->
<!--</template>-->
<!--<script>-->
  <!--import Hello from './components/Hello'-->
  <!--export default{-->
    <!--data(){-->
      <!--return {-->
        <!--msg:'wangwuzhaoillufefjefefejlfefkjel'-->

      <!--}-->
    <!--} ,-->
    <!--components:{Hello}-->
  <!--}-->
<!--</script>-->
<!--<style scope>-->
    <!--h1{-->
      <!--background: blue;-->
    <!--}-->
<!--</style>-->
<template>
  <ele-header :seller="seller"></ele-header>
  <div class="tab border-1px">
    <div class="tab-item">
      <a v-link="{path:'/goods'}">商品</a>
    </div>
    <div class="tab-item">
      <a v-link="{path:'/ratings'}">评价</a>
    </div>
    <div class="tab-item">
      <a v-link="{path:'/seller'}">商家</a>
    </div>
  </div>
  <router-view keep-alive></router-view>
</template>

<script>
  import header from './components/header/header.vue'
  export default{
    data(){
      return {
        seller:{}
      }
    } ,
    components:{
      'ele-header':header
    },
    created () {
      this.$http.get('/api/seller').then(function (response) {
        const result = JSON.parse(response.body)
        if (result.errcode === 0) {
          this.seller = result.data
          console.log(this.seller);
        }
      })
    }
  }
</script>

<style lang="stylus" rel='stylesheet/stylus'>
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
