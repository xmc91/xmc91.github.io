---
layout: post
title: 'Hello Jekyll'
date: 2019-12-22
author: WindMan
cover: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'
tags: Tools
---

> 本站使用方法

+ 内容
  ```
  在_post路径下，编写内容
  编写头
  ---
  layout: post
  title: 'Hello Jekyll'
  date: 2019-12-22
  author: WindMan
  cover:'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'
  tags: Tools
  ---
  ```
+ 编译
``` 
jekyll build
```
+ 浏览器预览
``` 
jekyll server
// url
Server address: http://127.0.0.1:4000/
```

+ 图片相对路径引用
```
/assets/*
```

+ 字体切换
```
/assets/font
```

+ 提交即可
+ [Jekyll主题](http://jekyllthemes.org/)

## window配置jekyll环境
+ 下载 [ Ruby+Devkit 2.5.8-1 (x64)](https://rubyinstaller.org/downloads/),这个是ruby及其安装包环境，自带gem。超级慢，不翻墙总是会失败
+ gem是ruby的包管理工具，可以下载ruby环境的各自依赖
+ gem install bundler
+ gem install jekyll,超级慢
+ 此时jekyll build运行，可能会报错如下：

```
Dependency Error: Yikes! It looks like you don't have jek       yll-paginate or one of its dependencies installed.
```

+ 根据提示，gem install jekyll-paginate
+ ok
