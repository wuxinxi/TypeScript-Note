import { randomInt } from "crypto";
import User from "./07类";

const user = new User(false)
user.phone;

//对象模板
interface MyObj {
    username: string,
    password: string
}

const myObj: MyObj = {
    username: 'xx',
    password: 'xxx'
}

//interface 函数
interface Add {
    (x: number, y: number): number
}
const myAdd: Add = (x, y) => x + y
console.log(myAdd(10, 10));

//继承
interface Shape {
    name: string
}

interface Style {
    type: string
}


interface Circle extends Shape, Style {
    radius: number
}


const circle: Circle = {
    radius: 0,
    name: "AAA",
    type: "CCC"
}

//interface 继承type
//如果 type 定义的不是对象则无法被继承
type Country = {
    name: string,
    capital: string
}

interface ContryWithPop extends Country {
    population: string
}

const countryWithPop: ContryWithPop = {
    population: "AA",
    name: "VC",
    capital: "EE"
}

//interface继承class
class AAA {
    x: string = ''

    public getRandom = (): number => randomInt(100)

    public getRandom2() {
        return randomInt(400)
    }

}

interface BB extends AAA {
    z: number
}

const b: BB = {
    z: 0,
    x: "",
    getRandom: () => 0,
    getRandom2: function (): number {
        throw new Error("Function not implemented.");
    }
}