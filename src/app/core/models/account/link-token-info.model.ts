export interface LinkTokenInfo {
  subject: string;
  subjectId: string;
  expirationTime: number;
}

export class LinkTokenInfoImpl {
  subject: string;
  subjectId: string;
  expirationTime: number;
  expired: boolean;

  constructor(info: LinkTokenInfo) {
    this.subject = info.subject;
    this.subjectId = info.subjectId;
    this.expirationTime = info.expirationTime;
    this.expired = (new Date().getTime()) - this.expirationTime > 0;
  }
}
