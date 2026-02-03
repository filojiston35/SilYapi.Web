export interface UrbanTransformationRequest {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  parcel: string;
  subject: string;
}

export interface UrbanTransformationResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    submittedAt: string;
  };
  errors?: string[];
}

