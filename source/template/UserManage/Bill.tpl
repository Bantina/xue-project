<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 个人设置区域 -->

<div class="container top m20">
    <div class="row">
        <div class="col-md-2 col-sm-3 user-manage-side">
            <!-- module.UM.Nav -->
            <link rel="import" href="../../widget/UM.Nav/index.tpl?__inline">
        </div>
        <div class="col-md-10 col-sm-9 user-manage-body">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>我的发票</h3>
                    <span>网校课程开发票的有效期是180天，需要发票的童鞋抓点紧哦！</span>
                </div>
                <div class="panel-body row">
                    <!-- *********************** 内容区域0  开始 *********************** -->
                    <link rel="import" href="../../widget/UM.bill/index.tpl?__inline">
                    <!-- *********************** 内容区域结束 *********************** -->
                </div>
            </div>
        </div>
    </div>
</div>


<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'Bill',
        MODULE: 'UserManage',
        TITLE: '我的发票-个人设置'
    };
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">