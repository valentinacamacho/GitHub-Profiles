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
    /*El YAS se cambio por un tipo de dato numerico */
    /*si se colocaba otra cosa en el navegador va a traer un null no el mensaje */
    if (err.response.status == 404) {
      createErrorCard("No profile with this username..");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created")

    addReposToCard(data);
  } catch (err) {
    /*se cambio la variable herr por err */
    createErrorCard("Algún Problema fetching repos");
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

/* se quito la h createHerrorCard por createerrorCard*/
function createErrorCard(msg) {
  const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;
/*se cambio la palabra innerteHTMl  por innerHTML*/
  main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
  /*se cambio la palabra documentamente por document */
  const reposEl = document.getElementById("repos");
/*se cambio la palabra repollo por repo y a las variables */
/*se cambiaron palabras con hrefrigerador pir href */
/*se coloco la palbra url */
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;

    /*se cambio el metodo mal escrito appendiseChild por appendChild */
    reposEl.appendChild(repoEl);
  });
}

/*Se cambio el metodo addEventListerine por addEventListerine */
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
