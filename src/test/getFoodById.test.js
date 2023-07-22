const axios = require("axios");
// // import { food } from "@/shared/data/food";
// const { food } = require('../shared/data/food');

// Replace this URL with the actual URL of your server
const BASE_URL = "http://localhost:3000";

describe("Test API route for a specific food", () => {
  test("should return correct data for food with ID 782585", async () => {
    // Make the request to the API
    const response = await axios.get(`${BASE_URL}/api/foods/782585`);

    // Test the response data
    expect(response.status).toBe(200); // Check if the response status is 200 (OK)
    // expect(response.data).toEqual(food);
  });

  test("should return 404 for a non-existing food ID", async () => {
    try {
      // Make the request to the API with a non-existing food ID
      await axios.get(`${BASE_URL}/api/foods/123456`);
    } catch (error) {
      // Test the error response
      expect(error.response.status).toBe(500); // Check if the response status is 404 (Not Found)
    }
  });
});
