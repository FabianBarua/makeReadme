export async function getLanguages ({ username, repoName }) {
  const url = `https://api.github.com/repos/${username}/${repoName}/languages`

  const response = await fetch(url)
  console.log(response)
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('El repositorio no existe.')
    } else {
      throw new Error('Error buscando el repositorio')
    }
  }

  console.log(response)

  const data = await response.json()
  return data
}
