const port = process.env.PORT || 8080;
const http = require('http')
const fs = require('fs')

function handleRequests(req,res){
    console.log(req.url)
    if(req.url==""|| req.url=="/"){
        fs.createReadStream('./dist/liveStreaming/index.html').pipe(res)
    }else if(req.url.includes('.js') || req.url.includes('.ico')){
        fs.createReadStream('./dist/liveStreaming'+req.url).pipe(res)
    }
    else if(req.url=='/getLiveVideo'){
        path = './video.mp4'
        let fileSize = fs.statSync('./video.mp4').size
        const file = fs.createReadStream(path)
        const head = {
            'Content-Range':`bytes ${fileSize}`,
            'Accept-Ranges':'bytes',
            'Content-Type':'video/mp4',
            'Access-Control-Allow-Origin': '*'
        }
        console.log(head)
        res.writeHead(206,head);
        file.pipe(res)
    }else if(req.url.includes('getPlaybackVideo')){
        let videoName = req.url.split('/')[2]
        console.log('video name',videoName)
        let filePath = `./videos/${videoName}`
        if(fs.existsSync(filePath)){
            fs.createReadStream(filePath).pipe(res)
        }else{
            res.end()
        }
    }
}
const server = http.createServer(handleRequests)
const io = require('socket.io')(server,{
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
})
io.origins('*:*')

let connectedUsers = []
io.on('connection',(socket)=>{
    // console.log(socket)
    if(connectedUsers.includes(socket)==false){
        console.log('user connected')
        connectedUsers.push(socket)
    }
    socket.on('disconnect',()=>{
        console.log('user disconnected')
        let index = connectedUsers.indexOf(socket)
        if(index !== -1){
            connectedUsers.splice(index,1)
        }
    })
    socket.on('video',(e)=>{
        console.log('video receiving...')
        console.log(e)
        // fs.createWriteStream('video.mp4').write(e)
        io.emit('receiveStreamPackets',e)
        
    })

    socket.on('sendStreamPackets',(e)=>{
        console.log('send stream packets received',e)
        if(e!==null){
            // io.emit('receiveStreamPackets', e)
            io.emit('receiveStreamPackets', fs.ReadStream('video.mp4'))
        }
        
    })

    socket.on('sendVideoForArchive',(video)=>{
        console.log('fullvideo',video)
        let id = socket.id;
        let buffer = ''
        video.forEach((buf)=>{
            buffer+=buf
        })
        if(buffer!==''){
            // fs.createWriteStream(`./videos/${id}.mp4`).pipe(video)
            fs.writeFileSync(`./videos/${id}.mp4`,video)
        }
        
    })

    socket.on('showPlaybacksAvailable',()=>{
        let videoFiles = fs.readdirSync('./videos')
        if(videoFiles.length>0){
            console.log(videoFiles)
            socket.emit('playbackVideoFiles',JSON.stringify(videoFiles))
        }

    })
    // socket.on('getLiveStream',(e)=>{
    //     fs.createReadStream('video.mp4').pipe()
    // })
})
server.listen(port)
console.log('server running on port '+port)

