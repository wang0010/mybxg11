define(["jquery","template","region","uploadify"],function($,template){
	// 调用接口 获取个人信息
	$.ajax({
		type:"get",
		url:"/api/teacher/profile",
		dataType:"json",
		success:function(data){
		  // 解析数据 渲染页面
		  var html  = template("personTpl",data.result);
		  $("#personInfo").html(html);
		  // 处理头像上传
          $("#upfile").uploadify({
          	swf:"/public/assets/uploadify/uploadify.swf",
          	uploader:"api/uploader/avatar",
          	fileObjName:"tc_avatar",
          	onUploadSuccess:function(a,b){
          		console.log(b)
          	}
          })
		  // 处理省市县三级联动
		 $("#pcd").region({
		 	url:"/public/assets/jquery-region/region.json"
		 })
		}
	})
})