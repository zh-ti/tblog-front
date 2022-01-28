<template>
  <div class="to-top" v-show="show" @click="toTop"
  :style="`
    top: ${top};
    left: ${left};
    right: ${right};
    bottom: ${bottom};
    color: ${fontColor};
  `"
  :title="title"
  >
    <i 
    class="iconfont" 
    :class="icon" 
    :style="`font-size:${fontSize}px;`"
    ></i>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: false,
      screenHeight: window.innerHeight,
    }
  },
  props: {
    icon: {
      type: String,
      default(){
        return "icon-fangxiang-shang"
      }
    },
    fontSize: {
      type: Number,
      default(){
        return 18
      }
    },
    topPoint: {
      type: Number,
      default(){
        return 0
      }
    },
    showPoint: {
      type: Number,
      default(){
        return 0
      }
    },
    top: {
      type: String,
      default(){
        return 'unset'
      }
    },
    left: {
      type: String,
      default(){
        return 'unset'
      }
    },
    right: {
      type: String,
      default(){
        return '30px'
      }
    },
    bottom: {
      type: String,
      default(){
        return '30px'
      }
    },
    fontColor: {
      type: String,
      default(){
        return "#3498db"
      }
    },
    shadowColor: {
      type: String,
      default(){
        return '#999'
      }
    },
    title: {
      type: String,
      default(){
        return "返回顶部"
      }
    }
  },
  mounted(){
    window.addEventListener('scroll', ()=>{
      if(!this.show && parseInt(window.pageYOffset) >= this.showPoint * this.screenHeight)
        this.show = true
      else if(this.show && parseInt(window.pageYOffset) < this.showPoint * this.screenHeight)
        this.show = false
    })
  },
  methods: {
    toTop(){
      window.scrollTo({
        top: this.topPoint * this.screenHeight,
        behavior: 'smooth'
      })
    }
  },
  watch: {

  }
}
</script>

<style scoped>
  .to-top{
    box-sizing: content-box;
    position: fixed;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    padding: 5px;
    background-color: #fff;
    box-shadow: 0 0 2px #999;
    transition: box-shadow 0.3s;
    border-radius: 50%;
    cursor: pointer;
    color: #3498db;
  }
  .to-top:hover{
    box-shadow: 0 0 5px #74b9ff;
  }
  
</style>
