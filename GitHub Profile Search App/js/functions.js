import * as v from "./variables.js";

// Get Users

export async function getUser(username) {
    const response = await fetch(v.apiUrl + username);
    const data = await response.json();

    // console.log(data)
    if (!response.ok) {
        errorMessage("User not found, please try another");
    } else {
        displayData(data);
        getRepos(username);
    }
}

// Get Repos

async function getRepos(username) {
    const response = await fetch(v.apiUrl + username + "/repos");
    const data = await response.json();

    // console.log(data)

    displayRepos(data);

}

// Error Message Function

export function errorMessage(msg) {
    v.profile.innerHTML = "";
    document.querySelector(".hide").style.display = "none";
    return v.repos.innerHTML = `<p class="alert alert-danger">${msg}</p>`;
}

function displayData(user) {
    const html = `<img src="${user.avatar_url}" class="img-thumbnail rounded-circle" alt="${user.name}">
    <h2>${user.name}</h2>
    <p>${user.login}</p>
    <div class="d-grid">
        <a href="https://github.com/${user.login}" target="_blank" rel="noopener" class="btn btn-outline-secondary">View Profile</a>
    </div>
    <p class="pt-2">
        <span>${user.followers} Followers</span>
        <span>${user.following} Following</span>
    </p>
    <p>${user.public_repos}</p>
    <p>
        <i class="fas fa-map-marker-alt"></i> ${user.location}
    </p>`;
    v.profile.innerHTML = html;
}

// Display repos

function displayRepos(repoData) {
    let repo_data = repoData.map((repo) => {
        return `<span class="repo border border-rouded p-3">
        <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
        <p>
          <strong>Stars: ${repo.starazer_count} |</strong>
          <strong>Watchers: ${repo.watchers_count} |</strong>
          <strong>Folks: ${repo.forks_count} </strong>
        </p>
      </span>`;
    });

    // v.repos.innerHTML = repo_data;
    v.repos.innerHTML = repo_data.slice(0, 8).join("");
    document.querySelector(".hide").style.display = "Block";
}