// api.js

const API_URL = "http://localhost:8080/user/reviews/";

export const fetchReviews = async () => {
  try {
    const response = await fetch(`${API_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch reviews");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

// Add more functions for other API requests if needed
