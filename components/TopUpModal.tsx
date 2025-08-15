import { useState } from 'react';
import { X } from 'lucide-react';

interface TopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPoints: number;
  onPointsPurchase: (points: number, amount: number) => void;
}

interface PointPackage {
  points: number;
  price: number;
  bonus?: number;
  popular?: boolean;
}

export function TopUpModal({ isOpen, onClose, currentPoints, onPointsPurchase }: TopUpModalProps) {
  const [selectedPackage, setSelectedPackage] = useState<PointPackage | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'kakaopay' | 'toss'>('card');

  const pointPackages: PointPackage[] = [
    { points: 100, price: 0.99 },
    { points: 500, price: 4.99, bonus: 50 },
    { points: 1000, price: 9.99, bonus: 150, popular: true },
    { points: 2000, price: 19.99, bonus: 400 },
    { points: 5000, price: 49.99, bonus: 1200 },
    { points: 10000, price: 99.99, bonus: 3000 },
  ];

  const handlePurchase = () => {
    if (selectedPackage) {
      const totalPoints = selectedPackage.points + (selectedPackage.bonus || 0);
      onPointsPurchase(totalPoints, selectedPackage.price);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1b1b] rounded-lg w-full max-w-md max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#333333]">
          <h2 className="text-[#ffffff] text-lg font-medium">포인트 충전</h2>
          <button 
            onClick={onClose}
            className="text-[#ffffff] hover:text-[#ff9500] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {/* Current Points */}
          <div className="p-4 bg-[#282828] m-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[#ffffff] text-sm font-medium">내 포인트</span>
                <span className="text-[#ff9500] text-2xl font-bold">{currentPoints.toLocaleString()}P</span>
              </div>
              
              {/* Daily Check-in Info */}
              <div className="flex flex-col items-end space-y-1">
                <div className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded text-xs text-[rgba(255,255,255,0.9)]">
                  200P
                </div>
                <div className="bg-[rgba(255,255,255,0.15)] px-2 py-1 rounded text-xs text-[rgba(255,255,255,0.9)]">
                  오전 9시 초기화
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <span className="text-[#ffffff] text-sm">출석체크</span>
              <button className="bg-[#141414] border border-[#424242] px-4 py-1 rounded text-[#ffffff] text-sm hover:bg-[#1f1f1f] transition-colors">
                받기
              </button>
            </div>
          </div>

          {/* Point Packages */}
          <div className="p-4">
            <h3 className="text-[#ffffff] text-base font-medium mb-3">충전 금액 선택</h3>
            <div className="grid grid-cols-2 gap-3">
              {pointPackages.map((pkg, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`relative p-3 rounded-lg border transition-all ${
                    selectedPackage === pkg
                      ? 'border-[#ff9500] bg-[rgba(255,149,0,0.1)]'
                      : 'border-[#333333] bg-[#282828] hover:border-[#444444]'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-1 -right-1 bg-[#ff9500] text-black text-xs px-2 py-0.5 rounded-full font-medium">
                      인기
                    </div>
                  )}
                  
                  <div className="text-left">
                    <div className="text-[#ffffff] font-medium">
                      {pkg.points.toLocaleString()}P
                      {pkg.bonus && (
                        <span className="text-[#ff9500] text-sm ml-1">
                          +{pkg.bonus}P
                        </span>
                      )}
                    </div>
                    <div className="text-[#aaaaaa] text-sm">
                      ${pkg.price.toFixed(2)}
                    </div>
                    {pkg.bonus && (
                      <div className="text-[#ff9500] text-xs mt-1">
                        보너스 {pkg.bonus}P
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          {selectedPackage && (
            <div className="p-4 border-t border-[#333333]">
              <h3 className="text-[#ffffff] text-base font-medium mb-3">결제 방법</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-[#ff9500] bg-[rgba(255,149,0,0.1)]'
                      : 'border-[#333333] bg-[#282828] hover:border-[#444444]'
                  }`}
                >
                  <span className="text-[#ffffff]">신용카드/체크카드</span>
                  <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    paymentMethod === 'card' ? 'border-[#ff9500] bg-[#ff9500]' : 'border-[#666666]'
                  }`}>
                    {paymentMethod === 'card' && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('kakaopay')}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                    paymentMethod === 'kakaopay'
                      ? 'border-[#ff9500] bg-[rgba(255,149,0,0.1)]'
                      : 'border-[#333333] bg-[#282828] hover:border-[#444444]'
                  }`}
                >
                  <span className="text-[#ffffff]">카카오페이</span>
                  <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    paymentMethod === 'kakaopay' ? 'border-[#ff9500] bg-[#ff9500]' : 'border-[#666666]'
                  }`}>
                    {paymentMethod === 'kakaopay' && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                    )}
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('toss')}
                  className={`w-full flex items-center justify-between p-3 rounded-lg border transition-colors ${
                    paymentMethod === 'toss'
                      ? 'border-[#ff9500] bg-[rgba(255,149,0,0.1)]'
                      : 'border-[#333333] bg-[#282828] hover:border-[#444444]'
                  }`}
                >
                  <span className="text-[#ffffff]">토스페이</span>
                  <div className={`w-4 h-4 rounded-full border-2 transition-colors ${
                    paymentMethod === 'toss' ? 'border-[#ff9500] bg-[#ff9500]' : 'border-[#666666]'
                  }`}>
                    {paymentMethod === 'toss' && (
                      <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          )}

          {/* Purchase Summary */}
          {selectedPackage && (
            <div className="p-4 border-t border-[#333333] bg-[#282828] m-4 rounded-lg">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#aaaaaa]">기본 포인트</span>
                  <span className="text-[#ffffff]">{selectedPackage.points.toLocaleString()}P</span>
                </div>
                {selectedPackage.bonus && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#aaaaaa]">보너스 포인트</span>
                    <span className="text-[#ff9500]">+{selectedPackage.bonus.toLocaleString()}P</span>
                  </div>
                )}
                <div className="border-t border-[#333333] pt-2 flex justify-between">
                  <span className="text-[#ffffff] font-medium">총 획득 포인트</span>
                  <span className="text-[#ff9500] font-bold">
                    {(selectedPackage.points + (selectedPackage.bonus || 0)).toLocaleString()}P
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#ffffff] font-medium">결제 금액</span>
                  <span className="text-[#ffffff] font-bold">
                    ${selectedPackage.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#333333] bg-[#1a1b1b] space-y-3">
          {selectedPackage && (
            <button
              onClick={handlePurchase}
              className="w-full bg-[#dc5903] hover:bg-[#e6850e] text-white py-3 rounded-lg font-medium transition-colors shadow-[0px_2px_0px_0px_rgba(180,60,0,0.15)]"
            >
              ${selectedPackage.price.toFixed(2)} 결제하기
            </button>
          )}
          
          <button
            onClick={onClose}
            className="w-full bg-[#141414] hover:bg-[#1f1f1f] text-[rgba(255,255,255,0.85)] py-3 rounded-lg border border-[#424242] transition-colors"
          >
            취소
          </button>
          
          {/* Links */}
          <div className="flex justify-center">
            <button 
              onClick={() => {/* 이용내역 페이지로 이동 */}}
              className="text-[rgba(255,255,255,0.85)] text-sm hover:text-[#ff9500] transition-colors"
            >
              이용내역
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}