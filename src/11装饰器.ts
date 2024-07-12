//类装饰器
function addDoor(target: any, context: any) {
  console.log("为 Room 添加下面的的");

  target.prototype.openDoor = () => {
    console.log("我是类装饰器添加的door方法");
  };


}

@addDoor
class Room {}

const room = new Room();
(room as any).openDoor();

//方法装饰器
//属性装饰器
//装饰器执行顺序
//先从上往下执行 group 组装饰器，然后再从下往上执行其他装饰器
