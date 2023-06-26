<template>
  <div>
    <el-card style="margin-top:8px;margin-left:-8px;">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="差旅报销审批" name="first">
          </el-tab-pane>
          <el-tab-pane label="附件详情" name="second">
          </el-tab-pane>
          <el-tab-pane label="处理记录" name="third">
          </el-tab-pane>
          <el-tab-pane label="流程图" name="fourth">
          </el-tab-pane>
        </el-tabs>
      </template></el-card>
  </div>
</template>

<script>
export default {
  name:'Fjmk',
  components: {
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
