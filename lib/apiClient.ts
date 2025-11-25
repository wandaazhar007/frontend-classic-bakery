// lib/apiClient.ts
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

type FetchOptions = {
  query?: Record<string, string | number | boolean | undefined | null>;
  init?: RequestInit;
};

function buildQuery(params: FetchOptions["query"]) {
  if (!params) return "";
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      value !== false
    ) {
      searchParams.append(key, String(value));
    }
  });

  const qs = searchParams.toString();
  return qs ? `?${qs}` : "";
}

export async function apiGet<T>(
  path: string,
  options: FetchOptions = {}
): Promise<T> {
  const { query, init } = options;

  const url = `${API_BASE_URL}${path}${buildQuery(query)}`;

  const res = await fetch(url, {
    ...init,
    // Make sure it's cacheable by Next if used in server components
    next: { revalidate: 30 },
  });

  if (!res.ok) {
    // Attempt to parse backend error
    let message = `Request failed with status ${res.status}`;
    try {
      const data = await res.json();
      if (data?.message) message = data.message;
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  return res.json();
}