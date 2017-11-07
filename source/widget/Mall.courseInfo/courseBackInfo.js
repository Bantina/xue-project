/**
 * @name courseBackInfo.js
 * @description 课程详情页
 * 
 * @author tian
 * @create 2017-10-10 
 */
$(function() {
	initCourse();

	function initCourse() {
		resizeSaleUl();

		// 预留 立即报名等按钮的 位置；
		$('.ui-course-infor-wrap .course-center-list .course-w:last').css({
			'margin-bottom': '50px'
		});

		// 初始 判断滑块位置
		var currIndex = 0;
		$('.f_avatar li').each(function() {
			if ($(this).hasClass('current')) {
				currIndex = $(this).index();
			}
		})
		moveArrow(currIndex);

		var gifts = $('.course-price-block .gifts');
		if (gifts.length > 0 && gifts[0].offsetHeight < gifts[0].scrollHeight) {
			$('.gifts_toggle').css({
				'display': 'block'
			});
			$('.course-gifts').css({
				'height': gifts[0].offsetHeight + 'px'
			});
		}
	}

	/*
	 * 移动滑块
	 * @currIndex 当前的头像index;
	 */
	function moveArrow(currIndex) {
		var distance = 59 * currIndex;

		var li = $('.f_avatar li').eq(currIndex);
		if (li.length > 0) {
			var posLeft = li.position().left;
			var distance = posLeft + (li.width() - 64) / 2; // 64 f_course_time_arrow:after的宽 + 6

			$('.f_course_time_arrow').css({
				'-webkit-transform': 'translateX(' + distance + 'px)',
				'-moz-transform': 'translateX(' + distance + 'px)',
				'transform': 'translateX(' + distance + 'px)'
			})
		}
	}

	// 当促销活动 >1条时，默认显示两条；
	function resizeSaleUl() {
		var ul = $('.course-price-block .sale');
		if (ul.children('li').length > 1) {
			ul.css('height', '50px');
		}
	}

	// 课程促销活动 优惠显示／隐藏
	$('.sale_toggle').on('click', function() {
		var sale = $('.course-price-block .sale');
		var toggle_i = $('.sale_toggle i');
		var contentH = ((sale.children('li').length) * 27) + 'px'; // ul真实内容高度；
		var origH = '';
		var toggle_flag = toggle_i.attr('data-fold');

		if (sale.children('li').length > 1) { // >= 2条时显示两条的高度；
			origH = '50px';
		} else { // 只有1条时不做处理；
			return;
		}
		if (sale.children('li').length == 2) { // 只有两条时不做处理；
			return;
		}

		if (toggle_flag == '1') { // 隐藏
			toggle_i.css({
				'-webkit-transform': 'rotate(0)',
				'-moz-transform': 'rotate(0)',
				'transform': 'rotate(0)'
			});
			sale.animate({
				height: origH
			}, 200);
			toggle_i.attr('data-fold', '0');
		} else { // 展示
			toggle_i.css({
				'-webkit-transform': 'rotate(180deg)',
				'-moz-transform': 'rotate(180deg)',
				'transform': 'rotate(180deg)'
			});
			sale.animate({
				height: contentH
			}, 200);
			toggle_i.attr('data-fold', '1');
		}
	})

	/**
	* 赠品 hover start
	* @gifts: $('.course-price-block .gifts');
	* @gifts_toggle: $('.gifts_toggle');
	*/
	function hoverStart(gifts, gifts_toggle){
		if(gifts.height() < 35) return;
		var height = $('.course-price-wrapper').height();
		gifts.css({
			'overflow': 'inherit'
		});
		$('.course-gifts').height((gifts[0].scrollHeight + 15) + 'px').addClass('gifts-all-show');
		$('.course-price-wrapper').height(height);
		if (gifts_toggle.css('display') == 'block') {
			gifts_toggle.css('display', 'none');
		}
	}

	/**
	* 赠品 hover end
	* @gifts: $('.course-price-block .gifts');
	* @gifts_toggle: $('.gifts_toggle');
	*/
	function hoverEnd(gifts, gifts_toggle){
		if(gifts.height() < 35) return;
		gifts.css({
			'overflow': 'hidden'
		});
		$('.course-gifts').height(gifts[0].offsetHeight + 'px').removeClass('gifts-all-show');

		if (gifts[0].offsetHeight < gifts[0].scrollHeight) {
			gifts_toggle.css({
				'display': 'block'
			});
		}
	}

	// 赠品
	$('.course-price-block .gifts').hover(function() {
		hoverStart($(this),$('.gifts_toggle'));
	}, function() {
		hoverEnd($(this),$('.gifts_toggle'));
	})

	// 赠品 toggle
	$('.gifts_toggle').hover(function() {
		hoverStart($('.course-price-block .gifts'), $(this));
	}, function() {
		hoverEnd($('.course-price-block .gifts'), $(this));
	})

	// 选择外教老师 点击头像
	$('.f_avatar .f_avatar_img').on('click', function() {
		var li = $(this).parent().parent('.f_avatar li');
		var currIndex = li.index();
		li.addClass('current').siblings().removeClass('current');

		$('.f_course_time_arrow').css({
			'-ms-transition': 'all .4s',
			'-moz-transition': 'all .4s',
			'-o-transition': 'all .4s',
			'-webkit-transition': 'all .4s',
			'transition': 'all .4s'
		})
		moveArrow(currIndex);
	})

	// 立即报名
	$('.course-button-list .button_apply_series').on('click', function() {
		if ($('#accountsWrap .accounts-course').hasClass('accounts-checked')) {
			$('.accounts-price .total-price').text($('.accounts-course .accounts-course-price .new-price').text()); //价格
		} else {
			$('.accounts-price .total-price').text($('.series-price .new-price').text());
		}

		var top = ($(window).height() - $('#accountsWrap').height()) / 2 + 'px';
		$('#accountsWrap').css({
			'display': 'block',
			'top': top
		});
		$('body').append('<div class="accounts_mask"></div>').css('overflow', 'hidden');
	})

	/** 结算弹出框 **/
	// 选择单课
	$('#accountsWrap .accounts-course').on('click', function() {
		if ($(this).hasClass('accounts-checked')) return;
		$('.accounts-price .total-price').text($('.accounts-course .accounts-course-price .new-price').text()); //价格
		$('#accountsWrap .accounts-series-course').removeClass('accounts-checked').addClass('accounts-unchecked');
		$(this).removeClass('accounts-unchecked').addClass('accounts-checked');
	})

	// 选择联报
	$('#accountsWrap .accounts-series-course').on('click', function() {
		if ($(this).hasClass('accounts-checked')) return;
		$('.accounts-price .total-price').text($('.series-price .new-price').text()); // 价格
		//样式
		$('#accountsWrap .accounts-course').removeClass('accounts-checked').addClass('accounts-unchecked');
		$(this).removeClass('accounts-unchecked').addClass('accounts-checked');
	})

	// 关闭 结算弹出框
	$('#accountsWrap .accounts-close-btn').on('click', function() {
		$('#accountsWrap').css('display', 'none');
		$('.accounts_mask').remove();
		$('body').css('overflow-y', 'scroll');
	})

})