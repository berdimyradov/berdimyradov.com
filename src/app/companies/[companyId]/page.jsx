import { COMPANIES } from "@/entities/companies/model/data";
import { CompanyLayout } from "@/shared/components/CompanyLayout";

export async function generateMetadata({ params }) {
  const { companyId } = await params;
  const company = COMPANIES[companyId];

  if (!company) {
    return {
      title: "Company not found",
      description: "The requested company does not exist",
    };
  }

  return {
    title: company.title,
    description: company.description,
  };
}

export default async function Page({ params }) {
  const { companyId } = await params
  const company = COMPANIES[companyId];

  return <CompanyLayout company={company} />;
}
