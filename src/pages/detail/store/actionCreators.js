import axios from 'axios';
import * as constants from './constants';

const  changeDetailAction = (title,content) => ({
  type:constants.CHANGE_DETAIL,
  title,
  content
})
export const getDetailAction = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id).then((res) =>{
      const data = res.data.data;
      dispatch(changeDetailAction(data.title, data.content))
    })
  }
}