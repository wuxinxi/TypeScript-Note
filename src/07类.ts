export default class User {
    //如果没有默认值 则需要使用非空断言
    username!: string;
    password: string = ''
    //只读属性，但是在构造函数中允许修改
    readonly email: string = '996489865@qq.com'

    //可通过构造传入则不需要默认值
    isVip: boolean

    level: number = 0

    //# 表示私有属性 可以提供get、set
    #_phone: string = ''

    public get phone(): string {
        return this.#_phone
    }

    public set phone(v: string) {
        this.#_phone = v;
    }

    _avatar: string = ''

    //只有 get 则自动变成只读
    public get avatar(): string {
        return this.avatar
    }

    _age: number = 0

    public get age(): string {
        return this.age
    }

    //如果 set 参数类型和当前类不兼容可以添加｜
    public set age(v: number | string) {
        this._age = Number(v);
    }


    constructor(isVip: boolean) {
        this.isVip = isVip
        this.email = 'wuxinxizip@gmail.com'
    }

    //普通方法
    isSuperVip() {
        return this.level > 10
    }
}

const user = new User(false)

user.isSuperVip()

// 只有 get 则自动变成只读
// user.avatar = ""

//implements 实现接口

// interface Context {
//     activityName: string
// }

type Context = {
    activityName: string
}

class BuildContext implements Context {
    activityName: string = "DefaultActivity";
}

//结构性原则，一个对象只要满足 Class 的实例结构 就跟该 Class 属于同一个类型
class Food {
    id: number = 10
    name: string = 'apple'
}

const foodObj = {
    id: 10,
    name: 'banana'
}

function fn(arg: Food) {
}

fn(new Food())
fn(foodObj)

//如果两个类的实例结构相同，那么这两个类就是兼容的，可以用在对方的使用场景
//如果属性不同则不可兼容
class Person1 {
    age: number = 19
    name: string = 'wuxinxi'
}


class People {
    age: number = 22
    name: string = 'LovelyCoder'
}

const p: Person1 = new People()


//abstract、protected 关键字的使用同Java相似
abstract class AA {

    abstract fetchProfile(): string
}

class BB extends AA {
    fetchProfile(): string {
        throw new Error("Method not implemented.");
    }
}

//实例属性简写方式
class Point {
    constructor(public x: number, public y: number) {

    }
}
const point = new Point(10, 10)
point.x
point.y
