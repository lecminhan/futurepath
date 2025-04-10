import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import './styles/quizTabs.css';
import SendSharpIcon from '@mui/icons-material/SendSharp';

interface QuizTabsProps {
  tabIndex: number;
  setTabIndex: Dispatch<SetStateAction<number>>;
  code: string;
  mode: 'mbti' | 'holland';
}

const QuizTabs: React.FC<QuizTabsProps> = ({ tabIndex, setTabIndex, code, mode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  const tabs = mode === 'mbti' ? [{ label: 'Tổng quan' }, { label: 'Điểm mạnh' }, { label: 'Điểm yếu' }, { label: 'Nghề nghiệp phù hợp' }, { label: 'Mối quan hệ' }, { label: `Lời khuyên dành cho ${code}` }] : [{ label: 'Mô tả chung' }, { label: 'Điểm mạnh' }, { label: 'Điểm yếu' }, { label: 'Nghề nghiệp phù hợp' }, { label: `Lời khuyên dành cho ${code}` }];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !tabsContainerRef.current) return;

      const container = containerRef.current;
      const tabsContainer = tabsContainerRef.current;

      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const tabsHeight = tabsContainer.offsetHeight;
      const scrollY = window.scrollY;

      const containerBottom = containerTop + containerHeight;
      const shouldFix = scrollY > containerTop && scrollY < containerBottom - tabsHeight - 40;
      const isAtBottom = scrollY >= containerBottom - tabsHeight - 40;

      setIsFixed(shouldFix || isAtBottom);
      setIsBottom(isAtBottom);
    };

    const optimizedScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', optimizedScroll);
    return () => window.removeEventListener('scroll', optimizedScroll);
  }, []);

  const handleTabClick = (index: number) => {
    setTabIndex(index);

    setTimeout(() => {
      window.scrollTo({ top: 500, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div ref={containerRef} className="parent-tabs-container">
      <div className="cover-tabs" style={{ height: '100px' }}></div>
      <div ref={tabsContainerRef} className={`tabs-container ${isFixed ? 'fixed' : ''} ${isBottom ? 'bottom' : ''}`}>
        <div>
          <h2>{mode === 'mbti' ? `Tìm hiểu về ${code}` : `Tính cách Holland ${code}`}</h2>
          <ul className="tabs-list list-unstyled">
            {tabs.map((tab, index) => (
              <li key={index} className={`quiz-tab-item ${tabIndex === index ? 'active' : ''}`} onClick={() => handleTabClick(index)}>
                <div className="tab-content">
                  <span className={`arrow ${tabIndex === index ? 'visible' : ''}`}>
                    <SendSharpIcon sx={{ fontSize: 25 }} />
                  </span>
                  <span className={`tab-label ${tabIndex === index ? 'visible' : ''}`}>{tab.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizTabs;
