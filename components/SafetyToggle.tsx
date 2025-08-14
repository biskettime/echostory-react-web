import { useState } from 'react';
import svgPaths from '../imports/svg-dsd6k1lo9j';

interface SafetyToggleProps {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  size?: 'small' | 'normal';
}

export function SafetyToggle({ checked, onToggle, size = 'normal' }: SafetyToggleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    onToggle(!checked);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  const dimensions = size === 'small' 
    ? { width: '28px', height: '11.2px', iconSize: '16px', iconTop: '-2px' }
    : { width: '35px', height: '13.99px', iconSize: '20px', iconTop: '-2.5px' };

  return (
    <div className="flex items-center gap-[8.99px]">
      <div className="flex flex-col font-['Inter:Medium',_'Noto_Sans_KR:Regular',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[13.125px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Safety</p>
      </div>
      
      <button 
        onClick={handleToggle}
        className={`relative rounded-[34px] shrink-0 transition-all duration-200 ${ 
          checked ? 'bg-[#34c759]' : 'bg-[#8e8e93]'
        } ${isAnimating ? 'scale-95' : 'scale-100'}`}
        style={{ 
          width: dimensions.width, 
          height: dimensions.height 
        }}
        aria-label={`Safety mode ${checked ? 'on' : 'off'}`}
      >
        {/* Toggle Handle with Consistent Shield Icon */}
        <div 
          className={`absolute bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-center p-0 rounded-[10px] transition-all duration-200 ${ 
            checked ? (size === 'small' ? 'left-[14.4px]' : 'left-[18px]') : 'left-[1px]'
          }`}
          style={{ 
            width: dimensions.iconSize, 
            height: dimensions.iconSize,
            top: dimensions.iconTop
          }}
        >
          {/* Consistent Safety Shield Icon for both states */}
          <div 
            className="relative shrink-0 flex items-center justify-center"
            style={{ 
              width: dimensions.iconSize, 
              height: dimensions.iconSize 
            }}
          >
            <svg 
              className="block" 
              fill="none" 
              preserveAspectRatio="none" 
              role="presentation" 
              viewBox="0 0 20 20"
              style={{
                width: size === 'small' ? '12px' : '14px',
                height: size === 'small' ? '12px' : '14px'
              }}
            >
              <g clipPath="url(#clip0_107_809)">
                <path
                  d={svgPaths.p25566600}
                  fill={checked ? "#34c759" : "#8e8e93"}
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p3d3c7700}
                  fill={checked ? "#62E082" : "#b0b0b0"}
                  fillRule="evenodd"
                />
                <path
                  d={svgPaths.p2f639d00}
                  fill={checked ? "#34C759" : "#8e8e93"}
                />
                <path
                  d={svgPaths.p2e4b80}
                  fill="white"
                />
                <path
                  clipRule="evenodd"
                  d={svgPaths.p1d410f00}
                  fill={checked ? "url(#paint0_linear_107_809)" : "#b0b0b0"}
                  fillRule="evenodd"
                />
                <g>
                  <mask
                    height="4"
                    id="mask0_107_809"
                    maskUnits="userSpaceOnUse"
                    style={{ maskType: "luminance" }}
                    width="4"
                    x="8"
                    y="6"
                  >
                    <g>
                      <path
                        d={svgPaths.p1d6d8600}
                        fill="white"
                      />
                    </g>
                  </mask>
                  <g mask="url(#mask0_107_809)">
                    <path
                      d={svgPaths.p302c8800}
                      fill="white"
                    />
                  </g>
                </g>
              </g>
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_107_809"
                  x1="10.0121"
                  x2="10.0121"
                  y1="9.54712"
                  y2="11.4609"
                >
                  <stop offset="0.255208" stopColor={checked ? "#34C759" : "#8e8e93"} />
                  <stop offset="1" stopColor={checked ? "#99F2AF" : "#b0b0b0"} />
                </linearGradient>
                <clipPath id="clip0_107_809">
                  <rect fill="white" height="20" width="20" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}