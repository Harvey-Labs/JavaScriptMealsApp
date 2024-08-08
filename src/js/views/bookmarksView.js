import view from './view.js';
import ProviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class bookmarksView extends view {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks found.';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => ProviewView.render(bookmark, false))
      .join('');
  }
}
export default new bookmarksView();
