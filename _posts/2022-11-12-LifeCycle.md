---
layout: post
title: 'LifeCycler'
author: xmc91
date: 2022-11-12
tags: Android 
---

## Activity使用

+ 添加依赖

  ```
  implementation 'androidx.lifecycle:lifecycle-extensions:2.2.0'
  ```


+ Activity作为被观察者，继承ComponentActivity，实现了LifecycleOwner

  ```
  class LifeCycleActivity : AppCompatActivity(), ActivityLifeCycleObserver {
      override fun onCreate(savedInstanceState: Bundle?) {
          super.onCreate(savedInstanceState)
          setContentView(R.layout.activity_life_cycle)
  
          lifecycle.addObserver(this);
      }
  
  }
  ```

+ 观察者

  ```
  interface ActivityLifeCycleObserver : LifecycleObserver {
  
      @OnLifecycleEvent(Lifecycle.Event.ON_RESUME)
      fun resume() {
  
      }
  }
  ```

+ 生命周期事件

  ```
  public enum Event {
          /**
           * Constant for onCreate event of the {@link LifecycleOwner}.
           */
          ON_CREATE,
          /**
           * Constant for onStart event of the {@link LifecycleOwner}.
           */
          ON_START,
          /**
           * Constant for onResume event of the {@link LifecycleOwner}.
           */
          ON_RESUME,
          /**
           * Constant for onPause event of the {@link LifecycleOwner}.
           */
          ON_PAUSE,
          /**
           * Constant for onStop event of the {@link LifecycleOwner}.
           */
          ON_STOP,
          /**
           * Constant for onDestroy event of the {@link LifecycleOwner}.
           */
          ON_DESTROY,
          /**
           * An {@link Event Event} constant that can be used to match all events.
           */
          ON_ANY
      }
  ```

  + fragment同样适用

  ## service使用

   
  + 创建service观察者
  
    ```
    class ServiceObserver : LifecycleObserver {
        @OnLifecycleEvent(Lifecycle.Event.ON_CREATE)
        fun c() {
            
        }
    }
    ```
  
    
  
  
  

