define(["jquery"],function($){
	return {
		qs:function(key){
		  var parm = location.search.substr(1);
           // console.log(parm);
		   var tcId = null;
		   if(parm){
		   	 var ps = parm.split("&");
		   	 $.each(ps,function(index,item){
		   	 	var kv = item.split("=");
		   	 	// console.log(kv);
		   	 	if(kv[0] == key){
		   	 		tcId = kv[1];
		   	 		return false;
		   	 	}
		   	 });
		   }
		   return tcId;
		},
		setMenu:function(path){
			$(".aside .navs a[href='"+path+"']").addClass('active').closest('ul').show();
		}
	}
})