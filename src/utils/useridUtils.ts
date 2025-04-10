// src/utils/userUtils.ts

export const getUserId = (): number | null => {
  const user = localStorage.getItem('user'); // Lấy dữ liệu người dùng từ localStorage

  if (user) {
    // Chuyển đổi chuỗi JSON thành đối tượng
    const userObject = JSON.parse(user);
    return userObject.id; // Trả về id người dùng
  }

  return null; // Nếu không có người dùng, trả về null
};
