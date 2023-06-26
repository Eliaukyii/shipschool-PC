<template>
  <div id="container"></div>
</template>
<script>
import { Graph } from "@antv/x6";
export default {
  name: "",
  data() {
    return {};
  },
  mounted() {
    this.initGraph();
  },
  methods: {
    initGraph() {
      // 1. 节点 nodes 和边 edges 字段 的 JSON 数据
      const data = {
        // 节点
        nodes: [
          {
            id: "node1",
            x: 100,
            y: 200,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 25,
                ry: 25,
                fill: "#28BD96",
                stroke: 0,
              },
              label: {
                text: "开始",
                fill: "white",
                stroke: 0,
              },
            },
          },
          {
            id: "node2",
            x: 300,
            y: 200,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#28BD96",
                stroke: 0,
              },
              label: {
                text: "单位领导",
                fill: "white",
              },
            },
          },
          {
            id: "node3",
            x: 300,
            y: 300,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#28BD96",
                stroke: 0,
              },
              label: {
                text: "财务稽查",
                fill: "white",
              },
            },
          },
          {
            id: "node4",
            x: 300,
            y: 400,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#28BD96",
                stroke: 0,
              },
              label: {
                text: "分校领导",
                fill: "white",
              },
            },
          },
          {
            id: "node5",
            x: 300,
            y: 500,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#4686F2",
                stroke: 0,
              },
              label: {
                text: "财务院领导",
                fill: "white",
              },
            },
          },
          {
            id: "node6",
            x: 300,
            y: 600,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#fff",
                stroke: "#D2D2D2",
              },
              label: {
                text: "院长",
                fill: "#333",
              },
            },
          },
          {
            id: "node7",
            x: 500,
            y: 300,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#fff",
                stroke: "#D2D2D2",
              },
              label: {
                text: "记账会计",
                fill: "#333",
              },
            },
          },
          {
            id: "node8",
            x: 700,
            y: 300,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#fff",
                stroke: "#D2D2D2",
              },
              label: {
                text: "主管会计",
                fill: "#333",
              },
            },
          },
          {
            id: "node9",
            x: 700,
            y: 400,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 4,
                ry: 4,
                fill: "#fff",
                stroke: "#D2D2D2",
              },
              label: {
                text: "出纳",
                fill: "#333",
              },
            },
          },
          {
            id: "node10",
            x: 700,
            y: 500,
            width: 96,
            height: 48,
            attrs: {
              body: {
                rx: 25,
                ry: 25,
                fill: "#fff",
                stroke: "#D2D2D2",
              },
              label: {
                text: "结果",
                fill: "#333",
              },
            },
          },
        ],
        // 边
        edges: [
          {
            source: "node1",
            target: "node2",
            attrs: {
              line: {
                stroke: "#28BD96",
                length: "100px",
              },
            },
          },
          {
            source: "node2",
            target: "node3",
            attrs: {
              line: {
                stroke: "#28BD96",
              },
            },
          },
          {
            source: "node3",
            target: "node4",
            attrs: {
              line: {
                stroke: "#28BD96",
              },
            },
          },
          {
            source: "node4",
            target: "node5",
            attrs: {
              line: {
                stroke: "#28BD96",
              },
            },
          },
          {
            source: "node5",
            target: "node6",
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
          {
            source: "node3",
            target: "node7",
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
          {
            source: "node4",
            target: "node7",
            vertices: [{ x: 530, y: 420 }],
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
          {
            source: "node5",
            target: "node7",
            vertices: [{ x: 540, y: 520 }],
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
          {
            source: "node6",
            target: "node7",
            vertices: [{ x: 550, y: 620 }],
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
          {
            source: "node7",
            target: "node8",
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
          {
            source: "node8",
            target: "node9",
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
          {
            source: "node9",
            target: "node10",
            attrs: {
              line: {
                stroke: "#D2D2D2",
              },
            },
          },
        ],
      };

      // 2. 渲染画布
      const graph = new Graph({
        container: document.getElementById("container"),
        width: 800,
        height: 800,
      });

      // 3. 渲染节点和边
      graph.fromJSON(data);
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  margin: 0 auto;
  top: -120px;
}
</style>
