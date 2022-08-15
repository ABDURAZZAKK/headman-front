<template>
    <div class="chat">
      <div class="msg-container">
        <div class="data-msg">26 июля</div>
      </div>

      <div class="msg-container">
      <div class="msg">
        <p class='sender'>Чел</p>
        <a class='msg-text'>все как всегда как у тебя ?</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>
    
      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все норм</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все sd fsd fsdf норм</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Всеsdf dsf sd fsf ds  норм</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все норм sdfs sfs dfsdfsdfdsfsdf</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все норм sd fsd f sfd fsdf Все норм sd fsd f sfd fsdf </a>
        <p class='msg-time'>&nbsp;15:30</p>
      </div>
      </div>

      <div class="msg-container">
      <div class="msg">
        <p class='sender'>Чел</p>
        <a class='msg-text'>все как всегда как у тебя ?</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="msg">
        <p class='sender'>Чел</p>
        <a class='msg-text'>все как всегда как у тебя ?</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>
    
      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все норм</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все sd fsd fsdf норм</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Всеsdf dsf sd fsf ds  норм</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все норм sdfs sfs dfsdfsdfdsfsdf</a>
        <a class='msg-time'>&nbsp;15:31</a>
      </div>
      </div>

      <div class="msg-container">
      <div class="self-msg">
        <a class='msg-text'>Все норм sd fsd f sfd fsdf Все норм sd fsd f sfd fsdfsdfdsf fsd fsdf s fs s fds fsdf </a>
        <p class='msg-time'>&nbsp;15:31</p>
      </div>
      </div>

      <div class="msg-container">
      <div class="msg">
        <p class='sender'>Чел</p>
        <a class='msg-text'>СоветскийСоюзчастнопредпринимательскийпереосвидетельствовался Социалистических Республик Кинетический удар лунного затмения Критическая нехватка мефедрона</a>
        <p class='msg-time'>&nbsp;15:31</p>
      </div>
      </div>

    </div>
</template>

<script>


export default {
    data: () => {
    return {
      messages: [
        
            ],
        }
    },
	name: 'Chat',
  	props: {
    	messages:{
    		type: Array, 
    		required: true
    	},

  	}
}
</script>

<style scoped>
.chat {
  display: flex;
  /* word-break:break-all; */
  word-wrap:break-word;
  flex-direction: column;
  font-family: "Open sans";
  margin-top:80px;
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  padding-bottom: 50px;
}
/* .msg-container{
  width: 100%;
} */
.msg{
  max-width: 90%;
  display: block;
  float: left;
  background: #fff;
  border: 1px solid #3f3f3f;
  border-radius: 16px;
  text-align: left;
  margin: 10px 45px 5px 8px;
  padding: 9px 5px;
}
.self-msg{
  max-width: 90%;
  display: block;
  float: right;
  background: #fcd468;
  color: #000;
  border: 1px solid #3f3f3f;
  border-radius: 16px;
  text-align: left;
  margin: 5px 8px 0px 45px;
  padding: 9px 5px;
}
.msg-time{
  text-align: right;
  font-size: 15px;
  margin: 0px 4px 4px 0px;
}
.sender{
  margin: 4px 0px 4px 3px;
  font-weight:900;
  color: #ef3fdf;
  font-size: 15px;
}
.msg-text{
  margin: 0px 3px 3px 4px;
}
</style>