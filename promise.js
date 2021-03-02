function loadImg(src) {
    const p = new Promise( (resolve, reject) => {
        const img = document.createElement('img')

        img.onload = () => {
            resolve(src)
        }

        img.onerror = () => {
            reject(new Error('加载失败'))
        }

        img.src = src
    })

    return p
}

const url = 'https://i0.hdslb.com/bfs/vc/fb9521333b8ea79d90bdfc6da31cf83c52d93ec9.png'
const url2 = 'https://i1.hdslb.com/bfs/vc/fb9521333b8ea79d90bdfc6da31cf83c52d93ec9.png'


loadImg(url).then(img => {
    console.log(img,'kuandu')
    return img
}).then(img => {
    console.log('gaodu')
    return loadImg(url2)
}).then(img2 => {
    console.log(img2,'gaodu')
}).catch(err => {console.log(err)})