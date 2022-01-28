<template>
  <div class="header">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        height: {
            type: String,
            default(){
                return "50"
            }
        }
    }
}
</script>

<style scoped>
    .header{
        box-sizing: border-box;
        background-color: #fff;
        width: 100vw;
        position: fixed;
        z-index: 1000;
        padding: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .left,
    .center,
    .right{
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
</style>
