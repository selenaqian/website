import Analytics from 'analytics-node';
import type { Response } from "@netlify/functions/src/function/response";
import { nanoid } from 'nanoid';

const analytics = new Analytics('14WvAwP23g2AZddYGxblnp1BbVAErnsy');

export const signup = async (body: string): Promise<Response> => {
  analytics.track({
    anonymousId: nanoid(),
    event: 'Signed Up',
    email: body,
    signup_at: new Date().toISOString(),
  });

  return {
    statusCode: 201,
    body: "Signed up",
  };
};
