import React from 'react';
import { urlFor } from '@/services/sanity';

export interface BlockContentProps {
  content: any[];
  className?: string;
}

export function SanityBlockContent({ content, className = '' }: BlockContentProps) {
  if (!content || !Array.isArray(content)) {
    return null;
  }

  const renderBlock = (block: any, index: number) => {
    if (!block || !block._type) return null;

    switch (block._type) {
      case 'block':
        return renderTextBlock(block, index);
      case 'image':
        return renderImage(block, index);
      case 'code':
        return renderCode(block, index);
      default:
        return null;
    }
  };

  const renderTextBlock = (block: any, index: number) => {
    const { style = 'normal', children = [] } = block;
    
    const text = children.map((child: any, childIndex: number) => {
      if (child._type === 'span') {
        let element = child.text;
        
        if (child.marks && child.marks.length > 0) {
          child.marks.forEach((mark: string) => {
            switch (mark) {
              case 'strong':
                element = <strong key={childIndex}>{element}</strong>;
                break;
              case 'em':
                element = <em key={childIndex}>{element}</em>;
                break;
              case 'code':
                element = <code key={childIndex} className="bg-gray-100 px-1 rounded text-sm font-mono">{element}</code>;
                break;
            }
          });
        }
        
        return element;
      }
      return child.text;
    });

    switch (style) {
      case 'h1':
        return <h1 key={index} className="text-4xl font-bold mb-4">{text}</h1>;
      case 'h2':
        return <h2 key={index} className="text-3xl font-semibold mb-3">{text}</h2>;
      case 'h3':
        return <h3 key={index} className="text-2xl font-medium mb-2">{text}</h3>;
      case 'h4':
        return <h4 key={index} className="text-xl font-medium mb-2">{text}</h4>;
      case 'blockquote':
        return (
          <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
            {text}
          </blockquote>
        );
      default:
        return <p key={index} className="mb-4 leading-relaxed">{text}</p>;
    }
  };

  const renderImage = (block: any, index: number) => {
    if (!block.asset) return null;
    
    const imageUrl = urlFor(block).auto('format').fit('max').url();
    const alt = block.alt || '';
    
    return (
      <div key={index} className="my-6">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-auto rounded-lg"
          loading="lazy"
        />
        {alt && (
          <p className="text-sm text-gray-500 mt-2 text-center italic">
            {alt}
          </p>
        )}
      </div>
    );
  };

  const renderCode = (block: any, index: number) => {
    const { code, language = 'text', filename } = block;
    
    return (
      <div key={index} className="my-6">
        {filename && (
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-mono rounded-t-lg">
            {filename}
          </div>
        )}
        <pre className={`bg-gray-900 text-white p-4 overflow-x-auto ${filename ? 'rounded-b-lg' : 'rounded-lg'}`}>
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      </div>
    );
  };

  return (
    <div className={className}>
      {content.map((block, index) => renderBlock(block, index))}
    </div>
  );
}