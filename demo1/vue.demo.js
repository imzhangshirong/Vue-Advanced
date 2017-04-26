var data={
    message:'Hello World!!',
    a:{}
};
var app=new Vue({
    el:'#app',
    data:data,
});
app.newMessage="miaomiaomiao?";//Vue不会响应
