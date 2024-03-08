import axios from 'axios'

export async function getLanguages ({ username, repoName }) {
  try {
    const url = `https://api.github.com/repos/${username}/${repoName}/languages`
    const response = await axios.get(url)
    return response.data
  } catch {
    return null
  }
}
