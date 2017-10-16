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

		// 外教上课时间显示第一条；
		$('.f_course_time .f_course_time_block:first').css({
			'display': 'block'
		});

	}

	// 当促销活动 >1条时，默认显示两条；
	function resizeSaleUl() {
		var ul = $('.course-price-block .sale');
		if (ul.children('li').length > 1) {
			ul.css('height', '50px');
		}
	}

	// 课程促销活动 优惠显示／隐藏
	$('.sale_toggle i').on('click', function() {
		var sale = $('.course-price-block .sale');
		var _this = $(this);
		var contentH = ((sale.children('li').length) * 27) + 'px'; // ul真实内容高度；
		var origH = '';
		var toggle_flag = _this.attr('data-fold');

		if (sale.children('li').length > 1) { // >= 2条时显示两条的高度；
			origH = '50px';
		} else { // 只有1条时不做处理；
			return;
		}
		if (sale.children('li').length == 2) { // 只有两条时不做处理；
			return;
		}

		if (toggle_flag == '1') { // 隐藏
			_this.css({
				'-webkit-transform': 'rotate(0)',
				'-moz-transform': 'rotate(0)',
				'transform': 'rotate(0)'
			});
			sale.animate({
				height: origH
			}, 200);
			_this.attr('data-fold', '0');
		} else { // 展示
			_this.css({
				'-webkit-transform': 'rotate(180deg)',
				'-moz-transform': 'rotate(180deg)',
				'transform': 'rotate(180deg)'
			});
			sale.animate({
				height: contentH
			}, 200);
			_this.attr('data-fold', '1');
		}
	})

	// 选择外教老师 点击头像
	$('.f_avatar .f_avatar_img').on('click', function() {
		var li = $(this).parent();
		var currIndex = li.index();
		li.addClass('current').siblings().removeClass('current');
		var distance = 76 * currIndex;

		// 移动滑块
		$('.f_course_time_arrow').css({
			'-webkit-transform': 'translateX(' + distance + 'px)',
			'-moz-transform': 'translateX(' + distance + 'px)',
			'transform': 'translateX(' + distance + 'px)'
		})

		// 切换上课时间
		$('.f_course_time .f_course_time_block').each(function(index, item) {
			if (index == currIndex) {
				$(item).css({
					'display': 'block'
				});
			} else {
				$(item).css({
					'display': 'none'
				});
			}
		});

		// 中外教辅导老师切换
		$('.dataCouchAvatar').attr('src',$(this).attr('data-couch-avatar'));
		$('.dataCouchName').text($(this).attr('data-couch-name'));
		$('.dataCouchRest').text($(this).attr('data-couch-rest'));
	})
})