export type ContactRequestBody = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  /** reCAPTCHA v2/v3 token; sunucu tarafında doğrulanır */
  recaptchaToken?: string | null;
};

export type ContactRequestResponse = {
  success: boolean;
  message: string;
  data: {
    submittedAt: string;
  };
};
