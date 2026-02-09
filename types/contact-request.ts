export type ContactRequestBody = {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactRequestResponse = {
  success: boolean;
  message: string;
  data: {
    submittedAt: string;
  };
};
