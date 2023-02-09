// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result=await fetch(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1`).then(resData=>resData.json()).catch(err=>console.log(err))
  res.json(result.nodes)
}

