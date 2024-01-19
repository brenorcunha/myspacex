import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  Generated,
} from "typeorm"

import Tweet from './Tweet';
import TweetLike from './TweetLike';
import TweetComment from './TweetComment';

//declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;

@Entity("user")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  avatar: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @OneToMany(type => Tweet, tweet => tweet.owner)
  tweets: Tweet[]

  @OneToMany(type => TweetLike, like => like.owner)
  likes: TweetLike[]

  @OneToMany(type => TweetComment, comment => comment.owner)
  comments: TweetComment[]
}

export default User
