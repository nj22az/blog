import React, { useState } from 'react';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Copy,
  Send,
  Check,
  ExternalLink
} from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  description = '',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareData = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
    description: encodeURIComponent(description),
    text: encodeURIComponent(`${title} - ${description}`)
  };

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareData.url}&quote=${shareData.text}`,
      color: 'text-blue-600',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'X (Twitter)',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${shareData.url}&text=${shareData.text}`,
      color: 'text-gray-900',
      bgColor: 'hover:bg-gray-50'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${shareData.text}%20${shareData.url}`,
      color: 'text-green-600',
      bgColor: 'hover:bg-green-50'
    },
    {
      name: 'Telegram',
      icon: Send,
      url: `https://t.me/share/url?url=${shareData.url}&text=${shareData.text}`,
      color: 'text-blue-500',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'LINE',
      icon: ExternalLink,
      url: `https://social-plugins.line.me/lineit/share?url=${shareData.url}&text=${shareData.text}`,
      color: 'text-green-500',
      bgColor: 'hover:bg-green-50'
    },
    {
      name: 'KakaoTalk',
      icon: ExternalLink,
      url: `https://story.kakao.com/share?url=${shareData.url}&text=${shareData.text}`,
      color: 'text-yellow-600',
      bgColor: 'hover:bg-yellow-50'
    }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url
        });
      } catch (err) {
        console.error('Native share failed:', err);
        setIsOpen(true);
      }
    } else {
      setIsOpen(true);
    }
  };

  const handleSocialShare = (platform: typeof socialPlatforms[0]) => {
    window.open(platform.url, '_blank', 'width=600,height=400');
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleNativeShare}
        className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-neutral-50"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Share modal */}
          <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-neutral-200 p-4 z-50 min-w-72">
            <h3 className="text-base font-medium text-neutral-900 mb-3">Share article</h3>
            
            {/* Social platforms grid */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              {socialPlatforms.map((platform) => {
                const IconComponent = platform.icon;
                return (
                  <button
                    key={platform.name}
                    onClick={() => handleSocialShare(platform)}
                    className={`flex items-center gap-2 p-2 rounded-md ${platform.bgColor} transition-colors duration-200 text-left`}
                  >
                    <IconComponent className={`h-4 w-4 ${platform.color}`} />
                    <span className="text-sm text-neutral-700">{platform.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Copy link */}
            <div className="border-t border-neutral-200 pt-3">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-neutral-50 transition-colors duration-200 w-full text-left"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4 text-neutral-600" />
                )}
                <span className="text-sm text-neutral-700">
                  {copied ? 'Link copied!' : 'Copy link'}
                </span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};