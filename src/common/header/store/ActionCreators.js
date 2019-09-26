import * as constants from './constants';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage:Math.ceil(data.length / 10)
    
})

export const searchFocusedAction = () => ({
    type: constants.SEARCH_FOCUSED
})
export const searchBlurAction = () => ({
    type: constants.SEARCH_BlUR
})
export const  mouseEnterAction = () => ({
    type: constants.MOUSE_ENTER
})
export const  mouseLeaveAction = () => ({
    type: constants.MOUSE_LEAVE
})
export const  changePageAction = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getListAction = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data));
        }).catch(() => {
            console.log("headerList get error")
        })
    }
};
