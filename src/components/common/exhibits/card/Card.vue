<template>
  <div class="card" @click="onClick">
    <div class="top">
      <slot name="top">
        <div class="title" v-if="title">
          {{title}}
        </div>
      </slot>
    </div>
    <div class="middle">
      <slot name="middle">
        <div class="content" v-if="content">
          {{content}}
        </div>
      </slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default(){
        return null
      }
    },
    content: {
      type: String,
      default(){
        return null
      }
    },
    image: {
      default(){
        return null
      }
    },
    meta: {
      default(){
        return null
      }
    }
  },
  methods: {
    onClick(){
      this.$emit("onClick", this.meta)
    }
  }
}
</script>

<style scoped>
  .card{
    /* flex-grow: 0; */
    width: 260px;
    margin: 20px;
    padding: 15px;
    transition: box-shadow 0.3s, background-color 0.3s, color 0.3s;
    box-shadow: 0 0 2px #999;
    border-radius: 10px;
    background-color: #fff;
    cursor: pointer;
  }
  .card:hover{
    box-shadow: 0 0 10px #ccc;
    background-color: #fcfcfc;
    color: #333;
  }
  .card:hover .title{
    color: #2980b9;
  }
  .title{
    transition: color 0.3s;
    text-align: center;
  }
  .content{
    box-sizing: content-box;
    text-indent: 2em;
    margin: 10px 0;
    padding: 4px;
    height: 100px;
    line-height: 20px;
    font-size: 14px;
    border-top: 1px dashed #999;
    border-bottom: 1px dashed #999;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }
  .info{
    font-size: 14px;
  }
  .browse-info{
    margin-top: 3px;
  }
  .browse-info i{
    margin-left: 5px;
  }
</style>
