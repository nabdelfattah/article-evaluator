import './styles/styles.scss';
import {initialize, analyzeArticle, alertUser} from './js/app'
import {submitHandler} from './js/handlers'
import {isValidURL} from './js/validator'

console.log('I Exit!');

export {initialize, submitHandler, isValidURL, analyzeArticle, alertUser}