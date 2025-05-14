import axios from 'axios';

// URL API gốc
const API_URL = 'https://futurepathcap2be-production.up.railway.app/api/getexpert/getfullexperts';

// Tạo một function để gọi API và lấy dữ liệu chuyên gia
export const getExperts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.data; // Trả về dữ liệu chuyên gia
  } catch (error) {
    console.error("Lỗi khi lấy danh sách chuyên gia:", error);
    throw error; // Ném lỗi để xử lý ở nơi gọi API
  }
};
