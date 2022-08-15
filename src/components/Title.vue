<template>
    <div class="title">
        <component :is="LeftIcon" :height="28" :width="28"></component>
        <h1>{{title}}</h1>
        <component :is="RightIcon" :height="28" :width="28"></component>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    name:"Title",
    props: ["title",'LeftIconName', "RightIconName"],
    computed: {
        LeftIcon(){return defineAsyncComponent(() => import(`@/assets/${this.LeftIconName}.vue`))},
        RightIcon(){return  defineAsyncComponent(() => import(`@/assets/${this.RightIconName}.vue`))},
    }
}
</script>

<style scoped>
.title{
  max-height: 10%;
  display: flex;
  padding: auto;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: "Open sans";
  position: absolute;
  background: #ffff; /*#f7f3f3;*//*#1e272e;*/
  width: inherit;
  border-bottom: 4px solid #000;
  
}
.title h1{
  font-size: 28px;
  width: 50%;
  white-space: nowrap;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: "Open sans";
  color: #000;
  text-transform: uppercase;
  font-weight:900;
  margin-right: 20px;
}
</style>