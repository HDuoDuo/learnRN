//  手机号通过正则验证
export function checkRegisterData(phoneNum) {
    if (phoneNum.length == 0) {
        alert('请输入手机号码！');
        return false;
    }
    if (phoneNum.length != 11) {
        alert('请输入有效的手机号！');
        return false;
    }
    var PATTERN_MATCH = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
    if (PATTERN_MATCH.test(phoneNum)) {
        return true;
    }
}