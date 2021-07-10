// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Node as Logtail } from '@logtail/js';

const logger = new Logtail(process.env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN);

export default function handler(req, res) {
  const user = {
    id: 123,
    name: 'John Doe',
  };

  logger.info(
    'logging an API request',
    { user } // you can log structured data
  );

  res.status(200).json({ name: user.name })
}
