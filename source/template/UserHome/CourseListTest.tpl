<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <link rel="import" href="../../widget/UserHome.courses/list.test.tpl?__inline">

            <!-- *********************** 内容区域结束 ************************* -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side">
            <link rel="import" href="../../widget/UserHome.sidebar/index.tpl?__inline">
        </div>
    </div>
</div>
<!-- 页面配置 -->
<script>
$(function () {
  $('[data-toggle="popover"]').popover();
})
    var PAGE_CONFIG = {
        ID: 'Courses',
        MODULE: 'UserHome',
        TITLE: '随堂测-学习中心',
    };

</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">