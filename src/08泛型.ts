import User from "./07类";
//同 Java 差不多


//类型参数泛型的默认值
function getFirst<T = string>(arr: T[]) {
    return arr[0]
}

console.log(typeof getFirst(['a', 'B']));

console.log(typeof getFirst<number>([1, 8]));

const ids: Array<number> = [1, 2, 34]
ids.push(...[4, 5, 6, 6])
console.log(ids);

//类型参数的约束
//类似 java 的 T extends / super

//约束 T 类型必须有 length number 类型的属性
function comp<T extends { length: number }>(a: T, b: T) {

}

class P extends User {

}

function getProfile<T extends User>(user: T) {

}
getProfile(new P(false))
getProfile(new User(false))
// getProfile(new Point()) //报错

//参数类型可以同时设置约束条件和默认值
type Fn<A extends string, B extends string = 'word'> = [A, B]
type Result = Fn<'hello'>
const result: Result = ['hello', 'word'];