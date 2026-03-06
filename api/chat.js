export default async function handler(req,res){

const API_KEY=process.env.OPENAI_API_KEY

const {message,history}=req.body

const response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer "+API_KEY
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[

{role:"system",content:"Kamu adalah AI assistant pintar."},

...history,

{role:"user",content:message}

]

})

})

const data=await response.json()

res.status(200).json({

reply:data.choices[0].message.content

})

  }})

const data = await response.json()

res.status(200).json({
reply: data.choices?.[0]?.message?.content || "AI tidak merespon"
})

} catch (error) {

res.status(500).json({
error: error.message
})

}

}
