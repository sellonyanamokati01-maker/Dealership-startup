import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key must be provided via environment variables.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Example of how to use it:
// async function getVehicles() {
//   const { data, error } = await supabase
//     .from('vehicles') // Replace 'vehicles' with your table name
//     .select('*');

//   if (error) {
//     console.error('Error fetching vehicles:', error);
//     return [];
//   }
//   return data;
// }
