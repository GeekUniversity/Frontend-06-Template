#CSS总论
##CSS语法的研究
######https://www.w3.org/TR/CSS21/grammar.html#q25.0
######https://www.w3.org/TR/css-syntax-3
##CSS总体结构
###@charset
###@import
###rules
####@media
####@page
####rule
##CSS@规则的研究（At-rules）
###@charset
###@import
###media
###@page
###@counter-style
###@keyframes
###@fontface
###@supports
###@namespace
##CSS规则的结构
###CSS规则
####选择器 selector
####声明 declaration
#####key
######properties
######variables
#####value
##收集标准
##选择器语法
###简单选择器
####* 通用
####div svg|a 元素
####.cls class
####\#id id
####[attr=value] 属性
####:hover 伪类
####::before 伪元素
###复合选择器
####<简单选择器><简单选择器><简单选择器>
####*或者div必须写在最前面，伪类伪元素必须写在最后面
###复杂选择器
####<复合选择器><sp><复合选择器>
####<复合选择器>">"<复合选择器>
####<复合选择器>"~"<复合选择器> 
####<复合选择器>"+"<复合选择器>
####<复合选择器>"||"<复合选择器>
##选择器的优先级
##伪类
###链接/行为
####:any-link
####:link :visited
####:hover
####:active
####:focus
####:target
###树结构
####:empty
####:nth-cihld()
####:nth-last-child()
####:first-child :lastchild :only-child
###逻辑型
####:not
####:where :has
##伪元素
###::before
###::after
###::first-line
###::first-letter

#思考题
first-line设置float之后就脱离正常文档流