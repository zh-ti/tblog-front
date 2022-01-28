<template>
  <Header id="header" :class="{'more-blur': $store.state.inBrowse}">
    <template slot="left" class="left">
        <span class="logo"></span>
        <span class="brand">TIAN</span>
    </template>
    <template slot="center">
        <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/article">文章</router-link>
        <router-link to="/project">项目</router-link>
        <router-link to="/message">留言</router-link>
        <router-link to="/friend">友链</router-link>
        <router-link to="/about">关于</router-link>
      </div>
    </template>
    <template slot="right">
      <search class="search" :searchVisible.sync="searchVisible" @doSearch="search" @close="searchVisible=false">
        <button class='button search-btn' slot="button" @click="searchVisible=true">
          <i class="iconfont icon-search"></i>
        </button>
      </search>
    </template>
  </Header>
</template>

<script>
import Header from 'components/common/header/Header'
import Search from './Search'

export default {
    data(){
      return {
        searchVisible: false,
        typing: false,
      }
    },
    components: {
      Header,
      Search
    },
    methods: {
      toIndex(){
        console.log('index');
        this.$router.push("/")
      },
      search(value){
        console.log(value);
      },
      
    }
}
</script>

<style lang="stylus">
    @import "~assets/css/base.stylus"

    #header
      top: 0
      background-color rgba(0,0,0,0.3)
      backdrop-filter blur(3px)
      z-index: 10000
      padding 0 20px
      height: headerHeight
      transition: background-color 0.3s
    .more-blur
      background-color rgba(0,0,0, 0.6) !important
      backdrop-filter blur(10px)

    .center a
      padding 8px 15px
      color #d9d9d9
      margin 0 3px
      font-size 18px
      transition color,background 0.3s
      border-radius 5px
      &:hover
        color #fff
        background-color rgba(255,255,255,0.2)

    .logo
      display inline-block
      background-image url("~assets/img/header/logo.png")
      background-size contain
      background-repeat no-repeat
      width 45px
      height 45px
      margin-right 5px
    .brand
      font-size 2em
      font-weight bold
      letter-spacing 3px
      color #eee

    .search
      margin-left 10px
      padding 5px 7px
      border-radius 5px
      transition color,background 0.3s
      .search-btn
        background-color transparent
      .icon-search
        color #fff
        font-size: 26px
        cursor: pointer
      &:hover
        color #fff
        background-color rgba(255,255,255,0.2)
          
</style>
