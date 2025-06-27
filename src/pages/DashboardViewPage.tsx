import React from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Pencil } from 'lucide-react';

import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import DashboardWidget from '@/components/DashboardWidget';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Placeholder data for the charts and widgets
const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
];

const topProducts = [
  { id: 1, name: 'Wireless Noise-Cancelling Headphones', sales: 1200 },
  { id: 2, name: 'Smart Fitness Tracker', sales: 950 },
  { id: 3, name: 'Portable Espresso Maker', sales: 820 },
  { id: 4, name: 'Organic Green Tea Set', sales: 650 },
];

const DashboardViewPage = () => {
  console.log('DashboardViewPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <AppHeader />

      <main className="flex-grow container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Q4 Sales Goals</h1>
          <Link to="/dashboard-builder">
            <Button>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Dashboard
            </Button>
          </Link>
        </div>

        {/* Responsive grid for dashboard widgets */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Total Revenue Widget */}
          <DashboardWidget title="Total Revenue">
            <div className="text-4xl font-bold">$1,250,345</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </DashboardWidget>

          {/* Average Order Value Widget */}
          <DashboardWidget title="Average Order Value">
            <div className="text-4xl font-bold">$125.50</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </DashboardWidget>
          
          {/* Subscriptions Widget */}
          <DashboardWidget title="Active Subscriptions">
            <div className="text-4xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">+32 since last week</p>
          </DashboardWidget>
          
           {/* Conversion Rate Widget */}
           <DashboardWidget title="Conversion Rate">
            <div className="text-4xl font-bold">3.24%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last month</p>
          </DashboardWidget>

          {/* Sales Over Time Chart Widget - Spanning two columns on larger screens */}
          <div className="lg:col-span-2">
            <DashboardWidget title="Sales Over Time">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        borderColor: "hsl(var(--border))",
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </DashboardWidget>
          </div>

          {/* Top Selling Products Widget - Spanning two columns on larger screens */}
          <div className="lg:col-span-2">
            <DashboardWidget title="Top Selling Products">
               <ol className="space-y-2 list-decimal list-inside text-sm">
                  {topProducts.map((product) => (
                    <li key={product.id}>
                      <span className="font-medium">{product.name}</span>
                      <span className="text-muted-foreground ml-2">- {product.sales} units</span>
                    </li>
                  ))}
                </ol>
            </DashboardWidget>
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
};

export default DashboardViewPage;