const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const api = {
  get: async <T>(path: string): Promise<T> => {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
    }
    return response.json() as Promise<T>;
  },
};
