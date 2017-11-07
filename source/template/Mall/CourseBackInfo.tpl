<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline"><!-- 未来的HTML模板引入方式 -->

<!-- 学习中心区域 -->
<div class="container">
    <ol id="module-breadcrumb" class="breadcrumb">
        <li><a href="#">课程分类</a></li>
        <li class="active">三年级</li>
    </ol>
<!--   12栏的用这个    -->
	<div class="row">
			<link rel="import" href="../../widget/Mall.courseInfo/courseBackInfo.tpl?__inline">
	</div>
	<!--   12栏结束    -->
	 <div class="row">
	      <div class="col-md-12">
            <!-- *********************** 内容区域开始 *********************** -->
            <div class="panel panel-default ">
                <div class="panel-body pd0">
                    <link rel="import" href="../../widget/Mall.courseInfo/courseInfoBottom.tpl?__inline">
                 </div>
            </div>
            
            <!-- *********************** 内容区域结束 *********************** -->
        </div>
    </div>
</div>

<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'Index',
        MODULE: 'Mall',
        TITLE: '商城首页--录播课程详情页',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
    };
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">