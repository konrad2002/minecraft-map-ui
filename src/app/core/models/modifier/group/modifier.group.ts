import {ModifierValue} from "./modifier.value";

export interface ModifierGroup {
  name: string;
  differentiatorModifierName: string;
  imageName: string;
  category: string[];
  tags: string[];
  optionProviders: string[];
  defaultValues: ModifierValue[];
  allowedValues: ModifierValue[];
}

