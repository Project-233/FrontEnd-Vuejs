"use strict";

window.onload = function(e) {

    new Vue({
        el: '.sample',
        data: {
            responseJSON: [{
                name: 'Ip',
                value: '',
                pattern:/^[0-9]{7,14}$/
            }, {
                name: 'Server',
                value: '',
                pattern:/^[a-zA-Z]{10,30}/
            }],
            formSubmitted: false,
            checkStatus: {},
            wrongInputCls: "error-validation"
        },
        computed: {

        },
        methods: {
            setFormSubmitted(e){

            },
            checkPattern(e, index, key){
                // this.checkStatus[key] = {
                //     activated: true
                // };
                console.log(e);
                console.log(e.srcElement.parentElement);
                console.log(this.responseJSON[index].value + '?=' + this.responseJSON[index].pattern);

                let pattern = this.responseJSON[index].pattern;
                !pattern.test(this.responseJSON[index].value) ?
                    e.srcElement.parentElement.firstChild.classList.add(this.wrongInputCls)
                    : e.srcElement.parentElement.firstChild.classList.remove(this.wrongInputCls);
            }
        }
    })

}

