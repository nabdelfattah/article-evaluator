export function submitHandler(e){
  e.preventDefault()

  const inputValue = e.target.url.value;

  if (Client.isValidURL(inputValue)) {
    Client.analyzeArticle(inputValue)
  } else {
    Client.alertUser()
  }
}