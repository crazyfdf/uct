<!--
 * @Version: 1.0.0
 * @Author: 祸灵
 * @LastEditors: 祸灵
 * @Date: 2021-04-15 11:46:21
 * @LastEditTime: 2021-04-16 10:42:09
 * @Description: 
-->
<template>
  <view class='empty-demo'>
    <uct-nav>
      <view slot="center">Empty空页面</view>
    </uct-nav>
    <uct-empty :option="empty"
               @emptyclick="back"></uct-empty>
  </view>
</template>

<script>
export default {
  data() {
    return {
      empty: {
        //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
        warpId: "xxid", //父布局的id (1.3.5版本支持传入dom元素)
        icon: "/static/imgs/public/mescroll-empty.png", //图标,默认null,支持网络图
        tip: "暂无相关数据~", //提示
        btnText: "返回上一个页面", //button 的内容文字，为空时不显示 button
      },
    };
  },
  methods: {
    back() {
      uni.navigateBack({ delta: 1 });
    },
  },
};
</script>

<style scoped lang="scss">
</style>