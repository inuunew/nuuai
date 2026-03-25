export default async function handler(req, res) {
  const form = await req.formData()

  const file = form.get("photo")
  const chat_id = form.get("chat_id")
  const caption = form.get("caption")

  const BOT_TOKEN = process.env.BOT_TOKEN

  const telegramForm = new FormData()
  telegramForm.append("chat_id", chat_id)
  telegramForm.append("photo", file, file.name)

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
    {
      method: "POST",
      body: telegramForm
    }
  )

  const data = await response.json()

  res.status(200).json(data)
}