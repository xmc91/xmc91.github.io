---
layout: post
title: 'Android 碎片记忆'
author: WindMan
date: 2020-7-29
categories: android
tags: android 
---
> 一片，两片，三四片；五片，六片，七八片。落入芦苇全不见！

## h5唤起app
```
+ [scheme:][//authority][path][?query][#fragment],如：https://www.baidu.com
+ scheme的触发方式会被浏览器拦截，它们都各自维护着一个白名单，但是微博之类的都是可以申请的，只是条件各不相同，比如微博的就是在你的 APP 中添加打开微博的入口，三个月内唤起超过 100w 次，就可以加入白名单了。
+ 在安卓中我们一般都是直接打开腾讯应用宝，ios 中 直接打开 App Store。点击腾讯应用宝中的“打开”按钮，可以直接唤起我们的 APP，但是无法打开 APP 中的某个功能（就是无法打开指定页面）。腾讯应用宝对外开放了一个叫做 APP Link 的申请，只要你申请了 APP Link，就可以通过在打开应用宝的时候在应用宝地址后面添加上 &android_schema={your_scheme} ，来打开指定的页面了。
+ location.href跳转：window.location.href = 'sinaweibo://qrcode';
+ a标签唤起： <a href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=123456">QQ临时交流</a>
+ iframe方案： <iframe src="sinaweibo://qrcode">

```

## Android 9+ 允许http
+ res目录下创建xml目录,创建network_security_config.xml文件
```
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
<base-config cleartextTrafficPermitted="true" />
</network-security-config>
```
+ AndroidManifest.xml添加:
```
android:networkSecurityConfig="@xml/network_security_config"
```

## Android8.0 允许安装未知来源权限
+ 8.0之前，从除官方应用商店之外的来源安装App时，需要打开系统设置当中的”允许未知来源”，在最新的Android O当中谷歌已经删除了该永久授权的选项，从系统设置当中已经找不到该开关。谷歌将永久授权修改为每次的单独授权，当用户每次安装第三方来源（包括华为应用市场等）的android软件时需要对软件权限进行手动确认
+ 添加权限
```
<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>
```
+ 判断运行时权限是否打开
```
 if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.O){
 //先判断是否有安装未知来源应用的权限
    if(!getPackageManager().canRequestPackageInstalls()){
    //跳转到应用详情，打开开关
    }
 }   
```
+ 跳转到应用详情，打开开关
```
Uri packageURI = Uri.parse("package:"+mContext.getPackageName());
Intent intent = new Intent(Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,packageURI);
startActivityForResult(intent, INSTALL_PERMISS_CODE);
```
+ onActivityResult回调
```
if (resultCode == RESULT_OK && requestCode == INSTALL_PERMISS_CODE) {
   // 安装APP
 }
```

## AlertDialog 回调 
+ 创建 AlertDialog
```
    public static void showAlert(Context context, String title, String message, OnClickListener listener){
        Builder builder = new Builder(context);
        builder.setTitle(title);
        builder.setMessage(message);
        builder.setPositiveButton("确定", listener);
        builder.setCancelable(false);
        builder.setIcon(R.mipmap.ic_launcher);
        AlertDialog dialog = builder.create();
        dialog.show();
    }
```
+ 接管点击事件
```
showAlert(this, "title", "message", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        
                    }
                });
```
## TextView 小特性
+ 可复制，如果是在listview里，替换为RecyclerView 即可
```
android:textIsSelectable="true"
```
+ 可滑动
```
 tv.movementMethod = ScrollingMovementMethod.getInstance()
```
+ 支持富文本:SpannableString或者html
```
//设置Hello World前三个字符为红色,背景为蓝色
SpannableString textSpanned = new SpannableString("Hello World");
// ForegroundColorSpan(Color.RED) 设置前景
// BackgroundColorSpan(Color.RED) 设置背景
// new StyleSpan(Typeface.ITALIC) 斜体
// new UnderlineSpan() 下划线
// ClickableSpan 点击事件
textSpanned.setSpan(xxxSpan,0, 3, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
tv.setMovementMethod(LinkMovementMethod.getInstance());
tv.setText(textSpanned4);
```
+ 跑马灯：借助系统或者自定义或者直接用别人的轮子
```
    <TextView
        android:layout_marginTop="30dp"
        android:layout_width="100dp"
        android:layout_height="30dp"
        android:text="Hello World! wertyuiodfghjklxcvbnm,.dfghjklghjkl"
        android:singleLine="true"
        android:scrollHorizontally="true"
        android:ellipsize="marquee"
        android:focusable="true"
        android:focusableInTouchMode="true"
        android:marqueeRepeatLimit="marquee_forever"
        />
```

