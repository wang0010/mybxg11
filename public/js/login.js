define(["jquery","cookie"],function($){
	// 登录功能
    $("#loginBtn").click(function(){
	    $.ajax({
	        type : "post",
	        url : "/api/login",
	        data : $("#loginForm").serialize(),
	        dataType :　"json",
	        success:function(data){
	            if(data.code == 200){
	                // 把用户的登录信息存储到cookie中 方便跨页面存储数据
	                $.cookie("loginInfo",JSON.stringify(data.result),{path:"/"})
	                // 登录成功
	                location.href="/main/index"
	            }
	        }
	    })
       return false;
   })
})