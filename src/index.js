import './style/main.scss';
import noticeToggle from './script/noticeToggle';

function isDOMReady(fn) {
    if (typeof fn !== 'function') return;

    if (document.readyState === 'complete') {
        return fn();
    }

    document.addEventListener('DOMContentLoaded', fn, false);
}


isDOMReady(() => {
    noticeToggle();
});