// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Node as Logtail } from '@logtail/js';

const logger = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN);

export default async function handler(req, res) {
  const user = {
    id: 123,
    name: 'John Doe',
  };

  // Log an info message
  await logger.info(
    'Handling a request to /api/hello',
    { user } // structured logging
  );

  // Log a warning message (e.g., deprecated API version)
  await logger.warn(
    'This API endpoint is using a deprecated version.',
    { endpoint: '/api/hello', version: 'v1' }
  );

  // Log an error message (e.g., failed database connection)
  await logger.error(
    'Failed to connect to the database',
    { dbHost: 'localhost', dbPort: 5432 }
  );

  // You can add more info logs when processing specific actions
  await logger.info(
    'Processing user data',
    { userId: user.id, action: 'fetch user details' }
  );

  // Simulate successful completion of the request
  res.status(200).json({ name: user.name });
}
