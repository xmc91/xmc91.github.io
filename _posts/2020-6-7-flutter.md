---
layout: post
title: 'Flutter 大江东去浪淘尽'
author: WindMan
date: 2020-6-7
categories: flutter
tags: flutter 
---
> flutter 官网：https://flutterchina.club/

## 环境搭建
+ 下载flutter sdk，[慢的夜啤](https://flutterchina.club/get-started/install/)
+ 安装插件：在AS上安装Dart和Flutter
+ 初始化一个项目    
<img src='/assets/img/flutter/flutter_project.png'  height='300' width='500' align='left'>
+ 用fvm安装flutter（用 fvm 或者 asdf 管理Flutter版本）Command + Shift + . 显示隐藏文件夹	
+ fvm： https://fvm.app/docs/getting_started/installation/
+ asdf： https://devpress.csdn.net/opensource/62f91986c6770329307fd264.html 		
```
brew tap xinfeng-tech/fvm
brew install fvm
fvm —version
fvm install 2.0.0
fvm list
cd 到项目中，使用fvm use 1.22.4 --local
```