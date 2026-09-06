// English resume data. Shared by /resume/en and /resume/en/ai-scientist.
// 2026-09-06 LG AI Research AI Scientist 전환 면접 제출본(/resume/en/ai-scientist)이 이 파일을 쓰므로 동결. 수정은 새 경로로 복사해서.
export const header = {
	name: "Minhyeok Jung",
	email: "dylanjungko@gmail.com",
	phone: "+82 10-4536-6741",
	location: "Seoul, South Korea",
	github: "github.com/dylan-jung",
	linkedin: "linkedin.com/in/dylan-jung-ko"
};

export const education = [
	{
		org: "University of Seoul",
		loc: "Seoul, South Korea",
		role: "B.S. in Computer Science, Magna Cum Laude",
		date: "Mar 2019 – Aug 2026",
		right: "GPA 4.12 / 4.5"
	}
];

export const experience = [
	{
		org: "LG AI Research",
		loc: "Seoul, South Korea",
		role: "NLP Research Engineer Intern, Language Lab, Code & Analysis Tech Cell",
		date: "Feb 2026 – Present",
		intro: "Post-training data, serving, and infrastructure across two projects:",
		groups: [
			{
				title: "EXAONE CLI",
				desc: "coding agent built on LG's EXAONE LLM, deployed to LG affiliates",
				bullets: [
					"Built the SFT data pipeline on Dagster producing 10K+ verified agent trajectories; 1.4K sessions in 5 days, unattended",
					"Raised task yield 68.5% → 93.2% with automatic pass@k retries; cut data production cost 3× via a two-stage LLM judge",
					"Modified the agent harness to force and record sub-agent, context-compaction, skill-use, and multi-turn behavior, so the deployed model actually uses them",
					"Proposed and validated moving from a shared 236B model to a dedicated EXAONE 30B MoE on vLLM: context 65K → 256K, 100 → 175 tok/s; adopted as training base",
					"Built a Harbor + Dagster evaluation pipeline for reproducible checkpoint comparison; 20+ runs"
				]
			},
			{
				title: "K-EXAONE 2.0",
				desc: "LG AI Research's foundation model, agentic post-training",
				bullets: [
					"Designed a task-synthesis pipeline yielding 44K verifiable SFT/RL tasks; Terminal-Bench 2.1 on owned domains 14.3 → 39.3",
					"Co-built an agent sandbox platform on AWS EKS (Daytona) in one month, reaching 8,000+ concurrent sandboxes",
					"Split image builds into an autoscaled pre-build service: build wait P95 93 min → 4.4 min, daily cost ₩15M → ₩2M"
				]
			}
		]
	},
	{
		org: "Cigro",
		loc: "Seoul, South Korea",
		role: "Data Engineer & Backend Developer",
		date: "May 2024 – Sep 2024",
		bullets: [
			"B2B analytics dashboard aggregating sales and ad data from 50+ e-commerce platforms for online sellers",
			"Operated Kubernetes crawling/ETL pipelines (Prefect), 500+ jobs/day across 50+ channels",
			"Cut dashboard query latency p99 10s+ → <1s with precomputed aggregate tables; retained 2 at-risk enterprise accounts",
			"Eliminated recurring OOM-driven cluster outages; built Loki/Grafana logging and alerting"
		]
	},
	{
		org: "Rebase",
		loc: "Seoul, South Korea",
		role: "Co-founder & Full-Stack Developer",
		date: "Jun 2022 – Feb 2024",
		intro: "Co-founded a 4-person startup and led engineering for two products; selected for a government pre-startup grant and a university incubator",
		groups: [
			{
				title: "ZIME",
				desc: "mobile app rewarding users with points for verified eco-friendly actions (27K+ downloads, 1,000+ DAU)",
				bullets: [
					"Built the NestJS backend; drove feature decisions (feed, group missions) with A/B tests, lifting D+1 retention 13% → 30%",
					"Built CI/CD to Cloud Run with layer caching; deploy time 30 min → 3 min, 26 releases in 6 months"
				]
			},
			{
				title: "Moinna",
				desc: "image and text search tool for marketers to find ad references",
				bullets: [
					"Built text-to-image search over 30K+ ad creatives: embedding pipeline and Faiss IVFFlat index served from a dedicated FastAPI service",
					"Moved search off pgvector with zero-downtime index swaps on Cloud Run; latency 3.2s → 0.9s, search drop-off 21% → 6%",
					"Split the web app into server-rendered pages for SEO (indexable ad reference pages) and client-rendered interactive search"
				]
			}
		]
	},
	{
		org: "Republic of Korea Air Force, Cyber Operations Center",
		loc: "South Korea",
		role: "Information Security Analyst (mandatory military service)",
		date: "Jul 2020 – Apr 2022",
		bullets: [
			"Monitored and triaged attacks on Air Force networks with NAC, firewall, WAF, and TMS; led initial incident response and analysis",
			"Wrote SIEM queries for log triage and Python scripts automating recurring SOC tasks; colonel-level commendation, Air Force Cyber Warrior Competition (2021)"
		]
	}
];

export const projects = [
	{
		org: "Attenz: AI Video Editor",
		loc: "github.com/dylan-jung/video-edit",
		role: "Personal Project",
		date: "Apr 2025 – May 2025",
		bullets: [
			"Edits long videos from natural-language instructions",
			"LangGraph agent retrieves only relevant scenes (Whisper, Faiss) into the LLM context instead of the full video",
			"Asynchronous indexing with a job queue and worker deduplication so multi-minute jobs never time out"
		]
	}
];

export const activities = [
	{
		org: "Cloud Club, 9th Cohort",
		loc: "cloud engineering community",
		role: "Member",
		date: "Mar 2026 – Present",
		bullets: ["Study groups on GPU systems, high-level architecture, Linux internals, and incident response"]
	},
	{
		org: "University of Seoul Hackathon “Plankton”",
		loc: "Seoul, South Korea",
		role: "Organizer",
		date: "Jun 2024 – Nov 2024",
		bullets: ["Planned and ran the university’s first on-campus hackathon, 60+ participants"]
	},
	{
		org: "Software Maestro, 13th Cohort",
		loc: "government software talent program",
		role: "Team Lead",
		date: "Apr 2022 – Dec 2022",
		bullets: ["Led architecture and team operations; entire team selected as top 8% and sent on an overseas training program"]
	}
];

export const skills = [
	"Languages: Python, TypeScript, SQL",
	"ML / LLM: PyTorch, verl, vLLM, LangGraph",
	"Infrastructure: Kubernetes (EKS), Helm, Docker/BuildKit, AWS, GCP, Grafana/Prometheus/Loki",
	"Data & Backend: Dagster, Prefect, PostgreSQL, Faiss, FastAPI, NestJS"
];

export const awards = [
	"Minister’s Award, MyData Idea Competition, Ministry of Science and ICT (2023)",
	"TOPCIT Level 4, Excellence Award (2022)",
	"AWS Certified AI Practitioner (2025)"
];
