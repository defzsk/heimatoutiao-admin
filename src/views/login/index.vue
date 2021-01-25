<template>
  <div class="login-container">
      <el-form class="login-form" ref="form" :model="user" >
        <h1></h1>
  <el-form-item >
    <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
  <el-form-item >
    <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
  </el-form-item>
  <el-form-item >
    <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
  </el-form-item>
  <el-form-item>
    <el-button class="login-btn" type="primary" :loading="loginLoading" @click="onLogin">登录</el-button>
  </el-form-item>
</el-form>

  </div>
</template>

<script>
import request from '@/utils/request.js'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      checked: false,
      // 登录的loading状态
      loginLoading: false
    }
  },
  methods: {
    onLogin () {
      // 获取表单数据(根据接口要求绑定数据)
      const user = this.user
      // 表单验证
      // 验证通过，提交登录
      // 开启登录中的loading
      this.loginLoading = true
      request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        // data用来设置POST请求体
        data: user
      }).then(res => {
        console.log(res)
        this.$message({
          message: '登录成功',
          type: 'success'
        })
        // 关闭loading
        this.loginLoading = false
      }).catch(err => {
        console.log('登录失败', err)
        this.$message.error('登录失败')
      })
      // 关闭loading
      this.loginLoading = false
      // 处理后端响应结果
      // 成功或者失败
      console.log('submit!')
    }
  }
}
</script>
<style lang="less" scoped>
.login-container {
    position: fixed;
    left:0;
    top: 0;
    right: 0;
    bottom: 0;
     display: flex;
     justify-content: center;
     align-items: center;
    background: url('./login_bg.jpg') no-repeat;
    background-size: cover;
    .login-form {
      background-color: #fff;
       padding: 0 50px 10px 50px;
       min-width:300px;
      .login-btn {
        width: 100%;
      }
      h1 {
        height: 57px;
        background: url('./logo_index.png') no-repeat;
      }
    }
}
</style>
