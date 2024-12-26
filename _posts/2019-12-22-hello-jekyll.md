---
layout: post
title: 'Hello Jekyll'
date: 2019-12-22
cover: 'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'
tags: Tools
---

> 本站使用方法

+ 内容
  ```
  在_post路径下，编写内容
  编写头
  ---
  layout: post
  title: 'Hello Jekyll'
  date: 2019-12-22
  author: WindMan// 这里如果不写，会从_config.yml 中读取author
  cover:'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'
  tags: Tools
  ---
  ```
+ mac m1 安装Jekyll:https://jekyllrb.com/docs/installation/macos/
+ 需要用Ruby语言，他的包管理工具时gem，用gem安装jekyll

```
 直接用gem install jekyll，是用了系统的ruby，安装到/usr/bin 这是一个病毒特别想进去的目录。要么自己用brew安装一个新的ruby，要么用sudo并指定目录。
 sudo gem install -n /usr/local/bin jekyll

```

+ rvm （ruby version manager）  

```
rvm -v 
如果不存在rvm，安装之：curl -L https://get.rvm.io | bash -s stable
载入rvm环境 source ~/.rvm/scripts/rvm
检查：rvm -v  
rvm autolibs read-only
rvm list known
rvm install 2.7.2
```

+ 切换gem源

```
 gem sources -l
 gem sources --remove https://rubygems.org/
 gem sources -a http://ruby.taobao.org/ 已废弃
 gem sources --add https://gems.ruby-china.com/ 用这个
```

+ 编译

``` 
jekyll build
```

+ 浏览器预览

``` 
jekyll server
// url
Server address: http://127.0.0.1:4000/
```

+ 图片相对路径引用

```
/assets/*
定制大小
<img src='/assets/img/O(y).png'  height='300' width='500' align='left'>
```

+ 字体切换

```
/assets/font
```

+ config 文件有修改保存后不会立即更新，需要重新build

+ 提交即可
+ [Jekyll主题](http://jekyllthemes.org/)

## window配置jekyll环境
```
+ 下载 [ Ruby+Devkit 2.5.8-1 (x64)](https://rubyinstaller.org/downloads/),这个是ruby及其安装包环境，自带gem。超级慢，不翻墙总是会失败
+ gem是ruby的包管理工具，可以下载ruby环境的各自依赖
+ gem install bundler
+ gem install jekyll,超级慢
+ 此时jekyll build运行，可能会报错如下：
```
```
Dependency Error: Yikes! It looks like you don't have jekyll-paginate or one of its dependencies installed.
```

+ 根据提示，gem install jekyll-paginate
+ ok

### jekyll 问题解决
+ https://teamtreehouse.com/community/jekyllpaginate-gem



### 错误处理
```
1. OpenSSL is not available. Install OpenSSL and rebuild Ruby or use non-HTTPS sources (Gem::Exception)
+ ruby 需要用openssl使用https： brew install openssl
+ export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"
+ source ~/.zshrc   

2. find_spec_for_exe': can't find gem bundler (>= 0.a) (Gem::GemNotFoundException)
+ sudo gem install bundler
```

## 一次折腾
```
+ 安装openssl，验证openssl是否安装正确：   ruby -ropenssl -e 'puts OpenSSL::OPENSSL_VERSION'
+ 安装ruby，有两种方式，需要关联openssl（指定 OpenSSL 路径）
+ 安装Jekyll
+ 安装jekyll-paginate
```
### rvm安装ruby
```
+ rvm安装：  \curl -sSL https://get.rvm.io | bash -s stable
+ rvm卸妆：    rvm implode
+ 删除所有与 rvm 相关的环境变量：    echo $PATH
+ rvm install 3.3.5 --with-openssl-dir=/opt/homebrew/opt/openssl@3 （原命令：rvm install <RUBY_VERSION> --with-openssl-dir=$(brew --prefix openssl) 只不过我用which openssl显示的路径替换了一下）
+ 指定版本：rvm use <RUBY_VERSION> --default 
+ 配置ruby的环境变量：export PATH="$HOME/.rvm/gems/ruby-3.3.5/bin:$HOME/.rvm/rubies/ruby-3.3.5/bin:$PATH"   使之生效：source ~/.bash_profile //其中.rvm/gems是gem安装的所有可执行文件的路径，.rvm/rubies时ruby本身的路径
```
```
### rbenv安装ruby
+ rbenv install -l 查看当前系统支持的 Ruby 版本
+ rbenv versions 查看本机ruby版本
+ 关联openssl的安装方式：   RUBY_CONFIGURE_OPTS="--with-openssl-dir=/opt/homebrew/opt/openssl@3" rbenv install 3.3.5
+ 指定版本：rbenv global <RUBY_VERSION>  # 设置默认 Ruby 版本；；；；；；rbenv rehash  # 刷新环境
```







