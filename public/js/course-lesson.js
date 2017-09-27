define(["jquery","template","util"],function($,template,util){
     // 设置导航栏
     util.setMenu("/course/add")
     // 获取ID
     var csId = util.qs("cs_id")

     $.ajax({
     	type:"get",
     	url:"/api/course/lesson",
     	data:{cs_id:csId},
     	dataType:"json",
     	success:function(data){
     		// 解析数据 渲染页面
     		var html = template("lessonTpl",data.result)
     		$("#lessonInfo").html(html)
     	}
     })
})