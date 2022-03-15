const url = process.env.VERCEL_URL

export const getMd = (id) => {
  console.log(url)
  return fetch(`http://${url}/posts/${id}.md`)
}