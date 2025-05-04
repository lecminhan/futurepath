import React from "react";
import "./styles/forumpagination.css";

interface Props {
  activePage: number;
  totalPages: number;
  onPageClick: (pageNumber: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

const ForumPagination: React.FC<Props> = ({
  activePage,
  totalPages,
  onPageClick,
  onPrev,
  onNext,
}) => {
  if (totalPages <= 1) return null;

  const renderButtonClass = (isActive: boolean, isDisabled: boolean) => {
    if (isDisabled) return "forum-pagination__button forum-pagination__button--disabled";
    if (isActive) return "forum-pagination__button forum-pagination__button--active";
    return "forum-pagination__button";
  };

  return (
    <div className="forum-pagination">
      <button
        onClick={onPrev}
        disabled={activePage <= 1}
        className={renderButtonClass(false, activePage <= 1)}
      >
        {"<"}
      </button>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => onPageClick(page)}
            className={renderButtonClass(activePage === page, false)}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={onNext}
        disabled={activePage >= totalPages}
        className={renderButtonClass(false, activePage >= totalPages)}
      >
        {">"}
      </button>
    </div>
  );
};

export default ForumPagination;
