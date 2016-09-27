//app.js
var config = ({

  // 小程序的生命周期
  onLaunch: function () {
    console.log("小程序开始启动啦~~")

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },

//提供一些公共方法
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  getLocation: function() {
    console.log("getLocation")
    wx.getLocation({
    });
  },

// 全局变量
  globalData:{
    userInfo:null
  }
})

App(config)