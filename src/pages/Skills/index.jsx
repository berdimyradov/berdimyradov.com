import { Card } from "@/shared/components/Card";
import { Section } from "@/shared/components/Section";
import { SimpleLayout } from "@/shared/components/SimpleLayout";
import { SKILLS as skills } from "@/entities/skills/model/data";

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function SkillsPage() {
  return (
    <SimpleLayout
      title="Coding with vision and precision."
      intro="I often receive inquiries about the tools and methodologies I utilize to construct software, maintain productivity, or engage in the creative process. Here's an extensive overview of my skill set, reflecting the expertise and approaches I employ in my professional journey.">
      <div className="space-y-20">
        {skills.map(({ section, tools }) => (
          <ToolsSection title={section}>
            {tools.map(({ tool, desc }) => (
              <Tool title={tool}>{desc}</Tool>
            ))}
          </ToolsSection>
        ))}
      </div>
    </SimpleLayout>
  );
}
