// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchicon: '../../images/search.png',
    test_img: '../../images/face.png',
    line: '../../images/line.png',
    history: '../../images/history.png'
  },
  //点击搜索图标事件
  bindSearchTap: function (e) {
    
  },
  
  focus: function(e) {
    console.log(e.detail.height);
    this.setData({
      focus: true,
      input_bottom: e.detail.height
    })
  },

  no_focus: function (e) {
    this.setData({
      focus: false
    })
  },

  bindViewTap: function(e) {
    wx.showActionSheet({
      itemList: ['拍照', '从相册中选择'],
      success(res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) { //0是拍照
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['camera'],
            success: function (res) {
              //res.tempFilePaths[0] 这个是图片
            },
          })
        } else if (res.tapIndex == 1) {
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'],
            sourceType: ['album'],
            success: function (res) {
              //res.tempFilePaths[0] 这个是图片
            },
          })
        }
      }
    })
  }
})