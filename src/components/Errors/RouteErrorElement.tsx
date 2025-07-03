import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

function RouteErrorElement() {
  const error = useRouteError();

  // Safely narrow down the error type
  const status = isRouteErrorResponse(error) ? error.status : undefined;
  const statusText = isRouteErrorResponse(error) ? error.statusText : undefined;
  const message =
    typeof error === 'object' && error !== null && 'message' in error
      ? (error as { message?: string }).message
      : undefined;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-5 text-center">
      <h2 className="text-2xl font-semibold">{status === 404 ? 'Page Not Found' : 'Route Error'}</h2>
      <p className="mt-2 text-foreground">
        {status === 404
          ? 'The page you are looking for does not exist.'
          : statusText || message || 'An error occurred while loading this page.'}
      </p>

      {import.meta.env.DEV && (
        <details className="mt-5 w-full max-w-md rounded  p-3 text-left">
          <summary className="cursor-pointer font-medium">Error Details</summary>
          <pre className="mt-2 text-xs whitespace-pre-wrap break-words">
            {error
              ? error instanceof Error
                ? error.stack || error.message
                : typeof error === 'string'
                ? error
                : JSON.stringify(error, null, 2)
              : null}
          </pre>
        </details>
      )}

      <a
        href="/"
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-muted-foreground shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Go back home
      </a>
    </div>
  );
}

export default RouteErrorElement;
