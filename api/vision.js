export default async function handler(req, res) {

const API_KEY = process.env.OPENAI_API_KEY

const {image, prompt} = req.body

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
role:"user",
content:[
{
type:"text",
text:prompt || "Jelaskan gambar ini"
},
{
type:"image_url",
image_url:{
url:image
}
}
]
}

]

})

})

const data = await response.json()

res.status(200).json({

analysis:data.choices[0].message.content

})

}catch(err){

res.status(500).json({

error:err.message

})

}

}