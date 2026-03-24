export default function LabLinksWebsite() {
  const quickLinks = [
    {
      title: "Lab Meeting Agenda",
      href: "https://docs.google.com/spreadsheets/d/1SjQ9wbEJR5xm-1PJMsoKk60UCcNNS6ZeIEylTE1aqes/edit?gid=1OtPZ0f7IYTivNOrmdIDIZm09cUhGCW.1",
      description: "Shared agenda and planning sheet for recurring lab meetings.",
    },
    {
      title: "Lab Meeting Zoom",
      href: "https://purdue-edu.zoom.us/j/98789777629?pwd=IFEZUcOas9M8NzaG8YSg11tp8LjJhc.1",
      description: "Recurring Zoom room for weekly lab meetings.",
    },
    {
      title: "Invited Speaker Agenda",
      href: "https://docs.google.com/spreadsheets/d/1zT8zASRL-FzppxuFpp-1p50ffVMkqLYXtPe45QL3F34/edit?gid=587839880#gid=587839880",
      description: "Schedule and coordination details for invited speakers.",
    },
    {
      title: "Invited Speaker Zoom",
      href: "https://purdue-edu.zoom.us/j/97476924332?pwd=OtPZ0f7IYTivNOrmdIDIZm09cUhGCW.1",
      description: "Zoom room for invited speaker sessions and seminars.",
    },
  ];

  const researchAreas = [
    "Quantitative Genetics and Genomics",
    "Animal Breeding",
    "Data-Driven Livestock Research",
  ];

  const contact = [
    "Department: Hobart and Russel Creighton Hall of Animal Sciences",
    "Primary contact email: britol@purdue.edu",
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="overflow-hidden rounded-[2rem] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Purdue Research Lab
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Brito and Rojas Genomics Lab
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                A central hub for lab meetings, invited speakers, research updates,
                and group information. 
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={quickLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm"
                >
                  Open Lab Agenda
                </a>
                <a
                  href={quickLinks[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800"
                >
                  Join Lab Zoom
                </a>
              </div>
            </div>

            <div className="h-full bg-slate-200">
              <img
                src="/lab.jpg"
                alt="Lab group photo"
                className="h-full min-h-[340px] w-full object-cover"
              />
            </div>
          </div>
        </header>

        <main className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">Quick Links</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {quickLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold">{link.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {link.description}
                        </p>
                      </div>
                      <span className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                        Open
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">Research</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {researchAreas.map((item) => (
                  <div key={item} className="rounded-3xl bg-slate-50 p-5">
                    <p className="text-sm font-medium leading-6 text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <aside className="space-y-8">
            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">People</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Add faculty, postdocs, graduate students, staff, and collaborators.
              </p>
            </section>

            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">Publications</h2>

              <div className="mt-4 space-y-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="font-semibold">Dr. Brito</h3>
                  <a
                    href="https://scholar.google.com/citations?user=6fw0b4gAAAAJ&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    Google Scholar Profile
                  </a>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <h3 className="font-semibold">Dr. Rojas</h3>
                  <a
                    href="https://scholar.google.com/citations?user=W7i9mmUAAAAJ&hl=pt-BR"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    Google Scholar Profile
                  </a>
                </div>
              </div>
            </section>

            <section className="rounded-[2rem] bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
              <div className="mt-4 space-y-3">
                {contact.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </main>
      </div>
    </div>
  );
}

