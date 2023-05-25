// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['全部', '推荐', '图像处理', '通用识别', '个人证件识别', '国内票据识别', '海外证件识别', '车辆相关识别', '企业证照识别', '港澳台证件识别']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})

    const that = this
    const query = wx.createSelectorQuery()

    query.in(this).select('.tab-content').boundingClientRect(function (res) {
      that.setData({tabSwiperHeight: res.height})})
    query.exec()
  },

  onTabCLick(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({activeTab: index})
  },
  
  universal_char_recognition_page: function(){
    wx.navigateTo({
      url: "/pages/universal_char_recognition/universal_char_recognition",
    })
  },
})
