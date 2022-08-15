<template>
    <div class="bottom-navbar">
        <div><PointsBookIcon :height="34" :width="34"/></div>
        <div><ListIcon :height="34" :width="34"/> </div>
        <div><GroupsIcon :height="34" :width="34"/> </div>
        <div><ChatIcon :height="34" :width="34"/> </div>
    </div>
</template>

<script>
import ChatIcon from '@/assets/ChatIcon.vue'
import GroupsIcon from '@/assets/GroupsIcon.vue'
import ListIcon from '@/assets/ListIcon.vue'
import PointsBookIcon from '@/assets/PointsBookIcon.vue'

export default {
    name: "BottomNav",
    components:{
        ChatIcon,
        GroupsIcon,
        ListIcon,
        PointsBookIcon
    }
}
</script>

<style scoped>
.bottom-navbar{
  display: flex;
  background: #ffff;
  padding: 10px 20px 15px 20px;
  width: 90%;
  justify-content: space-between;
  position: absolute;
  bottom: -5px;
}
</style>