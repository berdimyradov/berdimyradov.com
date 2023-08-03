import glob from "fast-glob";

async function importFile(fileName) {
  let { company } = await import(`@/app/companies/${fileName}`);

  return {
    slug: fileName.replace(/(\/page)?\.mdx$/, ""),
    ...company,
  };
}

export async function getAllCompanies() {
  let filenames = await glob("*/page.mdx", {
    cwd: "./src/app/companies",
  });

  let companies = await Promise.all(filenames.map(importFile));

  return companies.sort((a, z) => new Date(z.date) - new Date(a.date));
}
