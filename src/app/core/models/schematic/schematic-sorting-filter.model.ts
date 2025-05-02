import {SchematicSorting} from "./schematic-sorting.model";
import {SchematicFilter} from "./schematic-filter.model";

export interface SchematicSortingFilter {
  sorting: SchematicSorting;
  filter: SchematicFilter
}
