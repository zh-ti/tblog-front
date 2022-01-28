<template>
    <div class="card" @click="onClick">
      <div class="cover">
        <img :src="image" @error="imageError" :alt="title" class="cover-image">
      </div>
      <div class="infomation">
        <div class="back">
          <img :src="image" @error="imageError" class="back-image">
        </div>
        <div class="front">
          <div class="title">{{title}}</div>
          <div class="middle">
            <slot name="middle">
              <template if="content">{{content}}</template>
            </slot>
          </div>
          <div class="bottom">
            <slot name="bottom"></slot>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  props: {
    meta: {
      default(){
        return null
      }
    },
    title: {
      type: String,
      default(){
        return ''
      }
    },
    content: {
      type: String, 
      default(){
        return ''
      }
    },
    image: {
      default(){
        return null
      }
    }
  },
  methods: {
    onClick(){
      this.$emit("onClick", this.meta)
    },
    imageError({target}){
      this.$emit("imageLoadError", target)
    }
  }
}
</script>

<style scoped>
  .card {
    margin: 0 auto;
    margin-bottom: 30px;
    background-color: #ccc;
    display: flex;
    min-width: 550px;
    max-width: 800px;
    border-radius: 7px;
    overflow: hidden;
    cursor: pointer;
  }
  .card:hover .cover-image{
    transform: scale(1.1)
  }
  .cover {
    flex: 1;
    min-width: 200px;
    height: 180px;
    overflow: hidden;
  }
  .cover-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }
  .infomation{
    position: relative;
    flex: 2;
  }
  .back{
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    overflow: hidden;
  }
  .back-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(15px) brightness(0.6);
    transform: scale(1.2);
  }
  .front{
    padding: 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title{
    font-size: 1.5em;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .middle{
    font-size: 18px;
    line-height: 1.2em;
    height: 3.6em;
    text-indent: 2em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

</style>
