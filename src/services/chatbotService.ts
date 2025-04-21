const API_URL = "http://127.0.0.1:5000/chatbot";

interface BotResponse {
  reply: string;
}

export const sendMessageToBot = async (message: string): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Something went wrong with the API call.");
    }

    const data: BotResponse = await response.json();
    return data.reply;
  } catch (error: unknown) {
    // Kiểm tra nếu error là instance của Error và ép kiểu
    if (error instanceof Error) {
      throw new Error(error.message); // Hoặc có thể trả lại thông điệp lỗi trong UI
    } else {
      // Nếu error không phải là Error, bạn có thể xử lý như sau:
      throw new Error("Có lỗi xảy ra, vui lòng thử lại sau.");
    }
  }
};
