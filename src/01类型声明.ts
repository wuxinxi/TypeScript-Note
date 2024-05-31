//类型声明
//冒号+类型
let username: string = 'TR';

function login(username: string, password: string) {
  return {
    username: username,
    password: password,
  };
}

console.log(login('吴新喜', 'aDmin'));

//类型声明并不是必需的 会自动推断
const backgroundColor = 0xffc0c0c0;
console.log(typeof backgroundColor); //输出number

//函数中参数类型如果不指定则默认为any类型，返回值类型不必指定
function register(username: string, password: string) {
  return username + password;
}

//tsc 编译器
//安装npm install -g typescript

//编译脚本
//编译指定文件tsc  xx.ts
//编译所有：tsc

//ts-node 直接运行ts
//安装npm install -g ts-node
//运行ts-node xx.ts

//any类型
//允许该类型的变量可以赋值任意类型的值，既然有了类型声明 不太建议使用
let anyValue: any;
anyValue = 10;
console.log(typeof anyValue);

anyValue = 'TR';
console.log(typeof anyValue);

//unknow类型 any的严格版本
//any是允许下面的方式的，但是unknow是禁止的
let anyValue2: boolean = anyValue;
console.log(typeof anyValue);

let unknowValue: unknown;

unknowValue = 101;

//会报错：Type 'unknown' is not assignable to type 'boolean'
// let unknownValue2: boolean = unknowValue;

//不能直接调用unknown类型变量的方法和属性。
let unknownValue3: unknown = { age: 18 };

//报错
// unknownValue3.age

//显式定义a的类型是Function，其中Function不会检查入参类型，也就是a这个函数可以传入任何参数进入
let a: Function = (n: number) => n + 1;

//隐式定义b的类型是一个函数
let b = (n: number): number => n + 1;
//let b = (n: number) => n + 1;

console.log(typeof a('10'));
console.log(b(10));

//javaScript 8中类型值
//boolean
//number
//bigint：包含所有打的整数,
//bigint是ES202标准引入的
// const bigintValue: bigint = 123n;
//string
//object
//symbol
//undefined
//null

//值类型,类型为hello，也只能赋值为hello
let valueType: 'hello';

valueType = 'hello';

//报错
//valueType = 'hello2';

//TypeScript 推断类型时，遇到const命令声明的变量，如果代码里面没有注明类型，
//就会推断该变量是值类型
//x的类型是https
const x = 'https';
//y的类型是string
const y: string = 'https';

//注意，const命令声明的变量，如果赋值为对象，并不会推断为值类型。
//person的类型是{username:string}
const person = { username: 'wxx' };

//联合类型
let unionTypeValue: string | number
unionTypeValue = 10
unionTypeValue = '11'

function request1(id: string | number | object) {
  switch (typeof id) {
    case 'string':
      console.log('string type');
      break

    case 'number':
      console.log('number type');
      break

    case 'object':
      console.log('object type');
      break
  }
}


request1(10)
request1('10')
request1({ id: 10 })

function getPort(scheme: 'https' | 'http') {
  if (scheme === 'https') {
    return 443
  } else {
    return 80
  }
}
console.log(getPort('https'));
console.log(getPort('http'));

//交叉类型：对象的合成
let cross: {
  username: string,
  age: number
} & {
  graduation: boolean,
  score: number
}


cross = {
  username: 'tangren',
  age: 19,
  graduation: true,
  score: 99
}


//也常常用于为对象添加属性
type A = { foo: number }

type B = A & { bar: string }

let crossB: B = {
  foo: 10,
  bar: 'bar'
}

//type命令： 用来定义一个类型的别名

type Age = number
let age: Age = 10

type Info = {
  username: string,
  age: number,
  classname: string,
}

const studentInfo: Info = {
  username: "TR",
  age: 19,
  classname: "ws"
}

//typeof

const typeOfValue = { x: 0 }
console.log(typeof typeOfValue);

console.log(typeof typeOfValue.x);

