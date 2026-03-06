import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // key hanya di server
});

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).json({error:'Method not allowed'});
  
  const { message, chatHistory } = req.body;
  if(!message) return res.status(400).json({error:'Message is required'});

  try{
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // bisa diganti sesuai kebutuhan
      messages: chatHistory,
      temperature: 0.7
    });

    const aiMessage = response.choices[0].message.content;
    res.status(200).json({message: aiMessage});
  }catch(err){
    console.error(err);
    res.status(500).json({error: err.message || "Server error"});
  }
  }
