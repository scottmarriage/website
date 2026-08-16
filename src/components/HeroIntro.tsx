import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

interface Props {
  name: string;
  roles: string[];
  bio: string;
  hasHeadshot: boolean;
}

export default function HeroIntro({ name, roles, bio, hasHeadshot }: Props) {
  return (
    <div className={`grid items-center gap-10 ${hasHeadshot ? "md:grid-cols-[1fr_auto]" : ""}`}>
      <div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
          className="font-mono text-sm uppercase tracking-widest text-brand-500"
        >
          {`Hi, I'm ${name}`}
        </motion.p>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.08)}
          className="mt-3 font-display text-display font-semibold text-ink"
        >
          {roles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="text-ink-faint"> &amp; </span>}
              <span className="text-brand-500">{role}</span>
            </span>
          ))}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.16)}
          className="mt-6 max-w-xl text-lg text-ink-muted"
        >
          {bio}
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.24)}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="/projects"
            className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            View projects
          </a>
          <a
            href="/contact"
            className="rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand-500 hover:text-brand-500"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
      {hasHeadshot && (
        <motion.img
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.1)}
          src="/images/headshot.jpg"
          alt={name}
          className="h-40 w-40 rounded-2xl border border-border object-cover shadow-card sm:h-48 sm:w-48"
        />
      )}
    </div>
  );
}
