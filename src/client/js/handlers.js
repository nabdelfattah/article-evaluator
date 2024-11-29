export function submitHandler(e){
  e.preventDefault()

  const inputValue = e.target.url.value;
  const dataObj = {}

  if (Client.isValidURL(inputValue)) {
    Client.analyzeArticle(inputValue)
      .then(data => {
        dataObj.polarity = getPolarity(data.score_tag);
        dataObj.subjectivity = data.subjectivity;
        dataObj.snippet = data.sentence_list[0].text;
        Client.updateUI(dataObj)
      })
      .catch(err => Client.alertUser(err))
  } else {
    Client.alertUser('Please, enter a valid URL.')
  }
}

export function getPolarity(symbol) {
  const polarityObj = {
    'P+': 'strong positive',
    P: 'positive',
    NEU: 'neutral',
    N: 'negative',
    'N+': 'strong negative',
    NONE: 'without polarity',
  }
  return polarityObj[symbol]
}