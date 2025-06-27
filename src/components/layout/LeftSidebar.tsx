import React from 'react';
import WidgetLibraryPanel from '@/components/WidgetLibraryPanel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shapes } from 'lucide-react';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  return (
    <aside className="h-full w-80 flex-col border-r bg-muted/40 hidden md:flex">
        <div className="flex h-16 items-center border-b px-6">
            <div className="flex items-center gap-2 font-semibold">
                <Shapes className="h-6 w-6" />
                <span>Widget Library</span>
            </div>
        </div>
        <div className="flex-1">
            <ScrollArea className="h-full">
                <div className="p-4">
                    <WidgetLibraryPanel />
                </div>
            </ScrollArea>
        </div>
    </aside>
  );
};

export default LeftSidebar;