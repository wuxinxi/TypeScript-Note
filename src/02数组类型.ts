const array: number[] = [1, 2, 3, 4]

//只读
const arrayReadOnly: readonly number[] = [1, 2, 3, 4]
//array.push(5) //报错

const array2: (number | string)[] = ['AA', "VV", 10]
console.log(array2)


console.log(array);

const stringArray: Array<string> = ['a', 'b']

const arr: Array<string | number> = ['A', 1]
//尾部添加
arr.push('C')
//尾部取出并删除
console.log('remove:' + arr.pop());
//头部添加
arr.unshift('AA')
console.log(`头部删除并取出：${arr.shift()}`);

//获取0到1位置的数据，不修改原始数据
console.log(arr.slice(0, 1));

//拼接数组
const concatRes = arr.concat(arr)
console.log(concatRes);


console.log(arr);

//只读数组
const readArr: ReadonlyArray<string | number> = ['AAA', "CCC", 3]
console.log(readArr.length);

readArr.forEach((i) => console.log(i))


arr.forEach((i) => console.log(typeof i))

console.log(arr);

console.log(arr[10] === undefined);

//as 断言
function getSum(num: number[]) {
    return num.reduce((prev: number, curr: number) => prev + curr, 0);
}

const intArray: ReadonlyArray<number> = [1, 2, 3, 4, 5]
//因为intArray是只读数组，getSum的入参是只读的子类型,父不能代替子
const sum = getSum(intArray as number[])
console.log(sum);

const driverStatus = {
    INACTIVE: 'pending',
    PENDING: 'pending',
    ACTIVE: 'active'
} as const
//driverStatus对象的数据将不能被修改
//driverStatus.ACTIVE = 'aaa'//报错

console.log(driverStatus);
