define("app/com/duoshuo/index",["magix","jquery"],function(e,t,i){var d=e("magix"),n=e("jquery");i.exports=d.View.extend({ctor:function(e){this.opt=e},render:function(){var e=this,t=n("#"+e.id),i=e.opt.id,d=document.createElement("div");d.setAttribute("data-thread-key",i),d.setAttribute("data-url",window.location.href),DUOSHUO.EmbedThread(d),t.append(d)}})});