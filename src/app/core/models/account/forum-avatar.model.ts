import {environment} from "../../../../environments/environment";

export interface ForumAvatar {
  avatarID: number;
  avatarName: string;
  fileHash: string;
  avatarExtension: string;
}

export class ForumAvatarImpl {
  avatarID: number;
  avatarName: string;
  fileHash: string;
  avatarExtension: string;

  constructor(avatar: ForumAvatar) {
    this.avatarID = avatar.avatarID;
    this.avatarName = avatar.avatarName;
    this.fileHash = avatar.fileHash;
    this.avatarExtension = avatar.avatarExtension;
  }

  get imageUrl(): string {
    let url = environment.forum_url;
    url += "/cms/images/avatars/";
    url += this.fileHash.substring(0, 2);
    url += "/";
    url += this.avatarID;
    url += "-";
    url += this.fileHash;
    url += ".";
    url += this.avatarExtension;
    return url;
  }
}
