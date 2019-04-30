## 目录结构
```js
|____index.html                  // 入口
|____js                          // 存放业务js
| |____main.js
| |____require.config.js
| |____router.js
|____components                  // 存放公用组件
| |____nav
| | |____nav.js
| | |____nav.html
| |____header
| | |____header.js
| | |____header.css
| | |____header.html
|____lib                         // 存放插件js
| |____css.min.js
| |____resolve.js
| |____require.min.js
| |____vue.min.js
| |____text.js
| |____vue-router.js
|____pages                       // 存放页面组件
| |____developer
| | |____developer.js
| | |____developer.html
```
## 待实现
1. 组件按需加载
2. 合并模块，减少http请求