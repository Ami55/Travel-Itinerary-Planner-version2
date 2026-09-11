export default function handler(req: any, res: any) {
  const hasGeminiKey = Boolean(process.env.GEMINI_API_KEY);

  res.status(200).json({
    status: 'ok',
    service: 'Travel Itinerary Planner (Vercel Serverless)',
    hasGeminiKey,
    timestamp: new Date().toISOString(),
  });
}
