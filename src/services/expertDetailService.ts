import axios from 'axios';

// API URL
const API_URL = `https://futurepathbe-tanbin-production.up.railway.app/app/getexpert`;

// Hàm lấy thông tin chuyên gia theo id
export const getExpertDetails = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data.expert; // Trả về thông tin chuyên gia
};
