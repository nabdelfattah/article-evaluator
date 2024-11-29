import './styles/styles.scss';
// import {initialize, analyzeArticle, updateUI, alertUser} from './js/app'
import {submitHandler, getPolarity} from './js/handlers'
import {isValidURL} from './js/validator'

const formEl = document.querySelector('.form');
const polarityEl = document.getElementById('polarity')
const subjectivityEl = document.getElementById('subjectivity')
const snippetEl = document.getElementById('snippet')

function initialize() {
  formEl.addEventListener('submit', e => Client.submitHandler(e))
}
 
function analyzeArticle(url) {
  return fetch(`http://localhost:8081/analyze?url=${url}`)
  .then(response => response.json())
  .catch(err => Client.alertUser(err))
}

function updateUI (dataObj){
  polarityEl.innerText = dataObj.polarity
  subjectivityEl.innerText = dataObj.subjectivity
  snippetEl.innerText = dataObj.snippet
  return
}

function alertUser(msg) {
  alert(msg)
}

initialize()


export {submitHandler, getPolarity, isValidURL, analyzeArticle, updateUI, alertUser}