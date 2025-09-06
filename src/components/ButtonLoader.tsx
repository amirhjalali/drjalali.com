'use client';

interface ButtonLoaderProps {
  loading?: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function ButtonLoader({
  loading = false,
  children,
  loadingText = 'Loading...',
  className = '',
  disabled = false,
  onClick,
  type = 'button'
}: ButtonLoaderProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center ${className} ${
        loading || disabled ? 'opacity-70 cursor-not-allowed' : ''
      }`}
      aria-busy={loading}
      aria-disabled={disabled || loading}
    >
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      <span className={loading ? 'invisible' : ''}>
        {children}
      </span>
      {loading && (
        <span className="sr-only">{loadingText}</span>
      )}
    </button>
  );
}