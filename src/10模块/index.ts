//import custom from './export_default';  //默认导出
//import { crc32, combin } from './export_default';//命名导出
//可以合并为下面的
import custom, { crc32, combin } from './export_default';


const promise = custom.sendResetPWCode('110101', 'Code')
promise.then((v) => {
    console.log(v);
}).catch((error) => {
    console.error('find error');
})


async function fetch() {
    const promise2 = await custom.sendResetPWCode('110101', 'Code')
    console.log(promise2);
}

fetch()

const code = custom.getCode('aa')
console.log(code);

crc32()

//模块的整体加载，用*指定一个对象，所有的输出都指向这个对象
import * as exportDefault from './export_default';

const res = exportDefault.default.getCode('ccc')
console.log(res);

//导出指定类
import Person from './Person';
const person = new Person('zhangsan', '123456')


//跨模块常量
import * as constant from './constants/constants'

//对象解构
const { port, host, user, password, database } = constant.db
console.log(port, host, user, password, database);

type DbConfig = {
    port: number,
    host: string,
    user: string,
    password: string,
    database: string
}

//type 解构
const dbConfig: DbConfig = constant.db
console.log(dbConfig);


//
import { type IUser, a } from './inter';

function ass() {
}

const userInfo: IUser = {
    id: 1,
    name: 'zhangsan',
    age: 10
}

console.log(userInfo + "_" + a);


