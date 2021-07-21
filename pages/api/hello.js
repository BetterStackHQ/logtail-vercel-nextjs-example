// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Node as Logtail } from '@logtail/js';

const logger = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN);

export default async function handler(req, res) {
  const user = {
    id: 123,
    name: 'John Doe',
  };

  await logger.info(
    'Handling a request to /api/hello',
    { user } // you can log structured data
  );

  res.status(200).json({ name: user.name })
}
