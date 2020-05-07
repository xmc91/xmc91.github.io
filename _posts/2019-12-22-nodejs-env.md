---
layout: post
title: 'Nodejs 环境搭建'
author: WindMan
date: 2019-12-22
categories: node
tags: nodejs 
---

> NodeJs 磨刀霍霍向猪羊

+ nvm：管理各个node版本，便于不同项目使用不同node版本；
+ Node：无法可说，主角
+ npm：node的媳妇兼秘书，安装卸载node中间件

### 安装nvm

>// 随便用那个都行
>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash
>wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh | bash

+ nvm example

  > Example:
  >  nvm install 8.0.0           Install a specific version number
  >  nvm use 8.0              Use the latest available 8.0.x release
  >  nvm run 6.10.3 app.js         Run app.js using node 6.10.3
  >  nvm exec 4.8.3 node app.js      
  >  nvm alias default 8.1.0       
  >  nvm alias default node

+ 卸载

  > to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder (usually `~/.nvm`)

+ 实操

  >// 安装node 8.0.0
  >nvm install 8.0.0
  >Downloading and installing node v8.0.0...
  >Downloading https://nodejs.org/dist/v8.0.0/node-v8.0.0-darwin-x64.tar.gz...
  >\############################################################################################# 100.0%
  >Computing checksum with shasum -a 256
  >Checksums matched!
  >Now using node v8.0.0 (npm v5.0.0)
  >Creating default alias: default -> 8.0.0 (-> v8.0.0)
  >// 安装node 10.0.0
  > nvm install 10.0.0
  >Downloading and installing node v10.0.0...
  >Downloading https://nodejs.org/dist/v10.0.0/node-v10.0.0-darwin-x64.tar.gz...
  >\############################################################################################# 100.0%
  >Computing checksum with shasum -a 256
  >Checksums matched!
  >Now using node v10.0.0 (npm v5.6.0)
  >// 重命名node版本
  >nvm alias n10 10.0.0
  >nvm alias n8 8.0.0
  >// 切换版本
  >nvm use n10
  >nvm use n8
  >// 查看可用版本
  >nvm ls
  >->    v8.0.0
  >​    v10.0.0
  >​     system
  >default -> 8.0.0 (-> v8.0.0)
  >n8 -> 8.0.0 (-> v8.0.0)
  >n10 -> 10.0.0 (-> v10.0.0)
  >node -> stable (-> v10.0.0) (default)
  >stable -> 10.0 (-> v10.0.0) (default)
  >// 安装稳定版本
  >nvm install stable
  >Downloading and installing node v13.3.0...
  >Downloading https://nodejs.org/dist/v13.3.0/node-v13.3.0-darwin-x64.tar.gz...
  >\############################################################################################# 100.0%
  >Computing checksum with shasum -a 256
  >Checksums matched!
  >Now using node v13.3.0 (npm v6.13.1)

+ 配置环境变量

  >// 编辑配置文件
  >vim .bash_profile
  >// 编辑
  >export NVM_DIR="$HOME/.nvm"
  >[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  >// 重载配置文件
  > source .bash_profile

  

  ### npm

+ 切换为淘宝

  > npm install -g cnpm --registry=[https://registry.npm.taobao.org](https://links.jianshu.com/go?to=https%3A%2F%2Fregistry.npm.taobao.org)

  + 直接敲npm/cnpm 可以查看usage

<iframe type="text/html" width="100%" height="385" src="http://www.youtube.com/embed/gfmjMWjn-Xg" frameborder="0"></iframe>
