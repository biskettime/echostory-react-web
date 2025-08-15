import { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone, DollarSign, History } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { TopUpModal } from './TopUpModal';

interface TopUpScreenProps {
  onBack: () => void;
}

export function TopUpScreen({ onBack }: TopUpScreenProps) {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [currentPoints] = useState(1);
  const [showTopUpModal, setShowTopUpModal] = useState(false);

  const pointPackages = [
    { id: 1, points: 100, price: 1100, popular: false },
    { id: 2, points: 500, price: 5500, popular: true, bonus: 50 },
    { id: 3, points: 1000, price: 11000, popular: false, bonus: 150 },
    { id: 4, points: 2000, price: 22000, popular: false, bonus: 400 },
    { id: 5, points: 5000, price: 55000, popular: false, bonus: 1200 },
    { id: 6, points: 10000, price: 110000, popular: false, bonus: 3000 },
  ];

  const recentTransactions = [
    { id: 1, points: 1000, amount: 11000, date: '2024-01-15', status: 'Completed' },
    { id: 2, points: 500, amount: 5500, date: '2024-01-10', status: 'Completed' },
    { id: 3, points: 100, amount: 1100, date: '2024-01-05', status: 'Completed' },
  ];

  const handlePurchase = (points: number, amount: number) => {
    console.log(`Purchased ${points} points for ₩${amount}`);
    // Handle purchase logic here
  };

  return (
    <div className="flex flex-col h-full bg-[#1e1f1f] text-white overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a1b1b] box-border content-stretch flex flex-row h-[41.99px] items-center justify-between left-0 w-full pl-[15px] pr-0 py-0 top-0 flex-shrink-0">
        {/* Back Button + Title */}
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="text-white p-1 hover:opacity-80 transition-opacity">
            <ArrowLeft size={20} />
          </button>
          <div className="text-white text-lg font-medium">
            Top Up Points
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {/* Current Points - Responsive Design */}
        <Card className="bg-[#282828] border-[#424242] p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-white/60 text-sm">My Points</span>
              <span className="text-[#ff9500] text-2xl sm:text-3xl font-bold">{currentPoints.toLocaleString()}P</span>
              <span className="text-white/40 text-xs">Points never expire</span>
            </div>
            
            {/* Daily Check-in Info */}
            <div className="flex flex-col sm:items-end space-y-1 w-full sm:w-auto">
              <div className="flex flex-row sm:flex-col gap-2 sm:gap-1 sm:items-end">
                <div className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded text-xs text-[rgba(255,255,255,0.9)] flex-shrink-0">
                  200P
                </div>
                <div className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded text-xs text-[rgba(255,255,255,0.9)] flex-shrink-0">
                  Resets at 9AM
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-4">
            <span className="text-white/60 text-sm">Daily Check-in</span>
            <button className="bg-[#141414] border border-[#424242] px-4 py-2 rounded text-white text-sm hover:bg-[#1f1f1f] transition-colors w-full sm:w-auto">
              Claim
            </button>
          </div>
        </Card>

        {/* Quick Access Button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowTopUpModal(true)}
            className="bg-[#dc5903] hover:bg-[#e6850e] text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)]"
          >
            Top Up Points
          </button>
        </div>

        {/* Point Packages */}
        <div className="space-y-4">
          <h3 className="text-white text-lg font-medium">Point Packages</h3>
          <div className="grid grid-cols-2 gap-3">
            {pointPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="relative p-4 rounded-lg border border-[#424242] bg-[#282828]"
              >
                {pkg.popular && (
                  <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#dc5903] text-white text-xs">
                    Popular
                  </Badge>
                )}
                <div className="text-center space-y-2">
                  <div className="text-white font-bold text-lg">
                    {pkg.points.toLocaleString()}P
                    {pkg.bonus && (
                      <span className="text-[#ff9500] text-sm ml-1">
                        +{pkg.bonus}P
                      </span>
                    )}
                  </div>
                  <div className="text-white/60 text-sm">
                    ₩{pkg.price.toLocaleString()}
                  </div>
                  {pkg.bonus && (
                    <div className="text-[#ff9500] text-xs">
                      Bonus {pkg.bonus}P
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <History size={18} className="text-white/60" />
            <h3 className="text-white text-lg font-medium">Recent Transactions</h3>
          </div>
          
          {recentTransactions.length > 0 ? (
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-[#282828] border border-[#424242] rounded-lg"
                >
                  <div className="space-y-1">
                    <div className="text-white text-sm font-medium">
                      +{transaction.points.toLocaleString()}P
                    </div>
                    <div className="text-white/40 text-xs">
                      {new Date(transaction.date).toLocaleDateString('ko-KR')}
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="text-white/60 text-sm">
                      ₩{transaction.amount.toLocaleString()}
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-green-500/20 text-green-400 border-0 text-xs"
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-white/40 text-sm">No transaction history</p>
            </div>
          )}
        </div>

        {/* Help Text */}
        <div className="bg-[#282828]/50 border border-[#424242] rounded-lg p-4">
          <div className="text-white/60 text-xs space-y-2">
            <p>• Points are used for character interactions and story creation</p>
            <p>• All payments are secure and encrypted</p>
            <p>• Points never expire and can be used for all features</p>
            <p>• Contact our support team if you need help</p>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-[#282828]/50 border border-[#424242] rounded-lg p-4">
          <div className="text-white/60 text-xs space-y-1">
            <p className="font-medium text-white/80">Company Information</p>
            <p>The Flow | CEO: David Choi</p>
            <p>Business Registration: 123-45-67890</p>
            <p>Telecommunications Sales Report: 2025-SF-TECH-0673</p>
            <p>Email: contact@theflow.ai</p>
          </div>
        </div>
      </div>

      {/* Top Up Modal */}
      <TopUpModal
        isOpen={showTopUpModal}
        onClose={() => setShowTopUpModal(false)}
        currentPoints={currentPoints}
        onPointsPurchase={handlePurchase}
      />
    </div>
  );
}