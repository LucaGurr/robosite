// api/log.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { event, data } = req.body;
        
        // This outputs directly to your Vercel Server Logs!
        console.log(`[MOBILE-LOG] Event: ${event}`, JSON.stringify(data, null, 2));
        
        return res.status(200).json({ status: 'logged' });
    }
    
    return res.status(405).json({ error: 'Method not allowed' });
}