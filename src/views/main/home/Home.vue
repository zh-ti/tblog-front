<template>
  <div id="home" ref="home">
      <Welcome @start="scrollBown"></Welcome>
      <Exhibits
      ref="exhibits" 
      class="exhibites" 
      @isOnTop="onTop"
      :sendOnTop="true"
      :backgroundColor="'#eee'"
      >
        <template slot="content">
          <div class="group">
            <div class="group-title">最新文章</div>
            <div class="contents">
              <image-card
              v-for="item in articles" 
              :key="item.id"
              :title="item.title"
              :content="item.brief"
              :meta="{module: 'article', id: item.id}"
              :image="item.cover"
              :imageLoadError="imageLoadError"
              @onClick="skipTo"
              >
                <div slot="bottom">
                  <browse-info 
                  :browses="item.browses"
                  :likes="item.likes"
                  :comments="item.comments"
                  :date="item.publishDatetime"
                  />
                </div>
              </image-card>
            </div>
          </div>
        </template>
      </Exhibits>
  </div>
</template>

<script>
  import Welcome from "./Welcome"

  import {getLastArticle} from 'network/home'

  import Exhibits from "components/common/exhibits/Exhibits"
  import ImageCard from "components/common/exhibits/card/ImageCard"
  import BrowseInfo from 'components/common/exhibits/card/BrowseInfo'

  import dataList from 'data/searchResult'
  import {scrollTo} from 'lib/utils/tools'

  import Image from 'assets/img/cover/cover1.jpg'

export default {
  data(){
    return {
      dataList,
      bs: null,
      content: `
            Animations can improve the UX of an interface, but keep in mind that they can also get in the way of your users! Please read the best practices and gotchas sections to bring your web-things to life in the best way possible.
      `,
      coverImage: Image,
      articles: []
    }
  },
  components: {
    Welcome,
    Exhibits,
    ImageCard,
    BrowseInfo,
  },
  mounted(){

  },
  created(){
    this.$store.dispatch('inBrowse', false)
    this.$store.dispatch('topPoint', 1)

    getLastArticle().then(result => this.articles = result)
  },
  beforeRouteLeave(to, from, next){
    this.$store.dispatch('inBrowse', true)
    this.$store.dispatch('topPoint', 0)
    next()
  },
  methods: {
    scrollBown(){
      scrollTo(window.innerHeight)
    },
    onTop(state){
      this.$store.dispatch('inBrowse', state)
    },
    skipTo({module, id}){
      console.log(module, id);
    },
    imageLoadError(target){
      console.log(target);
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~assets/css/base.stylus"

  #home
    width 100vw
    position(relative)
    top: minus(headerHeight)

  .exhibites
    padding-top 100px !important

  .group
    margin-bottom: 50px;
  
  .group:last-child
    margin-bottom: 0;
  
  .group-title
    text-align: center;
    font-size: 1.8em;
    letter-spacing: 1em;
    margin-bottom: 20px;
    color: #555;
    font-family: 'qiti';
  
</style>
