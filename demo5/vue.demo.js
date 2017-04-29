var data={
    message:'Hello World!!',
};
/*定义全局
Vue.directive("focus",{
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
});
*/

var app=new Vue({
    el:'#app',
    data:data,
    directives:{//局部定义
        focus:{
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        }
    }
});
