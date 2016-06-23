/* global Rx */

(function (document) {
    function documentReady(cb) {
        document.readyState === "interactive" || document.readyState === "complete" ? cb() : document.addEventListener("DOMContentLoaded", cb);
    }

    documentReady(function () {
        var state = {
            input: 'Type something..',
            option: false,
        };

        var Observable = Rx.Observable;
        var input = document.getElementById('input');
        var checkbox = document.getElementById('checkbox');

        var inputObservable = Observable.fromEvent(input, 'keyup')
            .throttle(20)
            .map(function () {
                return input.value;
            })
            .distinctUntilChanged();

        inputObservable.forEach(function (data) {
            state.input = data;
            render(state);
        });

        var checkboxObservable = Observable.fromEvent(checkbox, 'click')
            .map(function (e) {
                return e.target;
            });

        checkboxObservable.forEach(function (data) {
            state.option = data.checked;
            render(state);
        });

        var output = document.querySelector('.output');

        function render(state) {
            function parseOutput(input, option) {
                return option ? input.toLowerCase() : input;
            }
            output.innerHTML = parseOutput(state.input, state.option);
        }

        render(state);
        input.value = state.input;
    });
})(document);
