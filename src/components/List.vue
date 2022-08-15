<template>
  <div>
    <ul class="menu-list">
      <router-link
      tag="li"
      v-for="item in itemList" 
      :key="item.id"
      :to= "{name: 'group', params: {id: item.id, name: item.name }}"
      >
      <span>{{item.name}}</span>
      </router-link>

    </ul>
  </div>
</template>

<script>


export default {
  name: "List",
  props: {
    itemList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.menu-list::-webkit-scrollbar {
  width: 7px;
  background-color: #fff; /*#f9f9fd;*/
}

.menu-list {
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 80vh;
  width: 95%;
  overflow-y: scroll;
  margin-top: 80px;
  padding-left: 12px;
  padding-bottom: 50px;
}

.menu-list a {
  color: #000;
  text-decoration: none;
  list-style: none;
  font-weight: 600;
  font-size: 20px;
  border-left: 2px solid #000; 
  border-right: 2px solid #000;
  padding: 5px;
  margin: 8px 0px;
}

</style>