// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /*
  * 自定义
  */
  //提交登陆
  formSubmit: function (e) {
    console.log("提交表单:", e.detail.value.uname, e.detail.value.passwd);

    wx.request({
      url: 'http://desktop-ancpu97:8080/CreditSystem/ApiServlet', //仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        flag: 'login',
        tid: e.detail.value.uname,
        tpassword: e.detail.value.passwd
      },
      header:{
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log("return from internet:");
        console.log(res.data)
        var result=res.data.result;
        var msg=res.data.msg;
        console.log("result:"+result+",msg:"+msg);
        if(result==1)
        {
          wx.showToast({
            title: '登陆成功',
          })
          wx.switchTab({
            url: '../index/index',
          })
        }else{
          wx.showModal({
            title: '登陆失败',
            content: msg,
            showCancel:false
          })
        }
      }
    })
  }
})