var xue =xue || {};
    xue.formCheck = xue.formCheck || {};
var fCheck = xue.formCheck;
fCheck.setTips = function(select, tips){
  $(select).css({
    'background': 'url("img/warning.png") no-repeat 10px 5px',
    'padding-left':'32px' 
  }).html(tips);
};
fCheck.clearTips = function(select){
  $(select).css({
    'background':'none'
  }).html(null);
};

fCheck.bordercss = function(argument) {
   if($(argument).val() !== ''){
     $(argument).css('border','1px solid .68c04a');
   }else{$(argument).css('border','1px solid .eaeaea');}
}

$(function(){
    var nickname = $('.nickname');
    $(nickname).on('focus',function(){

        $(nickname).siblings('.prompt-empty').html('�����벻����18���֣��ǳ�Ϊ�����֡�����ĸ�������ġ����������').css({

            color: '#999',
            display: 'block'
        });
        fCheck.clearTips(".nickname-warning");
    });
    $(nickname).on('blur',function(){
        fCheck.clearTips(".prompt-empty");
        $.fn.nickname();
    });
});


var boxs = {
    nickname: '.nickname'
}


$.fn.nickname = function(){
    var box = $(boxs.nickname),
    val = box.val();
    var text = box.next('.nickname-warning'),
    block = text.addClass('success');
    if (val == '') {

        fCheck.setTips(".nickname-warning",'�������ǳ�');

    }else {
        var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{1,18}$/;
        if(reg.test(val)){
            $.fn.nicknameajax();
        }else{

            fCheck.setTips(".nickname-warning",'ֻ���������֡����ֺ���ĸ');

            return false;
        }
    }
};
$.fn.nicknameajax = function(){

    var box = $(boxs.nickname),
    val = box.val();
    var d_val = Number($(box).data('nickname'));
    if(Number(val) != d_val){
        $.ajax({
            url : '',
            type : 'GET',
            dataType : 'json',
            timeout: 7000,
            async: false,
            success  : function(result){
                if(result.sign == false){

                    fCheck.setTips(".nickname-warning",'�ǳ��������û��ظ�������������');

                    return false;
                } else {
                    fCheck.clearTips(".nickname-warning");
                    fCheck.bordercss('.nickname');
                    return true;
                }
            },
            error: function(){

            }
        });
    }else{
        box.parents('.f1').addClass('has-success').removeClass('nickname-warning');
        return false;
    }
}

$(function() {
    $(".btn-submit").click(function() {
        $.fn.nickname();
    })
}) 