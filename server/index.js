import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";

import { createClient } from "@supabase/supabase-js";

const app = express();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())


app.use(cors({
  exposedHeaders: ['Content-Range', 'Content-Length', 'Content-Disposition', 'X-Total-Size']
}));


const __dirname = path.resolve();
app.use("/", express.static(path.join(__dirname, "dist")));

// Serving the index.html for all routes
app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// app.get('/api/expenses', async (req, res) => {
//   const { data, error } = await supabase.from('expenses').select('*');
//   if (error) return res.status(400).json(error);
//   res.json(data);
// });

// app.post('/api/expenses', async (req, res) => {
//   const { description, amount, category_id } = req.body;
//   const { data, error } = await supabase
//     .from('expenses')
//     .insert([{ description, amount, category_id }]);
//   if (error) return res.status(400).json(error);
//   res.json(data[0]);
// });

// app.delete('/api/expenses/:id', async (req, res) => {
//   const { id } = req.params;
//   const { error } = await supabase.from('expenses').delete().eq('id', id);
//   if (error) return res.status(400).json(error);
//   res.status(204).send();
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
