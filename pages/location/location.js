// pages/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 36.099891,
    longitude: 120.357753,
    markers: null,
    controls: [{
      id: 1,
      iconPath: '/images/swipper2.jpg',
      position: {
        left: 10,
        top: 300 - 50,
        width: 20,
        height: 20
      },
      clickable: true
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var self = this;
    wx.request({
      url: getApp().globalData.serverUrl + '/api/action', //仅为示例，并非真实的接口地址
      data: {
        flag: 'getlocations'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        var markers = [];
        console.log(res.data);
        // console.log("markers:",self.markers);
        for (var i = 0; i < res.data.data.length; i++) {
          var member = res.data.data[i];
          var mak = {};
          var callout={};
          mak.id = member.id;
          mak.latitude = member.latitude;
          mak.longitude = member.longitude;
          mak.width = 50;
          mak.height = 50;
          mak.iconPath = "/images/dingwei.png";
          callout.content = member.name + "\n" + member.number + "\n" + member.addr + "\n" + member.latitude + "  " + member.longitude;
          callout.color ="#404040";
          callout.borderRadius=10;
          callout.display = 'BYCLICK';
          callout.padding=5;
          mak.callout=callout;
          markers.push(mak);
        }
        console.log("marker:", markers);
        self.setData({
          markers: markers
        });
      }
    })
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

  callout:function(e)
  {
    console.log(e.markerId)
  }
})