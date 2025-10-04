export interface LumaEvent {
  id: string;
  name: string;
  description?: string;
  startAt: string;
  endAt: string;
  timezone: string;
  coverImageUrl?: string;
  status: "draft" | "published" | "cancelled";
  url: string;
  location?: {
    name?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
  };
}

export interface LumaApiResponse {
  data: LumaEvent[];
  meta: {
    total: number;
    page: number;
    perPage: number;
  };
}
