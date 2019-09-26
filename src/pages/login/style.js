import styled from 'styled-components';

export const LoginWrapper = styled.div`
   z-index:0;
   position:absolute;
   left:0;
   right:0;
   bottom:0;
   top:60px;
   background:#eee;
`;
export const LoginBox = styled.div`
   width:300px;
   height:200px;
   margin:60px auto;
   padding:50px 50px 30px 50px;
   background:#fff;
   box-shadow: 0 0 8px rgba(0,0,0,.1);
   border-radius:14px;
 
`;
export const Input = styled.input`
   display:block;
   width:300px;
   height:50px;
   background:#fff;
   padding:0 2px;
   color:#777;
   margin:10px auto;
   border-radius: 4px 4px 0 0;
   font-size:18px;
`;
export const Button = styled.div`
   display:block;
   width:300px;
   height:40px;
   line-height:40px;
   background:#3194d0;
   color:#fff;
   text-align:center;
   margin:10px auto;
   border-radius: 15px;
`;

