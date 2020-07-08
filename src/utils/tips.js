import Taro from '@tarojs/taro';
const DURATION = 1000; // 1000ms

class Tips {
  // 信息提示
  showInfoToast(title) {
    Taro.showToast({
      title,
      icon: 'none',
      mask: true,
      duration: DURATION,
    })
  }
  // 成功
  showSuccessToast(title) {
    Taro.showToast({
      title,
      icon: 'success',
      mask: true,
      duration: DURATION,
    })
  }
  // loading
  showLoadingToast(title) {
    Taro.showLoading({ title, mask: true });
    setTimeout(() => {
      Taro.hideLoading();
    }, DURATION);
  }
}

const tips = new Tips();
export { tips };
