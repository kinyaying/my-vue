# 从零搭建vue脚手架

## 描述
写这个项目的目的一方面是为了学习搭建vue脚手架的过程，来掌握各个细节的知识，另一方面把这个过程分享出来，和大家一起学习，从而获得进一步的提高。虽然vue官方提供了一个完整的脚手架，但是我觉得如果能知道搭建的过程，能进一步加深理解。如何实现此项目我都在博客中详细写明，大家可以结合博客来看这个项目。
此项目使用的主要技术栈：<br/>
* Node / Npm
* ES6
* VueJs
* Vue-router
* Vuex
* Babel
* Webpack
* Element-UI

## 如何运行
下载项目
```
 git clone https://github.com/canfoo/react-taopiaopiao.git
```
 打开一个终端（称这个终端为A终端）进入到react-taopiaopiao目录安装依赖包（注意：如果`npm install` 不能正常安装完成，请使用`cnpm install`进行安装）
```
 npm install
```
安装完成后，运行`start`命令。
```
 npm run start
```
启动前端开发服务，成功执行后，会自动打开浏览器，在浏览器地址栏输入`http://localhost:8080`就可以访问这个项目。

## 项目预览
![Mou icon](./Screenshots/1.gif)

## 主要目录结构
```
.
├── src                      # 程序源文件
│   ├── Assets               # 静态资源文件
│   ├── Components           # 程序源文件
│   ├── Containers           # 容器组件
│   │   ├── Home.vue         # 首页
│   │   └── List.vue         # 列表页
│   ├── Router               # 路由
│   │   └── index.js         # 路由入口
│   ├── Store                # 数据层
│   │   └── index.js
│   ├── app.js               # 入口
│   ├── index.html
│   ├── index.vue
│   └── router.js
└── webpack.config.js
```
## 项目博客地址
如果对项目有疑惑的地方，请到[http://www.cnblogs.com/canfoo/p/6394761.html](http://www.cnblogs.com/canfoo/p/6394761.html)里留言。如果觉得这个项目对你有帮助的话，请Star一下本项目，这是对作者最大的支持。
