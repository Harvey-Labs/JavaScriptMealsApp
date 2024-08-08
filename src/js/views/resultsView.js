import view from './view.js';
import ProviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found.';

  _generateMarkup() {
    return this._data
      .map(bookmark => ProviewView.render(bookmark, false))
      .join('');
  }
}
export default new ResultsView();
