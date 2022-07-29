export const getMd = (id, url) => {
  if (url) {
    return $fetch(`https://${url}/posts/${id}.md`)
  }
  return $fetch(`http://localhost:3000/posts/${id}.md`)
}
