import {Group} from "./group.model";
import {UserInfo} from "./userinfo.model";
import {Note} from "./note.model";

export interface User {
  id: number;
  uuid: string;
  name: string;
  skinValue: string;
  signature: string;
  groupName?: string;
  group?: Group;
  info?: UserInfo;
  notes?: Note[];
}
