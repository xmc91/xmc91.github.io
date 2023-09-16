---
layout: post
title: 'FileProvider'
author: xmc91
date: 2022-11-12
tags: Android 
---

## 文件共享

file:// 协议不再支持共享，需要用content:// 协议。

### 创建FileProvider

```
<provider
    android:name="android.support.v4.content.FileProvider"
    android:authorities="app的包名.fileProvider"
    android:grantUriPermissions="true"
    android:exported="false">
    <meta-data
        android:name="android.support.FILE_PROVIDER_PATHS"
        android:resource="@xml/file_paths" />
</provider>
```

### 创建xml

```
<?xml version="1.0" encoding="utf-8"?>
<paths xmlns:android="http://schemas.android.com/apk/res/android">
    <root-path name="root" path="" /> //代表设备的根目录new File("/");
    <files-path name="files" path="" /> //context.getFilesDir()
    <cache-path name="cache" path="" /> //context.getCacheDir()
    <external-path name="external" path="" /> //Environment.getExternalStorageDirectory()
    <external-files-path name="name" path="path" /> //context.getExternalFilesDirs()
     <external-cache-path name="name" path="path" /> //getExternalCacheDirs()
     
        <!--内置SD卡 Environment.getExternalStorageDirectory() .表示共享所有的目录，也可以指定共享的目录-->
    <external-path
        name="external-path"
        path="."/>
    <!--内置SD卡 Context.getExternalCacheDir() .表示共享所有的目录，也可以指定共享的目录-->
    <external-cache-path
        name="external-cache-path"
        path="."/>
    <!--内置SD卡 Context.getExternalFilesDir(null) .表示共享所有的目录，也可以指定共享的目录-->
    <external-files-path
        name="external-files-path"
        path="."/>
    <!--data目录下 Context.getFilesDir() .表示共享所有的目录，也可以指定共享的目录-->
    <files-path
        name="files_path"
        path="."/>
    <!--data缓存目录 Context.getCacheDir() .表示共享所有的目录，也可以指定共享的目录-->
    <cache-path
        name="cache-path"
        path="."/>
    <!--这个标签Android官方文档中是没有提及，Android设备的根目录，该目录下包含着手机内部存储器，外置SD卡等所有文件的目录-->
    <root-path
        name="name"
        path="."/>
</paths>
```

### 使用

```
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
    Uri uri = FileProvider.getUriForFile(CameraActivity.this, "app的包名.fileProvider", photoFile);
} else {
    Uri uri = Uri.fromFile(photoFile);
}
```

## 源码解析

+ 核心方法：

  ```
  public static Uri getUriForFile(@NonNull Context context, @NonNull String authority,
              @NonNull File file) {
          final PathStrategy strategy = getPathStrategy(context, authority);
          return strategy.getUriForFile(file);
      }
  ```

+ 核心中间接口PathStrategy，file和uri映射

  ```
  interface PathStrategy {
      Uri getUriForFile(File file);
      File getFileForUri(Uri uri);
  }
  ```

+ 缓存pathStrategy，下次就不需要解析了

  ```
  private static HashMap<String, PathStrategy> sCache = new HashMap<String, PathStrategy>();
   PathStrategy strat;
          synchronized (sCache) {
              strat = sCache.get(authority);
              if (strat == null) {
                  try {
                      strat = parsePathStrategy(context, authority);
                  } catch (IOException e) {
                 。。。
                  sCache.put(authority, strat);
              }
          }
  ```

