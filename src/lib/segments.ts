export type CategoryId = "ai-law" | "ma" | "regulatory" | "ethics";

export const CATEGORIES: { id: CategoryId; label: string }[] = [
  { id: "ai-law", label: "AI & Legal Tech" },
  { id: "ma", label: "M&A & Firm Strategy" },
  { id: "regulatory", label: "Regulatory & IP" },
  { id: "ethics", label: "Practice & Ethics" },
];

export type Segment = {
  slug: string;
  title: string;
  dek: string;
  category: CategoryId;
  date: string; // ISO date
  sourceName: string;
  sourceUrl: string;
  whatHappened: string[];
  whyItMatters: string[];
  takeaway: string;
};

export const segments: Segment[] = [
  {
    slug: "carta-launches-ai-native-law-firm",
    title: "A fintech platform just launched its own law firm",
    dek: "Carta's acquisition of Avantia is a bet that routine PE and VC legal work can be run inside the software clients already use.",
    category: "ai-law",
    date: "2026-05-13",
    sourceName: "Artificial Lawyer / Global Legal Post",
    sourceUrl:
      "https://www.artificiallawyer.com/2026/05/13/carta-buys-alsp-avantia-launches-ai-first-law-firm/",
    whatHappened: [
      "Carta, the cap-table and fund-administration platform used by thousands of venture and private-equity funds, has acquired Avantia Law, a London-based alternative legal services provider, and relaunched it as Carta Law. Avantia is regulated by the Solicitors Regulation Authority as an alternative business structure, has around 13 practising solicitors, and already serves more than 200 asset managers globally, including roughly 30% of the largest funds, across deals covering more than $15 trillion in assets under management.",
      "Carta Law is being built as an AI-native offering that sits directly inside Carta's existing platform, so fund formation documents, side letters and standard financing paperwork can be drafted and managed alongside the cap table and fund administration data Carta already holds for those clients.",
    ],
    whyItMatters: [
      "This deal was only possible because of a regulatory quirk: the UK's Legal Services Act 2007 allows alternative business structures, meaning a non-lawyer-owned company like Carta can own and operate a law firm outright. Most US states still bar non-lawyer ownership of law firms, which is exactly why an AI-native legal offering like this one launched out of London rather than New York.",
      "Carta isn't a generic legal AI vendor bolting a chatbot onto a document template — it already sits inside the client relationship, holding the cap table and fund administration data that most PE/VC legal work is built around. Owning both the data and the drafting layer is what makes routine, template-driven legal work cheap to automate here.",
      "The work most exposed to this kind of vertical integration is precisely the standardised, high-volume drafting that has traditionally been the training ground for junior associates at firms serving fund clients — fund formation documents, side letters, NDAs, standard financing terms. That doesn't eliminate the law firm model, but it squeezes the economics of its most commoditised layer.",
    ],
    takeaway:
      "Watch for more alternative business structures entering legal services from adjacent software platforms — the ones that already hold a client's underlying data have a structural advantage. For your own trajectory, the defensible ground is judgment-heavy negotiation and bespoke structuring, not document assembly.",
  },
  {
    slug: "thomson-reuters-ross-intelligence-fair-use",
    title: "Training an AI on Westlaw headnotes was not fair use",
    dek: "The first major US ruling on AI training data and copyright went against the AI company — and the reasoning is still shaping how legal AI vendors source their data.",
    category: "regulatory",
    date: "2025-02-11",
    sourceName: "Reed Smith / Practical Law",
    sourceUrl:
      "https://www.reedsmith.com/articles/court-ai-fair-use-thomson-reuters-enterprise-gmbh-ross-intelligence/",
    whatHappened: [
      "Thomson Reuters sued the AI legal research startup Ross Intelligence, alleging Ross built its competing search tool by training on roughly 2,243 Westlaw headnotes it had no licence to use, after Thomson Reuters had already declined to license the content directly. Ross had instead used a third party, LegalEase, to produce bulk memos that closely tracked the Westlaw headnotes.",
      "Sitting by designation in the District of Delaware, Third Circuit Judge Stephanos Bibas granted partial summary judgment for Thomson Reuters, rejecting Ross's fair use defence as a matter of law and finding the headnotes were original, protected, and infringed.",
    ],
    whyItMatters: [
      "This was the first real test, in a legal-domain-specific dispute, of whether an AI company can train on copyrighted material without a licence. Before this ruling, the strongest fair use arguments for AI training leaned on 'transformative use' theories drawn from cases like the Google Books litigation.",
      "The decisive factor wasn't whether Ross's tool spat out Westlaw's original text — it didn't, verbatim. It was that Ross's use was commercial and aimed at building a product that would compete directly in Westlaw's own market. That market-substitution effect broke the transformative-use argument even though the technology itself looked genuinely novel.",
      "Every legal AI vendor building or buying data since has had to take that distinction seriously — which is part of why offerings like Carta Law lean on data the company already owns or has properly licensed, rather than scraped secondary sources, and why Anthropic ultimately settled a similar training-data theory (see the next segment) rather than litigate it to a jury.",
    ],
    takeaway:
      "When you're advising a client building or buying an AI product, the fair use question increasingly turns on whether the output substitutes for the copyrighted work's own market — not on how transformative the underlying technology sounds in a pitch deck.",
  },
  {
    slug: "anthropic-copyright-settlement",
    title: "Anthropic's $1.5bn settlement priced the risk of training on pirated books",
    dek: "The largest copyright settlement on record gives every company buying or building AI tools an actual number to negotiate indemnities around.",
    category: "regulatory",
    date: "2026-07-20",
    sourceName: "JURIST / The Authors Guild",
    sourceUrl:
      "https://www.jurist.org/news/2026/07/judge-approves-record-1-5-billion-settlement-involving-anthropic/",
    whatHappened: [
      "Judge Araceli Martínez-Olguín of the Northern District of California granted final approval, on 20 July 2026, of the $1.5 billion class-action settlement in Bartz v. Anthropic — the largest copyright settlement on record. The case was brought by authors including Andrea Bartz, Charles Graeber and Kirk Wallace Johnson over Anthropic's use of pirated book copies to train its models, and the approved settlement covers 482,460 works.",
      "The settlement resolves claims over the source of the training data itself — how the copies were obtained — separately from the broader, still-unresolved question of whether training an AI model on copyrighted text is fair use at all.",
    ],
    whyItMatters: [
      "For years, 'what happens if we get sued over AI training data' was a theoretical risk clients asked about in the abstract. This settlement turns it into a concrete number — roughly $3,000 per work in this case — that in-house counsel and dealmakers can actually model into risk assessments and indemnity negotiations with AI vendors.",
      "It also draws a sharper line than most commentary acknowledges: this case was about acquiring the underlying copies illegitimately (piracy), not a clean ruling on whether training itself is fair use. That distinction matters enormously for advising a client — a company that licenses or properly purchases its training corpus is in a meaningfully different legal position than one that scraped or pirated it, even before you get to the fair use analysis in play in Thomson Reuters v. Ross Intelligence.",
      "Expect AI vendor contracts to increasingly carry specific representations about training data provenance, and expect procurement teams to start asking for them as a matter of course.",
    ],
    takeaway:
      "When reviewing or negotiating an AI vendor contract, ask specifically how the training data was sourced and what indemnity applies if that sourcing turns out to be unlawful — this settlement is the reference point opposing counsel will now cite on both sides of that negotiation.",
  },
  {
    slug: "ai-authorship-copyright-scotus",
    title: "The Supreme Court just confirmed: AI can't hold a copyright",
    dek: "By declining to hear Thaler v. Perlmutter, the Court left human authorship as the line that decides who owns AI-assisted work.",
    category: "regulatory",
    date: "2026-03-02",
    sourceName: "Norton Rose Fulbright",
    sourceUrl:
      "https://www.nortonrosefulbright.com/en/knowledge/publications/ce8eaa5f/ai-in-litigation-series-an-update-on-ai-copyright-cases-in-2026",
    whatHappened: [
      "The US Supreme Court denied certiorari in Thaler v. Perlmutter, leaving in place the Copyright Office and lower court position that works generated autonomously by AI, without meaningful human creative input, cannot be copyrighted. Works where a human makes meaningful creative decisions remain protected — but only to the extent of that human contribution.",
    ],
    whyItMatters: [
      "Any business generating marketing copy, code, designs or reports substantially through AI now needs to actually document the meaningful human creative decisions involved if it wants enforceable IP rights over the result. A pure 'type a prompt, ship the output' workflow produces material nobody can own.",
      "This lands directly on M&A and IP due diligence: when you're diligencing a target whose product or content library was built substantially with generative AI, you now need to ask how much human authorship went into each asset — because part of the 'IP portfolio' on the balance sheet may not be protectable at all.",
      "Read together with Thomson Reuters v. Ross Intelligence, the two rulings bracket AI copyright from both directions: you can't freely train on someone else's copyrighted material (Ross), and you can't claim copyright over what the AI produces without genuine human authorship either (Thaler). The safe middle ground for clients is licensed or owned inputs, plus documented human authorship on outputs.",
    ],
    takeaway:
      "Expect 'human-in-the-loop' documentation — records of the creative decisions a person actually made — to become a standard diligence item in tech and media deals involving AI-assisted content.",
  },
  {
    slug: "frost-brown-todd-gibbons-merger",
    title: "Two mid-size firms merged to survive the AI cost squeeze",
    dek: "FBT Gibbons is a bet that scale — not just software — is what lets a law firm compete on price.",
    category: "ma",
    date: "2026-01-01",
    sourceName: "Global Legal Post / Law360 Pulse",
    sourceUrl:
      "https://www.globallegalpost.com/news/frost-brown-todd-merges-with-new-jerseys-gibbons-in-northeast-push-2081024936",
    whatHappened: [
      "Frost Brown Todd, known for corporate and transactional strength, merged with Gibbons PC, a Northeast litigation powerhouse, effective 1 January 2026, forming FBT Gibbons LLP. The combined firm has around 800 attorneys across 25 offices, with the merger extending FBT into New Jersey, New York, Pennsylvania, Delaware and, via Gibbons, Florida. The two firms brought in a combined $450 million-plus in gross revenue in 2024.",
    ],
    whyItMatters: [
      "In-house legal departments are increasingly willing to move work away from firms that can't demonstrate clear AI-enabled efficiency within about a year — a pressure that squeezes fee margins right as the tooling, data infrastructure and AI-literate hiring needed to respond gets more expensive. Scale is one of the few ways to absorb that cost without cutting directly into partner profits.",
      "The practice mix matters too: pairing Gibbons' litigation strength with FBT's corporate and transactional base diversifies revenue against practice-specific disruption. That's relevant because AI pressure isn't uniform — document-heavy transactional practices (see the Carta Law segment) face more direct automation pressure than complex, judgment-heavy litigation work.",
      "This is one merger in a broader wave: deal activity in legal services was described as entering a period of technology-driven consolidation through 2026, with legal AI platforms themselves beginning to acquire smaller competitors alongside traditional firm-to-firm mergers.",
    ],
    takeaway:
      "Expect continued mid-size firm consolidation through 2026 and 2027 as the fixed cost of competing on AI tooling and talent pushes firms toward scale — a dynamic worth understanding if you're weighing firm size and practice group when choosing where to train.",
  },
  {
    slug: "solicitor-struck-off-ai-hallucinated-citations",
    title: "Struck off by the tribunal he tried to fool with fake AI citations",
    dek: "The UK's first AI-hallucination disciplinary decision shows regulators have stopped treating 'the AI got it wrong' as an excuse.",
    category: "ethics",
    date: "2026-09-08",
    sourceName: "Legal Futures",
    sourceUrl:
      "https://www.legalfutures.co.uk/latest-news/lawyer-struck-off-for-using-fake-ai-generated-cases-before-sdt",
    whatHappened: [
      "Abhishek Kumar, a registered foreign lawyer already facing Solicitors Regulation Authority disciplinary proceedings over an unrelated immigration-related conviction, used generative AI to help draft his defence submissions to the Solicitors Disciplinary Tribunal. The output contained misleading quotations and case citations that didn't exist. When the SRA flagged the errors, Kumar used AI again to prepare his explanation — which itself contained further fabricated material.",
      "The Tribunal struck him off, describing his culpability as 'very high' and treating the case as the first time it had squarely confronted AI hallucination in submissions made to it.",
    ],
    whyItMatters: [
      "This wasn't a junior lawyer quietly using AI for background research — it was fabricated citations submitted directly to Kumar's own regulator, twice, which is why the tribunal treated it as an aggravating pattern of conduct rather than an isolated technical mistake.",
      "Regulators have moved past treating hallucinated citations as a novel curiosity. The standard being applied is the one lawyers have always been held to: you are personally responsible for verifying every authority you put in front of a court or regulator, regardless of what produced the first draft.",
      "For a trainee or junior associate, the professional duty of competence doesn't shrink because a tool did the drafting — supervision and verification obligations attach to the human whose name is on the submission, not to the software that helped write it.",
    ],
    takeaway:
      "Whatever AI tooling you're trained to use at a firm, treat every citation and quotation it produces as unverified until you've checked it against the primary source yourself — that verification step is now something regulators are actively testing for.",
  },
];

export function getAllSegments(): Segment[] {
  return [...segments].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getSegmentsByCategory(category: CategoryId | undefined): Segment[] {
  const all = getAllSegments();
  if (!category) return all;
  return all.filter((s) => s.category === category);
}

export function getSegmentBySlug(slug: string): Segment | undefined {
  return segments.find((s) => s.slug === slug);
}

export function getCategoryLabel(id: CategoryId): string {
  return CATEGORIES.find((c) => c.id === id)?.label ?? id;
}
