// app/blog/vault-agency-file-management/page.tsx
// PRIMARY KEYWORD:  "file management for agencies" (high commercial intent, underserved)
// SECONDARY:        "agency document management software 2026", "client file delivery tool"
//                   "project file storage agencies", "shared drive alternative agencies"
// LONG-TAIL:        "how agencies share deliverables with clients", "agency vault file management"
//                   "AI file management for agencies", "best way to organize client files 2026"
// GEO TARGET:       ChatGPT, Perplexity, Google AI Overviews, Claude
// AEO SIGNALS:      Answer-first 40-60 word blocks, question H2s, FAQPage schema,
//                   self-contained citability passages 134-167 words

import Link from 'next/link'
import Nav from '../../../components/Nav'

export const metadata = {
  title: 'Agency File Management in 2026 — Why Google Drive Alone Fails and What Kobin Vault Does Instead | Kobin',
  description:
    'Agencies lose hours every week to scattered files, broken Drive links, and clients who cannot find their deliverables. Kobin Vault is the Google Drive-backed file management system built for agencies — with AI auto-labeling, semantic search, Monaco code editing, and a client portal where files appear automatically the moment they are uploaded.',
  keywords: [
    'file management for agencies',
    'agency document management software 2026',
    'client file delivery tool',
    'project file storage agencies',
    'shared drive alternative agencies',
    'how agencies share deliverables with clients',
    'AI file management for agencies',
    'best way to organize client files 2026',
    'agency vault software',
    'client deliverable tracking tool',
    'Google Drive alternative agencies',
    'Notion alternative file management',
    'agency knowledge base software',
  ],
  alternates: { canonical: 'https://www.kobin.team/blog/vault-agency-file-management' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Agency File Management in 2026 — Kobin Vault Deep Dive',
    description:
      'The complete guide to how Kobin Vault solves the file chaos that kills agency productivity — AI labeling, semantic search, Monaco editing, deliverable approval, and client portals.',
    type: 'article',
    publishedTime: '2026-04-14T00:00:00Z',
    modifiedTime: '2026-04-14T00:00:00Z',
    authors: ['Arham Mirkar'],
    tags: [
      'file management',
      'agency software',
      'document management',
      'AI vault',
      'client deliverables',
      'Google Drive',
      'Kobin Vault',
    ],
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kobin Vault — Agency File Management with AI in 2026',
      },
    ],
  },
  twitter: { card: 'summary_large_image', creator: '@arham_mirkar' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.kobin.team' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.kobin.team/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Agency File Management — Kobin Vault Deep Dive',
        },
      ],
    },
    {
      '@type': 'Article',
      headline:
        'Agency File Management in 2026 — Why Google Drive Alone Fails and What Kobin Vault Does Instead',
      description:
        'A complete technical and practical deep dive into Kobin Vault — the agency file management system with AI auto-labeling, semantic search, role-scoped client delivery, Monaco editor, and a NotebookLM-style AI that reads every document in your workspace.',
      author: {
        '@type': 'Person',
        name: 'Arham Mirkar',
        url: 'https://www.kobin.team',
        sameAs: ['https://www.linkedin.com/company/kobin-app/'],
      },
      publisher: { '@type': 'Organization', name: 'Kobin', url: 'https://www.kobin.team' },
      datePublished: '2026-04-14',
      dateModified: '2026-04-14',
      keywords:
        'file management agencies, agency vault, AI document management, client file delivery, Google Drive alternative, Notion alternative file management, semantic file search',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.kobin.team/blog/vault-agency-file-management',
      },
    },
    {
      // SoftwareFeature schema — makes Kobin Vault citeable as a named product feature
      '@type': 'SoftwareApplication',
      name: 'Kobin Vault',
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Agency File Management',
      url: 'https://www.kobin.team',
      description:
        'Kobin Vault is the Google Drive-backed file management system inside Kobin — the agency workspace. It provides role-scoped folder hierarchies per project (Internal Documents, Client Uploads, Deliverables), AI auto-labeling on upload, semantic pgvector search, Monaco code editing, TipTap document editing, DOCX parsing, spreadsheet editing, PDF viewing, deliverable approval workflows, activity logs, comment threads, and a NotebookLM-style AI that can answer questions about any document in the vault.',
      featureList: [
        'AI auto-labeling — title, description, type, tags extracted from document content',
        'Semantic search powered by pgvector and BAAI/bge-small-en-v1.5 embeddings',
        'Hybrid search — keyword + semantic combined with Max Marginal Relevance',
        'Role-scoped folders: Internal Documents (team), Client Uploads (client), Deliverables (team → client)',
        'Monaco code editor with syntax highlighting for 30+ languages',
        'TipTap rich-text editor for notes, Markdown, and plain text files',
        'DOCX viewer with Mammoth parsing and TipTap edit mode',
        'Native spreadsheet viewer with inline cell editing (XLSX, XLS, CSV, TSV)',
        'PDF inline viewer via signed URL iframe',
        'AI Writer — RAG-powered content generation with vault context and source attribution',
        'Related items discovery — NotebookLM-style semantic similarity across all documents',
        'Deliverable approval workflow with approve / request-changes status',
        'Activity log — created, edited, embedded, approved, commented events',
        'Comment threads on every vault item',
        'Client vault view — scoped to client_uploads and deliverables only',
        'Automatic text extraction from DOCX (Mammoth), PDF (pdf-parse), XLSX (xlsx library)',
        'Chunk-level vector embeddings with 20% overlap for fine-grained RAG',
        'Google Drive backed — files stay in your own Drive account',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Kobin Vault?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin Vault is the file management system inside Kobin — the agency operating system. It is backed by Google Drive and provides role-scoped folder structures per project: Internal Documents (team only), Client Uploads (clients can view and upload), and Deliverables (team uploads, clients view). Every file uploaded to Vault is AI-labeled, vector-embedded, and searchable semantically. It includes a Monaco code editor, TipTap document editor, DOCX viewer, spreadsheet editor, and PDF viewer — all inside the agency workspace with no file switching required.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is Kobin Vault different from Google Drive for agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Google Drive provides unstructured file storage with manual folder management and no enforced metadata. Kobin Vault provides three structural differences: (1) Enforced project structure — every project automatically gets Internal Documents, Client Uploads, and Deliverables folders with appropriate access controls. (2) AI intelligence — every uploaded file is auto-labeled, embedded into a semantic vector index, and searchable by meaning not just filename. (3) Workflow integration — completing a task with a deliverable requirement automatically routes the file to the correct Deliverables folder, making it visible to the client instantly. Google Drive is file storage. Kobin Vault is file management.',
          },
        },
        {
          '@type': 'Question',
          name: 'What file types does Kobin Vault support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kobin Vault supports all major file types with native viewers and editors. Documents: .docx (Mammoth + TipTap editing), .txt, .md, .mdx (TipTap rich-text). Code: .js, .ts, .tsx, .jsx, .py, .go, .rs, .java, .cpp, .css, .html, .json, .yaml, .sql, .sh, and 20+ more languages (Monaco editor with syntax highlighting). Spreadsheets: .xlsx, .xls, .csv, .tsv (native viewer with inline editing). PDF: inline viewer with approval workflow. Images: .jpg, .png, .gif, .webp, .svg, .bmp, .avif. Any other file type can be stored and downloaded. Maximum upload size is 4MB per file.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does AI auto-labeling work in Kobin Vault?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When you upload a file to Kobin Vault with AI labeling enabled (on by default), the system extracts the full text from the document client-side — DOCX via Mammoth, XLSX via xlsx library, code files via direct read, PDFs server-side via pdf-parse. Up to 3,000 characters of extracted content are sent to a fast Groq AI model with a strict JSON prompt. The AI returns: title (a human-readable name based on actual content, not just the filename), description (one specific sentence about what the document is), document_type (one of 14 categories including Deliverable, Contract, Brief, SOP, Code, Spreadsheet), and tags (2-4 lowercase categorization tags). The form is pre-filled automatically. You review and click Add to Vault.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does semantic search work in Kobin Vault?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When a file is added to Kobin Vault, it is vector-embedded using the BAAI/bge-small-en-v1.5 model hosted on HuggingFace. The full document text is chunked into 800-character segments with 20% overlap (to preserve context across chunk boundaries), and each chunk is embedded separately and stored in a pgvector table. When you search, your query is embedded and compared against all chunks using cosine similarity. Results are deduplicated by document, ranked by best chunk similarity, then passed through Max Marginal Relevance to ensure diverse results rather than five chunks from the same file. The ⌘K search overlay searches across all your projects simultaneously.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does Kobin Vault handle client file delivery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every project in Kobin automatically gets a Deliverables folder. When a task with a deliverable requirement is completed, the team member must upload the file — they cannot mark the task complete without uploading. The file is immediately visible in the client portal under the Deliverables folder. The client does not need to be notified manually — the file appears the moment it is uploaded. Clients can view and download deliverables but cannot modify them. They can also upload their own assets to the Client Uploads folder. This eliminates the manual Drive link sharing, email attachment, and notification workflow that most agencies run today.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the Kobin Vault AI Writer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Kobin Vault AI Writer is a RAG-powered content assistant embedded in the TipTap and DOCX editors. When you open a document and click Kobin AI, you can ask it to write, expand, summarize, or edit content. Before generating a response, the AI performs a semantic search across your entire vault — retrieving the 5 most relevant documents to the task at hand. The generated content cites which vault documents it used (title, type, similarity percentage). For code files, it uses the Monaco AI Writer with language-aware code generation. You can insert the AI response at the cursor position or replace the entire document.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Kobin Vault replace Notion for agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For the core agency use cases of Notion — project documentation, client-facing file sharing, and knowledge management — Kobin Vault is a complete replacement. The key differences: Notion stores files in its own proprietary database; Kobin Vault stores files in your Google Drive account using the drive.file scope. Notion has no enforced folder structure; every project in Kobin gets automatic Internal Documents, Client Uploads, and Deliverables folders. Notion AI only sees Notion content; Kobin Vault AI reads every file in your vault simultaneously and can answer cross-document questions. Kobin Vault is included in all Kobin plans at no extra cost, saving agencies the $40/month Notion Team subscription.',
          },
        },
      ],
    },
  ],
}

