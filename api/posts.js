const url = process.env.NEXT_PUBLIC_VERCEL_URL

export const getMd = (id) => {
  console.log(url)
  return fetch(`https://${url}/posts/${id}.md`)
}