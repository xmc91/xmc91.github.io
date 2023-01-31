---
layout: post
title: 'Android Studio'
author: xmc91
date: 2020-06-01
categories: Tools 
tags: Tools 
---
### mac 修改某个应用可使用的最大内存，升级之后就没了

  - 访达 -> 应用程序 -> xxx.app -> 右键 -> 显示包内容 -> Contents -> bin 下 studio.vmoptions 文件

  - 调整大小

    ```
    -Xms512m
    -Xmx4096m
    ```

  - As 可以通过help-edit jvm option直接修改

### Mac 永久修改as内存大小

  - `~/Library/Preferences/AndroidStudio2.0/`目录下的studio.vmoptions文件
  - 调整大小
  - windows ：c盘\yourname\ .androidstuidoxx
  - Linux:/home/yourname/.androidstudioxx

### as push失败

+ email private

  ```
  Can't finish GitHub sharing process
          Successfully created project 'Exam' on GitHub, but initial push failed:
          remote: error: GH007: Your push would publish a private email address.
          failed to push some refs to 'https://github.com/xxx/xxx.git'
          
   解决：setting->emails->Keep my email address private 把这一项去掉勾选即可。
  ```

+ 失败后解决：点项目右键，点git-repository-pull，即可再次提交  


+ As 统一各个moduel配置

  - 创建全局config

  ```
  ext {
      android = [
              compileSdkVersion: 28,
              buildToolsVersion: "28.0.3",
      ]
      dependencies = [
      ]
  }
  ```

  + Project 引用:apply from: "config.gradle"

  + 使用

    ```
    compileSdkVersion rootProject.ext.android["compileSdkVersion"]
    buildToolsVersion rootProject.ext.android["buildToolsVersion"]
    ```


+ as gradle 配置：https://developer.android.com/studio/build/index.html

+ as gradle插件说明：https://developer.android.com/studio/releases/gradle-plugin#updating-plugin

+ minifyEnabled代码压缩，shrinkResources 资源压缩，代码确定不使用后才移除资源压缩才生效


+ 指定的类打包到住dex

  ```
  multiDexEnabled true
  multiDexKeepFile file('multiDexKeep.txt')
  
  androidx.work.R$Bool.class
  ```

  + Attribute data@scheme at AndroidManifest.xml requires a placeholder substitution but no value for <qqappid> is provided：https://developer.umeng.com/docs/128606/detail/201296

  ```
  defaultConfig {
          manifestPlaceholders=[qqappid:"110xxxxxx6633sdsafa296"]
      }
  ```

+ 65535限制

```
添加依赖：implementation 'androidx.multidex:multidex:2.0.0'
启用分包:
android {
    defaultConfig {
        multiDexEnabled true
    }
}
加载：
public class App extends Application {
    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }
}
```

+ 异或

  ```
  不同为true
  所以有两个定律：与自身异或=0；与0异或=自身
  实用：
  + 加密：密码^文件=密文;密文^密码=文件
  + 
  + 取
  ```

+ Ctrl+H查看继承关系
+ 查看kotlin的字节码及反编译Java

	- 查看字节码：Tools -> Kotlin -> Show Kotlin Bytecode
	- 反编译到老面孔：在弹出窗口中点击Decompile
+ xml无法预览
  - File > Sync Project with Gradle Files
  - File > Invalidate Cache and Restart 
  - 都勾选，Invalidate and Restart
  - waiting。。。


  
  
