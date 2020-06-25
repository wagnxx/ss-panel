import { Table, Column, Model, Comment } from 'sequelize-typescript';
import BaseTable from './basic.model';
// import { injectable, inject } from "inversify";
// @injectable()
@Table({
  tableName: 'user',
})
export default class UserTable extends Model<UserTable> {
  @Column
  username: string;

  @Column
  password: string;

  // @Comment('1:vip1,2:vip2,3:vip3,0:admin')
  @Column
  rule: number;

  /**
   * 添加
   * @param item 新项目
   */
  // static async createItem<T extends UserTable>(item: T) {
  //   return await this.create(item);
  // }

  // static async getList<T extends UserTable>(optWhere) {
  //   let items = await this.findOne({ raw: true }, { ...optWhere });
  //   return items as T[];
  // }
}
