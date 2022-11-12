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
> 按照提示：xxxx已过期，请用yyyy替代，而且指明了哪个文件，到对应文件替换即可
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
+ Unable to find method 'org.gradle.api.internal.project.ProjectInternal.g
> 从github上clone的项目，下来就这个错误。
> 修改本地可用的gradle版本/gradle-wrapper 版本即可。

+ Can't connect to SOCKS proxy:Connection refused: connect
+ Connection refused: connect
+ as 设置里的http proxy ：You have JVM property "https.proxyHost" set to .... This may lea
> 代理问题
> 修改~/.gradle/gradle.properties 里的https:proxyHost，或者干掉
> 重启AS即可

+ Error:Could not initialize class org.jetbrains.kotlin.gradle.KotlinGradleModelBuilder
> kotlin问题，修改版本

+ Received close_notify during handshake
> 库没有下载下来,修改jceter源
``
// jcenter()
maven{ url'http://maven.aliyun.com/nexus/content/repositories/jcenter'}
```

+ Subscriber class MainActivity and its super classes have no public methods with the @Subscribe annotation
原因：EventBus.register()的时候，会走findSubscriberMethods()，这里会检查是否能反射到注册的事件，如果没有就抛这个错误。
错误原因有以下几种：
1. 虽然注册、反注册了，但是没有相应事件，哪怕是不用这个，也得加个事件
2. 事件方法必须是public类型。
3. 混淆问题，去github 上找混淆文件。
4. 通过混淆保证，至少有一个事件需要能被eventbug检测到。

```
-keepclassmembers class ** {
    public void onEvent*(**);
}
如果事件的名字叫abc，那就把onEvent*改为abc。
```
