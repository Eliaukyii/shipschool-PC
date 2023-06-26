<template>
  <div>
    <el-card style="margin-top:8px;margin-left:-8px;">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="报销单详情" name="first">
            <bxdxq></bxdxq>
          </el-tab-pane>
          <el-tab-pane label="还款信息" name="second">
            <hkxx></hkxx>
          </el-tab-pane>
          <el-tab-pane label="处理记录" name="third">
            <cljl></cljl>
          </el-tab-pane>
          <el-tab-pane label="流程图" name="fourth">
            <lct></lct>
          </el-tab-pane>
        </el-tabs>
      </template></el-card>
  </div>
</template>

<script>
import Bxdxq from "./fjmk/Bxdxq.vue";
import Hkxx from "./fjmk/Hkxx.vue";
import Cljl from "./fjmk/Cljl.vue";
import Lct from "./fjmk/Lct.vue";
export default {
  name:'Fjmk',
  components: {
    Bxdxq,
    Hkxx,
    Cljl,
    Lct
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
</style>
