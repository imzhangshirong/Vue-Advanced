var data={
    message:'Hello World!!',
    users:{"John":{message:"Hello, I am John."},"Ada":{message:"Hello, I am Ada."}},
};
const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };
const User = {
    template: '<div>message:{{users[$route.params.name].message}}{{consoleRoute($route)}}</div>',
    methods:{
        consoleRoute:function(o){
            console.log(o);
        }
    },
    data:function(){
        return {
            users:this.$root.users//this.$root 获取Vue实例
        };
    },
    watch: {
        '$route':function (to, from) {
            console.log(from.path+" => "+to.path);
            // 对路由变化作出响应...
        }
    }
};
const Child = { template: '<div>这里是嵌套的路由<router-view></router-view></div>' };
const Child1={ template: '<div>嵌套的路由1</div>' };
const Child2={ template: '<div>嵌套的路由2</div>' };
const Level10 = { template: '<div>同级视图1default</div>' };
const Level11 = { template: '<div>同级视图1a</div>' };
const Level12 = { template: '<div>同级视图1b</div>' };
const Level20 = { template: '<div>同级视图2default</div>' };
const Level21 = { template: '<div>同级视图2a</div>' };
const Level22 = { template: '<div>同级视图2b</div>' };
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { name:"user",//命名路由
    path: '/user/:name', component: User },
  { 
      path: '/child',
      component: Child,
      children:[
        {
            path:"1",
            component:Child1
        },
        {
            path:"2",
            component:Child2
        },
      ]
  },
  { 
      path: '/level1',
      components:{
        default:Level10,
        a: Level11,
        b: Level12
      }
  },
  { 
      path: '/level2',
      components:{
        default:Level20,
        a: Level21,
        b: Level22
      }
  }
];
const router = new VueRouter({
  routes:routes,
});
var app=new Vue({
    el:'#app',
    data:data,
    router:router
});
