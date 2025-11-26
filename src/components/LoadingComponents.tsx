import { memo } from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = memo(function LoadingSpinner({ 
  size = 'md', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} border-4 border-indigo-400/30 border-t-indigo-400 rounded-full animate-spin`}></div>
      <div className={`absolute inset-0 ${sizeClasses[size]} border-4 border-violet-400/20 border-b-violet-400 rounded-full animate-spin animate-reverse`} style={{ animationDelay: '0.15s' }}></div>
    </div>
  );
});

interface PageLoadingProps {
  message?: string;
}

export const PageLoading = memo(function PageLoading({ 
  message = 'Carregando...' 
}: PageLoadingProps) {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-6 mx-auto" />
        <p className="text-xl text-gray-300 animate-pulse">{message}</p>
      </div>
    </div>
  );
});

interface SectionLoadingProps {
  height?: string;
  message?: string;
}

export const SectionLoading = memo(function SectionLoading({ 
  height = 'min-h-[400px]',
  message = 'Carregando seção...' 
}: SectionLoadingProps) {
  return (
    <div className={`flex items-center justify-center ${height} bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800`}>
      <div className="text-center animate-fade-in">
        <LoadingSpinner size="md" className="mb-4 mx-auto" />
        <p className="text-gray-300 animate-pulse">{message}</p>
      </div>
    </div>
  );
});