// ── Feature table data ─────────────────────────────────────────────────────────

const viewerCapabilities = [
  {
    type: 'DOCX',
    exts: '.docx',
    viewer: 'Mammoth → HTML render',
    editor: 'TipTap rich-text (H1–H3, bold, italic, lists)',
    ai: 'AI Writer with vault RAG context',
  },
  {
    type: 'Markdown / Text',
    exts: '.md, .mdx, .txt',
    viewer: 'TipTap rendered',
    editor: 'Full TipTap — headings, todo lists, code blocks',
    ai: 'AI Writer with vault RAG context',
  },
  {
    type: 'Code',
    exts: '.js, .ts, .py, .go +20',
    viewer: 'Monaco — syntax highlighted, Kobin dark/light theme',
    editor: 'Monaco — full edit, Cmd+S save, revert',
    ai: 'AI Code Assistant — refactor, add types, fix errors',
  },
  {
    type: 'Spreadsheet',
    exts: '.xlsx, .xls, .csv, .tsv',
    viewer: 'Native table — all sheets, pagination',
    editor: 'Inline cell editing, Tab/Enter nav, save as CSV',
    ai: 'Not yet (coming soon)',
  },
  {
    type: 'PDF',
    exts: '.pdf',
    viewer: 'Inline iframe with approval strip',
    editor: 'Not applicable',
    ai: 'Text extracted server-side for semantic search',
  },
  {
    type: 'Images',
    exts: '.jpg, .png, .svg, .webp +5',
    viewer: 'Full-res inline with approval strip',
    editor: 'Not applicable',
    ai: 'Not yet',
  },
  {
    type: 'Any other file',
    exts: 'All formats',
    viewer: 'Download / Drive link',
    editor: 'Not applicable',
    ai: 'Stored and searchable by filename + metadata',
  },
]

const problemVsSolution = [
  {
    problem: 'Client asks "Where\'s the latest version?" — you search 4 tools',
    solution: 'One Deliverables folder per project. Client sees every upload instantly in their portal.',
  },
  {
    problem: 'New team member spends 3 hours locating files across 6 Drive folders',
    solution: 'Every project has identical 3-folder structure. Files are named, typed, and searchable by AI.',
  },
  {
    problem: 'You paste a Drive link in Slack. It goes stale. Client loses access.',
    solution: 'Files live in Vault. Signed URLs are generated server-side, access-controlled by project role.',
  },
  {
    problem: '"Final_v3_ACTUAL_FINAL_revised.pptx" — nobody knows which is current',
    solution: 'AI auto-labels every upload. Activity log shows every edit. Approval status is explicit.',
  },
  {
    problem: 'You email the brief to a new freelancer. It is now in their personal email forever.',
    solution: 'Internal Documents folder. Founder and team only. Clients never see it. No email required.',
  },
  {
    problem: 'Client uploads their brand assets to a random Dropbox link',
    solution: 'Client Uploads folder. Client logs in to their portal and uploads directly. Everything is indexed.',
  },
  {
    problem: '"Can you find that proposal from the Reelix project?" — 20 minutes of searching',
    solution: '⌘K → type "Reelix proposal" → semantic search surfaces it in under 2 seconds.',
  },
]

