function fetchRepos(pathToJson, callback) {
  $.getJSON(pathToJson).done(callback);
}

function injectRows(data, tbodyId) {
  const innerHTML = data
    .map(function (repo) {
      return `
            <tr>
                <td style="text-align: left;">
                    <a target="_blank" rel=\"noopener noreferrer\" href='https://github.com/${repo}/security/dependabot'>${repo.replace("Sage-Bionetworks/", "")}</a>
                </td>
                <td style="text-align: center;">
                    <input type="checkbox" />
                </td>
            </tr>`;
    })
    .join("");
  $(tbodyId).html(innerHTML);
}

function addOpenAllReposLink(data, linkId) {
  function openAll() {
    data.forEach((repo) => {
      const url = `https://github.com/${repo}/security/dependabot`;
      window.open(url);
    });
  }
  const link = document.createElement("a");
  link.href = "#";
  link.innerHTML = "Open All Repos in Multiple Tabs";
  link.addEventListener("click", openAll);

  document.getElementById(linkId).appendChild(link);
}
