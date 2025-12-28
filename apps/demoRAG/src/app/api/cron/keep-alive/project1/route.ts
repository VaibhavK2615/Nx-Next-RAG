import { NextResponse } from "next/server";
import { createSupabase } from "@/lib/supabaseCron";

export const runtime = "nodejs";

export async function GET() {
  try {
    const supabase = createSupabase(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase
      .from("documents")
      .select("id")
      .limit(1);

    if (error) throw error;

    return NextResponse.json({
      ok: true,
      project: "project-1",
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        project: "project-1",
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
