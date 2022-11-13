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
+ mac m1 安装Jekyll:https://jekyllrb.com/docs/installation/macos/
+ 需要用Ruby语言，他的包管理工具时gem，用gem安装jekyll

```
 直接用gem install jekyll，是用了系统的ruby，安装到/usr/bin 这是一个病毒特别想进去的目录。要么自己用brew安装一个新的ruby，要么用sudo并指定目录。
 sudo gem install -n /usr/local/bin jekyll

```

+ rvm （ruby version manager）  

```
rvm -v 
如果不存在rvm，安装之：curl -L https://get.rvm.io | bash -s stable
载入rvm环境 source ~/.rvm/scripts/rvm
检查：rvm -v  
rvm autolibs read-only
rvm list known
rvm install 2.7.2
```

+ 切换gem源

```
 gem sources -l
 gem sources --remove https://rubygems.org/
 gem sources -a http://ruby.taobao.org/ 已废弃
 gem sources --add https://gems.ruby-china.com/ 用这个
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
定制大小
<img src='/assets/img/O(y).png'  height='300' width='500' align='left'>
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
Dependency Error: Yikes! It looks like you don't have jekyll-paginate or one of its dependencies installed.
```

+ 根据提示，gem install jekyll-paginate
+ ok

### jekyll 问题解决
+ https://teamtreehouse.com/community/jekyllpaginate-gem