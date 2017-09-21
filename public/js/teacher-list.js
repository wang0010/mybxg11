define(["jquery","template","bootstrap"],function($,template){
	// 调用接口获取所有的讲师数据
	$.ajax({
		type:"get",
		url:"/api/teacher",
		dataType:"json",
		success:function(data){
		  // 解析数据，渲染页面
		  var html = template("tpl",{list:data.result});
		  $("#teacher").html(html);

		  $(".qyorjy").click(function(){
		  	  var that = this;
		  	  // 登录注销功能
		  	  var td = $(this).closest('td');
		  	  var tcId = td.attr("data-tcId");
		  	  var status = td.attr("data-status");
		  	  $.ajax({
		  	  	type:"post",
		  	  	url:"/api/teacher/handle",
		  	  	data : {tc_id:tcId,tc_status:status},
		  	  	dataType:"json",
		  	  	success:function(data){
		  	  		if(data.code == 200){
                       td.attr("data-status",data.result.tc_status);
                       if(data.result.tc_status == 0){
                           $(that).html("注销");
                       }else{
                       	   $(that).html("启用");
                       }
		  	  		}
		  	  	}
		  	  });
		  });


		 $(".chak").click(function(){
		  	 var td = $(this).closest('td');
		  	 var tcId = td.attr("data-tcId");
		  	 $.ajax({
		  	 	type:"get",
		  	 	url:"/api/teacher/view",
		  	 	data:{tc_id:tcId},
		  	 	dataType:"json",
		  	 	success:function(data){
		  	 	   var html = template("chakTpl",data.result);
		  	 	   $("#chakInfo").html(html);
		  	 	   $("#teacherModal").modal();
		  	 	}
		  	 });
		  });
		}
	});
});