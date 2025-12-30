"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  value: {
    code?: string;
    language?: string;
    filename?: string;
  };
}

export function CodeBlock({ value }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const code = value?.code || '';
  const language = value?.language || 'text';
  const filename = value?.filename;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="my-6 border border-gray-200 rounded-lg overflow-hidden w-full max-w-full">
      {/* Header */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-2 flex items-center justify-between min-w-0">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          {filename && (
            <span className="text-xs font-mono text-gray-700 truncate">{filename}</span>
          )}
          <span className="text-xs font-medium text-gray-700 uppercase whitespace-nowrap">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
          title="Copy code"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      {/* Code */}
      <pre className="bg-white p-4 w-full max-w-full whitespace-pre-wrap break-words">
        <code className={`language-${language} text-sm block`}>
          {code}
        </code>
      </pre>
    </div>
  );
}

