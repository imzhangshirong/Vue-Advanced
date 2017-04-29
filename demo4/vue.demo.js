var data={
    message:'Hello World!!',
};
var appT1={
    template:"<div><h1>{{title}}</h1>{{message}}</div>",
    props:{
        title:String,
        message:{
            type:String,
            default:"are you ok?"
        }
    },

};
var appT2={
    render:function(createElement){
        return createElement(
            "div",
            [
                createElement("h1",{style:{color:"red"}},this.title),//arg1 tag名称，arg2 元素属性，arg3 子元素（数组，文本，createElement返回）
                this.message
            ]
        );
    },
    props:{
        title:String,
        message:{
            type:String,
            default:"are you ok?"
        }
    },
};
var appT3={
    render:function(createElement){
        console.log(this.$slots);
        return createElement(
            "div",
            [
                createElement("h1",{style:{color:"red"}},this.$slots.title),
                createElement("span",{style:{color:"red"}},this.$slots.message),
                createElement("span",{style:{color:"green"}},this.$slots.default),
            ]
        );
    },
    props:{
        title:String,
        message:{
            type:String,
            default:"are you ok?"
        }
    },

};
var app=new Vue({
    el:'#app',
    data:data,
    components:{
        appT1:appT1,
        appT2:appT2,
        appT3:appT3,
    }
});
