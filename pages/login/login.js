// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   name:"张三",
   age:"3",
   value:"",
   arrys:[],
// banner
   indicatorDots: true,
   autoplay: true,
   interval: 3000,
   circular: true,
   imgUrls: [
     'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
     'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
     'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
     'http://img2.imgtn.bdimg.com/it/u=3536010007,3739875767&fm=27&gp=0.jpg',
   ],  
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad")
    //模拟网络请求获取数据
    var data = [
      {
        url: "../images/test.png",
        text1: '奔驰C200L',
        text2: '2018款 旗舰型',
        text3: '厂商指导价：8万',
        text4: '首付0元',
        text5: '分期100元',
        id: '1',
      },
      {
        url: "../images/test.png",
        text1: '奔驰C200L',
        text2: '2018款 旗舰型',
        text3: '厂商指导价：8万',
        text4: '首付0元',
        text5: '分期100元',
        id: '2',
      },
      {
        url: "../images/test.png",
        text1: '奔驰C200L',
        text2: '2018款 旗舰型',
        text3: '厂商指导价：8万',
        text4: '首付0元',
        text5: '分期100元',
        id: '3',
      }, {
        url: "../images/test.png",
        text1: '奔驰C200L',
        text2: '2018款 旗舰型',
        text3: '厂商指导价：8万',
        text4: '首付0元',
        text5: '分期100元',
        id: '1',
      },
    ]
    this.setData({
      arrys: data
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
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
    console.log("onReachBottom")
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
  },
  /**
   * 点击列表
   */
  itemclick: function (e) {
    
    var idx = e.currentTarget.dataset;
    console.log(idx)
  },


})