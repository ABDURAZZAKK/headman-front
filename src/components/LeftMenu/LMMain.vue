<template>
  <div class="menu">
    <div class="title">
      <AllBeBackIcon :height="28" :width="28" class='all-be-back'/>
      <h1> Группы</h1>
      <CalendarIcon :height="28" :width="28" class='calendar'/>
    </div>
    
      <ul class="menu-list">
        <li v-for="group in groups" :key='group.id'>
            <a>{{group.name}}</a> 
        </li>
      </ul>
      <div class="bottom-navbar">
        <div><PointsBookIcon :height="34" :width="34"/></div>
        <div><ListIcon :height="34" :width="34"/> </div>
        <div><GroupsIcon :height="34" :width="34"/> </div>
        <div><ChatIcon :height="34" :width="34"/> </div>
      </div>
  </div>
</template>

<script>
import CalendarIcon from '@/assets/CalendarIcon.vue'
import AllBeBackIcon from '@/assets/AllBeBackIcon.vue'
import ChatIcon from '@/assets/ChatIcon.vue'
import GroupsIcon from '@/assets/GroupsIcon.vue'
import ListIcon from '@/assets/ListIcon.vue'
import PointsBookIcon from '@/assets/PointsBookIcon.vue'



export default {
  data: () => {
    return {
      groups: [
        {id:1, name:"ИБ 4 курс"},
        {id:2, name:"ПИЭ 3 курс"},
        {id:3, name:"ПИМ 1 курс"},
        {id:4, name:"ИСиТ 2 курс"},
        {id:5, name:"Гидрокорбанат калия"},
        {id:6, name:"Советский Союз Социалистических Республик"},
        {id:7, name:"Спортакиада"},
        {id:8, name:"Третий рейх"},
        {id:9, name:"Санта лючия"},
        {id:10, name:"Игривый генирал"},
        {id:11, name:"Сладкий чай"},
        {id:12, name:"Мармеладный каток"},
        {id:13, name:"ДНК кружки"},
        {id:14, name:"Кинетический удар лунного затмения"},
        {id:15, name:"Прошивка джинс"},
        {id:16, name:"Короткий круг"},
        {id:17, name:"Длинный информатор"},
        {id:19, name:"Критическая нехватка мефедрона"},
        {id:20, name:"Колючий доллар"},
        {id:21, name:"Кришна в отпуске"},
        {id:22, name:"Политический конфуз"},
        {id:23, name:"Рикардо Милас"},
        {id:24, name:"Енотовидный катамаран"},
        {id:25, name:"Туманность Польского мира"},
        {id:26, name:"Йогурт в позе лотос"},
        ]
    }
  },
  name: 'LeftMenu',
  components:{
    CalendarIcon,
    AllBeBackIcon,
    ChatIcon,
    GroupsIcon,
    ListIcon,
    PointsBookIcon
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
  /* display: block; */
  background-color: #ffff; /*#f7f5f5;*//*#1e272e;*/
  border-right: 1px solid #000;
  /* #1e272e */
}

.menu-list::-webkit-scrollbar {
    width: 7px;
    background-color: #ffff;/*#f9f9fd;*/
}

.menu-list {
  padding-left: 12px;
  height: 80vh;
  width: 95%;
  overflow-y: scroll;
  margin-top: 80px;
  flex-direction: column;
  text-align: left;
  display: flex;
  padding-bottom: 50px;
  
}

.title{
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  font-family: "Open sans";
  position: fixed;
  background: #ffff; /*#f7f3f3;*//*#1e272e;*/
  width: inherit;
  border-bottom: 4px solid #000;
}

.title h1{
  font-size: 28px;
  width: 50%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: "Open sans";
  color: #000;
  text-transform: uppercase;
  font-weight:900;
  margin-right: 20px;
}

.bottom-navbar{
  display: flex;
  background: #ffff;
  padding: 5px 20px 15px 20px;
  width: 90%;
  justify-content: space-between;
  position: fixed;
  bottom: -5px;
}

.menu-list li { 
  color: #000;
  /* text-decoration: none; */
  list-style: none;
  font-weight: 600;
  font-size: 20px;
  border-left: 2px solid #000;
  border-right: 2px solid #000;
  padding: 5px;
  margin: 8px 0px;

}

@media  (max-width: 700px){
.menu{
  width: 100%;
};
}

</style>