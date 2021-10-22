const linksSocialMedia = {
  github: 'LucasLuisBorges',
  youtube: 'channel/UCc3nDzeFT8K83KCecNXeG4A',
  facebook: 'borgeslux',
  instagram: '_llborges_',
  linkedin: 'in/lucasluisborges'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    // pega o filho da index 0 da li
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
