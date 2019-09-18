//Page Object
const backSide = require("../../utils/util")

Page({
  data: {
    // 被点击等导航索引选项页
    naviCurrentIndex:0,
    //导航
    naviList:[],
    //轮播图
    swiperList:[],
    //视频列表
    videoList:[]
  },

  getNaviList: function (){
    const _this = this;
    wx.request({
      url: backSide.address + 'navilist',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if (res.data.code === 0) {
          _this.setData({
            naviList:res.data.data.naviList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })

  },
  getSwiperList: function (){
    const _this = this;
    wx.request({
      url: backSide.address + 'swiperList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if (res.data.code === 0) {
          _this.setData({
            swiperList:res.data.data.swiperList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  getVideoList: function () {
    const _this = this;
    wx.request({
      url: backSide.address + 'videoList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        if (res.data.code === 0) {
          _this.setData({
            videoList:res.data.data.videoList
          })
        }
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  naviItemClicked: function (event) {
    this.setData({
      naviCurrentIndex:event.target.dataset.index
    })
  },
  demotest: function () {
    // console.log(backSide.address);
  },
  //options(Object)
  onLoad: function(options){
    this.getNaviList();
    this.getSwiperList();
    this.getVideoList();
    this.demotest();
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});