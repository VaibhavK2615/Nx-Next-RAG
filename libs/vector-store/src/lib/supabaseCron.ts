import { createClient } from "@supabase/supabase-js";

export function createSupabase(url: string, key: string) {
  return createClient(url, key, {
    auth: {
      persistSession: false,
    },
  });
}
