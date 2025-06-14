// utils/api.js
import axios from "axios";

export const fetchJobs = async (page) => {
  try {
    const response = await axios.get(
      `https://testapi.getlokalapp.com/common/jobs?page=${page}`,
      { timeout: 5000 }
    );

    // console.log("Full API response:", response.data);

    // Adjust according to actual structure:
    // If response.data is an object with a "results" or "jobs" field:
    const jobs = Array.isArray(response.data)
      ? response.data
      : response.data.results || response.data.jobs || [response.data];

    return jobs;
  } catch (error) {
    console.error("Failed to fetch jobs:", error.message);
    return [];
  }
};
