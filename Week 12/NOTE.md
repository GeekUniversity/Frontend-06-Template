#CSS排版
##盒Box
###标签Tag源代码、元素Element语义、盒Box表现
####HTML代码中可以书写开始标签，结束标签，和自封闭标签。
####一对起止标签，表示一个元素。
####DOM树中存储的是元素和其它类型的节点（Node）。
####CSS选择器选中的是元素。
####CSS选择器选中的元素，在排版时可能产生多个盒 。
####排版和渲染的基本单位是盒 。
###盒模型
####content padding border margin box-sizing
####box-sizing:
#####content-box
#####border-box
##正常流排版
###收集盒进行
###计算盒在行中的排布
###计算行的排布
####IFC inline-level-formatting-context
####【T】【e】【inline-box】【inline-box】
####BFC block-level-formatting-context
####【line-box】
####【block-level-box】
####【block-level-box】
##正常流的行级排布
###Baseline基线
###Text文字 origin bearing advance
###行模型
####line-top
####text-top
####base-line
####text-bottom
####line-bottom
####行内盒inline-block的基线随着里面文字变化，给vertical-align
##正常流的块级排布
###float与clear
####float排布后往左右挤，排版在float高度范围内调整
####第二个float受到第一个float影响，叠加
####float不认<br>
####clear清除出一块干净的区域，取消堆叠
###margin折叠
####BFC堆叠margin最高高度
##BFC合并
###Block
####Block Container：里面有BFC的
#####能容纳正常流的盒，里面就有BFC
####Block-level Box：外面有BFC的
####Block Box = Block Container + Block-level Box：里外都有BFC的
###Block Container
####blick
####inline-block
####table-cell
####flex item
####grid cell
####table-caption
###Block-level Box
#####Block level
####display:block
####display:flex
####display:table
####display:grid
#####Inline level
####display:inline-block
####display:inline-flex
####display:inline-table
####display:inline-grid
###display:run-in跟着上一个元素来
###设立BFC
####floats
####absolutely positioned elements
####block containers (such as inline-blocks,table-cells, and table-captions) that is not block boxes
#####flex items
#####grid cell
####and block boxes with 'overflow' other than 'visible'
###BFC合并
####block box && overflow:visible
#####BFC合并与float
#####BFC合并与边距折叠
###Flex排版
####收集盒进行
####计算盒在主轴方向的排布
####计算盒在交叉轴方向的排布
####分行
#####根据主轴的尺寸，把元素分进行
#####若设置了no-wrap，则强行分配进第一行
####计算主轴方向
#####找出所有Flex元素
#####把主轴方向的剩余尺寸按比例分配给这些元素
#####若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
####计算交叉轴方向
#####根据每一行中最大元素尺寸计算行高
#####根据行高flex-align和item-align，确定元素具体位置
##动画
###Animation
####@keyframes定义
####animation：使用
####animation-name 动画名称
####animation-duration 动画的时长
####animation-timing-function 动画的时间曲线
####animation-delay 动画开始前的延迟
####animation-iteration-count 动画的播放次数
####animation-direction 动画的方向
###transition
####transition-property 变换的属性
####transition-duration 变换的时长
####transition-timing-function 时间曲线
####transition-delay 延迟
###cubic-bezier 三次贝塞尔曲线
####拟合抛物线
##### function generateCubicBezier
##颜色
###400nm-760nm
###CMYK(品红、青、黄、黑) & RGB（红绿蓝）
###HSL(色相、纯度、亮度) & HSV(色相、纯度、值)
##绘制
###几何图形
####border
####box-shadow
####border-radius
###文字
####font
####text-decoration
###位图
####background-image
###应用技巧
####data uri + svg
####data:images/svg+xml,<svg ...><ellipse .../></svg>
