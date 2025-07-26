// supabase.js
const { createClient } = supabase;

const supabaseUrl = 'https://YOUR-PROJECT.supabase.co';
const supabaseKey = 'YOUR-ANON-KEY';
const supabaseClient = createClient(supabaseUrl, supabaseKey);
