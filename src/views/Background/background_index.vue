<template>
  <div class="background_index">
      <div class="base_count">
          <div class="grid-content bg-purple"></div>
      </div>
      <div class="base_func">
          <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple"></div>
            </el-col>
          </el-row>
      </div>
  </div>
</template>

<style scoped>
    .el-col{
        border: 1px soild gray;
        background-color: gray；
    }
    .bg-purple {
        background: #d3dce6;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
        margin-bottom: 20px;
    }
</style>
