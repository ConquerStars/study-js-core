console.log('尝试删除一个值字面量', delete 0); // true
// js 约定删除 值字面量时 返回true,且实际不执行任何操作
// delete 这个操作的正式语法设计并不是“删除某个东西”，而是“删除一个表达式的结果” --> delete UnaryExpression
// ECMAScript 约定：任何表达式计算的结果（Result）要么是一个值，要么是一个引用。

console.log('通过var声明了一个变量(隐式的帮到到全局对象globalThis中去)，并尝试删除他')
var a = 1 
console.log(globalThis.a); // 1 
console.log(Object.getOwnPropertyDescriptor(globalThis, 'a')); // {value: 1, writable: true, enumerable: true, configurable: false}
console.log(delete a); // false 
console.log(delete globalThis.a); // false 
// 隐式声明到全局变量中的a是不可配置的，所以也是无法删除的 configurable: false
// 因为 通过var 声明的变量属性中会自动添加 configurable: false 且会在全局变量名列表varNames中登记一个名为a的标识符
console.log('=====================')

console.log('通过给全局对象globalThis新增一个属性(显式声明一个对象属性)，并尝试删除他')
globalThis.b = 2
console.log(globalThis.b) // 2
console.log(Object.getOwnPropertyDescriptor(globalThis, 'b')); // {value: 1, writable: true, enumerable: true, configurable: true}
console.log(delete globalThis.b) // true
console.log(globalThis.b) // undefined
// 显式声明一个全局变量b是可配置的，也可执行删除操作 configurable: true
// 因为 显式声明一个对象属性 其默认属性configurable为true
console.log('=====================')

console.log('尝试删除一个不存在的变量x', delete x); // true
// delete x 删除的是一个引用，并未进行求值 getValue的操作 同理 typeof x 也不会报ReferenceError错误
// 删除一个不存在的引用也返回了true,且未进行任何操作
// x获取到的是一个引用，称为UnresolvableReference, ECMAScript规定if IsUnresolvableReference, then return true, 严格模式下会抛出异常

console.log('尝试删除null', delete null); // true
// 与删除直接字面量的值一样

console.log('尝试删除undefined', delete undefined); // false
// 在js中undefined是一个特殊的值，是在运行期中通过void运算，或者不返回值的函数，又或者一个声明了但未赋值的变量，等等类似这样的情况来“计算得到”的
// 在JavaScript的早期版本中，你没有办法直接判断“undefined是undefined” eg: "x === undefined" ,只能写类似“typeof(x) ==='undefined'”
// 后来 规范就约定把undefined作为可以缺省访问的名字，但早期的绝大多数框架或引擎都把它作为一个“全局名字”给声明了
// ECMAScript现在既没有办法将它规范成一个keyword，也没有办法处理成保留字等等，所以把undefined声明成全局的属性
// undefined是一个全局属性，而null是一个关键字 --> `delete undefined`其实就是`delete global.undefined`， 而这个属性是只读的，所以就返回false了

/**
 * 总结：
 * 所有删除 值 的delete 直接将返回true（因为js 1.2版本并没有 try...catch的结构化异常处理，所以通过函数调用中返回true来表明没有异常）表明执行过程中没有异常，但实际的执行行为是“什么也没发生”
 * 如果它是一个引用，那么对该引用进行分析，以决定如何操作。
 * delete不区分变量和属性(事实上,对于delete来说,这些都是引用),并且只关心DontDelete 特性(property 要存在)
 */