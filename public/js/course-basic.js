define(["jquery","template","util","ckeditor","validate","form"],function($,template,util,CKEDITOR){
   // 设置导航菜单
   util.setMenu("/course/add")
   // 获取课程ID
   var csId = util.qs("cs_id");
   // 获取操作标志位
   var flag = util.qs("flag")
   // 根据课程id查询课程相关信息
   $.ajax({
   	  type:"get",
   	  url:"/api/course/basic",
   	  data:{cs_id:csId},
   	  success:function(data){
   	  	// 判断flag是否存在 存在则就是编辑操作
   	  	if(flag){
   	  		data.result.operate = "课程编辑";
   	  	}else{
   	  		data.result.operate = "课程添加"
   	  	}
   	  	 var html = template("basicTpl",data.result);
   	  	 $("#basicInfo").html(html)
   	  	 // 处理二级分类的下拉联动
   	  	 // 点击下拉菜单 改变类型 触发该事件 
   	  	 $("#firstType").change(function(){
   	  	 	// 获取一级联动ID
   	  	 	var pid = $(this).val();
   	  	 	// 根据一级ID获取二级联动的数据
            $.ajax({
            	type:"get",
            	url:"/api/category/child",
            	data:{cg_id:pid},
            	dataType:"json",
            	success:function(data){
            		var tpl = "<option value=''>请选择二级分类...</option>{{each list}}<option value'{{$value.cg_id}}'>{{$value.cg_name}}</option>{{/each}}"
            		var html =  template.render(tpl,{list:data.result})
            		$("#twoType").html(html);
            	}
            })
   	  	 })
   	  	 // 处理富文本
   	  	  CKEDITOR.replace("editor",{
		 	toolbarGroups : [
					{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
					{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },				]
		 })
		 // 表单验证提交操作
		 $("#basForm").validate({
		 	sendForm:false,
		 	valid:function(){
		 		// 处理富文本提交同步
		 		for(var instance in CKEDITOR.instances){
		 			CKEDITOR.instances[instance].updateElement();
		 		}
		 		// 表单提交
		 		$(this).ajaxSubmit({
		 			type:"post",
			 		url:"/api/course/update/basic",
			 		data:{cs_id:csId},
			 		dataType:"json",
			 		success:function(data){
			 			if(data.code == 200){
			 				location.href = "/course/picture?cs_id=" + data.result.cs_id;
			 			}
			 		}
		 		})
		 	}
		 })
   	  }
   })
})