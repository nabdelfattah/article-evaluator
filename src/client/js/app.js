const formEl = document.querySelector('.form');
const polarityEl = document.getElementById('polarity')
const subjectivityEl = document.getElementById('subjectivity')
const snippetEl = document.getElementById('snippet')

export function initialize() {
  formEl.addEventListener('submit', e => Client.submitHandler(e))
}
 
export function analyzeArticle(url) {
  return fetch(`http://localhost:8081/analyze?url=${url}`)
  .then(response => response.json())
  .catch(err => Client.alertUser(err))
}

export function updateUI (dataObj){
  polarityEl.innerText = dataObj.polarity
  subjectivityEl.innerText = dataObj.subjectivity
  snippetEl.innerText = dataObj.snippet
  return
}

export function alertUser(msg) {
  alert(msg)
}

initialize()
