import { getPayments } from "@/lib/payment/model";

export async function GET() {
  try {
    const payments = await getPayments();

    return new Response(JSON.stringify({ payments }), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log("ERROR", error);
    return new Response(error, { status: 500 });
  }
}
