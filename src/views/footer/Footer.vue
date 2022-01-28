<template>
  <div id="footer">
    <div class="end">END</div>
    <div class="info">
      <div class="copyright">
        Copyright © 2021 HOME OF TIAN, All Rights Reserved.
      </div>
    </div>
    <div class="icp">
      <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备2021022958号-1</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
  @import "~assets/css/base.stylus"

  #footer
    flexbox(,,column)
    bottom 0
    left 0
    padding 20px 50px
    background-color #e9e9e9
    width 100vw

  .end
    position relative
    font-size 18px
    margin-bottom 10px
    z-index: 1
    color #888
    &:before
    &:after
      position absolute
      content ''
      top calc(50% - 1px)
      width 100px
      border-bottom: 1px solid #999
      z-index 0
    &:before
      right calc(100% + 10px)
    &:after
      left calc(100% + 10px)

  .info
    font-size 14px
  .icp a
    font-size 14px
    color #999
    transition color 0.2s
    &:hover
      color #0984e3
</style>
