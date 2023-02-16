import axios from "axios";
const apiClient = async (method: string, url: string, data?: any) => {
  try {
    const result = await axios({
      method,
      url,
      baseURL: "http://localhost:8080/api",
      headers: {
        "Content-Type": "application/json",
      },
      data,
    });
    return { ...result.data, success: true };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export default apiClient;
