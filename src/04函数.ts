import { log } from "console";

type fun = (text: string) => void

let func: fun = function (text) {
    console.log(text);

}
func("aaaaa")

//箭头函数
const repeat = (str: string, times: number): string => str.repeat(times)

console.log(repeat('GO', 2));

function callback(fn: (num: number) => void) {
    fn(10)
}

callback(function (n) {
    console.log(n);
})

type Person2 = { name: string }

const p = ['alience', 'youlada', 'jacy'].map(mapCallabck)
const p2 = ['alience', 'youlada', 'jacy'].map((name, index) => console.log(`index=${index},name=${name}`));

const p3 = ['alience', 'youlada', 'jacy'].map(
    (name: string): Person2 => ({ name })

)
console.log(p3);



function mapCallabck(value: string, index: number, array: Array<string>) {
    console.log(`value=${value},index=${index},${array}`);
}

const res = ['alience', 'youlanda', 'jacy'].some((value, index) => value === 'youlanda')
console.log(res);


//可选参数:参数名后加？
//等同于options(opt: number|undefined)
function options(opt?: number): boolean {
    console.log(opt);
    return opt === undefined
}

console.log(options());
console.log(options(undefined));
console.log(options(1));


let myFunc: (a: number, b?: number) => number

myFunc = function (x, y) {
    if (y === undefined) {
        return x
    }

    return y
}

console.log(myFunc(19));


//箭头函数不需要 function 关键字
const myFunc2 = (a: number, b?: number) => b === undefined ? a : b

console.log(myFunc2(10, 3));


//默认参数值
//1.可选值和默认值不能同时存在：（username?:string='tr'）错误
//2.设置默认值的参数如果传入 undefined 也会触发默认值
//3.如果默认值不在末尾则调用时不能省略，如果想要触发默认值则需要传入 undefined
function login(username: string = 'tr', password: string = 'sss') {
}


//参数解构
// 1.对象结果
const personal = {
    username: 'tr',
    password: 'admin'
}
const { username, password } = personal
console.log(`username=${username},password=${password}`);


//2.函数解构
function sum({ a, b, c }: {
    a: number,
    b: number,
    c: number
}): number {
    return a + b + c
}
console.log(sum({ a: 10, b: 20, c: 9 }));

const func2 = ([x, y]: [number, number]) => x + y
console.log(func2([10, 30]));

//和 type 一起用
type ABC = { a: number, b: number, c: number }

const sum2 = ({ a, b, c }: ABC) => a + b + c
const abc: ABC = { a: 10, b: 1, c: 2 }
console.log(sum2({ a: 10, b: 1, c: 2 }));

//readonly只读参数:只能作用于 array，tuple
function testReadonly(array: readonly string[]) {
    // array[0] = 10;
}

//never类型:表示肯定不会出现的值

//函数重载

function getProfile(username: string): string

function getProfile(username: string, password?: string): string

function getProfile(username: string, password?: string, email?: string): string {
    return ""
}

getProfile("aaa")


function f(x: any): number;
function f(x: string): 0 | 1;
function f(x: any): any {
    // ...
}

//对象的重载
class StringBuilder {
    //#开头表示私有字段
    #data = 'xxx'

    add(num: string): this
    add(bool: boolean): this
    add(num: number): this
    add(str: string): this

    add(value: any): this {
        this.#data += String(value)
        return this;
    }

    constructor() {
        console.log(this.#data);
    }

    toString() {
        return this.#data
    }
}

const sb = new StringBuilder().add("AA")
    .add(10)
    .add(true).toString()

console.log(sb);

