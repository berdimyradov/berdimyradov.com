import { TBody, TD, TH, THead, TR, Table } from "@/components/Table";
import { apiFetch } from "@/lib/api";

export default async function History() {
  const response = await apiFetch("/history", { cache: "no-cache" });
  const { payments } = await response.json();

  return (
    <div className="mt-14 w-full flex justify-center items-center">
      <Table>
        <THead>
          <TH>Date</TH>
          <TH>User</TH>
          <TH>Email</TH>
          <TH>Amount</TH>
        </THead>
        <TBody>
          {payments.map((payment) => (
            <TR key={payment._id}>
              <TD>
                {new Date(payment.date).toLocaleDateString("en-UK", {
                  month: "2-digit",
                  day: "2-digit",
                  year: "numeric",
                })}
              </TD>
              <TD>{payment.name}</TD>
              <TD>{payment.email}</TD>
              <TD>${payment.amount}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </div>
  );
}
