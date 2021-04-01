const EventEmitter = require('events');


module.exports.setUpRequestQueue = (action, createIdFromReq) =>{
    const eventEmitter = new EventEmitter()
    const runningList = []
    
    return async (req, res, next) => {
        const id = createIdFromReq(req)
        if(!id){
            await action(req, res, next)
            return
        }

        if(!runningList.includes(id)){
            runningList.push(id)
            await action(req, res, next)
            runningList.splice(runningList.indexOf(id), 1)
            eventEmitter.emit('requestQueue')
            return
        }
        
        const block = async ()=>{
            if(runningList.includes(id)){
                return
            }
            eventEmitter.off('requestQueue',block)
            runningList.push(id)
            await action(req, res, next)
            runningList.splice(runningList.indexOf(id), 1)
            eventEmitter.emit('requestQueue')
        }
        eventEmitter.on('requestQueue', block)

    }
}

//
    