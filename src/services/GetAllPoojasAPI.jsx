import axiosInstance from "../utils/axiosConfig";

export const GetAllPoojasAPI = async (data) => {
  try {
    const response = await axiosInstance.get("/api/poojas");
    if (response?.status === 200) {
      const resData = response?.data;

      // Normalize common response shapes so callers can use `.map`
      if (Array.isArray(resData)) return resData;
      if (resData && Array.isArray(resData.value)) return resData.value;
      if (resData && Array.isArray(resData.data)) return resData.data;

      // Fallback: if it's an object but not an array, return empty array
      return [];
    }
  } catch (error) {
    if (error?.response && error?.response?.data) {
      const statusCode = error?.response?.status;
      switch (statusCode) {
        case 404:
          return { error: error.response?.data?.msg };
        case 500:
          return { error: error.response?.data?.msg };
      }
    } else if (
      error.code === "ECONNABORTED" ||
      error.message === "Network Error"
    ) {
      return { error: "Connection timed out. Please try again later." };
    }
  }
};
