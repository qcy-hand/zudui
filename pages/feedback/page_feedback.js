// pages/feedback/page_feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feedinfo: '',
    Nowtime: '',
    text: '',
    concent:'',
  },
  Input_feedback(event) {
    // event.detail 为当前输入的值
    this.setData({
      feedinfo: event.detail,
    })
  },

  //获取当前时间
  Ntime() {
    function getNowDate() {
      var date = new Date(),
        month = date.getMonth() + 1,
        strDate = date.getDate(),
        hourDate = date.getHours(),
        minuteDate = date.getMinutes()
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var navtime = month + "-" + strDate +
        " " + hourDate + ":" + minuteDate;
      return navtime
    }

    this.setData({
      Nowtime: getNowDate()
    });
  },

  //失去焦点时获取里面评论内容
  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
    this.setData({
      concent: e.detail.value,
    })
  },


  //点击按钮时得到里面的值
  fabiao: function (e) {
    this.setData({
      focus: 'false',
      concent1: this.data.concent,
    })
    console.log(this.data.concent)
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

  }
})