export default function VaultFileManagementPost() {
  return (
    <>
      <Nav activePage="blog" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="blog-post-layout">
        <div className="blog-post-inner">

          {/* ── HEADER ── */}
          <header className="post-header">
            <div className="post-header-meta">
              <Link href="/blog" className="post-back">← All posts</Link>
              <span className="post-category cat-build">Product Deep Dive</span>
            </div>
            <h1 className="post-h1">
              Agency File Management in 2026 — Why Google Drive Alone Fails and What Kobin Vault Does Instead
            </h1>
            <p className="post-subtitle">
              The average agency runs its files across Google Drive, Notion, email attachments, and Slack uploads. None of these share a structure, enforce metadata, or give clients a clean window into their deliverables. Kobin Vault was built to fix every one of those problems — with an AI that reads every document you store.
            </p>
            <div className="post-byline">
              <div className="byline-avatar">AM</div>
              <div className="byline-info">
                <strong>Arham Mirkar</strong>
                <span>Founder, Kobin &nbsp;·&nbsp; April 14, 2026 &nbsp;·&nbsp; 16 min read</span>
              </div>
            </div>
          </header>

          {/* ── DIRECT ANSWER — GEO citability, 50 words ── */}
          <div
            style={{
              background: 'var(--parch)',
              border: '1px solid var(--wire)',
              borderRadius: '10px',
              padding: '16px 20px',
              margin: '0 0 32px',
              fontSize: '14px',
              color: 'var(--ghost)',
              lineHeight: 1.7,
            }}
          >
            <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: '4px' }}>
              Direct answer
            </strong>
            Kobin Vault is a Google Drive-backed agency file management system with role-scoped project folders, AI auto-labeling on upload, semantic pgvector search, Monaco code editing, DOCX and spreadsheet editing, deliverable approval workflows, client portal integration, and a RAG-powered AI Writer that can generate content from any file in your vault. It replaces Google Drive chaos and Notion for agency project file management — included in all Kobin plans from $49/month.
          </div>

          {/* ── LAST UPDATED ── */}
          <div
            style={{
              fontSize: '12px',
              color: 'var(--ghost2)',
              padding: '10px 16px',
              background: 'rgba(0,0,0,0.03)',
              borderRadius: '8px',
              border: '1px solid var(--wire)',
              marginBottom: '32px',
            }}
          >
            <strong>Last updated:</strong> April 14, 2026 · Kobin Vault features described are live in the current beta · Kobin (kobin.team) is made by this site
          </div>

          {/* ── STAT GRID ── */}
          <div className="post-stat-grid">
            {[
              {
                num: '7',
                label: 'File viewers built into Vault',
                sub: 'Monaco · TipTap · Mammoth · Spreadsheet · PDF · Image · Generic',
              },
              {
                num: '30+',
                label: 'Code languages with syntax highlighting',
                sub: 'JS · TS · Python · Go · Rust · Java · SQL · YAML and more',
              },
              {
                num: '0',
                label: 'Manual Drive links to share deliverables',
                sub: 'Client portal updates the moment a file is uploaded',
              },
              {
                num: '~2s',
                label: 'Semantic search across your entire vault',
                sub: 'pgvector + bge-small-en-v1.5 · chunk-level retrieval',
              },
            ].map(({ num, label, sub }) => (
              <div className="post-stat" key={label}>
                <div className="post-stat-num">{num}</div>
                <div className="post-stat-label">{label}</div>
                <div className="post-stat-sub">{sub}</div>
              </div>
            ))}
          </div>

          {/* ── BODY ── */}
          <div className="post-body-content">

            {/* ──────────────────────────────────────────────────────────────
                SECTION 1: THE PROBLEM
            ────────────────────────────────────────────────────────────── */}
            <h2 id="the-agency-file-problem">
              What does the agency file chaos problem actually look like?
            </h2>

            <p>
              If you run a 3–15 person agency, your file situation has a specific shape. The client brief arrived via email. You moved it to a Google Drive folder. The designer put the first draft in a different Google Drive folder under a name that made sense at 11pm on a deadline night. The revised version is in Dropbox. The approved version was screen-shared in a Zoom call and never formally saved. The final version you actually delivered lives in the client&apos;s own inbox as an email attachment — and you have no copy.
            </p>

            <p>
              This is not laziness. It is the predictable output of a tool stack that was never designed to handle agency delivery workflows. Google Drive is file storage. Notion is flexible databases. Slack is messaging. None of them have any concept of a project-scoped delivery pipeline — where some files belong to the team, some belong to the client, and some are handoffs between the two.
            </p>

            <div className="post-pull-quote">
              <p>
                &ldquo;The file problem is not that agencies do not have enough storage. It is that no single tool understands the relationship between a file, a project, a client, and a delivery status.&rdquo;
              </p>
              <cite>— On why Google Drive alone cannot solve agency file management</cite>
            </div>

            <p>
              The specific failure modes show up in every agency at every size. Here are the seven most common ones — and what Kobin Vault does instead:
            </p>

            {/* Problem vs Solution table */}
            <div className="post-cost-table" style={{ marginTop: '24px' }}>
              <div
                className="cost-table-header"
                style={{ gridTemplateColumns: '1fr 1fr' }}
              >
                <span>Common agency file problem</span>
                <span>Kobin Vault solution</span>
              </div>
              {problemVsSolution.map(({ problem, solution }) => (
                <div
                  className="cost-table-row"
                  key={problem}
                  style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}
                >
                  <span style={{ fontSize: '13px', color: '#C03B30', lineHeight: 1.65, paddingRight: '12px' }}>
                    {problem}
                  </span>
                  <span style={{ fontSize: '13px', color: '#0D6B4F', lineHeight: 1.65 }}>
                    {solution}
                  </span>
                </div>
              ))}
            </div>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 2: ARCHITECTURE — HOW IT WORKS
            ────────────────────────────────────────────────────────────── */}
            <h2 id="vault-architecture">How is Kobin Vault structured? The three-folder architecture.</h2>

            <p>
              <strong>Kobin Vault uses a three-folder hierarchy per project, created automatically when you create a project.</strong> Every project gets exactly three folders: Internal Documents, Client Uploads, and Deliverables. These are not arbitrary labels — they map to access control rules enforced at the database level.
            </p>

            <ul className="post-list">
              <li>
                <strong>Internal Documents</strong> is visible only to your team (founder + team members). Clients cannot see it, cannot navigate to it, cannot accidentally stumble upon it. This is where you put your internal briefs, strategy documents, SOPs, call notes, and anything else that is working context rather than client-facing output.
              </li>
              <li>
                <strong>Client Uploads</strong> is visible to both team and clients. Clients can upload files directly into this folder through their portal — brand guidelines, approved photography, legal documents, reference materials. Team members can see everything clients upload. This eliminates the &ldquo;email me your brand kit&rdquo; workflow that scatters assets across inboxes.
              </li>
              <li>
                <strong>Deliverables</strong> is where the work goes when it is done. Team members upload to this folder; clients can view and download but cannot modify. When a task with a deliverable requirement is completed, the upload automatically routes here. The client portal reflects this immediately — no manual notification, no shared Drive link, no email attachment.
              </li>
            </ul>

            <p>
              These folders are backed by Google Drive using the <code>drive.file</code> scope. This means Kobin only accesses files it creates — it never reads your existing Drive content. Your files stay in your own Google account. If you cancel Kobin tomorrow, your files are still in Drive, exactly where they were.
            </p>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 3: AI AUTO-LABELING
            ────────────────────────────────────────────────────────────── */}
            <h2 id="ai-auto-labeling">
              How does AI auto-labeling work on upload?
            </h2>

            <p>
              <strong>When you upload a file to Kobin Vault with AI labeling enabled (the default), the system extracts the full text from the document before it ever hits the server — and asks an AI to label it for you.</strong> The result is that you never manually type a title, description, or document type for a file you upload. The AI does it from the actual content, not the filename.
            </p>

            <p>
              The extraction pipeline runs client-side for most formats. DOCX files are parsed with Mammoth, which converts Word formatting to plain text. XLSX and CSV files are parsed with the xlsx library, producing a sheet-to-CSV representation that preserves all column values. Code files (JavaScript, TypeScript, Python, and 25+ others) and plain text files are read directly. PDFs are handled server-side after upload via pdf-parse, which reliably extracts text from most PDF formats.
            </p>

            <p>
              Up to 3,000 characters of the extracted content are sent to a fast AI model (Groq&apos;s Llama 3.3 running via the HuggingFace router) with a strict JSON-only system prompt. The model returns four fields: <strong>title</strong> (a human-readable name derived from the actual content), <strong>description</strong> (one sentence describing exactly what the document is), <strong>document_type</strong> (one of 14 categories: Content, Deliverable, Report, Contract, Brief, Design Asset, Spreadsheet, Presentation, Reference, Proposal, SOP, Note, Code, Other), and <strong>tags</strong> (2–4 lowercase tags for additional categorization).
            </p>

            <p>
              The form pre-fills automatically while the analysis runs. A small &ldquo;Labeled&rdquo; indicator appears when it is complete. You can review the AI&apos;s suggestion, edit any field if needed, and click Add to Vault. If AI labeling is turned off, the full manual form is shown instead.
            </p>

            <div
              style={{
                background: 'var(--ink2)',
                borderRadius: '12px',
                padding: '24px',
                margin: '24px 0',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  color: '#555552',
                  fontFamily: "'Geist Mono', monospace",
                  letterSpacing: '0.06em',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                Example AI labeling output — from a 12-page agency proposal
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: '10px',
                  fontSize: '12px',
                  fontFamily: "'Geist Mono', monospace",
                }}
              >
                {[
                  ['File uploaded', 'final_proposal_draft3_v2.docx', '#9C9890'],
                  ['AI title', 'Reelix Digital Rebrand Proposal — Q2 2026', '#4DD6A5'],
                  ['AI description', 'Full-scope proposal covering brand strategy, visual identity, website redesign, and 3-month delivery timeline for Reelix.', '#4DD6A5'],
                  ['AI document_type', 'Proposal', '#4DD6A5'],
                  ['AI tags', 'rebrand, proposal, reelix, visual-identity', '#4DD6A5'],
                ].map(([label, value, color]) => (
                  <div key={label} style={{ display: 'contents' }}>
                    <span style={{ color: '#555552' }}>{label}</span>
                    <span style={{ color: color }}>{value}</span>
                  </div>
                ))}
              </div>
              <p
                style={{
                  marginTop: '14px',
                  fontSize: '11px',
                  color: '#555552',
                }}
              >
                ⚡ Labeling completed in 1.4 seconds via Groq inference
              </p>
            </div>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 4: SEMANTIC SEARCH
            ────────────────────────────────────────────────────────────── */}
            <h2 id="semantic-search">
              How does semantic search work in Kobin Vault?
            </h2>

            <p>
              <strong>Every file stored in Kobin Vault is automatically vector-embedded and indexed for semantic search — meaning you can search by concept and meaning, not just filename or keyword.</strong> Press ⌘K from anywhere in the workspace to open the search overlay and type a natural-language query. Results appear in under 2 seconds.
            </p>

            <p>
              The embedding pipeline runs in two layers. First, the full document — title, description, extracted text, and any note content — is embedded as a single vector using the <code>BAAI/bge-small-en-v1.5</code> model (a 384-dimension retrieval model fine-tuned for semantic similarity). This item-level embedding powers fast overview search.
            </p>

            <p>
              Second, if the document has substantial text content (more than 200 characters), the full text is chunked into 800-character segments with 160-character overlap — a 20% overlap that preserves semantic continuity across chunk boundaries. Each chunk is embedded separately and stored in a <code>vault_chunks</code> pgvector table. When you search, Kobin runs a chunk-level similarity query first (higher precision), then deduplicates by document, keeping the best-matching chunk per file. The final results pass through a Max Marginal Relevance algorithm that balances relevance to your query against diversity — so you get results from different projects and folders rather than five chunks from the same document.
            </p>

            <p>
              Hybrid mode (the default in the ⌘K overlay) runs semantic search and keyword search in parallel, merges and deduplicates the results, and ranks by semantic score. This means a query for &ldquo;Reelix payment terms&rdquo; will find the contract even if you never typed &ldquo;payment terms&rdquo; as a tag — because the vector knows what the document says.
            </p>

            <div className="post-pull-quote">
              <p>
                &ldquo;The difference between file search and semantic search is the difference between looking for a key by its shape versus knowing where you left it. One requires you to remember. The other knows.&rdquo;
              </p>
              <cite>— On why pgvector search changes agency file management</cite>
            </div>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 5: FILE VIEWERS — THE COMPLETE ECOSYSTEM
            ────────────────────────────────────────────────────────────── */}
            <h2 id="file-viewers">
              What file types can you view and edit inside Kobin Vault?
            </h2>

            <p>
              <strong>Kobin Vault includes seven different native viewers and editors, covering every file type an agency regularly handles.</strong> You never need to download a file and open it in a separate application to review or edit it. Everything opens inside the workspace.
            </p>

            <div className="post-cost-table">
              <div
                className="cost-table-header"
                style={{ gridTemplateColumns: '1fr 1fr 1.5fr 1fr' }}
              >
                <span>File type</span>
                <span>Extensions</span>
                <span>Viewer + Editor</span>
                <span>AI capability</span>
              </div>
              {viewerCapabilities.map(({ type, exts, viewer, editor, ai }) => (
                <div
                  className="cost-table-row"
                  key={type}
                  style={{ gridTemplateColumns: '1fr 1fr 1.5fr 1fr', alignItems: 'start' }}
                >
                  <span className="cost-tool">{type}</span>
                  <span
                    style={{
                      fontSize: '11px',
                      color: 'var(--ghost2)',
                      fontFamily: "'Geist Mono', monospace",
                    }}
                  >
                    {exts}
                  </span>
                  <span className="cost-replaces">{viewer} · {editor}</span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: ai.startsWith('Not') ? 'var(--ghost2)' : '#0D6B4F',
                      lineHeight: 1.5,
                    }}
                  >
                    {ai}
                  </span>
                </div>
              ))}
            </div>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                margin: '40px 0 12px',
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              The Monaco Code Editor
            </h3>

            <p>
              For code files, Vault uses Monaco — the same editor that powers Visual Studio Code. When you open a TypeScript file, a Python script, a SQL migration, or any of the 30+ supported languages, you get full syntax highlighting in a custom Kobin Dark or Light theme. You can toggle between View and Edit mode, make changes directly in the browser, and save with Cmd+S. The editor detects the language automatically from the file extension. A revert button appears when there are unsaved changes, letting you roll back to the last saved version.
            </p>

            <p>
              The Monaco AI Writer panel (accessible via the Kobin AI button in the toolbar) gives you a code-specific AI assistant. You can type instructions like &ldquo;add TypeScript types to all functions,&rdquo; &ldquo;add error handling and try/catch,&rdquo; or &ldquo;refactor for readability&rdquo; — or choose from pre-built suggestions. The AI generates code that you can either append to the existing file or replace it entirely. When you save, the new content is re-embedded and the search index updates.
            </p>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                margin: '32px 0 12px',
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              The TipTap Document Editor
            </h3>

            <p>
              Notes, Markdown files, plain text documents, and items labeled as Brief, SOP, Reference, or Proposal all open in a full TipTap rich-text editor. The editing experience is similar to Notion or Linear&apos;s document view — you get a large title field at the top, a clean editing canvas, and a floating toolbar with formatting options. The toolbar supports Bold, Italic, Underline, Strikethrough, H1–H3 headings, bullet lists, ordered lists, todo checkboxes, inline code, blockquote, and horizontal rule.
            </p>

            <p>
              Markdown files are automatically converted to HTML on open for proper rendering — a heading written as <code>## Section</code> displays as a formatted H2. The AI Writer panel connects to the RAG engine: when you ask it to expand a section or draft new content, it searches your entire vault for relevant context first, cites the sources it used, and streams the response in real time.
            </p>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                margin: '32px 0 12px',
                color: 'var(--ink)',
                letterSpacing: '-0.01em',
              }}
            >
              The Native Spreadsheet Editor
            </h3>

            <p>
              Excel files (XLSX, XLS), CSV, and TSV files open in a native spreadsheet viewer built with the xlsx library. All sheet tabs are displayed. The view shows paginated rows (50 per page) with column headers. In Edit mode, every cell becomes an inline input — click a cell, type your change, Tab to the next cell, Enter to move down, Esc to confirm. Header cells are also editable. When you save, the active sheet is exported as a CSV and stored in <code>extracted_text</code>, making it immediately searchable and AI-readable.
            </p>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 6: AI WRITER / NOTEBOOKLM
            ────────────────────────────────────────────────────────────── */}
            <h2 id="ai-writer-notebooklm">
              The AI Writer — Kobin Vault as a NotebookLM for your agency
            </h2>

            <p>
              <strong>Kobin Vault&apos;s AI capabilities go beyond search. The Vault AI Writer can read the content of your documents, synthesize information across multiple files, and write or edit content that is grounded in your actual project knowledge — not hallucinated from general training data.</strong>
            </p>

            <p>
              When you open the AI Writer panel in any document, you can ask questions or give writing instructions. Before the model generates a single word, it runs a semantic search across your entire vault to retrieve the most relevant documents. Up to six vault items are injected into the AI context as a structured knowledge brief — titled, typed, and attributed. The model is explicitly instructed to cite the source document when it uses information from it, and to say so if no relevant vault context exists for the question.
            </p>

            <p>
              This is the same architecture that makes products like Google NotebookLM useful — grounding AI responses in your own documents rather than the model&apos;s training data. The difference is that Kobin&apos;s vault AI is not a standalone product. It is embedded directly in the editor where you are working, and the knowledge base is the same vault you use every day for client delivery. When the AI writer cites &ldquo;Reelix Brand Brief — Brief (91% match)&rdquo; as its source, it is citing a specific file your team uploaded — not a generic web result.
            </p>

            <p>
              The AI Writer also works in the global command bar (⌘K). You can ask questions like &ldquo;what does our standard SLA say about response time?&rdquo; or &ldquo;find the scope of work for the Acme Corp project&rdquo; and the AI will retrieve the answer from your vault files. This is how the Vault transforms from a file storage system into a genuine knowledge base for your agency.
            </p>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 7: RIGHT PANEL — CONTEXT, APPROVAL, COMMENTS, ACTIVITY
            ────────────────────────────────────────────────────────────── */}
            <h2 id="right-panel">
              What does the Vault right panel include?
            </h2>

            <p>
              Every open vault item has a collapsible right panel with four tabs: Context, Approval, Comments, and Activity. Together these tabs give you the full operational picture of a file — not just its content.
            </p>

            <ul className="post-list">
              <li>
                <strong>Context</strong> shows the AI memory status (whether the file has been vectorised and indexed), a list of related vault items by semantic similarity (the four most similar files across all your projects, with percentage scores), and quick action buttons for drafting follow-up emails, creating delivery tasks, or finding similar files across projects.
              </li>
              <li>
                <strong>Approval</strong> is available for files in a Deliverables folder. It shows the current approval status (Awaiting, Approved, or Changes Requested), a note field for the approval reviewer, and one-tap approve / request-changes buttons. For PDF and image files, an inline file preview is shown in the approval tab so reviewers do not need to download the file to approve it. A signed 1-hour URL is generated server-side for the preview.
              </li>
              <li>
                <strong>Comments</strong> is a threaded discussion attached to the specific vault item. Team members can comment on deliverables, ask questions about briefs, or leave revision notes directly on the file — keeping the conversation co-located with the content rather than in a separate Slack channel.
              </li>
              <li>
                <strong>Activity</strong> shows a full timeline of everything that has happened to this file: when it was added to the vault, when it was edited, when it was vectorised by the AI, when it received comments, and who did what. The activity log is automatically populated — no manual logging required.
              </li>
            </ul>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 8: CLIENT DELIVERY WORKFLOW
            ────────────────────────────────────────────────────────────── */}
            <h2 id="client-delivery-workflow">
              How does Kobin Vault change the client file delivery workflow?
            </h2>

            <p>
              The traditional agency client delivery workflow has six manual steps: complete the work, upload to Drive, copy the shareable link, open Slack (or email), paste the link with a message, and wait to confirm the client received it. Each step is a potential failure point. Drive links go stale. Slack messages get buried. Clients lose the email.
            </p>

            <p>
              <strong>Kobin Vault eliminates all six steps.</strong> Here is the actual workflow:
            </p>

            <ol
              style={{
                paddingLeft: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                margin: '20px 0 28px',
                fontSize: '15px',
                color: 'var(--ghost)',
                lineHeight: 1.65,
              }}
            >
              <li>
                A team member marks a task as complete. If the task has a deliverable requirement, a completion modal opens — they cannot close it without uploading the file.
              </li>
              <li>
                The file is uploaded to Supabase Storage via a private vault bucket. A storage path is generated using <code>founderId/folderId/timestamp_filename</code>.
              </li>
              <li>
                The file appears immediately in the Deliverables folder of that project vault.
              </li>
              <li>
                The client is already logged into their portal (or next time they log in). They see the file in their Deliverables folder without any notification, link, or email.
              </li>
              <li>
                The client can open the PDF in the inline viewer, review it, and mark it Approved or Request Changes — directly in their portal.
              </li>
              <li>
                The Activity log on the vault item records the upload, the view, and the approval decision.
              </li>
            </ol>

            <p>
              This is not an incremental improvement on the Drive + Slack workflow. It is a structurally different architecture that removes the human handoff entirely. The file goes from &ldquo;completed task&rdquo; to &ldquo;visible to client&rdquo; without any manual step.
            </p>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 9: VS. GOOGLE DRIVE AND NOTION
            ────────────────────────────────────────────────────────────── */}
            <h2 id="vs-google-drive-notion">
              Kobin Vault vs Google Drive vs Notion for agency file management
            </h2>

            <div className="post-cost-table">
              <div
                className="cost-table-header"
                style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}
              >
                <span>Capability</span>
                <span>Kobin Vault</span>
                <span>Google Drive</span>
                <span>Notion</span>
              </div>
              {[
                [
                  'Enforced project folder structure',
                  '✓ Auto-created (3 folders/project)',
                  '✗ Manual, inconsistent',
                  '✗ DIY, decays over time',
                ],
                [
                  'Role-scoped client access',
                  '✓ Structural (Internal / Client / Deliverables)',
                  '⚠ Manual permissions per file',
                  '⚠ Manual page-level permissions',
                ],
                [
                  'AI auto-labeling on upload',
                  '✓ Title, description, type, tags',
                  '✗ None',
                  '✗ None',
                ],
                [
                  'Semantic search across all files',
                  '✓ pgvector, chunk-level, hybrid',
                  '✗ Keyword only',
                  '⚠ Notion AI search (Notion-only)',
                ],
                [
                  'Native code editor',
                  '✓ Monaco (30+ languages)',
                  '✗ None',
                  '✗ None (code block only)',
                ],
                [
                  'Native document editor',
                  '✓ TipTap (rich-text, AI Writer)',
                  '✗ Google Docs is separate',
                  '✓ Notion pages (no file editor)',
                ],
                [
                  'Native spreadsheet editor',
                  '✓ Inline XLSX/CSV editing',
                  '✗ Google Sheets is separate',
                  '✗ None',
                ],
                [
                  'Deliverable approval workflow',
                  '✓ Approve / Request Changes status',
                  '✗ None',
                  '✗ None',
                ],
                [
                  'Activity log per file',
                  '✓ Auto-populated',
                  '⚠ Version history only',
                  '✗ No per-file activity',
                ],
                [
                  'Comment threads on files',
                  '✓ Inline comment threads',
                  '⚠ Google Docs comments only',
                  '⚠ Page comments only',
                ],
                [
                  'AI answers from file content',
                  '✓ NotebookLM-style RAG',
                  '✗ Gemini adds-on (separate tool)',
                  '⚠ Notion AI (Notion pages only)',
                ],
                [
                  'Client portal integration',
                  '✓ Automatic — no manual setup',
                  '✗ Requires separate tool',
                  '✗ Requires manual guest access',
                ],
                [
                  'Files stay in your Drive',
                  '✓ drive.file scope — your account',
                  '✓ Your Drive account',
                  '✗ Stored in Notion (proprietary)',
                ],
                [
                  'Monthly cost (5 seats)',
                  '$49/mo (all Kobin modules)',
                  '$12–18/user → $60–90/mo',
                  '$40/mo (Team plan)',
                ],
              ].map(([cap, kobin, drive, notion]) => (
                <div
                  className="cost-table-row"
                  key={cap}
                  style={{ gridTemplateColumns: '1.4fr 1fr 1fr 1fr' }}
                >
                  <span className="cost-tool" style={{ fontSize: '13px' }}>
                    {cap}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: kobin.startsWith('✓') ? '#0D6B4F' : 'var(--ghost)',
                    }}
                  >
                    {kobin}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color:
                        drive.startsWith('✗')
                          ? '#C03B30'
                          : drive.startsWith('⚠')
                          ? '#C4720A'
                          : 'var(--ghost)',
                    }}
                  >
                    {drive}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color:
                        notion.startsWith('✗')
                          ? '#C03B30'
                          : notion.startsWith('⚠')
                          ? '#C4720A'
                          : 'var(--ghost)',
                    }}
                  >
                    {notion}
                  </span>
                </div>
              ))}
            </div>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 10: SECURITY AND ACCESS CONTROL
            ────────────────────────────────────────────────────────────── */}
            <h2 id="security-access-control">
              How does Kobin Vault handle security and access control?
            </h2>

            <p>
              File security in agencies has a specific risk profile: the risk is not external hackers. It is internal exposure — a client accidentally seeing another client&apos;s files, or an internal strategy document being shared with the wrong person.
            </p>

            <p>
              Kobin Vault addresses this structurally, not procedurally. The access control is embedded in the folder type — not in manual permission toggles that someone has to remember to set on every upload. Internal Documents are inaccessible to clients at the database query level. Client Uploads are visible to the specific client who is associated with that project — not to clients on other projects. Deliverables are accessible to that client only.
            </p>

            <p>
              Files are stored in Supabase Storage&apos;s private vault bucket. They are never directly accessible via public URL. When a viewer needs to load a file — for example, when a client opens a PDF in their portal — a signed URL is generated server-side with a 1-hour expiry. The signed URL generation checks that the requesting user has access to the item before returning a URL. Even if a URL were somehow shared with the wrong person, it would expire within the hour.
            </p>

            <p>
              For team members, the access model mirrors the founder&apos;s project access — a team member can only see vault items in projects they have been added to. For clients, the access is even more constrained: they only see the Client Uploads and Deliverables folders for their specific project. The Internal Documents folder does not appear in their portal at all.
            </p>

            {/* ──────────────────────────────────────────────────────────────
                SECTION 11: THE COST CASE
            ────────────────────────────────────────────────────────────── */}
            <h2 id="the-cost-case">
              What does it actually cost to replace Google Drive and Notion with Kobin Vault?
            </h2>

            <div className="post-math-block">
              <div className="math-row">
                <span>Google Workspace (file storage + Docs + Sheets) — 5 users × $14/user</span>
                <span className="math-num negative">$70/mo</span>
              </div>
              <div className="math-row">
                <span>Notion Team (knowledge base, client docs) — 5 users</span>
                <span className="math-num negative">$40/mo</span>
              </div>
              <div className="math-row">
                <span>Client portal tool (Basecamp / custom) — basic tier</span>
                <span className="math-num negative">$99+/mo</span>
              </div>
              <div className="math-row">
                <span>Manual file management overhead — 3 hrs/week × $75/hr</span>
                <span className="math-num negative">$900/mo</span>
              </div>
              <div className="math-row math-total">
                <span>True monthly cost of fragmented file stack</span>
                <span className="math-num negative">$1,109+/mo</span>
              </div>
            </div>

            <div className="post-math-block" style={{ marginTop: '12px' }}>
              <div className="math-row">
                <span>Kobin Founder plan (all 8 modules including Vault + client portal)</span>
                <span className="math-num" style={{ color: '#4DD6A5' }}>$49/mo</span>
              </div>
              <div className="math-row math-total">
                <span>Annual saving from consolidating onto Kobin Vault</span>
                <span className="math-num" style={{ color: '#4DD6A5' }}>~$12,720/yr</span>
              </div>
            </div>

            <p className="post-source">
              Subscription costs from published pricing pages, April 2026. Manual overhead calculated at $75/hr blended rate, 3 hours/week for a 5-person agency. Actual savings vary by team size and current tool stack.
            </p>

            <p>
              The subscription argument understates the real saving. The more significant number is the recovery of the 3+ hours per week that the average agency loses to manual file management — finding files, sharing Drive links, chasing client approvals, updating version names, and fixing access permissions. At a blended $75/hr rate for a 5-person team, that is nearly $1,000 per month in invisible overhead. Vault&apos;s structured delivery pipeline, semantic search, and automatic client portal integration eliminate the majority of those manual steps.
            </p>

            {/* ──────────────────────────────────────────────────────────────
                CTA
            ────────────────────────────────────────────────────────────── */}
            <div className="post-cta-block">
              <div className="post-cta-eyebrow">Try Kobin Vault</div>
              <h3>Google Drive-backed. AI-indexed. Client-ready in one click.</h3>
              <p>
                Kobin Vault is included in every Kobin plan — no extra cost, no extra setup. Connect Google Drive once and every project you create gets an Internal Documents, Client Uploads, and Deliverables folder automatically. Your files stay in your Drive. The AI reads every one of them.
              </p>
              <div className="post-cta-savings">
                {[
                  { tool: 'Google Drive chaos', saves: 'replaced · enforced 3-folder structure per project' },
                  { tool: 'Notion file management', saves: 'replaced · AI-indexed, role-scoped, client-visible' },
                  { tool: 'Manual Drive sharing', saves: 'eliminated · deliverables auto-appear in client portal' },
                  { tool: 'Separate code editors', saves: 'replaced · Monaco with 30+ language support' },
                  { tool: 'Manual approval tracking', saves: 'eliminated · approve / request-changes on every file' },
                ].map(({ tool, saves }) => (
                  <div className="cta-saving" key={tool}>
                    <span className="cta-tool">{tool}</span>
                    <span className="cta-saves">{saves}</span>
                  </div>
                ))}
              </div>
              <Link href="/#waitlist" className="post-cta-btn">
                Join the waitlist →
              </Link>
              <p className="post-cta-sub">
                Closed beta · 14-day free trial · No credit card required · Files stay in your Google Drive
              </p>
            </div>

            {/* ──────────────────────────────────────────────────────────────
                FAQ
            ────────────────────────────────────────────────────────────── */}
            <h2 id="faq">Frequently Asked Questions</h2>

            <div className="post-faq">
              {[
                {
                  q: 'What is Kobin Vault?',
                  a: 'Kobin Vault is the file management system inside Kobin — the agency operating system. It provides role-scoped folder structures per project (Internal Documents, Client Uploads, Deliverables), AI auto-labeling on upload, semantic pgvector search, Monaco code editing, TipTap document editing, DOCX viewer, spreadsheet editing, PDF viewing, deliverable approval workflows, activity logs, and comment threads. Every file is vector-embedded and searchable by meaning. It is included in all Kobin plans at no extra cost.',
                },
                {
                  q: 'How is Kobin Vault different from just using Google Drive?',
                  a: 'Google Drive provides unstructured file storage with manual folder management and no enforced metadata. Kobin Vault provides three structural advantages: (1) Enforced project structure — every project automatically gets three folders with the correct access controls. (2) AI intelligence — every file is auto-labeled, chunk-embedded, and semantically searchable. (3) Workflow integration — completed tasks with deliverable requirements automatically route files to the Deliverables folder, making them visible to clients instantly. No manual Drive link sharing required.',
                },
                {
                  q: 'What file types does Kobin Vault support?',
                  a: 'Kobin Vault supports DOCX (Mammoth parsing + TipTap editing), Markdown and plain text (TipTap rich-text), 30+ code languages (Monaco editor with syntax highlighting), XLSX/CSV/TSV spreadsheets (native viewer with inline editing), PDF (inline iframe viewer), and images (JPG, PNG, GIF, WebP, SVG, BMP, AVIF). Any other file type can be stored and downloaded. Maximum file size is 4MB per upload.',
                },
                {
                  q: 'Does the AI actually read my documents?',
                  a: 'Yes. When you upload a file, Kobin extracts the full text (DOCX via Mammoth, PDF via pdf-parse server-side, XLSX via the xlsx library, code and text files directly) and embeds it as vector chunks in a pgvector database. The AI in the ⌘K command bar and the AI Writer panel can read and reason about every document in your vault. When you ask "what does our standard SLA say about response time?" it searches your vault, retrieves the relevant document chunks, and answers from the actual content.',
                },
                {
                  q: 'Can clients upload files to Kobin Vault?',
                  a: 'Yes. The Client Uploads folder is writable by the client through their portal. Clients can upload brand assets, approved photography, legal documents, or any reference materials they want to share with your team. Everything they upload is visible to your team and auto-labeled by the AI. Clients can also delete files they uploaded. They cannot see Internal Documents or upload to the Deliverables folder.',
                },
                {
                  q: 'Do my files leave my Google Drive if I use Kobin Vault?',
                  a: 'No. Kobin Vault uses the Google Drive drive.file scope, which means it only accesses files that Kobin itself creates. Your existing Drive content is never accessed. When you connect Google Drive, Kobin creates a Vault root folder in your Drive. All project folders and uploaded files live inside that root folder — in your Google account, owned by you. If you cancel Kobin, your files remain in Drive exactly where they are.',
                },
                {
                  q: 'How does the deliverable approval workflow work?',
                  a: 'When a file is in a Deliverables folder, an approval strip appears at the bottom of the viewer. Any team member with access can mark the file as Approved or Request Changes — and add a written note for the client. The approval status is visible in the file\'s Context panel and Activity log. For PDF and image files, a preview renders directly in the Approval tab of the right panel so reviewers do not need to download the file. The approval status updates the vault item in real time.',
                },
                {
                  q: 'Is Kobin Vault available in the client portal?',
                  a: 'Yes. Clients log into their scoped portal and see the Vault tab. They can browse the Client Uploads and Deliverables folders for their project. They can view files in the inline viewers, download files, and upload to Client Uploads. They cannot see Internal Documents. The client vault view uses the same AI-labeled metadata — title, description, document type — that the team entered, so every file the client sees is clearly labeled and described.',
                },
                {
                  q: 'What is the maximum file size for Kobin Vault uploads?',
                  a: 'The current maximum is 4MB per file. This is set by the Next.js serverless upload limit. PDFs and DOCX files of typical agency deliverable size (under 20 pages) are generally well under this limit. For larger files — high-resolution design assets, video exports, large datasets — the workaround is to upload to Google Drive directly and then add the Drive link to Vault as a Link item with a description.',
                },
              ].map(({ q, a }) => (
                <details className="faq-item" key={q}>
                  <summary className="faq-q">{q}</summary>
                  <p className="faq-a">{a}</p>
                </details>
              ))}
            </div>

          </div>

          {/* ── CLUSTER LINKS ── */}
          <div
            style={{
              padding: '40px 0 20px',
              borderTop: '1px solid var(--wire)',
              marginTop: '40px',
            }}
          >
            <h3
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: '18px',
                fontWeight: 300,
                color: 'var(--ink)',
                marginBottom: '16px',
              }}
            >
              Related reading
            </h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { href: '/ai-workspace', label: 'Full AI workspace overview' },
                { href: '/ai-for-agencies', label: 'AI for agencies' },
                { href: '/blog/slack-notion-asana-hubspot-alternatives', label: 'Replace Slack + Notion + HubSpot' },
                { href: '/blog/kobin-ai-vs-notion-clickup', label: 'Kobin AI vs Notion AI' },
                { href: '/blog/ai-layer-launch', label: 'How the AI layer works' },
                { href: '/blog/the-283-problem', label: 'The $283/month tool problem' },
                { href: '/blog/productivity-software-for-agencies', label: 'Best productivity software 2026' },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontSize: '13px',
                    color: 'var(--vi)',
                    textDecoration: 'none',
                    padding: '6px 14px',
                    border: '1px solid rgba(76,63,212,0.25)',
                    borderRadius: '100px',
                  }}
                >
                  {label} →
                </Link>
              ))}
            </div>
          </div>

          {/* ── POST FOOTER NAV ── */}
          <div className="post-footer-nav">
            <Link href="/blog" className="post-nav-btn">
              <span>← Back to</span>
              <strong>All posts</strong>
            </Link>
            <Link
              href="/blog/proactive-crm-for-agencies"
              className="post-nav-btn"
              style={{ textAlign: 'right' }}
            >
              <span>Read next →</span>
              <strong>Proactive CRM for Agencies</strong>
            </Link>
          </div>

        </div>
      </article>
    </>
  )
}


// Add this import at the top of the file:
//