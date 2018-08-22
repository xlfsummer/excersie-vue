# excersie-vue
个人学习 Vue 的一些练习

## Vue

在所有之前:
```bash
cd vue
npm install
```

运行项目:
```bash
# 运行服务器, 运行服务器后, 大部分 demo 可从 index 页面链接进入
npm run dev
```

修改测试 "可复用性&组合/渲染函数&JSX/src/JsxSyntax.jsx" 请运行:
```bash
npm dev
npm run dev:watchJsx
```

更新 "工具/生产环境部署/src" 后重新编译:
```bash
npm dev
npm run build:deployment
```

编译并 watch 单文件组件:
```bash
npm dev
npm run build.w:sfc
```

运行 工具/单元测试
```bash
npm t
```

编译 ts demo
```bash
npm run build:ts
```

运行 规模化/路由
```bash
npm run dev.s:baseRounter
```

运行 状态管理
```bash
npm dev

# 一次编译
npm run build:state

# 或编译并 watch 文件
npm run build:state -- --watch
```

## Vue-Router

运行项目:

```bash
cd vue-router
npm i
npm run server
```
