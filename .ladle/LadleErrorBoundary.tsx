import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import StackTracey from 'stacktracey';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const stack = new StackTracey(error);
  return (
    <div role="alert">
      <h3>{error.name}</h3>
      <pre>{error.message}</pre>
      {error.stack && (
        <details style={{ paddingBottom: '20px' }}>
          <summary>Error Stack Trace</summary>
          <div>
            {stack.items.map((item) => {
              return (
                <pre>
                  {item.fileName} - {item.file} @ Line {item.line}
                </pre>
              );
            })}
          </div>
        </details>
      )}
      <button onClick={resetErrorBoundary}>Reset Error Boundary</button>
    </div>
  );
}

export const LadleErrorBoundary = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
