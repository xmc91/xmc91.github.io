---
layout: post
title: 'Android issue'
author: WindMan
date: 2020-6-8
categories: Android
tags: Android 
---
> android 疑难杂症解决秘籍

+ build.gradle DSL element 'android.dataBinding.enabled' is obsolete and has been replaced with 'android.buildFeatures.dataBinding'
> 按照提示：xxxx已过期，请用yyyy替代，而且指明了哪个文件，到对于文件替换即可
```
android {
    ...
    // 原来
    dataBinding {
        enabled = true
    }
    // 替换成
    buildFeatures {
        dataBinding = true
    }
}

```
