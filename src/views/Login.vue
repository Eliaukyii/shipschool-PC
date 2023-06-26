<template>
  <div class="main">
    <div class="wrap">
      <div class="left">
        <img src="@/assets/images/login/left-login.png" alt="" />
      </div>
      <div class="right">
        <div class="content">
          <el-form
            ref="form"
            label-width="70px"
            :inline="true"
            class="login-container"
            :model="form"
            :rules="rules"
          >
            <img src="@/assets/images/login/logo.png" alt="" />
            <p class="text">财务协同管理平台</p>
            <el-form-item prop="account">
              <el-input
                v-model="form.account"
                placeholder="用户名"
                tabindex="1"
                auto-complete="on"
              >
                <i slot="prefix">
                  <img
                    style="vertical-align: middle"
                    src="@/assets/images/login/user.png"
                    alt
                  />
                </i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                v-model="form.password"
                placeholder="密码"
                tabindex="2"
                auto-complete="on"
                show-password
              >
                <i slot="prefix">
                  <img
                    style="vertical-align: middle"
                    src="@/assets/images/login/password.png"
                    alt
                  />
                </i>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                v-model="form.code"
                placeholder="验证码"
                :maxlength="4"
                @keyup.enter.native="login('form')"
              >
                <i slot="prefix">
                  <img
                    style="vertical-align: middle"
                    src="@/assets/images/login/code.png"
                    alt
                  />
                </i>
                <i slot="prefix">
                  <img
                    @click="changeImg"
                    :src="imageURL"
                    alt=""
                    style="position: absolute; right: -215px; top: 8px"
                  />
                </i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                @click.enter.native="login('form')"
                type="primary"
                style="width: 250px"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
          <div class="bottom">
            <el-checkbox v-model="checked">记住密码</el-checkbox>
            <div class="forget">忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, getVerifyCode } from "@/api/login.js";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      checked: true,
      show: true,
      imageURL: "",
      form: {
        account: "",
        password: "",
        code: "",
      },
      rules: {
        account: [{ required: true, trigger: "blur", message: "请输入用户名" }],
        password: [{ required: true, trigger: "blur", message: "请输入密码" }],
        code: [{ required: true, trigger: "blur", message: "请输入验证码" }],
      },
    };
  },
  created() {
    this.changeImg();
  },
  mounted() {},
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          let data = this.form;
          login(data)
            .then((res) => {
              if (res.status == 200) {
                if (res.data.Code === "03") {
                  this.$message({
                    message: res.data.Msg,
                    type: "error",
                  });
                } else if (res.data.Code === "02") {
                  this.$message({
                    message: res.data.Msg,
                    type: "error",
                  });
                } else {
                  this.$message({
                    message: "登录成功",
                    type: "success",
                  });

                  //登录成功跳转到首页
                  this.$router.push("/home");
                }
              } else {
                console.log("res");
                this.$message.error(res.data.Msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    },
    // 获取验证码
    changeImg() {
      getVerifyCode().then((res) => {
        if (res.status == 200) {
          this.imageURL = "data:image/png;base64" + res.data.img;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
::-webkit-input-placeholder {
  /* WebKit browsers，webkit内核浏览器 */
  color: #b8b8b8;
  font-size: 14px;
}

//修改input的宽度
/deep/ .el-input__inner {
  width: 250px;
}

/deep/ .el-input__prefix {
  left: 16px;
}
/deep/ .el-input--prefix .el-input__inner {
  padding-left: 42px;
}

/deep/ .el-checkbox__label {
  font-size: 12px;
}
/deep/ .el-form-item.is-error .el-input__inner {
  border-color: #dcdfe6;
}

/deep/ .s-canvas canvas[data-v-38677dc2] {
  transform: translateX(100px);
  margin-top: 5px;
  margin-left: 0px;
}
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  background: url("@/assets/images/login/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
  .wrap {
    width: 932px;
    height: 500px;
    margin: 0 auto;
    display: flex;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .left {
      margin-top: 21px;
    }
    .right {
      border: 1px solid #ffffff;
      background: #ffffff;
      border-radius: 12px;
      .content {
        margin: 61px 40px 0 40px;
        .text {
          font-size: 24px;
          color: #333333;
          margin-bottom: 40px;
          margin-top: 6.19px;
          font-weight: 600;
          font-family: PingFangSC-Semibold;
          letter-spacing: 0.75px;
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          .forget {
            color: #666;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>