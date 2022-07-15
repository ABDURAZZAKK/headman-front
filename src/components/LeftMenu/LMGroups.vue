
<template>
  <div class="menu">
    <div class="title">
      <AllBeBackIcon :height="28" :width="28" class='all-be-back'/>
      <h1> Группы</h1>
      <CalendarIcon :height="28" :width="28" class='calendar'/>
    </div>
      <ul class="menu-list">
        <li><a>ИБ 4 курс</a> </li>
        <li><a>ИСиТ 3 курс</a></li>
        <li><a>ПИЭ</a></li>
        <li><a>ПИМ</a></li>
      </ul>
  </div>
</template>

<script>
import CalendarIcon from '../../assets/CalendarIcon.vue'
import AllBeBackIcon from '../../assets/AllBeBackIcon.vue'

export default {
  name: 'LeftMenu',
  components:{
    CalendarIcon,
    AllBeBackIcon
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
  height: 100%;
  width: 95%;
  overflow-y: scroll;
  margin-top: 100px;
  flex-direction: column;
  text-align: left;
  display: flex;
  
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
