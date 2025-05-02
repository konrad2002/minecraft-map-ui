import {ModifierValue} from "./modifier.value";

export interface ModifierSet {
  id: number,
  modifierGroup: string,
  status: string,
  modifierValues: ModifierValue[]
}

