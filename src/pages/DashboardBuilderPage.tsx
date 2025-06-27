import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye } from 'lucide-react';

// Custom Components
import AppHeader from '@/components/layout/AppHeader';
import LeftSidebar from '@/components/layout/LeftSidebar';
import DashboardCanvas, { WidgetConfig } from '@/components/DashboardCanvas';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '@/components/ui/resizable';

// Initial state for the dashboard widgets for demonstration purposes.
const initialWidgets: WidgetConfig[] = [
  { id: 'widget-1', type: 'TotalRevenue', title: 'Total Revenue' },
  { id: 'widget-2', type: 'SalesChart', title: 'Sales Over Time' },
  { id: 'widget-3', type: 'TopProducts', title: 'Top Selling Products' },
];

const DashboardBuilderPage = () => {
  console.log('DashboardBuilderPage loaded');
  const navigate = useNavigate();
  const [widgets, setWidgets] = useState<WidgetConfig[]>(initialWidgets);
  const [dashboardName] = useState('Q4 Sales Goals'); // Placeholder name

  const handleSaveDashboard = () => {
    console.log('Saving dashboard:', { name: dashboardName, layout: widgets });
    // In a real app, you would post this data to a server.
    // After saving, navigate to the view page as per the user journey.
    alert('Dashboard saved successfully!');
    navigate('/dashboard-view');
  };
  
  const handlePreview = () => {
    console.log('Navigating to preview.');
    // The view page can serve as the preview.
    navigate('/dashboard-view');
  };

  const handleWidgetsChange = (newWidgets: WidgetConfig[]) => {
    setWidgets(newWidgets);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-950">
      <AppHeader />
      <main className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal" className="h-full">
          <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
            <LeftSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={80} minSize={70}>
            <div className="flex flex-col h-full">
              {/* Main Content Header */}
              <div className="flex items-center justify-between p-4 border-b bg-background">
                <h1 className="text-xl font-bold">{dashboardName}</h1>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handlePreview}>
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button size="sm" onClick={handleSaveDashboard}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Dashboard
                  </Button>
                </div>
              </div>
              {/* Dashboard Canvas Area */}
              <div className="flex-1 overflow-y-auto p-6">
                <DashboardCanvas
                  widgets={widgets}
                  onWidgetsChange={handleWidgetsChange}
                />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
};

export default DashboardBuilderPage;