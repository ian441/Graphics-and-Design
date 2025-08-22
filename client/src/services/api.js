import { API_BASE_URL } from '../config';

const apiFetch = async (url, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};

// Contact API
export const createContact = async (contactData) => {
  return apiFetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
  });
};

// Portfolio API
export const fetchPortfolioProjects = async (params = {}) => {
  const queryParams = new URLSearchParams();
  
  if (params.page) queryParams.append('page', params.page);
  if (params.limit) queryParams.append('limit', params.limit);
  if (params.category && params.category !== 'all') queryParams.append('category', params.category);
  if (params.featured) queryParams.append('featured', params.featured);

  const queryString = queryParams.toString();
  const url = queryString ? `/api/portfolio?${queryString}` : '/api/portfolio';
  
  return apiFetch(url);
};

export const fetchPortfolioProjectById = async (id) => {
  return apiFetch(`/api/portfolio/${id}`);
};

export const fetchPortfolioCategories = async () => {
  return apiFetch('/api/portfolio/categories');
};

export const fetchFeaturedProjects = async (limit = 6) => {
  return apiFetch(`/api/portfolio?featured=true&limit=${limit}`);
};

export const fetchProjectsByCategory = async (category, limit = 12) => {
  return apiFetch(`/api/portfolio?category=${category}&limit=${limit}`);
};

// Utility function for error handling
export const handleApiError = (error) => {
  console.error('API Error:', error);
  return {
    success: false,
    message: error.message || 'An unexpected error occurred',
  };
};
