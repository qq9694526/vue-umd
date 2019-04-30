## 简介

随着项目不断迭代，业务需求的不断加入，代码随着时间的推移变得越来越糟。代码结构混乱、业务逻辑复杂，这就造成 解决bug时，排查逻辑困难；解决一个问题又引入了新的问题等情况的出现。极大的影响开发效率和迭代速度。

>衣服脏了就洗，破了就补，不合穿就扔。

购房意向金项目，急需通过一次重写，抛下历史包袱，轻装上阵，以更好的完成每一次迭代任务。

## 目的/目标

其实就是解决项目现有的一些痛点：

- 通过改用Vue框架，抛下VX学习成本较高、面临淘汰的历史包袱；

- 通过模块化/组件化，重新梳理业务逻辑，改善代码结构、质量，提升代码复用性和可维护性；

- 通过Promise的应用，实现数据与业务的解耦，解决回调地狱问题；

- 通过代码规范和持续重构，拒绝低质量代码，降低修改成本，避免历史重演；

## 方案/技术栈

RequireJs + Vue + VueRouter + Axios ( 暂定 )

## 实施要点

1. 框架变更，VX改用VUE

   受限于微信银行架构，排除webpack，只能使用UMD模式(script标签引入)。

    ```html
   		<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
   		<div id="app">{{msg}}</div>
       <script type="text/javascript">
           const app = new Vue({
               data() {
                   return {
                       msg: "hello world!"
                   }
               }
           }).$mount('#app')
       </script>
    ```

2. 基于RequireJS的模块化/组件化

   作用：管理模块之间的依赖性，便于代码的编写和维护；减少代码重复率，提升代码重用性；实现js文件的异步加载，避免网页失去响应；

   由于ES6的Modules兼容性不够，这里选用RequireJS。只有模块化才能从根本上解决代码结构混乱，逻辑越写越复杂的问题；

   ```js
   // 模块的定义：header组件
   // components/header/header.js 
   define(['text!./header.html','css!./header.css'], function (template) {
       return () => {
           Vue.component('v-header', {
               template,
               methods: {
                   onGoBack(){
                       this.$router.go(-1)
                   }
               },
           })
       }
   });
   // 模块的使用：注册header
   // js/main.js
   require(['router',"components/header/header"], function (router,regHeader) {
       regHeader() // 注册header组件
       new Vue({
           router
       }).$mount('#app')
   });
   ```

   

3. 基于vue-router的单页

   鉴于微信银行其他使用vue的项目并没有使用vue-router，这里分析下单页应用的优缺点。

   优点：页面切换不需要请求服务器重载html，用户体验好；利于模块化开发；

   缺点：首次加载耗时比较多；在微信浏览器存在一些特有的BUG，请求可参看我的[VUE开发微信H5页面总结](<https://juejin.im/post/5c0490ef51882524cb6f5652>)；

   ```js
   // 定义router
   define(["pages/developer/developer",], function (pDeveloper) {
       Vue.use(VueRouter);
   
       const pFoo = { template: '<div>业务介绍</div>' }
       const pBar = { template: '<div>使用指南</div>' }
   
       const routes = [
           { path: '/', redirect: "/developer" },
           { path: '/developer', component: pDeveloper, meta: { title: "购房意向金" } },
           { path: '/foo', component: pFoo, meta: { title: "业务介绍" } },
           { path: '/bar', component: pBar, meta: { title: "使用指南" } }
       ]
       return new VueRouter({
           routes
       })
   });
   ```

4. 基于Promise的异步解决方案

   作用：实现数据与业务的解耦，解决回调地狱；更明晰的逻辑结构。

   引入插件可解决可能存在的兼容性问题，这个只有好处没有坏处。

5. 达成共识的前端代码规范

   比如函数遵循单一职责，复杂判断写注释等这些规范。具体的点和细节建议所有前端开发一块看/学习一些资料，梳理出大家都认可的点，并整理成文档。

   这里特别强调"达成共识"，因为只有从心里认可才会认真执行，否则就是一纸废文。

6. 持续重构

   重构不是一次性的，也不是应该特地拨出一段时间来做的事情。 它是敏捷开发的一个必要条件，也是我们日常开发的一部分。一边开发一边重构是敏捷开发的常态，通过对代码及时的整理和优化，能有效避免项目被低质量代码蚕食，

## 可进行的优化

1. background实现图片兼容显示，不变形；
2. 模拟环境变量，解决不同环境，代码有区别的需求；
3. DNS预解析

## 效果比对

1. 页面性能
2. 代码质量：代码复杂度，耦合度，可读性，架构依赖复杂度等
3. 成本与回报

