define(["jquery","template","util","uploadify"],function($,template,util){
    util.setMenu("/course/add")
    // 获取课程ID
    var csId = util.qs("cs_id")
    // 获取数据
    $.ajax({
    	type:"get",
    	url:"/api/course/picture",
    	data:{cs_id:csId},
    	dataType:"json",
    	success:function(data){
    		var html = template("picTpl",data.result)
    		$("#picInfo").html(html)
    		// 处理上传封面
    		$("#myfile").uploadify({
    			buttonText:"选择图片",
    			width:80,
    			height:"auto",
    			buttonClass:"btn btn-success btn-sm",
    			itemTemplate:"<span></span>",
    			swf :"/public/assets/uploadify/uploadify.swf",
    			uploader:"/api/uploader/cover",
    			fileObjName:"cs_cover_original",
    			formData:{cs_id:csId}, //额外传递一个参数
    		    onUploadSussess:function(a,b,c){
    		    	var obj = JSON.parse(b.trim())
                    $(".preview img").attr("src",obj.result.path)
    		    } 
    		})
    	}
    })
})	