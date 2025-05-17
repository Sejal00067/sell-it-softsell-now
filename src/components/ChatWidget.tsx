
import React, { useState, useEffect } from 'react';
import { MessageSquare, X, Send, User } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{type: 'user' | 'bot', content: string, time: string}[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // If first time opening, show welcome message
    if (messages.length === 0 && !isOpen) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setTimeout(() => {
        setMessages([
          {
            type: 'bot',
            content: 'Hello! Welcome to SoftSell. How can I help you with selling your software licenses today?',
            time: currentTime
          }
        ]);
      }, 500);
    }
  };

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message
    setMessages([
      ...messages, 
      { type: 'user', content: message, time: currentTime }
    ]);
    
    setMessage('');
    setIsTyping(true);
    
    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "Thank you for your message! One of our license experts will get back to you shortly. In the meantime, would you like to know more about our valuation process?",
        "We currently support all major software vendors including Microsoft, Adobe, Oracle, and more. Can you tell me which software licenses you're looking to sell?",
        "Our team typically responds within 2 hours during business hours (9am-6pm IST). Would you like us to call you for a faster response?",
        "For enterprise license packages, we offer premium rates and expedited processing. Do you represent a company with multiple licenses to sell?",
        "Based on recent market trends, software licenses are selling quickly! The sooner we can evaluate your licenses, the better value we can offer."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prevMessages => [
        ...prevMessages,
        { type: 'bot', content: randomResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
      ]);
      
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Close chat widget when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.chat-widget-container') && !target.closest('.chat-widget-button')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Chat Widget Button */}
      <button
        onClick={toggleChat}
        className="chat-widget-button fixed right-6 bottom-6 bg-softsell-600 hover:bg-softsell-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all z-50 hover:scale-110"
        aria-label="Chat with us"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
      </button>
      
      {/* Chat Widget Panel */}
      {isOpen && (
        <div className="chat-widget-container fixed right-6 bottom-24 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-2xl z-50 overflow-hidden border border-gray-200 dark:border-gray-700 animate-fade-in-up">
          {/* Header */}
          <div className="bg-softsell-600 text-white p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg">SoftSell Support</h3>
              <button 
                onClick={toggleChat}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-white/80">We typically reply within minutes</p>
          </div>
          
          {/* Chat Messages */}
          <div className="h-80 p-4 overflow-y-auto flex flex-col space-y-3 bg-gray-50 dark:bg-gray-900">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`flex ${msg.type === 'bot' ? 'flex-row' : 'flex-row-reverse'} items-start gap-2`}>
                    {msg.type === 'bot' ? (
                      <div className="bg-softsell-600 rounded-full w-8 h-8 flex items-center justify-center text-white flex-shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="bg-amber-500 rounded-full w-8 h-8 flex items-center justify-center text-white flex-shrink-0">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                    <div className={msg.type === 'user' ? 'chat-message-user' : 'chat-message-bot'}>
                      {msg.content}
                    </div>
                  </div>
                  <span className={`text-xs text-gray-500 mt-1 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] flex flex-col items-start">
                  <div className="flex flex-row items-start gap-2">
                    <div className="bg-softsell-600 rounded-full w-8 h-8 flex items-center justify-center text-white flex-shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="chat-message-bot">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                className="flex-1 py-2 px-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:border-softsell-500 dark:bg-gray-700 dark:text-white"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className={`bg-softsell-600 text-white rounded-md p-2 ${!message.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-softsell-700'}`}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
