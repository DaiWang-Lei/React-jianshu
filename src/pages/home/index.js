import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { actionCreators } from './store';
import { BackTop } from './style';

import {
	HomeWrapper,
	HomeLeft,
	HomeRight
} from './style';

class Home extends PureComponent {
	topClick() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div>
				<HomeWrapper>
					<HomeLeft>
						<img className='banner-img' src='//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540' alt='' />
						<Topic />
						<List />
					</HomeLeft>
					<HomeRight>
						<Recommend />
						<Writer />
					</HomeRight>
					{this.props.showScroll ? <BackTop onClick={this.topClick}>返回顶部</BackTop> : null}
				</HomeWrapper>
			</div>
		)
	}
	componentDidMount() {
		this.props.changeHomeData();
		this.bindEvents();
	}
	componentWillUnmount(){
		window.removeEventListener('scroll', this.props.changeScrollShow);

	}
	bindEvents() {
		window.addEventListener('scroll', this.props.changeScrollShow);
	}
}
const mapState = (state) => ({
	showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfoAction());
	},
	changeScrollShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShowAction(true));
		}else{
			dispatch(actionCreators.toggleTopShowAction(false));
		}
	}


})
export default connect(mapState, mapDispatch)(Home);