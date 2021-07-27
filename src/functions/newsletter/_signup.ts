import Analytics from 'analytics-node';
import type { Response } from "@netlify/functions/src/function/response";
import saveEmailInSheet from "../feedback/_save-to-spreadsheet";

const analytics = new Analytics('14WvAwP23g2AZddYGxblnp1BbVAErnsy');

export const signup = async (body: string): Promise<Response> => {
  analytics.track("newsletter signup", {
    email: body,
    signup_at: new Date().toISOString(),
  });

  return {
    statusCode: 201,
    body: "Signed up",
  };
};
