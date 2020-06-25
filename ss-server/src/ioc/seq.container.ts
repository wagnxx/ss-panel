import 'reflect-metadata';
import { Container } from 'inversify';
import UserTable from '../model/user.model';
import { injectable, inject } from 'inversify';

const myContainer = new Container();

// myContainer.bind('type-userTable').to(UserTable);

@injectable()
class A {
  getdata() {
    return 'aaaaaa';
  }
}

@injectable()
class B {
  private a;
  constructor(@inject('typeA') a) {
    this.a = a;
  }

  public log() {
    console.log(this.a.getdata());
  }
}

@injectable()
class C {
  private b;
  constructor(@inject('typeB') b) {
    this.b = b;
  }

  public log() {
    console.log('以下内容是从 C 递过来的~');
    this.b.log();
  }
}

myContainer.bind('typeA').to(A);
myContainer.bind('typeB').to(B);
myContainer.bind('typeC').to(C);

let b = myContainer.get<C>('typeC');

b.log();

// export { myContainer };

// 这部分在 inversify 中不兼容 ,不能实现  model -> service -> controller [ service.inject(model) controller.inject(service) ]
