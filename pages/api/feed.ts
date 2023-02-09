// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
    if(req.method=='POST'){
      const result=await fetch(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${req.body.id}`).then(resData=>resData.json()).catch(err=>console.log(err))
      res.json(result.nodes)
    }
    else{
      console.log(req.method)
      res.json('The request method should be put')
    }
  }catch(error){
    res.json(error.message);
    res.status(405).end();
  }
}

