export default async function handler(req, res) {

const API_KEY = process.env.OPENAI_API_KEY

const {query} = req.body

try{

const response = await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+API_KEY
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[

{
role:"system",
content:"Kamu adalah AI search engine. Jawab seperti mesin pencari: ringkas, jelas, dan informatif."
},

{
role:"user",
content:query
}

],

temperature:0.7

})

})

const data = await response.json()

res.status(200).json({

result:data.choices[0].message.content

})

}catch(err){

res.status(500).json({

error:err.message

})

}

}