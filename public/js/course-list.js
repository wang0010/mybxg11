define(["jquery","template","util"],function($,template,util){
   // 设置导航菜单选中
   util.setMenu(location.pathname);
   // 请求数据 
   $.ajax({
   	 type:"get",
   	 url:"/api/course",
   	 dataType:"json",
   	 success:function(data){
   	 	// 解析页面 渲染数据
   	 	var html = template("courseTpl",data);
   	 	$("#courseInfo").html(html)
   	 }
   })
})