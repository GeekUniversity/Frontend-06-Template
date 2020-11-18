#学习笔记
##1、字符串分析算法
###(1) 字典树
Trie树，用于统计，排序和保存大量字符串，经常用于文本词频统计。
利用字符串的公共前缀来减少查询时间。
根节点不包含字符，其它节点只包含一个字符；路径串联为字符串；子节点包含的字符不同。
###(2) KMP
KMP是一种改进的字符串匹配算法。核心是利用匹配失败后的信息，减少pattern串与source串的匹配次数。
#####计算

        // aabaaac
        /*
            index i:    1
            pattern:  a a b a a a c
            index j:  0
            table  :  0 0 0 0 0 0 0
    
            index i:      2
            pattern:  a a b a a a c
            index j:    1
            table  :  0 0 1 0 0 0 0
    
            index i:      2
            pattern:  a a b a a a c
            index j:  0
            table  :  0 0 1 0 0 0 0
    
            index i:        3
            pattern:  a a b a a a c
            index j:  0
            table  :  0 0 1 0 0 0 0
    
            index i:          4
            pattern:  a a b a a a c
            index j:    1
            table  :  0 0 1 0 1 0 0
    
            index i:            5
            pattern:  a a b a a a c
            index j:      2
            table  :  0 0 1 0 1 2 0
    
            index i:            5
            pattern:  a a b a a a c
            index j:    1
            table  :  0 0 1 0 1 2 0
    
            index i:              6
            pattern:  a a b a a a c
            index j:      2
            table  :  0 0 1 0 1 2 2
    
            index i:              6
            pattern:  a a b a a a c
            index j:    1
            table  :  0 0 1 0 1 2 2
    
            index i:              6
            pattern:  a a b a a a c
            index j:  0
            table  :  0 0 1 0 1 2 2
    
            index i:                7
            pattern:  a a b a a a c
            index j:  0
            table  :  0 0 1 0 1 2 2
        */
#####匹配
        // abaabaaacx aabaaac
        /*
            index i:  0
            source :  a b a a b a a a c x
            index j:  0
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:    1
            source :  a b a a b a a a c x
            index j:    1
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:    1
            source :  a b a a b a a a c x
            index j:  0
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:      2
            source :  a b a a b a a a c x
            index j:  0
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:        3
            source :  a b a a b a a a c x
            index j:    1
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:          4
            source :  a b a a b a a a c x
            index j:      2
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:            5
            source :  a b a a b a a a c x
            index j:        3
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:              6
            source :  a b a a b a a a c x
            index j:          4
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:                7
            source :  a b a a b a a a c x
            index j:            5
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:                  8
            source :  a b a a b a a a c x
            index j:              6
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
    
            index i:                    9
            source :  a b a a b a a a c x
            index j:                7
            pattern:  a a b a a a c
            table  :  0 0 1 0 1 2 2
        */
###(3) Wildcard
最后一个*多匹配，其它*少匹配。分段匹配
#####星号
获取*数量，处理*数为零的场景。
#####头部
匹配第一个*前，获取索引
#####星号之间
匹配*之间，循环获取子pattern的正则表达式，更新索引
#####尾部
匹配最后一个*之后
