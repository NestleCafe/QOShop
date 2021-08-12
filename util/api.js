//接口文档： https://www.showdoc.com.cn/128719739414963/2513235043485226

const BASE_URL = 'https://api-hmugo-web.itheima.net/api/public/v1'
export const request = (options) =>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				if(res.data.meta.status !== 200){
						return uni.showToast({
							title: "获取数据失败",
							icon: 'error'
						})
				}
				resolve(res)
			},
			fail: (err)=>{
				uni.showToast({
					title: "请求接口失败",
					icon: 'error'
				})
				reject(err)
			}
		})
	})
}

/* getSwipers(){
	uni.request({
		url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
		success: (res) =>{
			console.log(res)
			console.log(res.data.meta.status)
		},
	})
} */