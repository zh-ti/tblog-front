<template>
  <div class="exhibits" ref="exhibits">
    <div class="title" v-if="title">{{title}}</div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      onTop: false,
    }
  },
  props: {
    sendOnTop: {
      type: Boolean,
      default(){
        return false
      }
    },
    title: {
      type: String,
      default(){
        return null
      }
    }
  },
  mounted(){
    if(this.sendOnTop){
      this.isBrowse()
      window.addEventListener('scroll', this.isBrowse)
    }
  },
  methods: {
    offsetTop(){
      return this.$refs.exhibits?.offsetTop
    },
    skipTo(groupId, id){
      console.log(groupId, id);
    },
    isBrowse(){
      if(!this.onTop && this.offsetTop() <= Math.round(window.pageYOffset)){
        this.onTop = true
        this.$emit("isOnTop", true)
      }else if(this.onTop && this.offsetTop() > Math.round(window.pageYOffset)){
        this.onTop = false
        this.$emit("isOnTop", false)
      }
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: "qiti";
    src:url('~assets/font/ShangShouYuanQiTi.ttf')
  }

  .exhibits{
    width: 100vw;
    height: 100%;
    padding: 30px 80px;
    background-color: #f5f5f5
  }
  .title{
    text-align: center;
    font-size: 1.8em;
    color: #555;
    letter-spacing: 1em;
    margin-bottom: 30px;
    font-family: qiti
  }

</style>
