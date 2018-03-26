// pages/firstcompoent/firstcompoent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    componentclick: function () {
      wx.showToast({
        title: '组件弹出框',
      })
    }
  },

 
})
