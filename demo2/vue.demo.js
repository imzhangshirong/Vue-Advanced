var data={
    message:'Hello World!!',
    isShow:true,
    isShow2:true,
    isShow3:true,
    isShow4:true,
    isShow5:true,
    arrayData:[{message:"massage!",type:"hot"},{message:"massage!?",type:"cold"},{message:"Yahaha",type:"wow~"}]
};
var app=new Vue({
    el:'#app',
    data:data,
    methods:{
        show:function(){
            this.isShow=!this.isShow;
        },
        show2:function(){
            this.isShow2=!this.isShow2;
        },
        show3:function(){
            this.isShow3=!this.isShow3;
        },
        show4:function(){
            this.isShow4=!this.isShow4;
        },
        show5:function(){
            this.isShow5=!this.isShow5;
        },
        add:function(){
            this.arrayData.push({message:("Yahaha!!").split("").sort(function(a,b){return Math.random()-0.5;}).join(""),type:Math.random()*100});
        },
        remove:function(){
            this.arrayData.splice(Math.floor(Math.random()*this.arrayData.length),1);
        },
        shuffle:function(){
            this.arrayData.sort(function(a,b){return Math.random()-0.5;});
        }
    }
});
