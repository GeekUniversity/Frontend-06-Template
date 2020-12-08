学习笔记
#运算符和表达式
###Atom
###Grammar Tree vs Priority
####+ -
####* /
####()
####+
####1*
####23
####1+2*
####3
###Expressions
####Member
#####a.b
#####a[b]
#####foo`string`
#####super.b(class构造函数)
#####super['b']
#####new.target
#####new Foo()
####New
##### new Foo
#####EX:new a()()
#####EX:new new a()
####Expressions
####call
#####foo()
#####super()
#####foo()['b']
#####foo().b
#####foo()`abc`
#####EX:new a()['b']
####Left hand side & Right hand side（是否能放到等号左边）
#####a.b = c;（left）
#####a + b = c （left）
####Expressions
####Update
#####a++
#####a--
#####--a
#####++a
#####++a++（不合法）
#####++a(+++)（不合法）
####Unary （单目运算符）
#####delete a.b
#####void foo()
#####+ a
#####- a
#####~ a
#####! a（双！强制转换任何数为布尔）
#####await a
####Exponental
#####**（js唯一右结合）
#####3**2**3
#####3**(2**3)
####Multiplicative
#####* / %
####Additive
#####+ -
####Shift
#####<< >> >>>
####Relationship
#####< > <= >= instanceof in
####Equality
#####==
#####!=
#####===
#####!==
####Bitwise
#####& ^ |
####Logical
#####&&
#####||
####Conditional
#####? :（三目运算符）
#类型转换
###Runtime
####Type Convertion
#####a + b
#####"false" == false（类型不同转为Number比较）
#####a[o] = 1;
####Unboxing
#####Topremitive
#####toString vs valueOf
#####Symbol.toPrimitive（定义后会忽略前两项）
######var o = {toString() {return "2"}, valueOf() {return 1}, [Symbol.toPrimitive]() {return 3}}
######var x = {}
######congsole.log("x" + o)（先valueOf）
######x[o] = 1(先toString)
####Boxing
#####new Object(Symbol("a"))（不能new Symbol）
####Reference（标准中的类型，不是语言中的类型）
#####Object
#####Key
#####delete
#####assign
#运行时相关概念
##Statement
###Grammar
####简单语句（表达式分号组成）
#####ExpressionStatement
#####EmptyStatement
#####DebuggerStatement
#####ThrowStatement
#####ContinueStatement
#####BreakStatement
#####ReturnStatement
####组合语句（控制简单语句执行顺序）
#####BlockStatement
######{}
######[[tyoe]]:normal
######[[value]]:--
######[[target]]:--
#####IfStatement
#####SwitchStatement 建议用if else代替switch
#####IterationStatement
######while(...){...}
######do{...}while(...);
######for(...;...;...){...}
######for(...in...){...}
######for(...of...){...}
######for await(...of...) Async Generator
######var
######const / let
######in
#####WithStatement
#####LabelledStatement
#####TryStatement
######try{...}catch(...){...}finally{...}
######[[type]]:return
######[[value]]:--
######[[target]]:label
####标签、循环、break、continue
#####LabelledStatement
#####IterationStatement
#####ContinueStatement
#####BreakStatement
#####SwitchStatement
######[[type]]:break continue
######[[value]]:--
######[[target]]:label
####声明（非标准划分）
#####FunctionDeclaration function (...) {...}
#####GeneratorDeclaration function* (...) {...}
#####AsyncFunctionDeclaration async function (...) {...}
#####AsyncGeneratorDeclaration async function* (...) {...}
#####VariableDeclaration var ... = （声明在函数头部）
#####ClassDeclaration class ... {...}（声明前使用报错）
#####LexicalDeclaration const ... = （声明前使用报错）, let ... = （声明前使用报错）
####预处理(pre-process)
#####var a = 2;
#####void function() {a = 1; return; var a;}();（var 在函数作用域内）
#####console.log(a)
#####var a = 2;
#####void function() {a = 1; return; const a;}();（const 声明前使用报错，可被try catch）
#####console.log(a)
####作用域
#####var a = 2;
#####void function() {a = 1; {var a;}}();（作用域为函数体）
#####console.log(a);
#####var a = 2;
#####void function() {a = 1; {const a;}}();（作用域在花括号block）
#####console.log(a);
###Runtime
####Completion Record（完成结果。是否返回，返回的值是什么……）
#####if(x == 1) {return 10;}
#####[[type]]:normal, break, continue, return, or throw
#####[[value]]:基本类型
#####[[target]]:label（break continue）
####Lexical Environment
#宏任务和微任务（结构化程序设计）
##JS执行粒度（运行时）
###宏任务（给javascript Engine的任务）
###微任务(Promise)（promise产生的任务）
###函数调用*(Execution Context执行上下文)
#####import {foo} from "foo.js"
#####var i = 0;
#####console.log(i);
#####foo();
#####console.log(i);
#####i++;
#####function foo () {
#####console.log(i);（函数中定义的i，无法访问）
#####}
####code evaluation state(代码执行的状态)
####Function
####Script or module
####Generator
####Realm（保存所有需要的变量）
#####JS引擎实例中所有的内置对象放置，每个实例完全独立，根据外部条件创建
####LexicalEnvironment（执行代码中所需要访问的环境）
#####this
#####new.target
#####super
#####变量
####VariableEnvironment（执行代码中所需要访问的环境）
#####只处理var声明
#####var穿透with到外部环境
#####export foo;
####Environment Record
####Environment Records
#####Declarative Environment Records ex.{}
######Function Environment Records
######module Environment Records
#####Global Environment Records
#####object Environment Records
###Function-Closure
#####var y = 2;
#####function foo2() {
#####console.log(y);
#####}
#####export foo2;
#####---------------
#####Function:foo2
#####Environment Record: y:2
#####Code:console.log(y);
#####每个函数都会生成一个闭包，包含环境部分和代码部分
#####保存上一级的环境部分
###语句/声明(Completion Record)
###表达式(Reference)
###直接量/变量/this......
###事件循环(node: wait -> get code -> execute -> ...)
