import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
		z-index:1;
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`;
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    background:url(${logoPic});
    background-size:contain;
    height:56px;

`;
export const Nav = styled.div`
    width:945px;
		height:100%;
		padding-right:70px;
		box-sizing:border-box;
    margin: 0 auto;
`;
export const NavItem = styled.div`
	color:#333;
	line-height:58px;
	padding: 0 15px;
	font-size:17px;
	&.left{
		float:left;
	}
	&.right{
		float:right;
		color:#969696;
	}
	&.active{
		color:#ea6f5a
	}
`;
export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width:160px;
	height:38px;
	padding:0 35px 0 20px;
	margin-left:20px;
	box-sizing:border-box;
	margin-top:9px;
	border:none;
	outline:none;
	border-radius:19px;
	background:#eee;
	color:#666;
	font-size:14px;
	&::placeholder{
		color:#999;
	}
	&.slide-enter{
		transition:all 1s ease-out;
	}
	&.slide-enter-active{
		width:240px;
	}
	&.slide-exit{
		transition:all .3s ease-out;
	}
	&.slide-exit-active{
		width:160px;
	}

	&.focused{
		width:240px;
		

	}
`;
export const SearchWrapper = styled.div`
	float:left;
	position:relative;
	.zoom{
		position:absolute;
		text-align:center;
		// background:red;
		line-height:30px;
		border-radius:15px;
		width:30px;
		right:5px;
		bottom:5px;
		&.focused{
			background:#777;
			color:white;
		}
	}
	
`;
export const SearchInfo = styled.div` 
position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background:#fff;
}`;
export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
	
`;
export const SearchInfoList = styled.div`
	overflow:hidden;

`
export const SearchInfoSwitch = styled.span`
	
	cursor:pointer;
	font-size: 12px;
	float:right;
	.spin{
		display:block;
		float:left;
		font-size:12px;
		margin-right:5px;
		transition: all .2s ease-in;
		transform-origin: center center;

	}
	
`;
export const SearchInfoItem = styled.a`
 	cursor:pointer;
	display : block;
	float:left;
	font-size: 13px;
	padding: 0 5px;
	line-height: 20px;
	border: 1px solid #ddd;
	color: #787878;
	margin-right:10px;
	margin-bottom:10px;
	border-radius:3px;
`;

export const Addition = styled.div`
	position:absolute;
	right:0;
	top:0;
	height:58px;
`;
export const Button = styled.div`
	float:right;
	padding: 0 20px;
	margin-top:9px;
	margin-right:20px;
	line-height:38px;
	border-radius:19px;
	border:1px solid #ec6149;
	font-size:14px;
	&.reg{
		color:#ec6149;
	}
	&.writting{
		color:#fff;
		background:#ec6149;
	}
`;







