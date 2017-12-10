<template>
  <el-container>
    <el-header>
      <span class="left-icon" @click="$router.back()">
        <i class="el-icon-arrow-left"></i>
      </span>
      {{title}}
      <el-col :span="1" class="right-icon">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="(item, index) in dropDownList"><span @click="open">{{item.label}}</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-header>
    <el-main>
      <div v-for="item in this.$store.state.detail.list">{{item}}</div>
    </el-main>
  </el-container>
</template>
<script>
    import { MessageBox } from 'element-ui';
    export default {
      data() {
        return {
          title: '列表页',
          dropDownList: [
            {label: '点我呀', click: 'click'},
            {label: '别点我', click: 'click'}
          ]
        }
      },
      methods: {
        handleClick() {
          alert(1);
        },
        open() {
          MessageBox.confirm('这是一段内容', '标题名称', {
            confirmButtonText: '确定',
            customClass: 'my-alert',
            callback: action => {

            }
          });
        }
      }
    }
</script>
<style scoped>
.left-icon {
  color: #fff;
  position: absolute;
  left: 10px;
  top: 0;
  font-size: 24px;
}
.right-icon {
  color: #fff;
  position: absolute;
  right: 10px;
  top: 0;
  font-size: 24px;
}
.el-dropdown {
  color: #fff;
}

</style>
