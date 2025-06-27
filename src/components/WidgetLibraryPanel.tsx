import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  DollarSign,
  LineChart,
  BarChart,
  Package,
  Users,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

// Define the shape of a widget item
interface WidgetItem {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

// A predefined list of available widgets for the library
const availableWidgets: WidgetItem[] = [
  {
    id: 'total-revenue',
    name: 'Total Revenue',
    description: 'A single stat showing total sales.',
    icon: DollarSign,
  },
  {
    id: 'sales-over-time',
    name: 'Sales Over Time',
    description: 'A line chart of revenue trends.',
    icon: LineChart,
  },
  {
    id: 'average-order-value',
    name: 'Average Order Value',
    description: 'Key metric showing average cart size.',
    icon: BarChart,
  },
  {
    id: 'top-selling-products',
    name: 'Top Selling Products',
    description: 'A list of the best-performing items.',
    icon: Package,
  },
  {
    id: 'new-customers',
    name: 'New Customers',
    description: 'Track new customer acquisition.',
    icon: Users,
  },
  {
    id: 'conversion-rate',
    name: 'Conversion Rate',
    description: 'Percentage of visitors who purchase.',
    icon: TrendingUp,
  },
];

const WidgetLibraryPanel: React.FC = () => {
  console.log('WidgetLibraryPanel loaded');

  return (
    <div className="h-full flex flex-col bg-card border-r">
      <div className="p-4">
        <h2 className="text-lg font-semibold tracking-tight">Widget Library</h2>
        <p className="text-sm text-muted-foreground">Drag a widget onto the canvas</p>
      </div>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {availableWidgets.map((widget) => {
            const Icon = widget.icon;
            return (
              <div
                key={widget.id}
                className="flex items-center gap-4 p-3 rounded-lg border bg-background cursor-grab transition-all hover:shadow-md hover:bg-accent hover:text-accent-foreground active:cursor-grabbing"
                // In a real app, you would add draggable="true" and onDragStart handlers here
              >
                <Icon className="h-6 w-6 text-primary flex-shrink-0" />
                <div className="flex-grow">
                  <h4 className="font-semibold text-sm">{widget.name}</h4>
                  <p className="text-xs text-muted-foreground">{widget.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default WidgetLibraryPanel;