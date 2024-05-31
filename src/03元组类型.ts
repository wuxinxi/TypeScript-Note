//它表示成员类型可以自由设置的数组，即数组的各个成员的类型可以不同。
//由于成员的类型可以不一样，所以元组必须明确声明每个成员的类型。
//？表示可省略，必须在尾部
const tupleArray: [number, string, boolean, object?] = [1, 'ss', false]

tupleArray.push(0.0)
tupleArray.push({ user: 'aa' })

console.log(tupleArray);

//只读元组 1
type readOnlyTuple = readonly [number, string]
const readOnlyTuples: readOnlyTuple = [1, 'ss']

////只读元组 1
type readOnlyTuple2 = Readonly<[number, string]>
const readOnlyTuples2: readOnlyTuple2 = [1, 'ss']
