import { COMPANIES } from "@/entities/companies/model/data";

export function getAllCompanies() {
  const companies = Object.keys(COMPANIES).map((k) => ({
    slug: k,
    ...COMPANIES[k],
  }));

  return companies.sort((a, z) => new Date(z.date) - new Date(a.date));
}
