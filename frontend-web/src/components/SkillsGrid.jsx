import { useState } from 'react';
import { skillCategories, skillAliases, projects } from '../data';
import { scrollToElement } from '../motion/useSmoothScroll';

// Projects whose title or tech_stack literally names the skill (see skillAliases).
const projectsFor = (skill) => {
  const terms = skillAliases[skill];
  if (!terms) return [];
  return projects.filter((p) => p.id && terms.some((t) => `${p.title} ${p.tech_stack}`.includes(t)));
};
const usage = Object.fromEntries(skillCategories.flatMap((g) => g.skills).map((s) => [s, projectsFor(s)]));

// Scroll to a project card, then briefly outline it (CSS on [data-spotlight]; the card
// carries data-aos, so it is not animated with GSAP).
const showProject = (event, id) => {
  const card = document.getElementById(id);
  if (!card) return;
  event.preventDefault();
  event.stopPropagation();
  scrollToElement(card, () => {
    card.setAttribute('data-spotlight', '');
    setTimeout(() => card.removeAttribute('data-spotlight'), 1800);
  });
};

const chipClass = 'bg-jcrea-dark/80 text-gray-200 border border-white/10 group-hover:border-jcrea-orange/30 px-3.5 py-2 rounded-xl text-sm font-medium hover:bg-jcrea-orange hover:text-white transition-all';

// Skills grid. Chips that appear in at least one project are buttons: selecting one
// lists the projects that use it, each linking to its card.
export default function SkillsGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-delay="100">
      {skillCategories.map((group) => {
        const linkable = group.skills.some((s) => usage[s].length);
        const active = group.skills.includes(selected) ? selected : null;
        return (
          <div key={group.category} className="bg-jcrea-gray/50 backdrop-blur-sm border border-white/10 hover:border-jcrea-orange/40 rounded-3xl p-8 transition-all duration-300 shadow-xl group hover:-translate-y-1 flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-jcrea-orange shadow-[0_0_10px_#FF6B00]"></span>
              <h4 className="text-xl font-bold text-white group-hover:text-jcrea-orange transition-colors">
                {group.category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                usage[skill].length ? (
                  <button key={skill} type="button" aria-pressed={skill === selected}
                    onClick={() => setSelected(skill === selected ? null : skill)}
                    className={`${chipClass} text-left cursor-pointer ${skill === selected ? '!bg-jcrea-orange !text-white !border-jcrea-orange' : ''}`}>
                    {skill}
                  </button>
                ) : (
                  <span key={skill} className={`${chipClass} cursor-default`}>{skill}</span>
                )
              ))}
            </div>
            {linkable && (
              <p aria-live="polite" className="mt-auto pt-6 text-sm">
                {active ? (
                  <>
                    <span className="text-gray-400">Used in: </span>
                    {usage[active].map((p, i) => (
                      <span key={p.id}>
                        {i > 0 && <span className="text-gray-500"> · </span>}
                        <a href={`#${p.id}`} onClick={(event) => showProject(event, p.id)}
                          className="font-semibold text-white underline decoration-white/20 underline-offset-4 hover:text-jcrea-orange hover:decoration-jcrea-orange transition-colors">
                          {p.short}
                        </a>
                      </span>
                    ))}
                  </>
                ) : (
                  <span className="text-gray-500">Select a skill to see the projects that use it.</span>
                )}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
