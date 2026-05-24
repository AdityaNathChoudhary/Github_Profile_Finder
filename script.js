let name = document.getElementById("name");
let bio = document.getElementById("bio");
let repos = document.getElementById("repos");
let avatar = document.getElementById("avatar");
let followers = document.getElementById("followers");
let following = document.getElementById("following");
let username = document.getElementById("username");
let searchButton = document.getElementById("searchbtn");
let data;
let commands = document.querySelector(".commands");
searchButton.addEventListener("click", fetchProfile);

async function fetchProfile() {
    let user = username.value;
    let response  = await fetch(`Your API URL here`);
    let response2 = await fetch(`Your API URL here`);
    try {
        if(response.status >= 200 && response.status < 300) {
            data = await response.json();
            data2 = await response2.json();
            profileData();
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        commands.hidden = false;
        document.querySelector(".card").hidden = true;
        commands.innerHTML = `<p>${error.message}</p>`;
    }
}
function profileData() {
    console.log(data);
    commands.hidden =true;
    document.querySelector(".card").hidden = false;
    avatar.src = data.avatar_url;
    repos.innerText = data.public_repos;
    name.innerText = data.name;
    bio.innerText = data.bio;
    followers.innerText = data.followers;
    following.innerText = data.following;
    let recentReposList = document.getElementById("recentrepos");
    recentReposList.innerHTML = "";
    data2.forEach(repo => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
        recentReposList.appendChild(li);
    });
}