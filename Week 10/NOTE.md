#排版
##根据浏览器属性进行排版（抽象属性）
##flex-derection:row
###Main: width x left right
###Cross: height y top bottom
##flex-direction:column
###Main: height y top bottom
###Cross: width x left right
##收集元素进行（HANG）
###分行
####根据株洲只存，把元素分进行
####若设置了no-wrap，则强行分配进第一行
##计算主轴
###计算主轴方向
####找出所有flex元素
####把主轴方向的剩余尺寸按比例分配给这些元素
####若剩余空间为负数，所有flex元素为0，等比压缩剩余元素
##计算交叉轴
###计算交叉轴方向
####根据每一行中最大元素尺寸计算行高
####根据行高flex-align和item-align，确定元素具体位置
#渲染
##绘制单个元素
###绘制需要依赖一个图形环境
###采用了npm包images
###绘制在一个viewport上进行
###与绘制相关的属性：background-color,border,background-image等
###渐变需要webgl等
##绘制DOM树
###递归调用子元素的绘制方法完成DOM树的绘制
###忽略一些不需要绘制的节点
###实际浏览器中，文字绘制是难点，需要依赖字体库
###实际浏览器中，还会对一些图层做compositing
