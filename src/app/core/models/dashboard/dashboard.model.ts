import {WidgetContainer} from "./widget-container.model";

export interface Dashboard {
  id: number;
  user: string;
  name: string;
  default_dashboard: boolean;
  active: boolean;
  containers: WidgetContainer[];
}
