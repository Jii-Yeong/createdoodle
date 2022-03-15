export const getMd = (id, url) => {
  console.log(url)
  return fetch(`https://${url}/posts/${id}.md`)
}