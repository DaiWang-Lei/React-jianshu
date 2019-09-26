import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (data) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: data.topicList,
    articleList: data.articleList,
    recommendList: data.recommendList,
})
const addListData = (list, nextPage) => ({
    type: constants.ADD_LIST_DATA,
    list: fromJS(list),
    nextPage
})

export const getHomeInfoAction = (page) => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const data = res.data.data;
            dispatch(changeHomeData(data));
        })
    }
}
export const getMoreListAction = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+page).then((res) => {
            const data = res.data.data;
            dispatch(addListData(data,page + 1));
        });
    }
}
export const toggleTopShowAction = (show) => ({
    type:constants.TOGGLE_TOP_SHOW,
    show
})

