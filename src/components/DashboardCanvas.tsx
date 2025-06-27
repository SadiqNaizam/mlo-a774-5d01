import React, { useState, useEffect } from 'react';
import { Reorder } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import DashboardWidget from '@/components/DashboardWidget';

// Define the structure for a single widget.
// In a real app, this would likely be more complex.
export interface WidgetConfig {
  id: string;
  type: string; // e.g., 'TotalRevenue', 'SalesChart'
  title: string;
}

interface DashboardCanvasProps {
  // The list of widgets to display on the canvas.
  widgets: WidgetConfig[];
  // Callback function to notify the parent when the widget order changes.
  onWidgetsChange: (widgets: WidgetConfig[]) => void;
}

const DashboardCanvas: React.FC<DashboardCanvasProps> = ({ widgets, onWidgetsChange }) => {
  // Local state to manage the order of widgets for framer-motion.
  const [localWidgets, setLocalWidgets] = useState(widgets);

  console.log('DashboardCanvas loaded');

  // Sync local state if the parent component updates the widgets prop.
  useEffect(() => {
    setLocalWidgets(widgets);
  }, [widgets]);

  const handleReorder = (newOrder: WidgetConfig[]) => {
    setLocalWidgets(newOrder);
    onWidgetsChange(newOrder);
  };

  return (
    <div className="bg-gray-50/50 dark:bg-gray-900/50 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-4 min-h-[600px] w-full">
      {localWidgets.length > 0 ? (
        <Reorder.Group
          axis="y"
          values={localWidgets}
          onReorder={handleReorder}
          layoutScroll
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {localWidgets.map((widget) => (
            <Reorder.Item
              key={widget.id}
              value={widget}
              className="relative rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-grab active:cursor-grabbing"
              // NOTE: For a more advanced grid, you might use a library like react-grid-layout
              // to support both reordering and resizing. This implementation focuses on reordering.
              // Sizing would be managed per-widget, e.g., using col-span classes.
              // For simplicity here, all widgets are the same size.
            >
              <DashboardWidget
                title={widget.title}
                widgetType={widget.type}
                onDelete={() => console.log(`Delete widget ${widget.id}`)}
                onConfigure={() => console.log(`Configure widget ${widget.id}`)}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 dark:text-gray-400">
          <LayoutGrid className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold">Your Dashboard is Empty</h2>
          <p className="mt-2 max-w-sm">
            To get started, find the widgets you need in the 'Widget Library' panel and drag them onto this canvas.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardCanvas;