let singleton = function(fn) {
    let instance;
    return function() {
        return instance || (instance = fn.apply(this, arguments));
    };
};

let createMask = function() {
    let mask = document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.right = '0';
    mask.style.bottom = '0';
    mask.style.left = '0';
    mask.style.opacity = 'o.75';
    mask.style.backgroundColor = '#000';
    mask.style.display = 'none';
    mask.style.zIndex = '98';
    document.body.appendChild(mask);
    mask.onclick = function() {
        this.style.display = 'none';
    };
    return mask;
};

let createLogin = function() {
    // 创建div元素
    var login = document.createElement('div');
    // 设置样式
    login.style.position = 'fixed';
    login.style.top = '50%';
    login.style.left = '50%';
    login.style.zIndex = '100';
    login.style.display = 'none';
    login.style.padding = '50px 80px';
    login.style.backgroundColor = '#fff';
    login.style.border = '1px solid #ccc';
    login.style.borderRadius = '6px';

    login.innerHTML = 'login it';

    document.body.appendChild(login);

    return login;
};
document.getElementById('btn').onclick = function() {
    let oMask = singleton(createMask)();
    oMask.style.display = 'block';
    let oLogin = singleton(createLogin)();
    oLogin.style.display = 'block';
    let w = parseInt(oLogin.clientWidth);
    let w = parseInt(oLogin.clientWidth);
};