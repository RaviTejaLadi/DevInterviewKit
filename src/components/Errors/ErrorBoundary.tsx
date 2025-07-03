import { Component, ReactNode, ErrorInfo } from 'react';
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(_: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });

    console.error('Error Boundary caught an error:', error, errorInfo);

    // You can also log to an external error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-5 text-center min-h-screen flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold text-foreground">Something went wrong</h2>
          <p className="mt-2 text-muted-foreground">An unexpected error occurred. Please try again.</p>

          {import.meta.env.DEV && this.state.error && (
            <Accordion type="single" collapsible className="mt-5">
              <AccordionItem value="error-details">
                <AccordionTrigger className="text-left p-2.5 hover:no-underline">Error Details</AccordionTrigger>
                <AccordionContent className="p-2.5">
                  <pre className="text-xs text-left mt-2 whitespace-pre-wrap">
                    {this.state.error.toString()}
                    <br />
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}

          <div className="mt-5 flex gap-2">
            <Button onClick={this.handleRetry}>Try Again</Button>
            <Button variant={'secondary'} onClick={() => (window.location.href = '/')}>
              Go Home
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
