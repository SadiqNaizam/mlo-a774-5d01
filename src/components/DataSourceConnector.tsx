import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { KeyRound, CheckCircle, XCircle, Loader2, Plug } from "lucide-react";

type ConnectionStatus = 'idle' | 'testing' | 'success' | 'error';

const DataSourceConnector: React.FC = () => {
  const [step, setStep] = useState(1);
  const [apiKey, setApiKey] = useState('');
  const [apiSecret, setApiSecret] = useState('');
  const [status, setStatus] = useState<ConnectionStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  console.log('DataSourceConnector loaded');

  const handleTestConnection = async () => {
    setStatus('testing');
    setErrorMessage('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate success/failure
    if (apiKey === 'valid-key' && apiSecret === 'valid-secret') {
      setStatus('success');
      setStep(2);
    } else {
      setStatus('error');
      setErrorMessage('Invalid credentials. Please check your API Key and Secret.');
      setStep(2);
    }
  };

  const handleReset = () => {
    setStep(1);
    setStatus('idle');
    setApiKey('');
    setApiSecret('');
    setErrorMessage('');
  };

  const isTesting = status === 'testing';

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plug className="h-6 w-6" />
          Connect Data Source
        </CardTitle>
        <CardDescription>
          Enter your eCommerce store API credentials to link your data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Progress value={step === 1 ? 50 : 100} className="w-full" />

        {step === 1 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                type="password"
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                disabled={isTesting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="api-secret">API Secret</Label>
              <Input
                id="api-secret"
                type="password"
                placeholder="Enter your API secret"
                value={apiSecret}
                onChange={(e) => setApiSecret(e.target.value)}
                disabled={isTesting}
              />
            </div>
            <div className="text-sm text-muted-foreground pt-2">
              For testing, use `valid-key` and `valid-secret`.
            </div>
          </div>
        )}

        {step === 2 && status === 'success' && (
          <Alert variant="default" className="bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">Connection Successful!</AlertTitle>
            <AlertDescription className="text-green-700">
              Your store has been successfully connected. You can now use your data across the dashboard.
            </AlertDescription>
          </Alert>
        )}

        {step === 2 && status === 'error' && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertTitle>Connection Failed</AlertTitle>
            <AlertDescription>
              {errorMessage}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {step === 1 && (
          <Button onClick={handleTestConnection} disabled={isTesting || !apiKey || !apiSecret}>
            {isTesting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isTesting ? 'Testing...' : 'Test Connection'}
          </Button>
        )}
        {step === 2 && status === 'success' && (
           <Button variant="outline" onClick={handleReset}>Connect Another</Button>
        )}
         {step === 2 && status === 'error' && (
          <Button variant="outline" onClick={handleReset}>
            Try Again
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default DataSourceConnector;