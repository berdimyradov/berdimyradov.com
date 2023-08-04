import { COMPANIES } from "@/entities/companies/model/data";
import { CompanyLayout } from "@/shared/components/CompanyLayout";

const company = COMPANIES["social-discovery"];

export const metadata = {
  title: company.title,
  description: company.description,
};

export default function (props) {
  return (
    <CompanyLayout company={company}>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <p>TODO</p>
        </div>
      </div>
    </CompanyLayout>
  );
}
