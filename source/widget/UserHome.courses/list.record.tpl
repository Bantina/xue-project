<!--
   录播列表：
    @require coursestudycenter.js
    @require coursestudycenter.less
    @require ../Module.Pagination/paginations.js  
-->

<div class="courselayout-list courseList-wrap">
    <div class="courseList-title">
        <p>初一数学目标满分班人教版 录播课程</p>
    </div>

    <ul class="program-tab">
        <li class="current"><a href="javascript:;">大纲</a></li>
        <li class=""><a href="javascript:;">附赠奖大纲</a></li>
    </ul>
    <div class="course-list-tips">
        您购买的课程包含2次考试，届时辅导老师会将具体的考试时间以群公告的形式通知到您，请留意！
        <span class="close-tips"></span>
    </div>
    <style>
        .course-list-tips {
            height: 42px;
            line-height: 42px;
                background: #ffdd87;
                color: #333;
                padding: 0 15px;
                font-size: 14px;
                border-radius: 5px;
                margin-bottom: 20px;
        }
        .course-list-tips .close-tips {
            float: right;
            width:15px;
            height: 15px;
            background-image: url(http://res12.xesimg.com/i/img/courseCenterClose.png);
            background-repeat: no-repeat;
            margin-top:12px;
            cursor: pointer;
        }
        
    </style>
    <script>
        $('body').on('click','.close-tips',function(){
            $('.course-list-tips').remove();
        });
    </script>
    <div class="tab-program-content">
        <div class="tab-program-content-general active">
            <ul class="teacher-tab">
                <li class="current"><a href="javascript:;">1-20</a></li>
                <li class=""><a href="javascript:;">21-40</a></li>
                <li><a href="javascript:;">21-40</a></li>
                <li><a href="javascript:;">41-60</a></li>
                <li><a href="javascript:;">61-80</a></li>
                <li><a href="javascript:;">80-100</a></li>
            </ul>
            <div class="tab-record-content">
                <div class="tab-pane active">
                    <div class="course-table-title">
                        <span>名称</span>
                        <span>状态</span>
                        <span>操作</span>
                    </div>
                    <ul class="table course-table">
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style studied">已学习</span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-will-red"></em>立即学习</a>
                            </span>
                        </li>
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style studied-end">上次学到</span>
                            <span class="text-style">
                                <a class="btn-danger btn" href="##"><em class="button-icon icon-will-red"></em>继续学习</a>
                            </span>
                        </li>
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style">未学习</span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-will-red"></em>立即学习</a>
                            </span>
                        </li>
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style yellow-mark">未学完<em class="mark"></em></span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-will-red"></em>继续学习</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane">
                    <div class="course-table-title">
                        <span>名称</span>
                        <span>状态</span>
                        <span>操作</span>
                    </div>
                    <ul class="table course-table">
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style studied">已学习</span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-just-white"></em>立即学习</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="tab-program-content-general">
            <ul class="teacher-tab">
                <li class="current"><a href="javascript:;">附赠讲1-20</a></li>
                <li><a href="javascript:;">附赠讲21-40</a></li>
            </ul>
            <div class="tab-record-content">
                <div class="tab-pane active">
                    <div class="course-table-title">
                        <span>名称</span>
                        <span>状态</span>
                        <span>操作</span>
                    </div>
                    <ul class="table course-table">
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style studied">已学习</span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-will-red"></em>立即学习</a>
                            </span>
                        </li>
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style studied-end">上次学到</span>
                            <span class="text-style">
                                <a class="btn-danger btn" href="##"><em class="button-icon icon-will-red"></em>继续学习</a>
                            </span>
                        </li>
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style">未学习</span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-will-red"></em>立即学习</a>
                            </span>
                        </li>
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style yellow-mark">未学完<em class="mark"></em></span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-will-red"></em>继续学习</a>
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="tab-pane">
                    <div class="course-table-title">
                        <span>名称</span>
                        <span>状态</span>
                        <span>操作</span>
                    </div>
                    <ul class="table course-table">
                        <li>
                            <span class="outlines_chapter_name">第1讲 初一数学目标满分班人教版 第一场直播</span>
                            <span class="text-style studied">已学习</span>
                            <span class="text-style">
                                <a class="btn btn-primary" href="##"><em class="button-icon icon-just-white"></em>立即学习</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    
    <!-- <div class="ui-pages text-center"></div> -->
</div>
