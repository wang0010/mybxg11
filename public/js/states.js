define(["jquery"],function($){
   $(document).ajaxStart(function(){
   	// 显示遮罩层
   	 $(".overlay").show();
   });
    $(document).ajaxStop(function(){
   	  setTimeout(function(){
   	  	// 隐藏遮罩层
          $(".overlay").hide();
   	  },500);
   });
});