import type { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
}

export function CodeBlock({ children }: CodeBlockProps) {
  return (
    <pre className="bg-gray-800 p-4 rounded-lg overflow-auto">
      <code className="text-white font-mono">{children}</code>
    </pre>
  );
}