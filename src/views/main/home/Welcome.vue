<template>
    <div id="welcome-page" ref="welcome">
      <div class="background">
        <img :src="bgImg" ref="background" @load="bgLoaded">
        <div class="mask" :class="{'blur': $store.state.showBackground}"></div>
      </div>
      <div class="content" :class="{'ready': ready}">
        <div class="text">
          <div class="max">不念过往 不畏将来</div>
          <div class="min">The past be forgotten, the future be feared not</div>
        </div>
        <div class="start-browse">
          <div class="eyes">
            <i class="iconfont icon-liulan" @click="start"></i>
          </div>
          <div class="intro">开始浏览</div>
        </div>
      </div>
    </div>
</template>

<script>
import backgroundImg from 'assets/img/backgroundImg/bg1.jpg'

export default {
  data(){
    return {
      isStart: false,
      ready: false,
      bgImg: backgroundImg
    }
  },
  methods: {
    start(){
      this.$emit("start", this.$refs.welcome.offsetHeight)
    },
    bgLoaded({target}){
      target.style.opacity = 1
    },
  },
  mounted(){
    this.ready = true;
  },
}
</script>

<style lang="stylus" scoped>
    @import "~assets/css/base.stylus"

    #welcome-page
      fullWindow()
      
    .content
      fullBox(absolute)
      flexbox()
      color #fff
      font-size 1em
      text-align: center
      z-index 100
      .max
        font-size 2.5em
        letter-spacing 2px
        font-weight bold
        text-shadow 0 1px 5px rgba(0,0,0,0.6) !important
      .min
        font-size 1em
        margin-top 10px
        font-stretch semi-condensed
        font-weight bold
        font-family zillaslab,palatino,"Palatino Linotype",serif
        text-shadow 0 0 5px rgba(0,0,0,0.8) !important

    .start-browse
      position absolute
      flexbox(,,$direc=column-reverse)
      width 100px
      top calc(50% + 200px)
      z-index 10
      .eyes
        animation blink 5s infinite
        .iconfont
          font-size 2.2em
          cursor pointer
          color rgba(255,255,255,0.8)
          text-shadow 0 0px 5px rgba(0,0,0,0.3) !important
          transition color 0.3s
        &:hover
          transform scaleY(1)
          .iconfont
            color: #fff
          ~.intro
            opacity: 1
      .intro
        position: absolute
        transition: opacity 0.5s
        opacity: 0
        transform: translateY(-30px)
        color: #efefef
        text-shadow 0 0 2px rgba(0,0,0,0.8) !important
      @keyframes blink 
        0%
          transform scaleY(1)
        80%
          transform scaleY(1)
        90%
          transform scaleY(0)
        100%
          transform scaleY(1)
    
    .background
      fullWindow()
      background-image: radial-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.3) 70%);
      img
        fullWindow(absolute)
        opacity 0
        transition opacity 1.5s
        z-index 0
        object-fit cover
      .mask
        content: ''
        background-color rgba(100,100,100, 0.3)
        transition: background-color 0.5s
        fullWindow(absolute)
        z-index: 1
      .blur
        background-color: #eee

    .fade-enter-active,
    .fade-leave-active
      position: absolute
      top: 0
      transition: opacity 0.5s
    .fade-enter
      opacity: 0
    .fade-enter-to
      opacity: 1
    .fade-leave
      opacity: 1
    .fade-leave-to
      opacity: 0
</style>
