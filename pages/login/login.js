// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   name:"张三",
   age:"3",
   value:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: 'onLoad',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showToast({
      title: 'onReady',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showToast({
      title: 'onShow',
    }),
    console.log(this.data.name)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.showToast({
      title: 'onHide',
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.showToast({
      title: 'onUnload',
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showToast({
      title: 'onPullDownRefresh',
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showToast({
      title: 'onReachBottom',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    wx.showToast({
      title: 'onShareAppMessage',
    }),
    console.log("分享")
  },
/**
 * 网络请求
 */
  login:function(){
    wx.request({
      url: "https://www.baidu.com/",
      success: function (res) {
        console.log(res.data)
      }
    }) 
  },

  inputvalue:function(e){
    this.setData({
      value:e.detail.value
    })
  }
})