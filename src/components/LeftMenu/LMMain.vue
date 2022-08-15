<template>
  <div class="menu">
    <Title   
    :title='title' 
    :LeftIconName="'Backward'" 
    :RightIconName="'CalendarIcon'"/>
    
    <!-- <Chat/> -->
    <router-view :itemList="itemList"></router-view>
    <!-- <List 
    :itemList="itemList"
    @getItems="fetchItems"
    /> -->
    
    <BottomNav/>
    
  </div>
</template>

<script>

import Title from '@/components/Title.vue'
import List from '@/components/List.vue'
import BottomNav from '@/components/BottomNav.vue'
import Chat from '@/components/Chat.vue'
import axios from "axios"


export default {
  data: () => {
    return {
      itemList: [],
      title: "группы",
    }
  },
  name: 'LeftMenu',
  components:{
    BottomNav,
    List,
    Title,
    Chat
  },
  beforeRouteUpdate(to, from, next){
    console.log(to)
    if (to.name === "group")
    this.fetchItems(to.params).then(response => {
      this.itemList = response.data
      next()
    })
    if (to.name === "groups")
    this.fetchGroups().then(response => {
      this.itemList = response.data
      next()
    })
  },
  methods:{
    async fetchGroups(){
      try{
        const response = await axios.get('api/groups')
        this.title = 'группы'
        return response
      }
      catch(e){console.log(e)}
    },
    async fetchItems(item){
      try{
        const response = await axios.get('api/group/'+item.id)
        this.title = item.name
        return response
      }
      catch(e){console.log(e)}
    },  
  },
  mounted(){
      this.fetchGroups().then(response => {
        this.itemList = response.data
        })
    

    
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;800&display=swap');



.menu {
  position: fixed;
  overflow: hidden;
  left: 0;top: 0;
  width: 320px;
  height: 100vh;
  background-color: #ffff; 
  border-right: 1px solid #000;
}

@media  (max-width: 700px){
.menu{
  width: 100%;
};
}

</style>