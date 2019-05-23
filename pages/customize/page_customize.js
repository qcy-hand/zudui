// pages/car/page_car.js

Page({
  data: {
    // 时间选择
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2029, 11, 1).getTime(),
    currentDate: new Date().getTime(),
    showTime: false,
    //返回时间转换结果
    time:'',
    Nowtime: '',
    activeNames: ['1'],
    didian_study:'',
    id_customize:'',
    id_mess:'',
    beizhu:'',
    articleArr_customize: [],
  },

  //获取数据库数据
  getArticle() {
    let that = this;
    wx.request({
      url: 'http://localhost:3000/getarticle',
      success(res) {
        console.log(res)
        that.setData
          ({
            articleArr_customize: res.data.info
          })
      },
      fail(res) {
        console.log(res)
      }
    })
  },

  // 关闭时间选择器
  onClose() {
    this.setData({
      showTime: false,
    });
  },


  //  转换已选取的时间戳，
  onInput(event) {
    var a = event.detail
    function getdate(a) {
      var now = new Date(a),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate(),
        h = now.getHours(),
        n = now.getMinutes()
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + (h < 10 ? "0" + h : h) + ":" + (n < 10 ? "0" + n : n);
    }
    this.setData({
      showTime: false,
      time: getdate(a)
    });
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
  //按钮点击显示时间选择器
  onTap() {
    this.setData({
      showTime: true
    })
  },
  
  // 折叠面板
  onChange(event) {
    this.setData({
      activeNames: event.detail
    });
  },

  // 
  Location_study(event) {
    // event.detail 为当前输入的值
  this.setData({
    didian_study:event.detail ,
  })
  },
  Input_customize(event) {
    // event.detail 为当前输入的值
  this.setData({
    id_customize:event.detail ,
  })
  },
  Input_mess(event) {
    // event.detail 为当前输入的值
  this.setData({
    id_mess:event.detail ,
  })
  },
  Input_beizhu(event) {
    // event.detail 为当前输入的值
  this.setData({
    beizhu:event.detail,
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticle();
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
});