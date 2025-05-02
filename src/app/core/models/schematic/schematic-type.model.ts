export interface SchematicType {
  id: number;
  name: string;
  displayName: string;
  securityLevel: number;
  superType: SchematicType;
}
