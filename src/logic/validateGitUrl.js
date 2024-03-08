export const validateGitHubRepoLink = (value) => {
  const githubRepoRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(\/)?$/
  return githubRepoRegex.test(value)
}

export const matchUserAndRepo = ({ url }) => {
  const matchResult = url.match(/github\.com\/([^/]+)\/([^/]+)/)
  return [matchResult ? matchResult[1] : undefined, matchResult ? matchResult[2] : undefined]
}
