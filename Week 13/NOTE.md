#重学HTML(HTML的定义XML与SGML)
##DTD与XML namespace
######nbsp连接相邻的词，破坏语义，不建议使用，使用U+00A0代替
######quot quotation mark === "
######amp ampersand === &
######lt less-than === <
######gt greater-than === >
##HTML标签语义
##HTML语法
###合法元素
####Element: <tagname>...</tagname>
####Text:test
####Comment:<!-- comments -->
####DocumentTypes: <!Doctype html>
####ProcessingInstruction: <?a 1?> 预处理
#####CDATA: <![CDATA[]]> 文本的另一种表达
###字符引用
####&#161;
####&amp;
####&lt;
####&quot;
##DOM API
###导航类操作
####parentNode
####chileNodes
####firstChild
####lastChild
####nextSibling
####previousSibling
####parentElement
####children
####firstElementChild
####lastElementChild
####nextElementSibling
####previousElementSibling
###修改操作
####appendChild
####insertBefore
####removeChild
####replaceChild
###高级操作
####compareDocumentPosition是一个用于比较两个节点中关系的函数
####contains检查一个节点是否包含另一个节点的函数
####isEqualNode检查两个节点是否完全相同
####isSameNode检查两个节点是否是同一个节点，实际上在JavaScript中可以用“===”
####cloneNode复制一个节点，如果传入参数true，则会连同子元素做深拷贝
##事件API
###Event:冒泡和捕获
##Range API
####var range = new Range()
####range.setStart(element, 9)
####range.setEnd(element, 4)
####var range = document.getSelection().getRangeAt(0)
###range.setStartBefore
###range.setEndBefore
###range.setStartAfter
###range.setEndAfter
###range.selectNode
###range.selectNodeContents
###var fragment = range.extractContents()
###range.insertNode(document.creatTextNode("aaaa"))
##CSSOM
###document.styleSheets
###Rules
####document.styleSheets[0].cssRules
####document.styleSheets[0].insertRule("p {color:pink;}",0)
####document.styleSheets[0].removeRule(0)
###Rule
####CSSStyleRule
#####selectorText String
#####style K-V结构
####CSSCharsetRule
####CSSImportRule
####CSSMediaRule
####CSSFontFaceRule
####CSSPageRule
####CSSNamespaceRule
####CSSKeyframesRule
####CSSKeyframeRule
####CSSSupportsRule
###getComputedStyle
####windows.getComputedStyle(elt, pseudoElt)
#####elt 想要获取的元素
#####pseudoElt可选，伪元素
##CSSOM View
###window
####window.innerHeight, window.innerWidth
####window.outerWidth, window.outerHeight
####window.devicePixelRatio
####window.screen
#####window.screen.width
#####window.screen.height
#####window.screen.availWidth
#####window.screen.availHeight
###Window API
####window.open("about:blank","_blank","width=100,height=100,left=100,right=100")
####moveTo(x,y)
####moveBy(x,y)
####resizeTo(x,y)
####resizeBy(x,y)
###scroll
####scrollTop
####scrollLeft
####scrollWidth
####scrollHeight
####scroll(x,y)
####scrollBy(x,y)
####scrollIntoView()
####window
#####scrollX
#####scrollY
#####scroll(x,y)
#####scrollBy(x,y)
###layout
####getClientRects()
####getBoundingClientRect()
##其它API
###标准化组织
####khronos
#####WebGL
####ECMA
#####ECMAScript
####WHATWG
#####HTML
####W3C
#####webaudio
#####CG/WG
