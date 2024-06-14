import { AuthProvider } from "@refinedev/core";

const API_URL = import.meta.env.VITE_API_URL;

export const authProvider: AuthProvider = {
  // login method receives an object with all the values you've provided to the useLogin hook.
  login: async ({ email, password }) => {


    const response = await fetch(
      `${API_URL}/users/login`,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("my_access_token", data.token);
      return { success: true , redirectTo: "/"};
    }

    return { success: false };
  },
  check: async () => {
    const token = localStorage.getItem("my_access_token");

    return { authenticated: Boolean(token) };
  },
  logout: async () => {
    localStorage.removeItem("my_access_token");
    // We're returning success: true to indicate that the logout operation was successful.
    return { success: true, redirectTo: "/login" };
  },

 

  getIdentity: async () => {

    const response = await fetch(`${API_URL}/whoAmI`, {
      method: 'GET', // Specify the HTTP method
      headers: {
        'Content-Type': 'application/json', // Example of a header
        'Authorization': 'Bearer ' + localStorage.getItem("my_access_token"), 
      }});

    if (response.status < 200 || response.status > 299) {
      return null;
    }

    const data = await response.json();

    return data;
  },

  onError: async (error) => {
    if (error?.status === 401) {
      return {
        logout: true,
        error: { message: "Unauthorized" },
      };
    }

    return {};
  },



};