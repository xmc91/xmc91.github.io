---
layout: post
title: 'RecyclewView'
author: xmc91
date: 2023-2-1
categories: Android
tags: Android 
---

> Android 使用最频繁的一个group组件

## 基本使用
+ 初始化及监听

```
mAdapter = new XXXAdapter(mContext);
LinearLayoutManager layoutManager = new LinearLayoutManager(mContext, LinearLayoutManager.HORIZONTAL, false);
mRecyclerView.setLayoutManager(layoutManager);
mRecyclerView.setItemAnimator(new DefaultItemAnimator());
mRecyclerView.setAdapter(mAdapter);

mAdapter.setOnItemClickListener(type -> {
});
```
+ adapter

```
public class XXXAdapter extends RecyclerView.Adapter<XXXAdapter.ItemViewHolder> {

    private LayoutInflater mInflater;

    private OnItemClickListener mOnItemClickListener;

    private MsgEntity mMsgEntity;

    public MsgCenterAdapter(Context context) {
        mInflater = LayoutInflater.from(context);
    }

    public void setMsgEntity(MsgEntity msgEntity) {
        mMsgEntity = msgEntity;
    }

    public void setOnItemClickListener(OnItemClickListener onItemClickListener) {
        mOnItemClickListener = onItemClickListener;
    }

    @Override
    public ItemViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        return new ItemViewHolder(mInflater.inflate(R.layout.item_msg_center, parent, false));
    }

    @Override
    public void onBindViewHolder(ItemViewHolder holder, int position) {
        Context context = holder.itemView.getContext();
        holder.mIcon.setImageResource(R.mipmap.icon_msg_center_comment);
        holder.mName.setText(R.string.msgCenterComment);
    }

    @Override
    public int getItemCount() {
        return 4;
    }

    static class ItemViewHolder extends RecyclerView.ViewHolder {
        @BindView(R.id.icon)
        ImageView mIcon;

        public ItemViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
            setIsRecyclable(false);
        }
    }

    public interface OnItemClickListener {
        void onItemClick(@MsgType String type);
    }
}
```

## 进阶
+ LayoutManager
	- LinearLayoutManager 横向、纵向。
	- GridLayoutManager 网格
	- StaggeredGridLayoutManager 瀑布

+ 分割线 ItemDecoration：onDraw、onDrawOver、getItemOffsets
	- onDraw方法先于drawChildren
	- onDrawOver在drawChildren之后，一般我们选择复写其中一个即可。
	- getItemOffsets 可以通过outRect.set()为每个Item设置一定的偏移量，主要用于绘制Decorator。

```
public class DividerGridItemDecoration extends RecyclerView.ItemDecoration{

    private static final int[] ATTRS = new int[] { android.R.attr.listDivider };
    private Drawable mDivider;

    public DividerGridItemDecoration(Context context){
        final TypedArray a = context.obtainStyledAttributes(ATTRS);
        mDivider = a.getDrawable(0);
        a.recycle();
    }

    @Override
    public void onDraw(Canvas c, RecyclerView parent, State state){
        drawHorizontal(c, parent);
        drawVertical(c, parent);
    }

    public void drawHorizontal(Canvas c, RecyclerView parent){
        int childCount = parent.getChildCount();
        for (int i = 0; i < childCount; i++){
            final View child = parent.getChildAt(i);
            final RecyclerView.LayoutParams params = (RecyclerView.LayoutParams) child.getLayoutParams();
            final int left = child.getLeft() - params.leftMargin;
            final int right = child.getRight() + params.rightMargin
                    + mDivider.getIntrinsicWidth();
            final int top = child.getBottom() + params.bottomMargin;
            final int bottom = top + mDivider.getIntrinsicHeight();
            mDivider.setBounds(left, top, right, bottom);
            mDivider.draw(c);
        }
    }

    public void drawVertical(Canvas c, RecyclerView parent){
        final int childCount = parent.getChildCount();
        for (int i = 0; i < childCount; i++){
            final View child = parent.getChildAt(i);
            final RecyclerView.LayoutParams params = (RecyclerView.LayoutParams) child.getLayoutParams();
            final int top = child.getTop() - params.topMargin;
            final int bottom = child.getBottom() + params.bottomMargin;
            final int left = child.getRight() + params.rightMargin;
            final int right = left + mDivider.getIntrinsicWidth();
            mDivider.setBounds(left, top, right, bottom);
            mDivider.draw(c);
        }
    }

    @Override
    public void getItemOffsets(Rect outRect, int itemPosition,
            RecyclerView parent){
        int spanCount = getSpanCount(parent);
        int childCount = parent.getAdapter().getItemCount();
        outRect.set(0, 0, mDivider.getIntrinsicWidth(), 0);
    }
}
```	

+ 动画 

+ 绘制：测量 onMeasure 和布局 onLayout 工作委托给 LayoutManager 来执行，不同的 LayoutManager 会有不同风格的布局显示，这是一种策略模式
![复杂度](/assets/img/recyclerview_draw.png)

+ Recycler

+ 四级缓存

+ header 和 footer

