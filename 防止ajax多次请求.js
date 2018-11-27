//第一种
$('.login').click(function(){
    let loginBtn = this;
    $(loginBtn).attr('disabled','disabled');
    $(loginBtn).text('登录中')
    $.ajax({
        url: 'login.do',
        data: $(this).closest('form[name="loginForm"]').serialize(),
        type: 'post',
        success: function(msg){
            
            if (msg === 'ok') {
                alert('登录成功！');
                
                //TODO 其他操作...
            } else {
                alert('登录失败，请重新登录！');
               
                //5.让登陆按钮重新有效
                $(loginBtn).removeAttr('disabled');
            }

        }
    });
})

//第二种
let timer = null;
$("input").keyup(function(){
    var value = $(this).val();
    clearTimeout(timer)
    timer = setTimeout(function(){
        $.ajax({
            url: 'typeahead.do',
            type: 'get',
            data: value,
            success: function () {
                //显示匹配结果
                //......             }
        }
    },500)
})
// 第三种
// abort()