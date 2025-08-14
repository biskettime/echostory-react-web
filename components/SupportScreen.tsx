import { useState } from 'react';
import { ChevronRight, Mail, MessageCircle, Phone, ExternalLink, ChevronDown, Star, Shield, Zap } from 'lucide-react';

interface SupportScreenProps {
  onBack: () => void;
}

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action: string;
  color: string;
}

export function SupportScreen({ onBack }: SupportScreenProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "How do I create a new story?",
      answer: "Navigate to the Create tab and tap 'New Story'. Follow the prompts to set up your character, scenario, and story settings. You can customize everything from character personality to story themes."
    },
    {
      id: 2,
      question: "What are points and how do I use them?",
      answer: "Points are used for AI features like character responses (5P) and message suggestions (3P). You can earn points through daily activities or purchase point packages in the shop."
    },
    {
      id: 3,
      question: "How do I change my voice settings?",
      answer: "In any chat, tap the hamburger menu (≡) in the top right, then select 'Change Voice'. You can choose from 12 different voices with various personalities and tones."
    },
    {
      id: 4,
      question: "Can I edit my stories after creating them?",
      answer: "Yes! Go to the Create tab and tap on any story marked 'in progress'. You can edit characters, scenarios, and all story elements until you publish or start chatting."
    },
    {
      id: 5,
      question: "How does Safety Mode work?",
      answer: "Safety Mode filters content to ensure appropriate interactions. You can toggle it on/off in your profile settings. When enabled, it prevents explicit or inappropriate content generation."
    }
  ];

  const supportCategories: SupportCategory[] = [
    {
      id: 'chat',
      title: 'Chat & Stories',
      description: 'Get help with conversations, story creation, and character interactions',
      icon: <MessageCircle className="w-5 h-5" />,
      action: 'Get Help',
      color: 'from-[#dc5903] to-[#ff7b3d]'
    },
    {
      id: 'account',
      title: 'Account & Settings',
      description: 'Issues with your profile, points, or app settings',
      icon: <Shield className="w-5 h-5" />,
      action: 'Contact Support',
      color: 'from-[#4caf50] to-[#66bb6a]'
    },
    {
      id: 'technical',
      title: 'Technical Issues',
      description: 'App crashes, login problems, or performance issues',
      icon: <Zap className="w-5 h-5" />,
      action: 'Report Bug',
      color: 'from-[#9c27b0] to-[#ba68c8]'
    }
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleCategoryAction = (categoryId: string) => {
    console.log(`Handling support category: ${categoryId}`);
    // You can implement specific actions for each category here
  };

  const handleContactSupport = () => {
    console.log('Opening contact support');
    // You can implement email or chat functionality here
  };

  const handleVisitHelp = () => {
    console.log('Opening help center');
    // You can implement help center navigation here
  };

  return (
    <div className="bg-[#1a1b1b] min-h-screen relative">
      <div className="mobile-container mx-auto h-full relative">
        
        {/* Header */}
        <div className="bg-[#1a1b1b] sticky top-0 z-20 border-b border-[#424242]/20 backdrop-blur-sm">
          <div className="flex items-center justify-between h-14 px-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onBack}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#2a2a2a] transition-colors"
                aria-label="Go back"
              >
                <ChevronRight className="w-5 h-5 text-white rotate-180" />
              </button>
              <h1 className="text-lg font-semibold text-white">Support & Help</h1>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-3.5rem)] overflow-y-auto scrollbar-hide">
          <div className="px-4 pb-8">
            
            {/* Welcome Section */}
            <div className="py-8 text-center">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#dc5903] to-[#ff7b3d] rounded-full flex items-center justify-center shadow-xl">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#4caf50] to-[#66bb6a] rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white" />
                </div>
              </div>
              <div className="bg-gradient-to-r from-[#dc5903] to-[#ff7b3d] bg-clip-text text-transparent mb-3">
                <h2 className="text-2xl font-bold">EchoStory Support</h2>
              </div>
              <p className="text-[#cccccc] text-sm leading-relaxed max-w-sm mx-auto">
                We're here to help you get the most out of your storytelling experience. 
                Find answers below or reach out to our team.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-[#dc5903] to-[#ff7b3d] rounded-full"></div>
                <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
              </div>
              <div className="grid gap-3">
                <button
                  onClick={handleContactSupport}
                  className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] hover:from-[#3a3a3a] hover:to-[#2e2f2f] rounded-xl p-4 flex items-center justify-between transition-all duration-300 group border border-[#424242]/20 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#dc5903]/20 to-[#ff7b3d]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-[#dc5903]" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-medium">Contact Support</p>
                      <p className="text-[#999999] text-sm">Get personalized help from our team</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#666666] group-hover:text-[#dc5903] transition-colors duration-300" />
                </button>

                <button
                  onClick={handleVisitHelp}
                  className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] hover:from-[#3a3a3a] hover:to-[#2e2f2f] rounded-xl p-4 flex items-center justify-between transition-all duration-300 group border border-[#424242]/20 shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#4caf50]/20 to-[#66bb6a]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ExternalLink className="w-5 h-5 text-[#4caf50]" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-medium">Help Center</p>
                      <p className="text-[#999999] text-sm">Browse our comprehensive guides</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#666666] group-hover:text-[#4caf50] transition-colors duration-300" />
                </button>
              </div>
            </div>

            {/* Support Categories */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-[#4caf50] to-[#66bb6a] rounded-full"></div>
                <h3 className="text-lg font-semibold text-white">How can we help?</h3>
              </div>
              <div className="space-y-4">
                {supportCategories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] rounded-xl p-5 border border-[#424242]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${category.color} bg-opacity-20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold mb-2">{category.title}</h4>
                        <p className="text-[#999999] text-sm mb-4 leading-relaxed">
                          {category.description}
                        </p>
                        <button
                          onClick={() => handleCategoryAction(category.id)}
                          className={`bg-gradient-to-r ${category.color} hover:shadow-lg text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105`}
                        >
                          {category.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-[#9c27b0] to-[#ba68c8] rounded-full"></div>
                <h3 className="text-lg font-semibold text-white">Frequently Asked Questions</h3>
              </div>
              <div className="space-y-3">
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] rounded-xl border border-[#424242]/20 overflow-hidden shadow-lg"
                  >
                    <button
                      onClick={() => toggleFAQ(item.id)}
                      className="w-full p-5 text-left flex items-center justify-between hover:bg-[rgba(255,255,255,0.02)] transition-all duration-300"
                    >
                      <h4 className="text-white font-medium pr-4 leading-relaxed">{item.question}</h4>
                      <ChevronDown
                        className={`w-5 h-5 text-[#666666] transition-all duration-300 flex-shrink-0 ${
                          expandedFAQ === item.id ? 'transform rotate-180 text-[#dc5903]' : ''
                        }`}
                      />
                    </button>
                    {expandedFAQ === item.id && (
                      <div className="px-5 pb-5">
                        <div className="border-t border-[#424242]/20 pt-4">
                          <p className="text-[#cccccc] text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-6 bg-gradient-to-b from-[#ff9800] to-[#ffb74d] rounded-full"></div>
                <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
              </div>
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] rounded-xl p-6 border border-[#424242]/20 shadow-lg">
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#dc5903]/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#dc5903]" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email Support</p>
                      <p className="text-[#999999] text-sm">support@echostory.com</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-[#424242]/20 pt-5">
                    <div className="bg-[#1a1b1b]/50 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#4caf50]/20 rounded-full flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 bg-[#4caf50] rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-[#cccccc] text-sm leading-relaxed">
                            <span className="text-white font-medium">Response Time:</span> We typically respond within 24 hours during business days (Monday-Friday, 9AM-6PM EST).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="text-center py-8 border-t border-[#424242]/20">
              <div className="mb-4">
                <div className="bg-gradient-to-r from-[#dc5903] to-[#ff7b3d] bg-clip-text text-transparent">
                  <p className="font-semibold text-lg">EchoStory</p>
                </div>
                <p className="text-[#999999] text-sm mt-1">Developed by <span className="text-white font-medium">The Flow</span></p>
                <p className="text-[#666666] text-xs">CEO: David Choi</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1e1f1f] rounded-lg p-4 border border-[#424242]/20 inline-block">
                <p className="text-[#666666] text-xs leading-relaxed">
                  EchoStory v1.0.0 • Made with <span className="text-red-500">❤️</span> for storytellers
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}