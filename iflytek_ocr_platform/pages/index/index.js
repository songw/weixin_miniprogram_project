// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabs: [],
    activeTab: 0,
  },

  onLoad() {
    const titles = ['国内票据识别', '个人证件识别', '企业证照识别']
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

  iflytek_uniform_air_itinerary_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_air_itinerary/iflytek_uniform_air_itinerary",
    })
  },

  iflytek_uniform_bus_license_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_bus_license/iflytek_uniform_bus_license",
    })
  },

  iflytek_uniform_bus_passenger_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_bus_passenger/iflytek_uniform_bus_passenger",
    })
  },

  iflytek_uniform_didi_itinerary_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_didi_itinerary/iflytek_uniform_didi_itinerary",
    })
  },

  iflytek_uniform_drive_license_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_drive_license/iflytek_uniform_drive_license",
    })
  },

  iflytek_uniform_full_invoice_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_full_invoice/iflytek_uniform_full_invoice",
    })
  },

  iflytek_uniform_id_card_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_id_card/iflytek_uniform_id_card",
    })
  },

  iflytek_uniform_motor_vehicle_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_motor_vehicle/iflytek_uniform_motor_vehicle",
    })
  },

  iflytek_uniform_organization_code_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_organization_code/iflytek_uniform_organization_code",
    })
  },

  iflytek_uniform_print_invoice_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_print_invoice/iflytek_uniform_print_invoice",
    })
  },

  iflytek_uniform_quota_invoice_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_quota_invoice/iflytek_uniform_quota_invoice",
    })
  },

  iflytek_uniform_refund_voucher_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_refund_voucher/iflytek_uniform_refund_voucher",
    })
  },

  iflytek_uniform_road_toll_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_road_toll/iflytek_uniform_road_toll",
    })
  },

  iflytek_uniform_roll_invoice_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_roll_invoice/iflytek_uniform_roll_invoice",
    })
  },

  iflytek_uniform_taxi_ticket_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_taxi_ticket/iflytek_uniform_taxi_ticket",
    })
  },

  iflytek_uniform_train_ticket_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_train_ticket/iflytek_uniform_train_ticket",
    })
  },

  iflytek_uniform_vat_invoice_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_vat_invoice/iflytek_uniform_vat_invoice",
    })
  },

  iflytek_uniform_marriage_certificate_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_marriage_certificate/iflytek_uniform_marriage_certificate",
    })
  },

  iflytek_uniform_household_register_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_household_register/iflytek_uniform_household_register",
    })
  },

  iflytek_uniform_vehicle_card_page: function(){
    wx.navigateTo({
      url: "/pages/iflytek_uniform_vehicle_card/iflytek_uniform_vehicle_card",
    })
  },
})
