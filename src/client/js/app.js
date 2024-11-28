const formEl = document.querySelector('.form');
const polarityEl = document.getElementById('polarity')
const subjectivityEl = document.getElementById('subjectivity')
const snippetEl = document.getElementById('snippet')

export function initialize() {
  formEl.addEventListener('submit', e => Client.submitHandler(e))
}
 
export function analyzeArticle(url) {
  // TODO
  // fetch data from API
  // Return dara
  return
}

function updateUI (){
  // TODO 
  // Enter the fetched data in polarityEl, subjectivityEl, snippetEl
  return
}

export function alertUser() {
  alert('Please, enter a vaild URL.')
}

initialize()