## android 多国语言
+ 

## 【报错】is not accessible from java.lang.Class android.app.ActivityThread
+ 修饰改为public


## Android32位和64位

+ 64比32位宽，32可操作内存最高4gb，64可操作内存最高192gb。https://blog.csdn.net/weixin_36213756/article/details/117615529
+ 指令集不同，带64的都是64位，每一种abi向下兼容。从lancher启动后，32位只有一个zygote，43有两个：zytote和zygote64，64的art等优于32的art。  https://blog.csdn.net/u012739527/article/details/124012420
+ 官方Android ABI ：https://developer.android.com/ndk/guides/abis?hl=zh-cn
+ 官方：https://developer.android.com/games/optimize/64-bit?hl=zh-cn


## 修改jdk版本

+ 打开AS设置，搜索gradle，修改配置。AS自带java环境

## 集成admob之开屏广告【2020-8月份才有的一个广告格式】：https://developers.google.com/admob/android/app-open-ads?hl=zh-CN

- 必须androidX



+ 依赖的依赖最终会下载到本地，但是最新的会替代其他旧版本



+ Android APP升级逻辑:https://blog.csdn.net/weixin_34363171/article/details/91684168

  ```
  + versionCode用来程序升级
  + versionName用来产品标识
  + packagename用来校验
  ```

+ Google play 举报APP：https://support.google.com/googleplay/android-developer/contact/takedown
+ Google play举报版权等：https://support.google.com/googleplay/android-developer/answer/1085703?hl=zh-Hans
+ Google 广告 admob：https://developers.google.cn/admob/android/quick-start


+ Google banner 广告集成

    - 通过BuildeConfig.DEUBG配置广告id，测试版本只能用测试id，否则容易封号
    - 下载Google 原生模板广告的代码，代码+资源全部导入APP，可修改样式
    - 用AdLoader加载广告，然后在loaded之后用adView设置style及返回的广告实例
+ 获取某view的高度，假定view是LinearLayout，高度设置WRAP_CONTENT

  ```
  public static float getRealHeight(View child){
      LinearLayout llayout = (LinearLayout) child;
      ViewGroup.LayoutParams params = llayout.getLayoutParams();
      if (params == null){
          params = new ViewGroup.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
      }
      int widthSpec = ViewGroup.getChildMeasureSpec(0,0,params.width);
      int heightSpec;
      if (params.height>0){
          heightSpec = View.MeasureSpec.makeMeasureSpec(params.height, View.MeasureSpec.EXACTLY);
      }else {
          heightSpec = View.MeasureSpec.makeMeasureSpec(0, View.MeasureSpec.UNSPECIFIED);
      }
      llayout.measure(widthSpec,heightSpec);
      return llayout.getMeasuredHeight();//获取布局高度，获取布局宽度可以调用getMeasuredWidth()
  }
  ```

+ Android 实现LifecycleOwner

  - 定义声明状态、切换状态、查询上一个状态、管理LifecycleObserver
  - LifecycleRegistry
    - 继承Lifecycle
  - LifecycleObserver：生命周期观察者
  - LifecycleOwner：继承类LifecycleRegistryOwner管理生命周期观察者
  - 通过ReportFragment管理生命周期，注入：ReportFragment.injectIfNeededIn(this)

+ Android context

  - 继承关系

    ```
    context
        ContextImpl实现类
        ContextWrapper封装类
            Application
            Service 幕后工作
            ContextThemeWrapper带主题的封装类，即可以看的到的
                Activity
    
        
    ```

  - 具体实现：ContextImpl

  - 标准的application获取方式

    ```
    public class MyApplication extends Application {
        private static MyApplication app;
        public static MyApplication getInstance() {
            return app;
        }
        
        @Override
        public void onCreate() {
            super.onCreate();
            app = this;
        }
    }
    ```

