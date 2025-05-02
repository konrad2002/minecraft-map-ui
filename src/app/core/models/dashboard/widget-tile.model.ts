import {Widget} from "./widget.model";

export interface WidgetTile {
  id: number;
  orderPosition: 1 | 2 | 3 | 4;
  widget: Widget;
  data?: any;
}
