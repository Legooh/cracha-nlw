const linkSocialMedia = {
  github: 'legooh',
  youtube: 'legominer',
  facebook: 'stewartqls',
  instagram: 'stewartqls',
  twitter: 'legooh'
}

function changeSocialMediaLinks() {
  for (let li of socialLink.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com${linkSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linkSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userBio.textContent = data.bio
      userGit.href = data.html_url
      userImg.src = data.avatar_url
    })
}

//getGitHubProfileInfos()
