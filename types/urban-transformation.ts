export interface UrbanTransformationRequest {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  parcel: string;
  subject: string;
  /** reCAPTCHA v3 token; sunucu tarafında doğrulanır */
  recaptchaToken?: string | null;
}

export interface UrbanTransformationResponse {
  success: boolean;
  message: string;
  data: {
    submittedAt: string;
  };
  errors?: string[];
}

