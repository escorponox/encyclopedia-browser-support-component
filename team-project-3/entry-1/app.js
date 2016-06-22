/* global Rx */

(function (document) {
    function documentReady(cb) {
        document.readyState === "interactive" || document.readyState === "complete" ? cb() : document.addEventListener("DOMContentLoaded", cb);
    }

    function isNumber(num) {
        var type = typeof num;
        if (type !== 'number' && type !== 'string') {
            return false;
        }
        var n = +num; //eslint-disable-line
        return (n - n + 1) >= 0 && num !== '';
    }

    documentReady(function () {
        var state = {
            src: 'http://dummyimage.com/200x200/000',
            alt: 'Alternate Text',
            width: 200,
            height: 200,
        };

        var Observable = Rx.Observable;
        var widthInput = document.getElementById('width');
        var heightInput = document.getElementById('height');
        var sourceInput = document.getElementById('src');
        var altTextInput = document.getElementById('text');

        var widthObservable = Observable.fromEvent(widthInput, 'keyup')
            .throttle(20)
            .map(function () {
                return widthInput.value;
            })
            .distinctUntilChanged();

        widthObservable.forEach(function (key) {
            if (key.length === 0) {
                state.width = 'auto';
                render(state);
            }
            if (isNumber(key)) {
                state.width = key;
                render(state);
            }
        });

        var heightObservable = Observable.fromEvent(heightInput, 'keyup')
            .throttle(20)
            .map(function () {
                return heightInput.value;
            })
            .distinctUntilChanged();

        heightObservable.forEach(function (key) {
            if (key.length === 0) {
                state.height = 'auto';
                render(state);
            }
            if (isNumber(key)) {
                state.height = key;
                render(state);
            }
        });

        var sourceObservable = Observable.fromEvent(sourceInput, 'keyup')
            .throttle(20)
            .map(function () {
                return sourceInput.value;
            })
            .distinctUntilChanged();

        sourceObservable.forEach(function (key) {
            if (key.length === 0) {
                state.src = 'http://dummyimage.com/200x200/000';
                render(state);
            } else {
                state.src = key;
                render(state);
            }
        });

        var altObservable = Observable.fromEvent(altTextInput, 'keyup')
            .throttle(20)
            .map(function () {
                return altTextInput.value;
            })
            .distinctUntilChanged();

        altObservable.forEach(function (key) {
            state.alt = key;
            render(state);
        });

        var output = document.querySelector('.output');

        function render(state) {
            document.getElementsByClassName('markup__src')[0].innerHTML = state.src;
            document.getElementsByClassName('markup__width')[0].innerHTML = state.width;
            document.getElementsByClassName('markup__height')[0].innerHTML = state.height;
            document.getElementsByClassName('markup__alt')[0].innerHTML = state.alt;

            output.innerHTML = "<img src=\"" + state.src + "\" alt=\"" + state.alt + "\" width=\"" + state.width + "\" height=\"" + state.height + "\" />";
        }

        render(state);
    });
})(document);
