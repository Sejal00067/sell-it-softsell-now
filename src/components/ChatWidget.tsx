
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

// Predefined chat responses
const chatResponses: Record<string, string> = {
  "greeting": "Hi there! 👋 Welcome to SoftSell. How can I help you with selling your software licenses today?",
  "default": "Thanks for your message. Our team is here to help with any questions about selling your software licenses. Would you like to know more about our process or get a free valuation?",
  "how_to_sell": "Selling your license is easy! Simply upload your license details through our secure form, get an instant valuation, and once accepted, receive payment within 48 hours. Would you like to get started?",
  "pricing": "Our pricing is transparent with no hidden fees. We take a small commission (5-10% depending on license type) only when your license is successfully sold. The valuation tool will show you the exact amount you'll receive.",
  "payment_methods": "We offer multiple payment methods including direct bank transfer, PayPal, and major cryptocurrencies. You can select your preferred method during the selling process.",
  "license_types": "We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, SAP, and many more. Enterprise, volume, OEM, and subscription licenses are all eligible for sale on our platform.",
  "security": "Security is our top priority. We use bank-level encryption for all transactions and never store your full license keys on our servers. All buyers are verified to prevent fraud.",
  "timing": "From submission to payment typically takes 24-48 hours for common licenses. Enterprise licenses might take slightly longer as we ensure the best possible valuation."
};

// Keywords to match in user input
const keywordResponses: Record<string, string> = {
  "sell": "how_to_sell",
  "selling": "how_to_sell",
  "how": "how_to_sell",
  "process": "how_to_sell",
  "steps": "how_to_sell",
  
  "price": "pricing",
  "pricing": "pricing",
  "cost": "pricing",
  "fee": "pricing",
  "commission": "pricing",
  
  "pay": "payment_methods",
  "payment": "payment_methods",
  "bank": "payment_methods",
  "paypal": "payment_methods",
  "crypto": "payment_methods",
  
  "accept": "license_types",
  "license": "license_types",
  "software": "license_types",
  "microsoft": "license_types",
  "adobe": "license_types",
  
  "secure": "security",
  "security": "security",
  "safe": "security",
  "encrypted": "security",
  "protection": "security",
  
  "time": "timing",
  "long": "timing",
  "fast": "timing",
  "quick": "timing",
  "receive": "timing",
};

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: chatResponses.greeting, isUser: false }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const getResponseForMessage = (msg: string): string => {
    const lowerMsg = msg.toLowerCase();
    
    // Check for keyword matches
    for (const [keyword, responseKey] of Object.entries(keywordResponses)) {
      if (lowerMsg.includes(keyword)) {
        return chatResponses[responseKey];
      }
    }
    
    // Default response if no keywords match
    return chatResponses.default;
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const userMessage = { id: Date.now(), text: newMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: getResponseForMessage(userMessage.text), 
        isUser: false 
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "How do I sell my license?",
    "What payment methods do you accept?",
    "What types of licenses do you buy?",
    "How long does the process take?"
  ];

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-softsell-600 hover:bg-softsell-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageSquare className="h-6 w-6" />
        )}
      </button>
      
      {/* Chat widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200 dark:border-gray-700 animate-fade-in">
          {/* Chat header */}
          <div className="bg-softsell-600 text-white p-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-softsell-600" />
              </div>
              <div>
                <h3 className="font-medium">SoftSell Assistant</h3>
                <p className="text-xs opacity-80">We typically reply in a few minutes</p>
              </div>
            </div>
          </div>
          
          {/* Chat messages */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <div className="space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id} 
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={message.isUser ? "chat-message-user" : "chat-message-bot"}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-softsell-100 dark:bg-softsell-900/40 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-softsell-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-softsell-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-softsell-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
          </div>
          
          {/* Suggested questions */}
          {messages.length < 3 && (
            <div className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs py-1 px-2 h-auto"
                    onClick={() => {
                      setNewMessage(question);
                      setTimeout(() => {
                        handleSendMessage();
                      }, 100);
                    }}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
          
          {/* Chat input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={newMessage}
                onChange={e => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-softsell-500 dark:bg-gray-700 dark:text-white"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!newMessage.trim()}
                size="icon"
                className="bg-softsell-600 hover:bg-softsell-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
