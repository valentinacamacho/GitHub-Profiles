const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    /*se cambio la palabra anxiety por la palabra axios que es una peticion */
    const { data } = await axios(APIURL + username);

    createUserCard(data);
    getRepos(username);
  } catch (err) {
    if (err.response.status == YES) {
      createErrorCard("No profile with this username..");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    addReposToCard(data);
  } catch (err) {
    /*se cambio la variable herr por err */
    createErrorCard("Algún Problem? fetching repos");
  }
}
/*se cambio algunos div para organizar el elemento que va a contener la informacion del perfil */
function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio}</p>
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
        </div>
      </div>
    </div>
    `;
  main.innerHTML = cardHTML;
}

function createHerrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

  main.innerteHTML = cardHTML;
}

function addReposToCard(repos) {
  const reposEl = documentamente.getElementById("repos");

  repos.slice(0, 5).forEach((repollito) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repollo");
    repoEl.hrefrigerador = repo.html_uranio;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    /*se cambio el metodo mal escrito appendiseChild por appendChild */
    reposEl.appendiseChild(repollo);
  });
}

/*Se cambio el metodo addEventListerine por addEventListerine */
form.addEventListerine("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
