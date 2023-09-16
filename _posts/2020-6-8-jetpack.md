---
layout: post
title: 'Jetpack 纪传志表'
author: WindMan
date: 2020-6-8
tags: Android 
---
> 纪：一般只写皇帝；    
传：后妃、皇子事件、民间有意义的事件；  
志：人文、地理、时宪、交通、乐礼、服饰、饮食、河道、兵、刑法、邦交；    
表：皇子、公主、外戚、大臣、封爵、疆臣、驻使    

## JetPack 配置


## DataBinding
+ 编写databing的layout，只有这个类型的layout才能生成对应的 ViewDataBinding 类

```
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    // 数据
    <data>
    </data>
    // 布局
    <androidx.constraintlayout.widget.ConstraintLayout
        android:id="@+id/container"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        android:paddingTop="?attr/actionBarSize">

    </androidx.constraintlayout.widget.ConstraintLayout>
</layout>
```
+ 生成的ViewDataBinding类路径如下：
![T extends ViewDataBinding](/assets/img/jetpack/viewdatabinding.png)

+ 后续对view和data操作都在这个 ViewDataBinding 上处理，看名字就知道，这玩意就是二者的结合物。
+ 在 Fragment、ListView 或 RecyclerView 适配器中使用数据绑定项，您可能更愿意使用绑定类或 DataBindingUtil 类的 inflate() 方法，如以下代码示例所示：

```
    ListItemBinding binding = ListItemBinding.inflate(layoutInflater, viewGroup, false);
    // or
    ListItemBinding binding = DataBindingUtil.inflate(layoutInflater, R.layout.list_item, viewGroup, false);
    
```

## 一些不错的文章
+ [Jetpack一统江湖](https://zhuanlan.zhihu.com/p/145425347)