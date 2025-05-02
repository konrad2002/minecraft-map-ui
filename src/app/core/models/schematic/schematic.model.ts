import {Directory} from "./directory.model";
import {SchematicType} from "./schematic-type.model";
import {User} from "../user.model";
import {Size} from "./size.model";

export interface Schematic {
  "@type": string;
  id: number;
  name: string;
  fullName: string;
  file: string;
  fileEnding: string;
  owner: string;
  state: string;
  direction: string;
  size?: Size;
  public: boolean;
  directory: Directory | null;
  type: SchematicType;

  ownerUser?: User;
}
