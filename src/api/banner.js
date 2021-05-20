// import request from './request'
// export async function getBanners() {
//     return await request.get('/api/banner')
// }
import request from './request'
// import axios from 'axios';
// const data = axios.get('/api/banner').then(res=>res.data).then(res=>{return res.data})
// export default data;
export async function getBanner() {
    return await request.get('/api/banner')
}