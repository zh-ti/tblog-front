<template>
  <div id="article">
    <exhibits title="文章">
      <template slot="content">
        <image-card 
        v-for="item in articles"
        :key="item.id"
        @onClick="skip"
        :image="item.cover"
        :title="item.title"
        :content="item.brief"
        :meta="{module: 'article', id: item.id}"
        >
          <template slot="bottom">
              <browse-info 
              :browses="item.broses"
              :likes="item.likes"
              :comments="item.comments"
              :date="item.publishDatetime"
              ></browse-info>
          </template>
        </image-card>
      </template>
    </exhibits>
  </div>
</template>

<script>
import Exhibits from 'components/common/exhibits/Exhibits'
import ImageCard from 'components/common/exhibits/card/ImageCard'
import BrowseInfo from 'components/common/exhibits/card/BrowseInfo'

import {getArticleList} from 'network/article'

import CoverImg from 'assets/img/cover/cover1.jpg'
import CoverImg2 from 'assets/img/cover/cover2.jpg'
import CoverImg3 from 'assets/img/cover/cover3.jpg'

export default {
  data(){
    return {
      articles: [],
      CoverImg,
      CoverImg2,
      CoverImg3,
      content: `
      强制 Vue 重新渲染组件的最佳方法是在组件上设置 :key 。
            当我们需要重新渲染组件时，只需更 key 的值，Vue 就会重新渲染组件。
            这是一个非常简单的解决方案。. 当然，你可能会对其他方式会更感兴趣：简单粗暴的方式：重新加载整个页面. 
            不妥的方式：使用 v-if. 较好的方法：使用Vue的内置 forceUpdate 方法. 
            最好的方法：在组件上进行 key 更改`
    }
  },
  components: {
    ImageCard,
    Exhibits,
    BrowseInfo
  },
  created(){
    getArticleList().then( result=> this.articles = result)
  },
  methods: {
    skip({module, id}){
      console.log(module, id);
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~assets/css/base.stylus"

</style>
