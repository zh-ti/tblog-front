<template>
  <div class="search">
    <slot name="button"></slot>
    <transition name="fade">
      <div class="search-back" @click.self="close" v-show="searchVisible"> 
        <div class="search-container">
          <div class="search-box">
            <input 
            type="text" 
            v-model="value" 
            @input="search" 
            placeholder="搜点什么？" 
            focus="true" 
            ref="input" />
            <i 
            class="clear iconfont icon-tongyong-guanbi" 
            title="清空输入" 
            v-show="value.length > 0" 
            @click="clear"
            ></i>
          </div>
          <div class="search-result" v-show="resultList.length">
            <div class="result-container">
              <div class="result-group" v-for="group in resultList" :key="group.groupId">
                <div class="group-title">{{group.groupTitle}}</div>
                <a class="result-item" href="#" v-for="item in group.list" :key="item.id">
                  <span class="title">{{item.title}}</span>
                  <span class="publish-date">发布时间: {{item.publishDatetime}}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
// import searchResult from 'data/searchResult'

export default {
  data(){
    return {
      value: '',
      doSearch: null,
      resultList: []
    }
  },
  props: {
    searchVisible: {
      type: Boolean,
      default(){
        return false
      }
    }
  },
  methods: {
    search(){
      if(this.doSearch) clearTimeout(this.doSearch)
      this.doSearch = setTimeout(()=>{
        this.value.trim().length > 0 && this.$emit("doSearch", this.value)
        this.doSearch = null
      }, 700)
    },
    close(){
      this.$emit('close');
    },
    clear(){
      this.value = ''
      this.$refs.input.focus()
    }
  },
  watch: {
    searchVisible(value){
      if(value){
        // 使 input 获得 focus 需要异步执行
        setTimeout(() => this.$refs.input.focus(), 0)
        document.body.style.overflow = 'hidden'
      }else{
        this.value = ''
        document.body.style.overflowY = 'unset'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~assets/css/base.stylus"

  .search-back
    position: absolute
    top: 0
    left: 0
    width: 100vw
    height: 100vh
    background-color: rgba(0,0,0,0.8)
  
  .search-container
    alignCenter(200px)
    width: 500px
    border-radius: 7px
    overflow: hidden

  .search-box
    position: relative
    display: flex
    align-items: center
    width: 100%
    box-shadow: 0 0 3px #888
    border-radius: 5px;
    background-color: #fff
  
  .search-box input
    box-sizing: content-box
    width 100%
    height: 30px
    padding: 5px 10px
    padding-right 35px
    border: none
    outline: none
    color: #333
    font-size: 16px
    background-color: transparent
  
  .search-box .clear
    position: absolute
    right: 10px
    color: #666
    font-size: 18px
    cursor: pointer
    transition: color,transform 0.3s
    &:hover
      color: #333
      transform: scale(1.2)

  .search-result
    color: #000
    padding: 10px 0 0 0
    background-color: rgba(255,255,255,0.9)
    margin-top: -10px
    transition: height 0.3s
    .result-container
      max-height: 400px
      padding: 10px
      overflow: auto

  .result-group
    margin-bottom 10px
    &:last-child
      margin-bottom 0

  .result-item
    display: flex
    justify-content: space-between
    margin-top: 5px
    padding: 7px 1em
    color: #666
    transition: color,background-color 0.3s
    border-radius: 5px
    &:hover
      color: #3498db
      background-color #ccc
    .title
      padding-right 5px
      flex: 1
      // 单行文本超出省略显示
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
  
  .result-group:hover .group-title
    color: #e17055
  
  .group-title
    color: #666
    font-size: 15px
    transition: color 0.2s
  
  .publish-date
    font-size: 14px
  
</style>
