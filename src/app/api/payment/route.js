import { createPayment } from "@/lib/payment/model";

export async function GET(request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request) {
  const { name, email, amount } = await request.json();

  if (!name || !email || !amount) {
    return new Response({ message: "Invalid input" }, { status: 400 });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response({ message: "Invalid email address" }, { status: 400 });
  }

  if (isNaN(amount) || Number(amount) <= 0) {
    return new Response({ message: "Invalid amount" }, { status: 400 });
  }

  try {
    const newPayment = await createPayment({
      name,
      email,
      amount,
      date: new Date(),
    });

    return new Response(JSON.stringify({ newPayment }), {
      status: 201,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.log("ERROR", error);
    return new Response(error, { status: 500 });
  }
}
