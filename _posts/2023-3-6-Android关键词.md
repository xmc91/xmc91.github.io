---
layout: post
title: 'Android关键词'
author: xmc91
date: 2023-3-6
categories: Android 
tags: Android 
---
> key word

## Context

## Activity


## WMS

## 沉浸式状态栏
> 状态栏透明，然后根据内容适配颜色

1. 简单的就是fitsSystemWindows，让系统自适配。
2. 复杂的就是现接管window的标识（清除、add），设置activity全屏且状态栏不消失，自己适配padding和margin，根据距离适当移动内容区并控制状态栏字体颜色
 https://juejin.cn/post/7203563038301061181?

## splite （SQLiteDatabase）
> 轻量数据库，借用辅助类SQLiteOpenHelper实现增删改查

+ SQLiteOpenHelper，自己写一个继承之， `onCreate` 仅首次创建数据执行，`onUpgrade` 仅新版本大于老版本执行。创建表时，可以指定主键
+ `insert` `update` : 借助ContentValues
+ `delete`："xxx=?",填充？即可
+ `query` :借助Cursor
