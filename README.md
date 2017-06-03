### butubut-cms后台
后台项目

### 开发环境搭建
* node版本v7.8
* redis 3.2
* mongodb 3.2

### 异步解决方法
使用async function 和await解决，如果数据没有依赖性，使用await里套用promise
```js
//
async function test1(){
  return 1
}
async function test2(){
  return 2
}
// 顺序执行
const test1 = await test1()
// 同时执行异步
const [test1,test2] = await(Promise.all([test1(),test2()]))
```
### 文档资源
* [eggjs](https://eggjs.org/zh-cn/tutorials/index.html)   
* [mongose](http://mongoosejs.com/docs/index.html)

### controller，service，model写法

### 功能介绍（cms基本）
用户管理
菜单管理
权限管理