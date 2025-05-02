import {ForumAvatar, ForumAvatarImpl} from "./forum-avatar.model";

export interface ForumUser {
  userID: number;
  username: string;
  email?: string;
  avatar?: ForumAvatar;
}

export class ForumUserImpl {
  userID: number;
  username: string;
  email?: string;
  avatar?: ForumAvatarImpl;

  constructor(user: ForumUser) {
    this.userID = user.userID;
    this.username = user.username;
    this.email = user.email;
    if (user.avatar)
      this.avatar = new ForumAvatarImpl(user.avatar);
  }
}
