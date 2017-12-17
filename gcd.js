// 辗转相除法
const zzxc = function (a, b) {
    if (a < b) {
       [a, b] = [b, a];
    }
    let r = a % b;
    return r === 0 ? b : zzxc(b, r);
};

// 更相减损术
const gxjs = function (a, b) {
    if (a < b) {
        [a, b] = [b, a];
    }

    return a === b ? a : gxjs(a - b, b); 
};

// 求最小公倍数
const zxgb = function (a, b) {
    return a * b / gxjs(a, b);
};
