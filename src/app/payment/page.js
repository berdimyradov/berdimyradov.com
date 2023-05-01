import { PaymentForm } from "@/components/client/PaymentForm";

export default async function Payment() {
  return (
    <div className="mt-14 w-full flex justify-center items-center p-8">
      <div className="w-3/5 bg-white rounded-md p-4 shadow-md">
        <PaymentForm />
      </div>
    </div>
  );
}
