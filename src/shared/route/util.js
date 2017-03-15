if (!process.env.BROWSER) {
  var System = {
    import: function(path) {
      return Promise.resolve(require(path));
    }
  };
}

import React from 'react';
import {  Route, matchPath} from 'react-router-dom';
function errorLoading(err) {
	console.error('Dynamic page loading failed', err);
}

let RouteWithSubRoutes = class RouteWithSubRoutes extends React.Component{
	constructor(props) {
		super(props);
		let {route, Comps, level, url} = props;
		let isBrowser = process.env.BROWSER;
		this.state = { Component: null, match: !!matchPath(url, route) , url };
		if (isBrowser) {
			if(this.state.match && Comps && Comps[level]){
				this.state.Component = Comps[level].default;
				return;
			}
			System.import(`../components/${route.componentPath}`).then((mod)=>{
				this.setState({Component: mod.default});
			}).catch(errorLoading);
		}else{
			this.state.Component = route.component;
		}
	} 
	componentWillMount() {
	}
	componentWillReceiveProps(nextProps, nextContext) {
		if (window.location.pathname != this.state.url){
			this.setState({url:window.location.pathname});
			let m = !!matchPath(window.location.pathname, nextProps.route);
			if (m !== this.state.match){
				this.setState({match: m});
			}
		}
	}
	componentDidMount () {
	}
	render () {
		let {route, Comps, level, url} = this.props;
		let {Component, match} = this.state;
		if (!Component || !match)
			return null;

		return (<Route path={route.path} exact={route.exact} authorize={route.authorize}  render={props => (
				<Component {...props} routes={route.routes} Comps={Comps} level={level+1} url={url}/>)}/>
			);
	}
}

RouteWithSubRoutes.propTypes = {
    route: React.PropTypes.object,
    componentPath: React.PropTypes.string,
    url: React.PropTypes.string,
	location: React.PropTypes.object,
	Comps: React.PropTypes.array,
	level:  React.PropTypes.number,
};

export {RouteWithSubRoutes};
