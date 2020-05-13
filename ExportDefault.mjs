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


