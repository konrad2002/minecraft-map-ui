export class ConnectionService {
  identifier: string;
  name: string;
  linkable = false;
  documentationUrl?: string;
  issueLinkUrl?: string;

  constructor(identifier: string, name: string, linkable = false, documentationUrl?: string, issueLinkUrl?: string) {
    this.identifier = identifier;
    this.name = name;
    this.linkable = linkable;
    this.documentationUrl = documentationUrl;
    this.issueLinkUrl = issueLinkUrl;
  }
}
