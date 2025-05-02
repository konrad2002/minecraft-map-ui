import {ModifierValue} from "../group/modifier.value";

export interface ModifierPreset {
  name: string;
  parent?: ModifierPreset;
  values: ModifierValue[];
}

