---
layout: post
title: 'Android 版本适配'
author: xmc91
date: 2022-11-12
categories: Android
tags: Android 
---
+ 升级AndroidX ，AndroidX概念：https://developer.android.google.cn/jetpack/androidx

  - 先把support版本统一到28.0.0（28和X的1.0.0在二进制上一致），编译版本和目标版本个moduel统一

  - 重构命令[`gradle.properties`](https://developer.android.google.cn/studio/build#properties-files) 

  ```
  android.useAndroidX=true
  Android 插件会使用对应的 AndroidX 库而非支持库。
  android.enableJetifier=true
  Android 插件会通过重写现有第三方库的二进制文件，自动将这些库迁移为使用 AndroidX。
  ```

  - 使用AS的插件：**Refactor > Migrate to AndroidX**
  - 进入体力活阶段。
  - 错误处理:gradlew 打印编译信息，遇山开山遇水劈水

+ Android 11 内存适配：https://developer.android.google.cn/about/versions/11/privacy/storage

  - 强制执行分区存储

  - 11之后，不能在外部sd卡创建目录，需要调用系统专属分配的 [`getExternalFilesDirs()`](https://developer.android.google.cn/reference/android/content/Context#getExternalFilesDirs(java.lang.String))。

  - 通过调用 [`ACTION_MANAGE_STORAGE`](https://developer.android.google.cn/reference/kotlin/android/os/storage/StorageManager#action_manage_storage) intent 操作检查可用空间。

  - 如果设备上的可用空间不足，请提示用户同意让您的应用清除所有缓存。为此，请调用 [`ACTION_CLEAR_APP_CACHE`](https://developer.android.google.cn/reference/kotlin/android/os/storage/StorageManager#action_clear_app_cache) intent 操作。

    **注意**：`ACTION_CLEAR_APP_CACHE` intent 操作会严重影响设备的电池续航时间，并且可能会从设备上移除大量的文件。

+ umeng适配Android11微信分享：https://developer.umeng.com/docs/128606/detail/200703

  ```
  + 升级umeng全套版本，7.1.4
  + 微信要使用完整版。umeng-share-wechat-full-7.1.4.jar，精简版下线
  + manifest添加 Provider
  <provider
              android:name="androidx.core.content.FileProvider"
              android:authorities="${applicationId}.provider"
              android:exported="false"
              android:grantUriPermissions="true">
              <meta-data
                  android:name="android.support.FILE_PROVIDER_PATHS"
                  android:resource="@xml/file_provider_paths" />
          </provider>
  + 添加 file_provider_paths.xml
  <external-files-path name="umeng_cache" path="umeng_cache/"/>
  + 将自定义FileProvider authorities通过PlatformConfig.setWXFileProvider接口设置
  ```

