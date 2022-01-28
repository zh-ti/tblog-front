<template>
  <div id="main-view">
    <Header />
    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
    <Footer />
    <to-top 
    :showPoint="this.$store.state.topPoint + 0.5"
    :topPoint="this.$store.state.topPoint"
    bottom="60px"
    />
  </div>
</template>

<script>
import Header from 'views/header/Header'
import Footer from "views/footer/Footer"
import ToTop from "components/common/button/ToTop"

export default {
    components: {
        Header,
        Footer,
        ToTop,
    },
    data(){
      return {
      }
    },
    methods: {
      
    },
    mounted(){
      
    },
    watch: {
      // '$route' (to, from){
      //   this.transitionName = to.meta.sort >= from.meta.sort ? 'slide-right' : 'slide-left'
      // }
    }
}
</script>

<style lang="stylus">
    @import "~assets/css/base.stylus"
    
    #main-view
      position: relative
    main
      position: relative
      padding-top: headerHeight
      min-height: 100vh
      background-color #f5f5f5

    .fade-enter-active,
    .fade-leave-active
      position: absolute
      transition: opacity 0.3s
    .fade-enter
      opacity: 0
    .fade-enter-to
      opacity: 1
    .fade-leave
      opacity: 1
    .fade-leave-to
      opacity: 0

//   .slide-left-enter-active,
//   .slide-left-leave-active 
//     position: absolute
//     transition: transform 0.5s ease
//   .slide-left-enter
//     transform: translate(-100%)
//   .slide-left-enter-to
//     transform: translateX(0px)
//   .slide-left-leave
//     transform: translate(0px)
//   .slide-left-leave-to
//     transform: translateX(100%)

// .slide-right-enter-active,
//   .slide-right-leave-active 
//     position: absolute
//     transition: transform 0.5s ease
//   .slide-right-enter
//     transform: translate(100%)
//   .slide-right-enter-to
//     transform: translateX(0px)
//   .slide-right-leave
//     transform: translate(0px)
//   .slide-right-leave-to
//     transform: translateX(-100%)
</style>
