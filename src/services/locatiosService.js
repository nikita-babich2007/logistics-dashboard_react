const API_URL = "https://6a31128b7bc5e1c612652207.mockapi.io/locations"; 

export const locationsService = {
  get: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch locations");
    return response.json();
  },
  getById: async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch location");
    return response.json();
  },
};