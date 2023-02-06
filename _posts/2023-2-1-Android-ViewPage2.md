---
layout: post
title: 'ViewPage2'
author: xmc91
date: 2023-2-1
categories: Android
tags: Android 
---
> 基于RecyclerView，替代ViewPage

## 基本使用
+ 绑定adapter和监听
```
viewpage.adapter = ViewPagerAdapter()
viewpage.currentItem = 1
viewpage.registerOnPageChangeCallback(object : ViewPager2.OnPageChangeCallback() {
            override fun onPageSelected(position: Int) {
                super.onPageSelected(position)
                Log.e(TAG, "onPageSelected: $position")
                lastPosiont = position
            }
        })
```
+ adapter
```
class ViewPagerAdapter(private val mLevel: Array<ByteArray>) : RecyclerView.Adapter<ViewPagerAdapter.ViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        return ViewHolder(LayoutInflater.from(parent.context).inflate(R.layout.mode_item, parent, false))
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.itemImg.setLevel(mLevel[position])
    }

    override fun getItemCount(): Int {
        return mLevel.size
    }

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var itemImg: ImageView

        init {
            itemImg = itemView.findViewById(R.id.item_img)
            itemView.tag = this
        }
    }
}
```


## 知识点
+ 初始化后会先走一次监听，位置为设定的，如果没有设定，就是0
+ ViewPage2基于RecyclerView，第一个就是它
```
var recyclerView: RecyclerView = viewpage.getChildAt(0) as RecyclerView
```
+ 获取ItemView，借道RecyclerView 
```
var curItemView = recyclerView.layoutManager?.findViewByPosition(position)
```
