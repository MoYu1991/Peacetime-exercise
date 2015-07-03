; (function($) {
    $.fn.capacityFixed = function(options) {

        $.fn.capacityFixed.default = {
            right: 0,
            //相对于页面宽度的右边定位
            top: 95 //相对于页面高度的距离上95px
        };
		
        var opts = $.extend({},$.fn.capacityFixed.default, options);
		
        var FixedFun = function(element) {
            var top = opts.top;
            element.css({
                'top': top
            });
            $(window).scroll(function() {//scroll（）函数
                var scrolls = $(this).scrollTop(); //获得距离屏幕顶部的距离；
                if (scrolls > top) { //如果距离的高度，大于我们设置的top值。就将实际高度设置为0
                    if (window.XMLHttpRequest) {
                        element.css({
                            position: "fixed",
                            top: 0
                        });
                    } else {
                        element.css({
                            top: scrolls
                        });
                    }
                } else {		//小于的话，绝对定位，top为高度。
                    element.css({
                        position: "absolute",
                        top: top
                    });
                }
            });
         
        };
        return $(this).each(function() {		//
            FixedFun($(this));
        });
    };

})(jQuery);