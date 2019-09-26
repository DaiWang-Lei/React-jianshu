import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import '../../statics/iconfont/iconfont.css';
import { actionCreators as loginActionCreators }from '../../pages/login/store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoList,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchWrapper,
	Addition,
	Button
} from './style';
import { ActionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';


class Header extends PureComponent {

	getListArea() {
		const { focused, mouseIn, totalPage, list, page, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const JsList = list.toJS();
		const pageList = [];
		if (JsList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={JsList[i]}>{JsList[i]}</SearchInfoItem>
				)
			}
		}

		if (focused || mouseIn) {
			return (
				<SearchInfo
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<SearchInfoTitle>
						热门搜索
				<SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage, this.spinIcon) }}>
							<span ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe635;</span>
							换一批
				</SearchInfoSwitch >
					</SearchInfoTitle>
					<SearchInfoList>
						{pageList}
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}
	render() {
		const { focused, handleInputFocus, handleInputBlur, list, login, logout } = this.props;

		return (
			<HeaderWrapper>
				<Link to='/'>
					<Logo />
				</Link>
				<Nav>
					<NavItem className='left active'>首页</NavItem>
					<NavItem className='left'>下载App</NavItem>
					{
						login ?
							<NavItem onClick={logout} className='right'>退出</NavItem> :
							<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
					}

					<NavItem className='right'>
						<span className="iconfont icon-edit">&#xe636;</span>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={300}
							classNames='slide'
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							>
							</NavSearch>
						</CSSTransition>
						<span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}
						>&#xe62d;</span>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Link to='/write'>
					<Button className='writting'>
						<span className="iconfont">&#xe66f;</span>
						写文章</Button>
						</Link>
					<Button className='reg'> 注册</Button>
				</Addition>
			</HeaderWrapper >
		)
	}
}




const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header', 'focused']),
		list: state.getIn(['header', 'list']),
		page: state.getIn(['header', 'page']),
		totalPage: state.getIn(['header', 'totalPage']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		login: state.getIn(['login', 'login'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(ActionCreators.getListAction())
			dispatch(ActionCreators.searchFocusedAction());
		},
		handleInputBlur() {
			dispatch(ActionCreators.searchBlurAction());
		},
		handleMouseEnter() {
			dispatch(ActionCreators.mouseEnterAction());
		},
		handleMouseLeave() {
			dispatch(ActionCreators.mouseLeaveAction());

		},
		handleChangePage(page, totalPage, spin) {
			let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (orginAngle) {
				orginAngle = parseInt(orginAngle, 10);
			} else {
				orginAngle = 0;
			}
			spin.style.transform = 'rotate(' + (orginAngle + 360) + 'deg)'

			if (page < totalPage) {
				dispatch(ActionCreators.changePageAction(page + 1));
			} else {
				dispatch(ActionCreators.changePageAction(1));
			}
		},
		logout() {
			dispatch(loginActionCreators.logout())
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);