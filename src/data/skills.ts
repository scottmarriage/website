export type SkillCategory = "cloud-infra" | "data-ml" | "languages" | "frontend" | "tools";

export interface Skill {
  name: string;
  category: SkillCategory;
  icon: string;
}

export const categoryLabels: Record<SkillCategory, string> = {
  "cloud-infra": "Cloud & Infrastructure",
  "data-ml": "Data & ML",
  languages: "Languages",
  frontend: "Frontend",
  tools: "Tools",
};

export const skills: Skill[] = [
  { name: "AWS", category: "cloud-infra", icon: "SiAmazonwebservices" },
  { name: "Lambda", category: "cloud-infra", icon: "SiAwslambda" },
  { name: "S3", category: "cloud-infra", icon: "SiAmazons3" },
  { name: "Docker", category: "cloud-infra", icon: "SiDocker" },
  { name: "Terraform", category: "cloud-infra", icon: "SiTerraform" },
  { name: "Python", category: "data-ml", icon: "SiPython" },
  { name: "Pandas", category: "data-ml", icon: "SiPandas" },
  { name: "NumPy", category: "data-ml", icon: "SiNumpy" },
  { name: "scikit-learn", category: "data-ml", icon: "SiScikitlearn" },
  { name: "Jupyter", category: "data-ml", icon: "SiJupyter" },
  { name: "SQL", category: "languages", icon: "SiPostgresql" },
  { name: "TypeScript", category: "languages", icon: "SiTypescript" },
  { name: "React", category: "frontend", icon: "SiReact" },
  { name: "Tailwind CSS", category: "frontend", icon: "SiTailwindcss" },
  { name: "Astro", category: "frontend", icon: "SiAstro" },
  { name: "Git", category: "tools", icon: "SiGit" },
  { name: "GitHub Actions", category: "tools", icon: "SiGithubactions" },
  { name: "Vercel", category: "tools", icon: "SiVercel" },
];
