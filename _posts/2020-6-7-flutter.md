---
layout: post
title: 'Flutter 大江东去浪淘尽'
author: WindMan
date: 2020-6-7
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

## 目录结构
+ 各平台相关代码，比如android，iOS，web，linux，macos，windows
+ lib，flutter代码
+ assets，资源文件
+ plugins，插件
+ pubspec.yaml，项目配置文件

```
name: xxx // 项目名
description: A new Flutter project.// 项目描述
publish_to: 'none' # Remove this line if you wish to publish to pub.dev

version: 0.0.8+8 // version name,version code 

environment: // flutter sdk 版本区间
  sdk: '>=2.19.2 <3.0.0'

dependencies://依赖库
  flutter:
    sdk: flutter

  cupertino_icons: ^1.0.2
  path: ^1.8.2
  get: ^4.6.5
  flutter_screenutil: ^5.7.0
  flutter_smart_dialog: ^4.9.0+4
  dio: ^5.0.3
  retrofit: '>=4.0.0 <5.0.0'
  common_utils: ^2.1.0
  wakelock: ^0.6.2
  event_bus: ^2.0.0
  share_plus: ^6.3.1
  shared_preferences: ^2.0.20
  package_info_plus: ^3.0.3
  scan: ^1.6.0
  flutter_inappwebview: ^5.7.2+3
  sqflite: ^2.2.6
  path_provider: ^2.0.14
  permission_handler: ^10.2.0
  animate_do: ^3.0.2
  app_settings: ^4.2.0
  equatable: ^2.0.5
  flutter_svg: ^2.0.4
  socket_io_client: ^1.0.2
  card_swiper: ^2.0.4
  url_launcher: ^6.1.10
  uuid: ^3.0.7
  dartx: ^1.1.0


dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_localizations:
    sdk: flutter

  flutter_lints: ^2.0.0
  retrofit_generator: '>=5.0.0 <6.0.0'
  build_runner: '>2.3.0 <4.0.0'
  json_serializable: '>4.4.0'
  flutter_launcher_icons: "^0.12.0"

flutter:
  uses-material-design: true
  assets:
    - assets/
    - assets/images/


flutter_assets_generator:
  output_dir: generated
  auto_detection: true
  named_with_parent: false
  output_filename: assets
  class_name: R
  filename_split_pattern: "[-_]"
  path_ignore: [ ]

flutter_icons:
  android: true
  ios: "AppIcon"
  image_path: "assets/logo/logo.png"
  image_path_ios: "assets/logo/logo_ios.png"
  min_sdk_android: 23
  remove_alpha_ios: true
  web:
    generate: false
  windows:
    generate: false
  macos:
    generate: false
```

## GetX 

> https://github.com/jonataslaw/getx



## GetX cli

> https://github.com/jonataslaw/get_cli/blob/master/README-zh_CN.md

