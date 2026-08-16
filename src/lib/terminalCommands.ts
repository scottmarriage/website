const HELP = [
  "Available commands:",
  "  help      show this list",
  "  whoami    about me",
  "  projects  link to projects",
  "  skills    link to skills",
  "  contact   link to contact",
  "  resume    resume status",
  "  clear     clear the screen",
].join("\n");

export const NAV_COMMANDS: Record<string, string> = {
  projects: "/projects",
  skills: "/skills",
  contact: "/contact",
};

export function runCommand(raw: string): string {
  const cmd = raw.trim().toLowerCase();
  switch (cmd) {
    case "":
      return "";
    case "help":
      return HELP;
    case "whoami":
      return "Scott Marriage — software engineer & data scientist, focused on AWS cloud infrastructure and data work.";
    case "projects":
      return "→ /projects";
    case "skills":
      return "→ /skills";
    case "contact":
      return "→ /contact";
    case "resume":
      return "resume: not published yet — check back soon, or use the contact page.";
    case "sudo":
      return "nice try — this terminal only reads, never writes.";
    default:
      return `command not found: ${cmd}. try "help".`;
  }
}
