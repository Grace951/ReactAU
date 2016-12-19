import { Link} from 'react-router';
import React from 'react';
import axios from 'axios';
import {navData, isvalidRoute} from '../../Data/RouteData';

const ProductIndexSidebar = () => (
			<div>
				<div className="col-sm-12 cat">
					<ul ><li>Products:
								<ul>
								{
									navData.filter((item)=> { return item.name === "products"; })
										.reduce( (result,item) => { return item; }, {})
										.sub.map((item, id) => { return (<li key={id}><Link to={item.link}>{item.desc}</Link></li>); })
								}
								</ul>
							</li>
						</ul>
				</div>
			</div>
);
ProductIndexSidebar.propTypes = {
	navData: React.PropTypes.array,
};


const Classify =  (props) => (
			<li>{props.title}
				<ul>
					<li className={props.isActive( 'All' )}><Link to={`/products/${props.productType}/All`} >All</Link></li>
					{
						props.data.map((item, index) => (
							<li key={index}  className={props.isActive( item )}>
								<Link to={`/products/${props.productType}/${item}`}> {item} </Link>
							</li>
						))
					}
				</ul>
			</li>
);
Classify.propTypes = {
	data: React.PropTypes.array,
	title: React.PropTypes.string,
	isActive: React.PropTypes.func.isRequired,
	params:  React.PropTypes.object
};

class ProductCategorySidebar extends React.Component{
		constructor(props) {
			super(props);
			this.state = {
				selected:''
			};
			this.isActive = this.isActive.bind(this);
		}

		componentWillReceiveProps (nextProps) {
			if (!isvalidRoute(this.props.productType, this.props.ProductsTbl))
				return;
			let oldId = this.props.productType;
			let newId = nextProps.product;
			let oldTblId = this.props.ProductsTbl;
			let newTblId = nextProps.ProductsTbl;

			if (oldTblId && newTblId !== oldTblId)
				this.setState({selected  : nextProps.ProductsTbl});
		}

		// existMatch(subnav, path){
		// 	if ( subnav && subnav.length > 0) {
		// 		return (subnav.filter((item, id) => {
		// 			if ( item.sub && item.sub.length > 0) {
		// 				if(item.link.indexOf(path) !== -1)
		// 					return true;
		// 				return this.existMatch(item.sub, path);
		// 			}else{
		// 				return (item.link.indexOf(path) !== -1);
		// 			}
		// 		}).length > 0);
		// 	}
		// 	return true;
		// }

		// validRoute(path){
		// 	return this.existMatch(navData, path);
		// }

		isActive(value){
			return ((value===this.state.selected) ?'active':'');
		}
		uniqArray(arrArg){
			return arrArg.filter((elem, pos, arr) => arr.indexOf(elem) == pos);
		}
		render() {
			//console.log(this.props.products);
			//console.log(this.props.products.length );
			if (!isvalidRoute(this.props.productType, this.props.ProductsTbl)){
				return (<div/>);
			}else{
				let brands = this.uniqArray(this.props.products.map((item, index) => (item.brand)));
				let type = this.uniqArray( this.props.products.map((item, index) => (item.type)));
				return (
					<div>
						<div className="col-sm-12 cat">
							<ul >
								<Classify title="Brand:" data={brands} isActive={this.isActive} {...this.props}/>
								<Classify title="System:" data={type} isActive={this.isActive} {...this.props}/>
							</ul>
						</div>
					</div>
				);
			}
		}
}
ProductCategorySidebar.propTypes = {
	params:  React.PropTypes.object
};

export {ProductCategorySidebar, ProductIndexSidebar};
