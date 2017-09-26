require.config({
  baseUrl : '/public/assets',
  paths : {
    jquery : 'jquery/jquery',
    cookie : 'jquery-cookie/jquery.cookie',
    template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    //日期插件 
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',
    // 日期语言
    language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',

    validate : 'validate/jquery-validate',//表单提交插件
    form : 'jquery-form/jquery.form',//表单提交插件
    uploadify : 'uploadify/jquery.uploadify.min',//头像上传插件
    // 三级联动插件
    region : 'jquery-region/jquery.region',
    // 
    ckeditor : 'ckeditor/ckeditor',
    util : '../js/util',
    common : '../js/common',
    login : '../js/login',
    teacherlist : '../js/teacher-list',
    teacheradd : '../js/teacher-add',
    settings : '../js/settings',
    index:"../js/index",
    courselist:"../js/course-list",
    courseadd:"../js/course-add",
    coursebasic:"../js/course-basic",
    coursepicture:"../js/course-picture"
  },
  shim : {
    bootstrap : {
      deps : ['jquery']
    },
    language : {
      deps : ['jquery','datepicker']
    },
    validate : {
      deps : ['jquery']
    },
    uploadify : {
      deps : ['jquery']
    },
    ckeditor : {
      exports : 'CKEDITOR'
    }
  }
});