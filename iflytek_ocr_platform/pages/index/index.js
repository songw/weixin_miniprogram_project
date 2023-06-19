// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['国内票据识别', '个人证件识别', '企业证照识别', '通用识别', '图像处理']
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
