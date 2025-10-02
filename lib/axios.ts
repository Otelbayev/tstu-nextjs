import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useApi = () => {
  const [loading, setLoading] = useState(false);

  const get = async <T>(url: string, config?: AxiosRequestConfig) => {
    setLoading(true);
    try {
      const res = await api.get<T>(url, config);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const post = async <T, D = unknown>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ) => {
    setLoading(true);
    try {
      const res = await api.post<T>(url, data, config);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  const put = async <T, D = unknown>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ) => {
    setLoading(true);
    try {
      const res = await api.put<T>(url, data, config);
      return res.data;
    } finally {
      setLoading(false);
    }
  };

  return { get, post, put, loading };
};
