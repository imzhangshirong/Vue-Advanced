var data={
    message:'Hello World!!',
    polyColor:"#ff6505",
    polyR:70,
    polyDeg:5,
    polyTimer:500,
    polyPointsData:[],
    polyPoints:"",
};
var app=new Vue({
    el:'#app',
    data:data,
    watch:{
        polyColor:function(newValue,oldValue){
            console.log(oldValue+" to "+newValue);
            //do something....
        }
    },
    methods:{
        getStringPoints:function(data){
            return data.map(function(item){return item.x+","+item.y;}).join(" ");
        },
        movePoints: function (newStats) {
            var app=this;
            TweenLite.to(
                this.$data,
                (this.polyTimer-100) / 1000,
                { polyPoints: app.getStringPoints(newStats)});
        },
        move:function(){
            var app=this;
            var R=this.polyR;
            var kRa=2*Math.PI/this.polyDeg;
            newData=Array.apply(Array.prototype.map,{length:app.polyDeg}).map(function(i,index){
                var d=R+(100-R)*Math.random();
                return {x:100+d*Math.cos(kRa*index),y:100+d*Math.sin(kRa*index)};
            });
            var init= newData.length-this.polyPointsData.length;
            if(init<0){
                for(var a=0;a<-init;a++){
                    this.polyPointsData.shift();
                }
            }
            else{
                for(var a=0;a<init;a++){
                    this.polyPointsData.push({x:100,y:100});
                }
            }
            this.movePoints(newData);
            setTimeout(function(){app.move();},this.polyTimer);
        }
    }
});
app.move();
app.polyPoints=app.getStringPoints(app.polyPointsData);
