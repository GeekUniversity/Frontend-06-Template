#浏览器工作原理
##渲染步骤
#####URL -( HTTP )-> HTML -( parse )-> DOM -( css computing )-> DOM with CSS -( layout )-> DOM with position -( render )-> Bitmap
##有限状态机
###每个状态机都是一个机器
####在每一个机器里，我们可以做计算、存储、输出……
####所有的这些机器接受的输入是一致的
####状态机的每一个机器本身没有状态，如果我们用函数来表示的话，它应该是纯函数（无副作用）
###每一个机器知道下一个状态
####每个机器都有确定的下一个状态（Moore）
####每个机器根据输入决定下一个状态（Mealy）
###JS中的有限状态机（Mealy）
####//每个函数是一个状态
####function state(input)｛ // 函数参数就是输入
####&nbsp;&nbsp;&nbsp;&nbsp; // 在函数中，可以自由地编写代码，处理每个状态的逻辑
####&nbsp;&nbsp;&nbsp;&nbsp;return next; // 返回值作为下一个状态
####｝
####////////以下是调用////////
####while(input){
####&nbsp;&nbsp;&nbsp;&nbsp;// 获取输入
####&nbsp;&nbsp;&nbsp;&nbsp;state = state(input); // 把状态机的返回值作为下一个状态
####}
###使用有限状态机处理字符串
####在一个字符串中，找到字符“a”
####在一个字符串中，找到字符“ab”
####在一个字符串中，找到字符“abcdef”
####reconsume -> state(c)
####我们如何用状态机处理诸如“abcabx”这样的字符串
####我们如何用状态机处理诸如“abababx”这样的字符串
##浏览器工作原理
##HTTP的协议解析
###ISO-OSI七层网络模型
####【 应 用 】 \
####【 表 示 】 =》【 HTTP 】 =》 require("http")
####【 会 话 】 /
####------------------------------------------------
####【 传 输 】 =》【 TCP 】=》 require("net")
####【 网 络 】 =》【 Internet 】
####【数据链路】 =》【 4G/5G/WiFi 】
####【物 理 层】 =》【 4G/5G/WiFi 】
###TCP与IP的一些基础知识
####TCP
####流
####端口
####require('net');(nodejs)
####---------------
####IP
####包
####IP地址
####libnet/libpcap(C++库)
###HTTP
####Request（客户端发起）
####POST / HTTP/1.1 (Request line)
####Host:127.0.0.1 (headers)
####Content-Type: application/x-www-form-urlencoded
####(body)
####field1=aaa&code=x%3D1
####设计一个HTTP请求的类
####content type是一个必要的字段，要有默认值
####body是KV格式
####不同的content-type影响body的格式
####在Request的构造器中收集必要的信息
####涉及一个send函数，把请求真实发送到服务器
####send函数应该是一步的，所以返回Promise
####设计支持已有的connection或者自己新建connection
####收到数据传给parser
####根据parser的状态resolve Promise
####Response（服务端返回）
####HTTP/1.1 200 OK (status line)
####Content9Type:text/html (headers)
####Date:Mon,23 Dec 2019 06:46:19 GMT
####Connection:keep-alive
####Transfer-Encoding:chunked
####(body)
####26
####<html><body>Hello World</body></html>
####0
####Response必须分段构造，所以我们要用一个ResponseParser来“装配”
####ResponseParser分段处理ResponseText，我们用状态机来分析文本的结构
####Response的body可能根据Content-Type有不同的结构，incident我们会采用子Parser的结构来解决问题
####以TrunkedBodyParser为例，我们同样用状态机来处理body的格式
