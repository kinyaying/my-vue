<template>
  <el-container>
    <el-header>{{title}}</el-header>
    <el-main>
      <img src="../Assets/logo.png" />
      <p>
        {{this.$store.state.home.hello}}
      </p>
      <p>
        {{this.$store.state.home.content}}
      </p>
      <router-link to="/list" tag="span" class="span-btn"><el-button type="primary">下一页</el-button></router-link>
    </el-main>
  </el-container>
</template>
<script>
    export default {
      data() {
        return {
          title: '首页',
        }
      },
      watch: {
        data(curVal, nextVal) {
        }
      },
      methods: {

      }
    }
</script>
<style scoped>
  .el-main {
    text-align: center;
  }
  img {
    width: 70%;
  }
  .span-btn {
    float: right;
  }
</style>
