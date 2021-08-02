import type { Handler } from "@netlify/functions";
import cookie from "cookie";
import Analytics from "analytics-node";
import { v4 as uuidv4 } from "uuid";
const { promisify } = require("util");

const analytics =
  process.env.NODE_ENV === "production"
    ? new Analytics("14WvAwP23g2AZddYGxblnp1BbVAErnsy", { flushAt: 1 })
    : new Analytics("CkSXNrLHHASi1g1aSTIUeaAq5a4W0o9B", { flushAt: 1 });

const identify = promisify(analytics.identify).bind(analytics);
const track = promisify(analytics.track).bind(analytics);

interface SignupInfo {
  email: string;
  anonymousId?: string;
}

const signup = async (info: SignupInfo): Promise<void> => {
  if (info.anonymousId) {
    await identify({
      anonymousId: info.anonymousId,
      traits: {
        email_untrusted: info.email,
      },
    });
  }

  await track({
    event: "newsletter_signup",
    anonymousId: info.anonymousId || uuidv4(),
    email: info.email,
  });
};

const handler: Handler = (event, _, callback) => {
  const email = event.body;
  const anonymousId = cookie
    .parse(event.headers.cookie)
    .ajs_anonymous_id?.replace(/\"/g, "");

  signup({ email, anonymousId })
    .then(() =>
      callback(null, {
        statusCode: 201,
        body: "Signed up",
      })
    )
    .catch((error) => {
      console.error(error);
      callback(error, null);
    });
};

export { handler };
