"use strict";

window.onload = function(e) {

    Vue.component('newComponent', {
        props: ['min', 'max'],
        template: `<div>
                    <h3>{{ number }}</h3>
                   <button @click="onClick">+</button>
                   <hr>
                   </div>`,
        data(){
            return {
                //number: Math.ceil(Math.random() * (this.max-this.min)) + this.min
            }
        },
        computed: {
            number(){
                return Math.ceil(Math.random() * (this.max - this.min)) + this.min;
            }
        },
        methods: {
            onClick(e){
                this.$emit('doublerange')
            }
        }
    })

    Vue.directive('ondelay', {
        bind(el, options){
            let timer;
            let timeout = 0;

            for(let modifier in options.modifiers) {
                if(!isNaN(modifier)) timeout = parseInt(modifier);
            }

            console.log(timeout);

            let callback = (e) => {

                if(timer !== undefined) clearInterval(timer);

                if(options.modifiers.prevent) {e.preventDefault();}

                timer = setTimeout(()=>{
                    options.value.call(this, e);
                }, timeout)

            }
            console.log(options);
            el.addEventListener(options.arg, callback);
        }
    });

    new Vue({
        el: '.sample',
        data: {
            values: [
                {
                    min: 10,
                    max: 30
                }, {
                    min: 5,
                    max: 10
                }, {
                    min: 70,
                    max: 150
                },
            ],
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
            formSubmitted: false,
            clicks: 0
        },
        beforeMount(){
            console.log(this.$el.firstChild);
        },
        mounted(){
            (this.$refs.rules.scrollHeight < ( this.$el.querySelector('.scroll').clientHeight + this.skipAllowed) ) ?
                this.scrolled = true : this.scrolled = false;
        },
        methods: {
            onDoubleRange(index){
                this.values[index].min *= 2;
                this.values[index].max *= 2;
            },
            onScroll(e){
                if(!this.scrolled) {
                    let totalHeight = parseInt(e.target.scrollHeight)
                    let scrollRest = totalHeight - parseInt(e.target.clientHeight) - parseInt(e.target.scrollTop);
                    console.log(scrollRest);
                    if (scrollRest < this.skipAllowed) this.scrolled = true;
                }
            },
            onClick(){
                this.clicks++;
            }
        }
    });
}

