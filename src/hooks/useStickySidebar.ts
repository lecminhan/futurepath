import { useEffect, useState, RefObject } from 'react';

/**
 * Hook giúp xử lý sidebar cố định và thanh tiến trình cuộn.
 * @param sectionRef - Ref của Section 3
 * @param steps - Ref của các bước
 */
export function useStickySidebar(
  sectionRef: RefObject<HTMLDivElement | null>,  // Sử dụng RefObject<HTMLDivElement | null>
  steps: RefObject<HTMLDivElement | null>[]     // Sử dụng kiểu RefObject<HTMLDivElement | null> cho steps
) {
  const [isFixed, setIsFixed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top, bottom, height } = sectionRef.current.getBoundingClientRect();

      // Xác định khi sidebar cần cố định
      setIsFixed(top <= 50 && bottom > window.innerHeight);

      // Cập nhật thanh tiến trình cuộn
      const totalScroll = window.innerHeight - top;
      const scrollPercentage = Math.min(100, Math.max(0, (totalScroll / height) * 100));
      setProgress(scrollPercentage);

      // Xác định bước nào đang hiển thị
      steps.forEach((step, index) => {
        if (step.current) {
          const stepTop = step.current.getBoundingClientRect().top;
          if (stepTop < window.innerHeight * 0.5) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef, steps]);

  return { isFixed, activeIndex, progress };
}
