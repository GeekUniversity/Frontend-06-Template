学习笔记
#javascript
####非形式语言
####形式语言（乔姆斯基谱系）
乔姆斯基谱系：是计算机科学中刻画形式文法表达能力的一个分类谱系，是由诺姆·乔姆斯基于 1956 年提出的。它包括四个层次
#####0- 型文法（无限制文法或短语结构文法）包括所有的文法
######?::=?
#####1- 型文法（上下文相关文法）生成上下文相关语言
######?<A>?::=?<B>? （前问号上文，后问号下文）
#####2- 型文法（上下文无关文法）生成上下文无关语言
######<A>::=?
#####3- 型文法（正规文法）生成正则语言
######<A>::=<A>?
######<A>::=?<A> wrong

###### 2**1**2 右结合，先算右边。结果为2
###### {get a {return 1}, get:1} 前关键字，后属性名。

####产生式： 在计算机中指 Tiger 编译器将源程序经过词法分析（Lexical Analysis）和语法分析（Syntax Analysis）后得到的一系列符合文法规则（Backus-Naur Form，BNF）的语句
#####用尖括号括气力啊的名称表示语法结构名
#####语法结构分成基础机构和需要用其它语法结构定义的复合结构
######基础机构称终结符
######复核机构称非终结符
#####引号和中间的字符表示终结符
#####可以有括号
#####* 表示重复多次
#####| 表示或
#####+ 表示至少一次

####巴科斯诺尔范式：即巴科斯范式（英语：Backus Normal Form，缩写为 BNF）是一种用于表示上下文无关文法的语言，上下文无关文法描述了一类形式语言。它是由约翰·巴科斯（John Backus）和彼得·诺尔（Peter Naur）首先引入的用来描述计算机语言语法的符号集
####终结符： 最终在代码中出现的字符（ https://zh.wikipedia.org/wiki/ 終結符與非終結符)


###图灵完备性
####图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。
#####命令式——图灵机：又称确定型图灵机，是英国数学家艾伦·图灵于 1936 年提出的一种将人的计算行为抽象掉的数学逻辑机，其更抽象的意义为一种计算模型，可以看作等价于任何有限逻辑数学过程的终极强大逻辑机器
######goto
######if和while
#####声明式——lambda
######递归
###静态和动态语言
#####动态
######在用户的设备/在线服务器上
######产品实际运行时
######Runtime
#####静态
######在程序员的设备上
######产品开发时
######Compiletime编译时
###类型系统
####动态类型系统与静态类型系统
####强类型与弱类型
#####String + Number
#####String == Boolean
####复合类型
#####结构体 {a:T1, b:T2}
#####函数签名 (T1, T2) => T3
####子类型
####泛型
#####逆变/协变
######协变：凡是能用Array<Parent>的地方，都能用Array<Child>。逆变：凡是能用Function<Child>的地方，都能用Array<Parent>

###一般命令式编程语言
####Atom
#####Identifier
#####LIteral
####Expression
#####Atom
#####Operator
#####Punctuator
####Statement
#####Expression
#####Keyword
#####Punctuator
####Structure
#####Function
#####Class
#####Process
#####Namespace
####Program
#####Program
#####Module
#####Package
#####Library

#Atom（原子，最小元素）
##Grammar
###Literal
###Variable
###Keywords
###Whitespace
###Linie Terminator
##Runtime
###Types
###Execution Context

#Types
##*Number
###IEEE 754 Double Float
####Sign(1)符号位，第一位
####Exponent(11)指数位，第二到第十二位
####Fraction(52)精度位，十进制转二进制有损失
###Number-Grammar
####DecimalLiteral
#####0
#####0.
#####.2
#####1e3
####BinaryIntegerLiteral
#####0b111
####OctalIntegerLiteral
#####0o10
####HexintegerLiteral
#####0xFF
###0.toString() ==> 0 .toString()
##*String
###String-Runtime
####Character
####Code Point
####Encoding
###Code Point
####ASCII（被兼容）
####Unicode
####USC
####GB
#####GB2312
#####GBK(GB13000)
#####GB18030
####ISO-8859
####BIG5
###Encoding
####UTF（默认ASCII）
#####UTF8
######一 11100100 10111000 10000000
#####UTF16一 01001110 00000000
###String-grammar
####"abc"
####'abc'
####`abc`
####"(?:[^"\n\\\r\u2028\u2029]|(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"
####'(?:[^'\n\\\r\u2028\u2029]|(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'
####Template
#####`ab${x}abc${y}abc`
######`ab${
######}abc${
######}abc`
##*Boolean
###true
###false
##*Object
###identifier
###state
###behavior
###Object-class
####归类，多继承，C++。分类，单继承，C#、JAVA，基类Object。严谨
###Object-Prototype
####原型，相似描述，描述与原型的区别。模糊
####Nihilo
####原则-行为改变状态
###Object in Javascript
####Object -> property -> Prototype
####原型和属性，沿着原型向上寻找属性，直到nihilo。原型链
###API/Grammar
####{} . [] Object.defineProperty 语法创建对象
####object.create / Object.setPrototypeOf / Object.getProrotypeOf 基于原型创建对象
####new / class / extends 基于分类创建对象
####new / function / prototype 类似class base
###Function Object[[call]]内置行为
####f()
###Special Object
####Array[[length]]
####Object.prototype[[setPrototypeOf]]
###Host Object
####Object[[call]][[construct]]
#####foo() = 2
#####delete x;
##*Null（关键字）
###function f() {var null = 0; console.log(undefined);}
##Undefined
###void 0;得到undefined
###function f() {var undefined = 1; console.log(undefined);}
##Symbol
###Symbol唯一，String
###Data（状态描述）-> value writable enumerable configurable
###Accessor（行为描述） -> get set enumerable configurable