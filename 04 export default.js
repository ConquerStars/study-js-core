// 不像常规的脚本加载，直接跨域可以解析，module模式下脚本资源加载需要 CORS 方式获取，不然浏览器报CORS policy跨域相关错误
// 需要搭建本地服务或部署到服务器上进行import

// 本质上 export 也就只能导出这六种声明语法所声明的标识符，并且在导出时将它们统一称为“名字”
import {default as as} from './ExportDefault';

as();
