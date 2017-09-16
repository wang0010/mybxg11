<?php
    header("content-type:text/html; charset=utf8");
   // include("./header.html");
   // echo '<div>主页内容</div>';
   // include("./footer.html");
   
   // var_dump($_SERVER)
   // 
   // 默认目录名称
   $dir = "main";
   // 默认文件名称
   $filename = "login";
   if( array_key_exists("PATH_INFO",$_SERVER)){
   	  // PATH_INFO 属性存在
   	  $path = $_SERVER["PATH_INFO"];

   	  $str = substr($path,1);
      $ret = explode("/",$str);
      if(count($ret) == 2){
      	// 路径有两层
      	$dir = $ret[0]; // 覆盖目录
      	$filename = $ret[1]; // 覆盖名称
      }else {
      	// 其它情况全部跳转到登陆也页面
      	$filename = "login";
      }
       
   }
   // 嵌入子页面
   include("./views/".$dir."/".$filename.".html")
?>   