define(["jquery","template","util","bootstrap"],function($,template,util){
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

     		// 课时添加
     		$("#lessBtn").click(function(){
		    // 解析数据 渲染页面
			  var html = template("modalTpl",{operate:"课程添加"})
              $("#modalInfo").html(html) 
     			$("#chapterModal").modal();
     		})

     		// 课程编辑
     		$(".editLess").click(function(){
     			// 获取编辑Id
     			var ctId = $(this).attr("data-ctId");
     			// 请求后台数据
     			$.ajax({
     				type:"get",
     				url:"/api/course/chapter/edit",
     				data:{ct_id:ctId},
     				dataType:"json",
     				success:function(data){
     					console.log(data)
     					// 解析数据 渲染页面
     					data.result.operate = "课程编辑"
     					var html = template("modalTpl",data.result)
                        $("#modalInfo").html(html) 
     				}
     			})
     			$("#chapterModal").modal();
     		})
     	}
     })
})