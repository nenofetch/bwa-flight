import { createClient } from "@supabase/supabase-js"


const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const NEXT_PUBLIC_SUPABASE_PUBLIC_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY ?? "";


const supabase = createClient(
  NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_PUBLIC_KEY
);

export const uploadFile = async (file: File) => {
  try {
    const filename = `${Date.now()}.png`;


    const { error } = await supabase.storage
      .from("Image")
      .upload(`public/airplanes/${filename}`, file, {
        cacheControl: "3600",
        upsert: false
      })
  } catch (error) {
    throw error;
  }
}
