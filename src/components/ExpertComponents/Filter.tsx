import React from 'react';
import { Dropdown, Button, Form } from 'react-bootstrap';
import { Filter } from 'react-feather';

interface FilterDate {
  year: number;
  month: number;
  day: number;
}

interface FilterComponentProps {
  filterDate: FilterDate;
  setFilterDate: React.Dispatch<React.SetStateAction<FilterDate>>;
  handleFilter: () => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ 
  filterDate, 
  setFilterDate, 
  handleFilter 
}) => {
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilterDate(prev => ({
      ...prev,
      [name]: parseInt(value) || 0,
    }));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="link" className="text-white" style={{ fontSize: '18px', marginLeft: '10px' }}>
        <Filter size={24} /> Lọc theo ngày
      </Dropdown.Toggle>
      <Dropdown.Menu className="p-4">
        <Dropdown.Item>
          <Form.Group controlId="formBasicYear">
            <Form.Label>Chọn Năm</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={filterDate.year}
              onChange={handleDateChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicMonth">
            <Form.Label>Chọn Tháng</Form.Label>
            <Form.Control
              type="number"
              name="month"
              value={filterDate.month}
              onChange={handleDateChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicDay">
            <Form.Label>Chọn Ngày</Form.Label>
            <Form.Control
              type="number"
              name="day"
              value={filterDate.day}
              onChange={handleDateChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleFilter}>
            Lọc Dữ Liệu
          </Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterComponent;