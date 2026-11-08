import { Card, CardContent } from 'components/ui/card';

interface experienceEntry {
  role: string;
  company: string;
  dates: string;
  summary: string;
}

export function Experience() {
  const entries: experienceEntry[] = [
    {
      role: 'Senior Product Manager',
      company: 'JPMorganChase',
      dates: 'Jul 2026 – Present',
      summary:
        'Own roadmaps for digital wallet and checkout integrations, led the shift to config-driven checkout, and helped pioneer an AI-native POD model on one of the bank’s first Kanban teams.',
    },
    {
      role: 'Software Engineer III',
      company: 'JPMorganChase',
      dates: 'Jan 2025 – Jul 2026',
      summary:
        'Built and launched a payroll management service serving 10,000+ small business clients and processing more than $1M in monthly ACH payments, coordinating with 10+ downstream partners.',
    },
    {
      role: 'Software Engineer II',
      company: 'Bank of America',
      dates: 'Sep 2022 – Jan 2025',
      summary:
        'Built a 30+ component UI library and led an effort to remove 5,000+ lines of outdated code, improving application performance by 33%.',
    },
    {
      role: 'Associate Software Engineer',
      company: 'National Grid',
      dates: 'Jun 2021 – Sep 2022',
      summary:
        'Automated KPI data entry, saving data owners 40+ hours a month and surfacing 200+ anomalies in historical reporting data.',
    },
  ];

  return (
    <div id="experience" className="mb-5">
      <h2 className="mb-2 text-3xl font-bold text-primary">Experience</h2>
      <div className="space-y-3">
        {entries.map((entry) => (
          <Card key={`${entry.company}-${entry.role}`}>
            <CardContent className="p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-bold">
                  {entry.role} <span className="font-normal text-muted-foreground">· {entry.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">{entry.dates}</span>
              </div>
              <p className="mt-1">{entry.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
