require.config({
    paths: {
        jquery: '../editor/js/lib/jquery-1.10.2.min',
        wangEditor: '../editor/js/wangEditor.min'
    }
});

require(['wangEditor'], function(){
    $(function(){

      var editor = new wangEditor('wanchainEditor');

      // 上传图片
      editor.config.uploadImgUrl = '/upload';

      editor.create();
    });
});