+ Android 虚拟键处理

  - 判断是否有虚拟键

    ```
    public static boolean checkDeviceHasNavigationBar(Context context) {
            boolean hasMenuKey = ViewConfiguration.get(context)
                    .hasPermanentMenuKey();
            boolean hasBackKey = KeyCharacterMap
                    .deviceHasKey(KeyEvent.KEYCODE_BACK);
            if (!hasMenuKey & !hasBackKey) {
                return true;
            }
            return false;
        }
    ```

  - 获取高度

    ````
    public static int getNavigationBarHeight(Context context) {
            int result = 0;
            if (checkDeviceHasNavigationBar(context)) {
                Resources res = context.getResources();
                int resourceId = res.getIdentifier("navigation_bar_height", "dimen", "android");
                if (resourceId > 0) {
                    result = res.getDimensionPixelSize(resourceId);
                }
            }
            return result;
        }
    ````

  - 适配

    ```
    /**
     * Android 5.0及以上 在Translucent模式下防止键盘挡住EditText
     * https://stackoverflow.com/questions/7417123/android-how-to-adjust-layout-in-full-screen-mode-when-softkeyboard-is-visible/19494006#19494006
     */
    public class AndroidBug5497Workaround {
        // For more information, see https://code.google.com/p/android/issues/detail?id=5497
        // To use this class, simply invoke assistActivity() on an Activity that already has its content view set.
    
        public static void assistActivity(Activity activity) {
            new AndroidBug5497Workaround(activity);
        }
    
        private View mChildOfContent;
        private int usableHeightPrevious;
        private FrameLayout.LayoutParams frameLayoutParams;
    
        private AndroidBug5497Workaround(Activity activity) {
            FrameLayout content = activity.findViewById(android.R.id.content);
            mChildOfContent = content.getChildAt(0);
            mChildOfContent.getViewTreeObserver().addOnGlobalLayoutListener(new ViewTreeObserver.OnGlobalLayoutListener() {
                public void onGlobalLayout() {
                    possiblyResizeChildOfContent();
                }
            });
            frameLayoutParams = (FrameLayout.LayoutParams) mChildOfContent.getLayoutParams();
        }
    
        private void possiblyResizeChildOfContent() {
            Timber.e("虚拟按键高度 %d", ScreenUtils.getNavigationBarHeight());
            int usableHeightNow = computeUsableHeight();
            if (usableHeightNow != usableHeightPrevious) {
                int usableHeightSansKeyboard = mChildOfContent.getRootView().getHeight();
                int heightDifference = usableHeightSansKeyboard - usableHeightNow;
                if (heightDifference > (usableHeightSansKeyboard / 4)) {
                    // keyboard probably just became visible
                    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                        frameLayoutParams.height = usableHeightSansKeyboard - heightDifference + BarUtils.getStatusBarHeight(mChildOfContent.getContext());
                    } else {
                        frameLayoutParams.height = usableHeightSansKeyboard - heightDifference;
                    }
                } else {
                    // keyboard probably just became hidden
                    frameLayoutParams.height = usableHeightSansKeyboard - ScreenUtils.getNavigationBarHeight();
                }
                mChildOfContent.requestLayout();
                usableHeightPrevious = usableHeightNow;
            }
        }
    
        private int computeUsableHeight() {
            Rect r = new Rect();
            mChildOfContent.getWindowVisibleDisplayFrame(r);
            return (r.bottom - r.top);
        }
    }
    ```



+ android  utils 库：https://github.com/Blankj/AndroidUtilCode/blob/master/lib/utilcode/README-CN.md

+ 修复错误：android.content.res.XmlResourceParser android.content.pm.ProviderInfo.loadXmlMetaData

    - fileProvider解析失败

    - manifest配置的authorities和APP里配置的要统一

  ```
  android:authorities="${applicationId}.fileprovider"
  PlatformConfig.setWXFileProvider("com.diya.isense.fileprovider");
  ```

+ seekbar 中间点
```
<SeekBar
                            style="@style/Widget.AppCompat.SeekBar.Discrete"
                            android:layout_width="match_parent"
                            android:layout_height="wrap_content"
                            android:layout_weight="1"
                            android:max="5" />
```
  

