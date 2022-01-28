<template>
  <div class="browse-info">
    <div class="info">
      <span class="browses"><i class="iconfont icon-liulan"></i>{{browses}}</span>
      <span class="likes"><i class="iconfont icon-dianzan"></i>{{likes}}</span>
      <span class="comments"><i class="iconfont icon-liuyan"></i>{{comments}}</span>
    </div>
    <div class="date" v-if="date">
      <i class="iconfont icon-date icon"></i>
      {{date}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    browses: {
      type: Number,
      default(){
        return 0
      }
    },
    likes: {
      type: Number,
      default(){
        return 0
      }
    },
    comments: {
      type: Number,
      default(){
        return 0
      }
    },
    date: {
      type: String,
      default(){
        return null
      }
    }
  }
}
</script>

<style scoped>
  .browse-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .browses,
  .likes,
  .comments{
    margin-right: 10px;
  }
  .browses i,
  .likes i,
  .comments i{
    margin-right: 3px;
  }
  .browses i{
    color: #16a085;
  }
  .likes i{
    color: #e74c3c;
  }
  .comments i{
    color: #3498db;
  }
  .date{
    display: flex;
    align-items: center;
  }
  .icon{
    margin-right: 3px;
  }
</style>
