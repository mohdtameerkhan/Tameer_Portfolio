import React from 'react';
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/images.png';
import jsLogo from '../assets/js.png';
import framerLogo from '../assets/framer.png';
import reactLogo from '../assets/React.png';
import TailwindLogo from '../assets/Tailwind.webp';



export default function FloatingLogos() {
 const logos = [
  { id: 'html', label: 'HTML', size: 100, bg: '', src: htmlLogo },
  { id: 'css', label: 'CSS', size: 100, bg: '', src: cssLogo },
  { id: 'framer', label: 'framer', size: 100, bg: '', src: framerLogo },
  { id: 'js', label: 'JS', size: 100, bg: '', src: jsLogo },
  { id: 'react', label: 'React', size: 90, bg: '', src: reactLogo },
  { id: 'Tailwind', label: 'Tailwind', size: 70, bg: '', src: TailwindLogo }
  
];


 
  const positions = logos.map((_, i) => {
    
    const left = (i * 23 + 11) % 100; // percent
    const top = (i * 37 + 7) % 90; // percent
    const duration = 6 + (i % 4) * 2; // seconds
    const delay = (i % 5) * 0.6; // seconds
    const scale = 0.85 + (i % 3) * 0.15;
    return { left, top, duration, delay, scale };
  });

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        {/* subtle background gradient so logos read nicely on any page */}
        <div className=" w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent" />
      </div>

      {logos.map((logo, i) => {
        const pos = positions[i];
        return (
          <div
            key={logo.id}
            className={`overflow-hidden absolute rounded-full flex items-center justify-center shadow-2xl ${logo.bg} ${logo.label === 'JS' ? 'ring-2 ring-black/10' : ''}`}
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              width: `${logo.size}px`,
              height: `${logo.size}px`,
              transform: `translate(-50%, -50%) scale(${pos.scale})`,
              animation: `float ${pos.duration}s ease-in-out ${pos.delay}s infinite alternate, drift ${12 + (i % 3) * 4}s linear ${pos.delay}s infinite`,
            }}
            aria-hidden
          >
           <img
  src={logo.src}
  alt={logo.label}
  className="w-full h-full object-contain p-2"
/>
          </div>
        );
      })}

      {/* local styles for the animations; keeps everything inside this single file */}
      <style>{`
        @keyframes float {
          0% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
          50% { transform: translate(-50%, -50%) translateY(-18px) rotate(6deg); }
          100% { transform: translate(-50%, -50%) translateY(0) rotate(0deg); }
        }

        /* slow horizontal drift to add variety */
        @keyframes drift {
          0% { transform: translate(-50%, -50%) translateX(0); }
          50% { transform: translate(-50%, -50%) translateX(18px); }
          100% { transform: translate(-50%, -50%) translateX(0); }
        }

        /* make sure nested animations combine nicely (we use comma-separated animations inline)
           If you prefer using Tailwind utility classes for animations, move these keyframes into
           your global CSS and configure Tailwind accordingly. */
      `}</style>
    </div>
  );
}

