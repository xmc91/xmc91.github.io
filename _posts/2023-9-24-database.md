---
layout: post
title: '数据库'
author: xmc91
date: 2023-9-24
tags: 数据库 
---
> 数据库

## 数据库概念
+ table｜schema
+ column 列
+ row 行
+ primary key 主键

## 数据库命令

## 查看 SHOW
+ 选择数据库：USE xxx
+ 展示所有数据库：SHOW DATABASES
+ 展示所有表：SHOW TABLES｜SHOW COLUMNS FERM xxx
+ 看是状态：SHOW STATUS
+ 看错误等：SHOW ERRORS｜ SHOW WARINGS
+ 查看权限：SHOW GRANTS

## 检索 SELECT
+ 单列：SELECT xx FREOM xx
+ 多列：SELECT x,y FROM xxx
+ 所有列：SELECT * FROM xxx
+ 不同行：SELECT xx FROM xxx，不重复：SELECT DIStINGCT xx FROM xxx
+ 限制：LIMIT n
+ 限定表名：SELECT table.column FROM table

## 排序检索
+ 默认正序：ASC
+ 指定条件，加 ORDER BY
+ 多列排序：SELECT x, y, FROM table ORDER BY x, y
+ 倒序，加 DESC




