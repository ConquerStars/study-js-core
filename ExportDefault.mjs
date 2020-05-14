// // 1    ========================================================
// // 本质上 export 也就只能导出这六种 *声明语法所声明* 的标识符，并且在导出时将它们统一称为“名字”
// x = function(){
//     console.log('xfunc')
// }
// export default x // throw Error: ReferenceError: x is not defined
// // end  =========================================================

// // 2     =======================================================
// // ECMAScript 6 模块约定了一个称为"default"的名字，用于来导出当前模块中的一个“值”
// // export default 

export default function() { console.log('function') }

// Ⅰ 在处理 export/import 语句的全程，没有表达式被执行！
// Ⅱ 所谓模块的装配过程，就是执行一次顶层代码而已。
// Ⅲ 它并不是导出了一个匿名函数表达式，而是导出了一个匿名函数定义（Anonymous Function Definition）。


// 通过 *import* 形成依赖树
// 在import端引入后是以const声明规则 而在export端则根据变量声明的规则
