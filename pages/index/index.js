//index.js
//获取应用实例
var app = getApp()
var page = ({
  data: {
    motto: 'Hello World',
    userInfo: {},
    btnText: "改变头像",
    isAvatarShow: true,
    imageUrl: null,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

//按钮控制图像显示问题
  btnFunc: function(){
    console.log("点击按钮...")
    // this.setData({isAvatarShow: !this.data.isAvatarShow})

    var page = this

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      var tempFilePaths = res.tempFilePaths
      console.log(tempFilePaths)
      page.setData({imageUrl: tempFilePaths})
      }
    })

    


  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})

Page(page)
