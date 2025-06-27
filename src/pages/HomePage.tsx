import React from 'react';
import { Link } from 'react-router-dom';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LayoutTemplate, BarChartBig, Palette } from 'lucide-react';

const HomePage: React.FC = () => {
  console.log('HomePage loaded');

  const features = [
    {
      icon: <LayoutTemplate className="h-10 w-10 text-primary mb-4" />,
      title: 'Drag & Drop Builder',
      description: 'Effortlessly design your perfect dashboard with our intuitive drag-and-drop interface. No coding required.',
    },
    {
      icon: <BarChartBig className="h-10 w-10 text-primary mb-4" />,
      title: 'Powerful Widgets',
      description: 'Access a rich library of data widgets—from KPIs and charts to tables—to visualize your most important metrics.',
    },
    {
      icon: <Palette className="h-10 w-10 text-primary mb-4" />,
      title: 'Fully Customizable',
      description: 'Tailor every aspect of your dashboard. Rearrange, resize, and configure widgets to fit your unique business needs.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Build the eCommerce Dashboard You've Always Wanted
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
              Stop settling for generic reports. Create a custom, real-time view of your business performance with our flexible dashboard builder.
            </p>
            <Link to="/dashboard-list">
              <Button size="lg">Get Started Now</Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-24 bg-muted/40">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">Why Choose Our Dashboard Builder?</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                We provide the tools you need to turn raw data into actionable insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Join hundreds of store owners who are making smarter decisions with personalized analytics.
            </p>
            <Link to="/dashboard-list">
              <Button size="lg" variant="default">
                Create Your First Dashboard
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default HomePage;