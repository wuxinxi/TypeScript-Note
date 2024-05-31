//枚举
enum Color {
    RED, GREEN, BLUE
}

//很大程度上，Enum 结构可以被对象的as const断言替代。
const CodecState = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE'
} as const

//由于CodecState被 const 断言 所以禁止修改其内部属性
//CodecState.BLUE='PINK' //报错


//Enum 成员默认都有隐式 number 负值 从0 开始
//也可以自定义,不能是 bigint
//如果只设定第一个成员的值，后面成员的值就会从这个值开始递增。

enum PayType {
    WEICHAT = 10,
    ALIPAY = 100,
    JDPAY = 120
}

console.log(PayType.ALIPAY);

//支持字符串
const enum MediaType {
    JSON = 'application/json',
    XML = 'application/xml'
}

//字符串 Enum 也可以使用联合类型代替
function move(where: 'up' | 'down' | 'left' | 'right') {

}
move('down')
//move('ss')// 报错

type MoveType =
    | 'up'
    | 'down'
    | 'left'
    | 'right'
function move2(type: MoveType) {
}

move2('down')


//keyof运算符 取出 Enum 结构的所有成员名，作为联合类型返回
type mediaTypename = keyof typeof MediaType


//反向映射,只有数值 Enum 对于字符串 enum 不支持，这是因为字符串 Enum 编译后只有一组赋值
enum Weekdays {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

console.log(Weekdays[3]);//输出Wednesday
