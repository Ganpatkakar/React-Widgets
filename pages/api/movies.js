// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { movies } from "../../src/data";

export default function handler(req, res) {
  const {
    query: { size = 20, page = 0 },
    method,
  } = req;
  switch (method) {
    case "GET":
      let next = page * size;
      if(next > movies.length) {
        res.status(404).json([{}]);
      }
      // let data = movies.slice(next, next + size);
      let data = movies;
      res.status(200).json(data);
  }
}


