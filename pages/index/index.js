//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swipper1.jpg',
      '/images/swipper2.jpg',
      '/images/swipper3.jpg'
    ],
    /*
    proItems: [
      {
        img: "/images/swipper1.jpg",
        title: "标题一",
        details: "今天的NBA早报：\n詹姆斯率队夺得冠军"
      },
      {
        img: "/images/swipper1.jpg",
        title: "标题二",
        details: "今天的NBA早报：\n詹姆斯率队夺得冠军"
      },
      {
        img: "/images/swipper1.jpg",
        title: "标题三",
        details: "今天的NBA早报：\n詹姆斯率队夺得冠军"
      }
    ],
    */
    proItems:null,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    serverURL: "http://123.235.17.134:8888/Sms_demo/"
  },
  //事件处理函数
  onLoad: function () {
    this.setData()
    {

    }
    this.getProList();
  },
  getProList: function () {
    var self=this;
    wx.request({
      url: "http://123.235.17.134:8888/Sms_demo/api/action", //仅为示例，并非真实的接口地址
      method: "GET",
      data: {
        flag: 'getrecommandsbypage',
        pagesize: '100',
        pagenow:'1'
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data);
        self.setData({
           proItems:res.data.data,
        })
      }
    })
  }
})
