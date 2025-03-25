import { useRef } from 'react';
import { useStickySidebar } from '../hooks/useStickySidebar';

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  
  const { isFixed, activeIndex, progress } = useStickySidebar(sectionRef, stepRefs);

  return (
    <section ref={sectionRef} className="how-it-works-section">
      {/* Sidebar cố định */}
      <div className={`how-it-works-sidebar ${isFixed ? 'fixed' : ''}`}>
        <p className="rotate-text">How it works</p>

        {/* Thanh tiến trình cuộn */}
        <div className="scroll-progress-bar">
          <div className="scroll-progress-indicator" style={{ height: `${progress}%` }}></div>
        </div>

        <ul>
          <li className={activeIndex === 0 ? 'active' : ''}>Assessment</li>
          <li className={activeIndex === 1 ? 'active' : ''}>Discover</li>
          <li className={activeIndex === 2 ? 'active' : ''}>Explore</li>
        </ul>
        
      </div>

      {/* Nội dung Section 3 */}
      <div className="how-it-works-content">
        <div ref={stepRefs[0]} className="step">
          <img src="/images/pic 1.png"  />
        </div>
        <div ref={stepRefs[1]} className="step">
          <img src="/images/pic 2.png" />
        </div>
        <div ref={stepRefs[2]} className="step">
          <img src="/images/pic 3.png" />
        </div>
      </div>
    </section>
  );
}
