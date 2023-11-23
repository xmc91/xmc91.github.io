---
layout: post
title: 'Android issue'
author: WindMan
date: 2020-6-8
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
1. 虽然注册、反注册了，但是没有响应事件，哪怕是不用这个，也得加个事件
2. 事件方法必须是public类型。
3. 混淆问题，去github 上找混淆文件。
4. 通过混淆保证，至少有一个事件需要能被eventbus检测到。

```
-keepclassmembers class ** {
    public void onEvent*(**);
}
如果事件的名字叫abc，那就把onEvent*改为abc。
```

+ 报错解决：connect to maven.google.com:443

  - maven {url 'https://dl.google.com/dl/android/maven2/'} 代替之前的maven { url 'https://maven.google.com' }

+ 报错解决：unexpected element <queries> found in <manifest>.

  - 升级gradle插件：classpath 'com.android.tools.build:gradle:4.0.1'


+ 错误处理:androidx/appcompat/R$drawable

  ```
  java.lang.NoClassDefFoundError: Failed resolution of: Landroidx/appcompat/R$drawable
  升级部分依赖，支持gradle3.6.0 ，升级realm
  ```

+ 申请动态权限，oppo手机，如果权限组的权限差距大，可能存在只弹出一种弹框。比如申请蓝牙的scan权限和sd卡权限，此时可能只弹出scan的提示，不会出现sd卡授权，然后grant=false。  

+ Android10以上，不再需要wreite sd卡权限，因为file写入app目录，八大目录又不需要权限；read sd卡权限，安迪的13以上拆分成：imgage、media、video。


