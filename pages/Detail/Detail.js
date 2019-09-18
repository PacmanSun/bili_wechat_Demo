const backSide = require("../../utils/util")

Page({
  data: {
    videoInfo: null,
    othersList: [],
    commentData: []
  },
  getVideoDetail: function (id) {
    const _this = this;
    wx.request({
      url: backSide.address + 'videoDetail?id=' + id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        if (res.data.code === 0) {
          _this.setData({
            videoInfo: res.data.data.videoInfo
          })
          console.log(res.data.data.videoInfo.videoSrc);
        }

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  getOtherList: function (id) {
    const _this = this;
    wx.request({
      url: backSide.address + 'othersList?id=' + id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        if (res.data.code === 0) {
          _this.setData({
            othersList: res.data.data.othersList
          })
        }
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  getCommmentList: function (id) {
    const _this = this;
    wx.request({
      url: backSide.address + 'commentsList?id=' + id,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        if (res.data.code === 0) {
          _this.setData({
            commentData: res.data.data.commentData
          })
        }

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onLoad: function (options) {
    let id = options.id;
    this.getVideoDetail(id);
    this.getOtherList(id);
    this.getCommmentList(id);
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})