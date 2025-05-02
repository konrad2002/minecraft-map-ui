import {ModifierValue} from "./modifier.value";

export interface ModifierType {
  name: string;
  endpoint: string;
  global: boolean;
  canBeDifferentiator: boolean;
  modifierValue: ModifierValue;
  options: ModifierValue[];
  categories: string[];
}
