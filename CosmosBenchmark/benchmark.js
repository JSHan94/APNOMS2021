const express = require('express');
const fetch = require("node-fetch");
const app = express();
const port = 3031
const exec = require('child_process').exec;
const cors = require('cors')
var fs = require("fs")

// async function getRandomLine(filename, callback){
//     const data = fs.readFileSync(filename, 'utf8')
//     var lines = data.split(/\r?\n/);

//     var from = lines[Math.floor(Math.random()*(lines.length-1)+1)].split(",")[1]
//     var to = lines[Math.floor(Math.random()*(lines.length-1)+1)].split(",")[1]

//     return [from,to]  
// }


const getRandomLine = (filename, callback) =>{
    const data = fs.readFileSync(filename, 'utf8')
    var lines = data.split(/\r?\n/);

    var from = lines[Math.floor(Math.random()*(lines.length-1)+1)].split(",")[1]
    var to = lines[Math.floor(Math.random()*(lines.length-1)+1)].split(",")[1]

    return new Promise(resolve =>{
        setTimeout(_=>{
            resolve([from,to])
        },2000)
    })  
}

app.use(
    express.urlencoded({
        extended:true
    })
)
app.use(cors())
app.use(express.json())

app.get('/v1/basic', async(req,res)=>{
    const result = await getRandomLine("parsed_keys.csv")
    var from = result[0]
    var to = result[1]
    var rand = Math.random()
    var ratio = 1.0
    
    try{
        var cmd
        if(rand > ratio){
            cmd = `yes y | planetd tx bank send "${from}" "${to}" 1token --home ~/.earth --chain-id earth`
            //sh benchmark.sh ${from} ${to} 1token
        }else{
            cmd = `yes y | planetd tx blog send-ibcPost blog channel-0 "Hello" "Hello Mars" --from ${from} --chain-id earth --home ~/.earth`
        }
        exec(cmd,
            function(err,stdout,stderr){
                console.log("from : " + from + ", to : " + to +", rand : " + rand )
                // console.log(stdout);
                //console.log(err)
                //console.log(stderr);
            })
        
    }catch(error){
        console.log(error)
    }
})
2800
app.get('/v1/basic/tps', (req,res)=>{
    var latestBlock = 1

    fetch(`http://localhost:26657/status`)
        .then(function(response){
            return response.json();
        })
        .then(function(myJson){
            latestBlock = myJson["result"]["sync_info"]["latest_block_height"] - 10;
            
            const requestUrl = `http://localhost:26657/block?height=${latestBlock}`
            fetch(requestUrl)
                .then(function(response){
                    return response.json();
                })
                .then(function(myJson){
                    const txs = myJson["result"]["block"]["data"]["txs"]
                    
                    console.log("latestBlock = "+latestBlock)
                    console.log("txs.length = " + txs.length)
                    res.send(txs)
                })
        })

    
    
    
})

app.listen(port,()=>{
    console.log(`Benchmark server listening at http://localhost:${port}`)  
})