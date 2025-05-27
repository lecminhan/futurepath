import React from 'react';

interface ScheduleListProps {
  schedule: { available_date: string; start_time: string; end_time: string }[];
}

const ScheduleList: React.FC<ScheduleListProps> = ({ schedule }) => {
  return (
    <div
      style={{
        maxHeight: '250px', // Set max height for scrollable area
        overflowY: 'auto',  // Enable vertical scrolling
        padding: '10px',
      }}
    >
      {schedule.length > 0 ? (
        schedule.map((item, index) => (
          <div
            style={{
              marginBottom: 15,
              backgroundColor: '#f5f5f5',
              padding: 5,
              borderRadius: 10,
            }}
            key={index}
          >
            <span style={{ fontWeight: 'bold' }}>
              Bạn có lịch tư vấn vào lúc {new Date(item.available_date).toLocaleDateString()} từ{' '}
              {item.start_time} đến {item.end_time}
            </span>
          </div>
        ))
      ) : (
        <div>Không có cuộc hẹn nào</div>
      )}
    </div>
  );
};

export default ScheduleList;
