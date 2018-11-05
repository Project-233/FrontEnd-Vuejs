"use strict";

window.onload = function(e) {

    new Vue({
        el: '.sample',
        data: {
            ip: '',
            server: '',
            tasks: {},
            taskIter: 0,
            formSubmitted: false,
            leader: ''
        },
        computed: {
            serverInfo(){
                return `${this.ip} ${this.server}`;
            }
        },
        methods: {
            addTsk(){
                this.$set(this.tasks, this.taskIter++, '');
            },
            removeTask(key) {
                this.$delete(this.tasks, key);
            },
            setFormSubmitted(){
                this.formSubmitted = true;
            }
        }
    })

}

