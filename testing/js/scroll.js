"use strict";

window.onload = function(e) {

    new Vue({
        el: '.sample',
        data: {
            scrolled: false,
            skipAllowed: 15,
            commandFlags: {
                accepted: false,
                subscribe: false
            },
            subscribeOptions: {
                post: 'post',
                email: 'email',
                selected: 'email'
            },
            formSubmitted: false
        },
        beforeMount(){
            console.log(this.$el.firstChild);
        },
        mounted(){
            (this.$refs.rules.scrollHeight < ( this.$el.querySelector('.scroll').clientHeight + this.skipAllowed) ) ?
                this.scrolled = true : this.scrolled = false;
        },
        methods: {
            onScroll(e){
                if(!this.scrolled) {
                    let totalHeight = parseInt(e.target.scrollHeight)
                    let scrollRest = totalHeight - parseInt(e.target.clientHeight) - parseInt(e.target.scrollTop);
                    console.log(scrollRest);
                    if (scrollRest < this.skipAllowed) this.scrolled = true;
                }
            }
        }
    });
}

