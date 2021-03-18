


const block = (action)=> (req, res, next)=>{
    return  async ()=>{
        console.log('in block', req.params.num)
        if(queue)
        await action(req, res, next)
        if(queue.length > 0){
            await queue.pop(0)()
        }
    }
}

let isRunning = false

module.exports.setUpRequestQueue = (action) => async (req, res, next) => {
    console.log('new block:'+req.params.num)
    while(isRunning){
        await new Promise((resolve) => setImmediate(()=> resolve()))
    }
    isRunning = true
    await action(req, res, next)
    isRunning = false
}

//
    