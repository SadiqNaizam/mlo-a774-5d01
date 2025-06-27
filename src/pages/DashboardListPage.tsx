import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Icons
import { MoreHorizontal, PlusCircle, Eye, Pencil, Trash2 } from 'lucide-react';

// Mock Data
const dashboards = [
  { id: 'dsh_1', name: 'Q4 Sales Goals', lastUpdated: '2024-07-15' },
  { id: 'dsh_2', name: 'Marketing Campaign Performance', lastUpdated: '2024-07-12' },
  { id: 'dsh_3', name: 'Inventory & Stock Levels', lastUpdated: '2024-07-10' },
  { id: 'dsh_4', name: 'Customer Support Tickets', lastUpdated: '2024-06-28' },
];

const DashboardListPage: React.FC = () => {
  console.log('DashboardListPage loaded');
  const navigate = useNavigate();
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);
  const [newDashboardName, setNewDashboardName] = useState('');

  const handleCreateDashboard = () => {
    if (newDashboardName.trim()) {
      console.log(`Creating dashboard named: ${newDashboardName}`);
      // In a real app, you'd save this and then navigate.
      // The user journey specifies navigating to the builder page.
      setCreateDialogOpen(false);
      navigate('/dashboard-builder'); // Path from App.tsx
    }
  };

  const handleDeleteDashboard = (id: string, name: string) => {
    // In a real app, this would call an API to delete the dashboard
    alert(`The "Delete" functionality for dashboard "${name}" is a placeholder.`);
    console.log(`Deleting dashboard with id: ${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1 bg-muted/20">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">My Dashboards</h1>
            <Dialog open={isCreateDialogOpen} onOpenChange={setCreateDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Create New Dashboard
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create New Dashboard</DialogTitle>
                  <DialogDescription>
                    Give your new dashboard a name to get started. You can add widgets later.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={newDashboardName}
                      onChange={(e) => setNewDashboardName(e.target.value)}
                      placeholder="e.g., Q4 Sales Goals"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setCreateDialogOpen(false)}>Cancel</Button>
                  <Button type="submit" onClick={handleCreateDashboard}>Create Dashboard</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Existing Dashboards</CardTitle>
              <CardDescription>
                View, edit, or delete your saved dashboards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dashboard Name</TableHead>
                    <TableHead className="hidden md:table-cell">Last Updated</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {dashboards.map((dashboard) => (
                    <TableRow key={dashboard.id}>
                      <TableCell className="font-medium">{dashboard.name}</TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">
                        {dashboard.lastUpdated}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => navigate('/dashboard-view')}>
                              <Eye className="mr-2 h-4 w-4" />
                              View
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => navigate('/dashboard-builder')}>
                              <Pencil className="mr-2 h-4 w-4" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              className="text-red-600 focus:text-red-600 focus:bg-red-50"
                              onClick={() => handleDeleteDashboard(dashboard.id, dashboard.name)}
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <AppFooter />
    </div>
  );
};

export default DashboardListPage;