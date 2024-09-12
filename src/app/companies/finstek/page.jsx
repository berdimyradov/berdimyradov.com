import { COMPANIES } from "@/entities/companies/model/data";
import { CompanyLayout } from "@/shared/components/CompanyLayout";

const company = COMPANIES.finstek;

export const metadata = {
  title: company.title,
  description: company.description,
};

export default function (props) {
  return <CompanyLayout company={company} />;
}
