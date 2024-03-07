export const validateGitHubRepoLink = (value) => {
  const githubRepoRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(\/)?$/
  return githubRepoRegex.test(value)
}
