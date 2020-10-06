import axios from 'axios'

//生产环境
if(process.env.NODE_ENV=='development'){
    axios.defaults.baseURL='http://120.53.31.103:84/api/app'

    // console.log(process);
}

//开发环境
if(process.env.NODE_ENV=='production'){
    axios.defaults.baseURL='https://wap.365msmk.com/'
}

//设置请求时间
axios.defaults.timeout==4000;

  

//拦截器
//请求拦截
axios.interceptors.request.use(
    config=>{
        //可以出来每次发送请求之前的逻辑  例：token验证
        config.headers={DeviceType:'H5'}

        return config
    }
)

//响应拦截
axios.interceptors.response.use(response => {
  return  response //拦截处理响应结果，直接返回需要的数据
}, err => {
  console.log(err)
})


//使用promise返回axios请求结果

//GET请求
export function get(url,params){
   return new Promise((resolve,reject)=>{
    axios.get(
        url,
        {
            params:params
        }
    ).then(res=>{
        resolve(res)
    }).catch(err=>{
        reject(err)
    })
   })
}

//POST
export function post(url,params){
    return new Promise((resolve,reject)=>{
        axios.post(url,params).then(res=>{
            resolve (res.data)
        }).catch(err=>{
            reject(err.data)
        })
    })
}
