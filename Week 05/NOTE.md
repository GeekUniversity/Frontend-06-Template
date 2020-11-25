学习笔记
#proxy与双向绑定
###对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。
###用proxy包裹对象实现设置和监听
目标对象，config对象（函数钩子）
#Reactive
####callbacks
#####保存回调函数，用于触发钩子时遍历。对象=》属性=》回调
####reactivites
#####缓存reactivities
#####usedReactivities
使用过的变量
####reactive
#####返回Proxy对象,包含set和get等钩子函数
####effect
#####操作属性
#Drag & Drop
####用mousedown,mousemove,mouseup模拟拖拽
#####mousemove和mouseup需绑定至document上，避免超出范围引发问题
#####flag导致性能下降
####Range CSSOM
#####获取文本ranges表，记录range。
#####获取最近距离range
#####取消文本选择
