export default function handler(req, res) {
  console.log("Request body:", req.body);
  console.log("Request headers:", req.headers);

  // Örnek bir cevap gönderelim
  res.status(200).json({ message: "Hello from Serverless Function!" });
}