+ 解析PathStrategy，返回SimplePathStrategy

  这里的核心类就是XmlResourceParser，用来解析xml

  ```
  final SimplePathStrategy strat = new SimplePathStrategy(authority);
          final ProviderInfo info = context.getPackageManager()
                  .resolveContentProvider(authority, PackageManager.GET_META_DATA);
          if (info == null) {
          // 这里就是配置meta的检验
              throw new IllegalArgumentException(
                      "Couldn't find meta-data for provider with authority " + authority);
          }
  				// 解析我们写的那个file_path.xml
  				// 其中META_DATA_FILE_PROVIDER_PATHS = "android.support.FILE_PROVIDER_PATHS";这个字符串是要卸载provider的meta中的
          final XmlResourceParser in = info.loadXmlMetaData(
                  context.getPackageManager(), META_DATA_FILE_PROVIDER_PATHS);
          if (in == null) {
              throw new IllegalArgumentException(
                      "Missing " + META_DATA_FILE_PROVIDER_PATHS + " meta-data");
          }
  
          int type;
          while ((type = in.next()) != END_DOCUMENT) {
              if (type == START_TAG) {
              // tag、name、path都是我们配置在xml里的
                  final String tag = in.getName();
  
                  final String name = in.getAttributeValue(null, ATTR_NAME);
                  String path = in.getAttributeValue(null, ATTR_PATH);
  
                  File target = null;
                  // tag 类型如下：
                  private static final String TAG_ROOT_PATH = "root-path";
                  private static final String TAG_FILES_PATH = "files-path";
                  private static final String TAG_CACHE_PATH = "cache-path";
                  private static final String TAG_EXTERNAL = "external-path";
                  private static final String TAG_EXTERNAL_FILES = "external-files-path";
                  private static final String TAG_EXTERNAL_CACHE = "external-cache-path";
                  private static final String TAG_EXTERNAL_MEDIA = "external-media-path";
                  
                  if (TAG_ROOT_PATH.equals(tag)) {
                      target = DEVICE_ROOT;
                  } else if (TAG_FILES_PATH.equals(tag)) {
                      target = context.getFilesDir();
                  } else if (TAG_CACHE_PATH.equals(tag)) {
                      target = context.getCacheDir();
                  } else if (TAG_EXTERNAL.equals(tag)) {
                      target = Environment.getExternalStorageDirectory();
                  } else if (TAG_EXTERNAL_FILES.equals(tag)) {
                      File[] externalFilesDirs = ContextCompat.getExternalFilesDirs(context, null);
                      if (externalFilesDirs.length > 0) {
                          target = externalFilesDirs[0];
                      }
                  } else if (TAG_EXTERNAL_CACHE.equals(tag)) {
                      File[] externalCacheDirs = ContextCompat.getExternalCacheDirs(context);
                      if (externalCacheDirs.length > 0) {
                          target = externalCacheDirs[0];
                      }
                  } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP
                          && TAG_EXTERNAL_MEDIA.equals(tag)) {
                      File[] externalMediaDirs = context.getExternalMediaDirs();
                      if (externalMediaDirs.length > 0) {
                          target = externalMediaDirs[0];
                      }
                  }
  
                  if (target != null) {
                  // buildPath(target, path)就是根据配置重新生成path
                      strat.addRoot(name, buildPath(target, path));
                  }
              }
          }
  ```

+ SimplePathStrategy实现想要的content://

  - 添加到集合里

    ```
    				private final HashMap<String, File> mRoots = new HashMap<String, File>();
            /**
             * Add a mapping from a name to a filesystem root. The provider only offers
             * access to files that live under configured roots.
             */
            void addRoot(String name, File root) {
                if (TextUtils.isEmpty(name)) {
                    throw new IllegalArgumentException("Name must not be empty");
                }
                try {
                    // Resolve to canonical path to keep path checking fast
                    root = root.getCanonicalFile();
                } catch (IOException e) {
                    throw new IllegalArgumentException(
                            "Failed to resolve canonical path for " + root, e);
                }
                mRoots.put(name, root);
            }
    ```

  - 从roots遍历并解析到path，修改协议，华丽转身

    ```
    new Uri.Builder().scheme("content").authority(mAuthority).encodedPath(path).build();
    ```

    

+ 回到我们出发的地方

  ```
  public static Uri getUriForFile(@NonNull Context context, @NonNull String authority,
              @NonNull File file) {
          final PathStrategy strategy = getPathStrategy(context, authority);
          // 这里的strategy的实例是SimplePathStrategy
          return strategy.getUriForFile(file);
      }
  ```



## 感悟

+ 两层缓存：sCache缓存了PathStrategy，SimplePathStrategy里的mRoots缓存了File
+ 接口定义，子类实现PathStrategy-->SimplePathStrategy



## 微信分享

+ 如果用的是File的形式分享，则需要用到FileProvider，如果是bitmap直接分享，是用不到的。