import { Table, Column, Model, Comment } from 'sequelize-typescript';

@Table({
  tableName: 'sms_tb',
})
export default class SmsTable extends Model<SmsTable> {
  @Column({
    primaryKey:true,
    autoIncrement:true
  })
  id: number;

  @Comment('email,email是目前唯一的用户名')
  @Column
  username: string;
  
  @Comment('验证码')
  @Column
  code: string;
  
  @Comment('是否过期')
  @Column
  isLive: number;
  
  // @Comment('1:vip1,2:vip2,3:vip3,0:admin')
  @Comment('截止日期')
  @Column
  dead_line: Date;

}
//  email, code, date, isLive

// CREATE TABLE IF NOT EXISTS `sms_tb`(
//     `id` INT UNSIGNED AUTO_INCREMENT,
//     `username` VARCHAR(30) NOT NULL,
//     `code` VARCHAR(6) NOT NULL,
//     `isLive` int(2) NOT NULL,
//     `dead_line` DATE,
//     PRIMARY KEY ( `id` )
//  )ENGINE=InnoDB DEFAULT CHARSET=utf8;