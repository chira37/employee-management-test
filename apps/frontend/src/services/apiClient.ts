import axios from "axios";
const apiClient = async (method: string, url: string) => {
  try {
    const result = await axios({
      method,
      url,
      baseURL: "http://localhost:8080/api/v1/admin/",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return { ...result.data, success: true };
  } catch (error) {
    return {
      success: false,
    };
  }
};

export default apiClient;
