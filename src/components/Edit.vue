<template>
<div class="login_contInputent">
    <p class="fhbtn"><a href="javascript:;" @click="goBack()"></a></p>
		<p class="tit">标题：</p>
    	<input type="text" value="" placeholder="输入标题" class="titInput" />
    	<textarea rows="3" cols="20" placeholder="输入内容" class="contInput"></textarea>

    <div class="footbox">
        <router-link to="/home">
        	<input type="button" value="发布" class="login-btn"/>
        </router-link>
    </div>
</div>
</template>
<style>
	.login_contInputent .fhbtn{ padding-top:0.27rem;}
	.login_contInputent .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
	.tit{ width: 80%; height: 0.5rem;    display: block; margin: 0.6rem auto 0rem; padding-left:0.1rem; font-size: 0.25rem;    }
	.titInput{ width: 80%; height: 0.5rem; background: #fff; border: 1px solid #d4d4d4; display: block; margin: 0.1rem auto 0.6rem; padding-left:0.1rem; border-radius: 4px;  }
	.contInput{ width: 80%; height: 5rem; background: #fff; padding: 0.1rem; border: 1px solid #d4d4d4; display: block; margin: 0 auto; border-radius: 4px;}
	.footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
	.login-btn{width:4.65rem;height:0.65rem; background:#f85959; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
	.tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
	.pt30{padding: 30px 0px;}
</style>
<script>
	export default{
		methods:{
			goBack:function(){
			window.history.go(-1);	
		}
		}
	}
</script>