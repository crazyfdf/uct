<template>
  <view class="wrap">
    <page-nav :desc="desc"
              title="nav.components"></page-nav>
    <view class="list-wrap">
      <u-cell-group title-bg-color="rgb(243, 244, 246)"
                    :title="item.groupName"
                    v-for="(item, index) in list"
                    :key="index">
        <u-cell-item :titleStyle="{fontWeight: 500}"
                     @click="openPage(item1.path)"
                     :title="item1.title"
                     v-for="(item1, index1) in item.list"
                     :key="index1">
          <image slot="icon"
                 class="u-cell-icon"
                 :src="getIcon(item1.icon)"
                 mode="widthFix"></image>
        </u-cell-item>
      </u-cell-group>
    </view>
    <u-gap height="70"></u-gap>
  </view>
</template>

<script>
import list from "./components.config.js";
import pageNav from "@/components/page-nav/page-nav.vue";
export default {
  components: {
    pageNav,
  },
  data() {
    return {
      list: list,
      desc:
        "众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让你快速集成，开箱即用。",
    };
  },
  computed: {
    getIcon() {
      return (path) => {
        return "https://cdn.uviewui.com/uview/example/" + path + ".png";
      };
    },
  },
  methods: {
    openPage(path) {
      this.$uct.to(path);
    },
  },
};
</script>

<style lang="scss" scoped>
.u-cell-icon {
  width: 36rpx;
  height: 36rpx;
  margin-right: 8rpx;
}
</style>
