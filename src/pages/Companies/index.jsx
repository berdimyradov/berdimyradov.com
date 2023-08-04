import { getAllCompanies } from "@/entities/companies/lib/getAllCompanies";
import { Card } from "@/shared/components/Card";
import { SimpleLayout } from "@/shared/components/SimpleLayout";
import { formatDate } from "@/shared/lib/formatDate";

function Company({ company }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/companies/${company.slug}`}>
          {company.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={company.date}
          className="md:hidden"
          decorate
        >
          {`${formatDate(company.date)} - ${formatDate(company.exitDate)}`}
        </Card.Eyebrow>
        <Card.Description>{company.description}</Card.Description>
        <Card.Cta>View more</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={company.date}
        className="mt-1 hidden md:block"
      >
        {`${formatDate(company.date)} - ${formatDate(company.exitDate)}`}
      </Card.Eyebrow>
    </article>
  );
}

export default function CompaniesPage() {
  let companies = getAllCompanies();

  return (
    <SimpleLayout
      title="The companies that have contributed to my professional growth."
      intro="A walk through my career timeline, highlighting each significant company that has played a role in my professional advancement."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {companies.map((company) => (
            <Company key={company.slug} company={company} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
