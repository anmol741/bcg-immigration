import { createClient } from '@supabase/supabase-js'

// Server-only client — service_role key bypasses RLS.
// Never import this in a client component or any NEXT_PUBLIC_ context.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})
