import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-left: 15px;
    padding-top :30px
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    float:right;
    width:280px;
`;
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    margin-left:18px;
    margin-bottom:18px;
    height:32px;
    line-height:32px;
    padding-right:10px;
    font-size:14px;
    border:1px solid #dcdcdc;
    color:#000;
    border-radius:4px;
    .Topic-pic{
        float:left;
        margin-right:10px;
        width:32px;
        height:32px;
    }
`;
export const ListItem = styled.div`
    padding:20px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    .list-pic{
        display:block;
        float:right;
        width:150px;
        height:100px;
        border-radius:10px;
    }
`;
export const ListInfo = styled.div`
    width:458px;
    float:left;
    .title{
        margin: -7px 0 4px;
        line-height:27pxpx;
        font-size:18px;
        font-weight:700;
        color:#333;
    }
    .desc{
     line-height:18px;
     color:#999;
     font-size:13px;   
    }
`;
export const RecommendWrapper = styled.div`
    margin:20px 0;
    width:280px;
`;
export const RecommendItem = styled.div`
    margin-bottom:6px;
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`;
export const WriterWrapper = styled.div`
    margin:20px 0;
    width:280px;
    height:559px;
    text-align:center;
    line-height:559px;
    border: 1px solid #dcdcdc;
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff; 
    margin:30px 0;
    cursor:pointer;
`;
export const BackTop = styled.div`
    position:fixed;
    width:100px;
    height:100px;
    right:70px;
    bottom:70px;
    border:1px solid #ccc;
    font-size:14px;
    line-height:100px;
    text-align:center;
    background:aqua;
    cursor:pointer;

    
`;

