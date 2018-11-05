"use strict";

window.onload = function(e) {

/**
			 * Server function to get Server id
			 */
			function getServerId(serverName, callback) {
			    let servers = {
			        localhost: '127.0.0.1',
					cloud: '74.15.204.198',
				}

				let server = servers[serverName] !== undefined ? servers[serverName] : '0.0.0.0';

				setTimeout(()=>{
                    callback(server);
				}, 300);
			}

			function setClass(e, ...className) {
			    e.preventDefault();
                e.target.classList.remove(className[className.length - 1]);
                e.target.classList.add(className[0]);
			}

			let sample = new Vue({
				el: '.sample',
				data: {
				    firstName: '',
					lastName: '',
					showName: false,
                    showTestText: false,
					serverName: '',
					serverId: '',
                    accessibleServers: [{
                        name: 'localhost',
                        id: '127.0.0.1'
                    }, {
                        name: 'cloud',
                        id: '74.15.204.198'
                    }, {
                        name: 'any',
                        id: '0.0.0.0'
                    }],
					newServer: {
				        name: '',
						id: '0.0.0.0'
					}
				},
				methods: {
				    onChange(e){
                        this.firstName = e.target.value;
					},
					toggleName() {
                        this.showName=!this.showName;
					},
                    addServer() {
				        this.accessibleServers.push(this.newServer);
					},
                    sortServers() {
				        this.accessibleServers.sort((a,b)=>a>b?1:-1);
					},
                    activateServer(e) {
                        setClass(e, 'activate-server', 'deactivate-server');

					},
                    deactivateServer(e) {
                        setClass(e, 'deactivate-server', 'activate-server');
					}
				},
				computed: {
					fullName(){
						console.log('1');

						return this.firstName + ' ' + this.lastName;
					}
				},
				watch: {
				    serverName(){
                        return getServerId(this.serverName, (serverId) => {
                            this.serverId = serverId;
                        });
					}
				}
			});

			window.addEventListener('resize', () => {
			    let props = [];
			    for (let key in SVGLinearGradientElement){
			        props.push(key);
				}
			    sample.lastName = props.join('\n');
            });

}

