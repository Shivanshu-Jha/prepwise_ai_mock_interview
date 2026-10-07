# PrepWise 🎙️

An **AI-powered mock interview platform** where users practice real interview scenarios with a conversational **voice agent** and receive **structured feedback** on their answers.

**🌐 Live Demo:** [prepwise-ai-mock-interview](https://prepwise-ai-mock-interview-one.vercel.app/)

---

## ✨ Features

- 🔐 **Authentication** with sign-up and sign-in pages (Firebase Authentication)
- 🎤 **Voice-based mock interviews** with a conversational AI agent powered by Vapi
- 🧠 **AI-generated interview questions** tailored to role, experience level and tech stack (Google Gemini)
- 📊 **Structured feedback** after each interview: scores, strengths and areas to improve, validated with Zod schemas
- 🗂️ **Interview dashboard** with cards for your interviews and their tech stack icons
- 🔒 **Secure backend flows** using the Firebase Admin SDK for storing users, interviews and feedback
- 📱 **Responsive UI** built with Next.js App Router, Tailwind CSS and Shadcn UI

---

## 🛠️ Tech Stack

| Technology | Usage |
| --- | --- |
| Next.js (App Router) | Framework: pages, layouts, server actions and API routes |
| TypeScript | Type safety |
| Firebase Authentication | User sign-up and sign-in |
| Firebase Firestore + Admin SDK | Storing users, interviews and feedback |
| Vapi | Conversational voice AI agent |
| Google Gemini API | Question generation and feedback evaluation |
| Zod | Schema validation for AI-generated feedback |
| Tailwind CSS + Shadcn UI | Styling and UI components |

---

## 🏗️ Architecture

```
 Browser (Next.js UI)
   │
   ├── Auth pages ──► Firebase Auth ──► server actions verify the user (Firebase Admin)
   │
   ├── Create interview ──► Vapi voice workflow collects role, level, tech stack
   │                              │
   │                              ▼
   │                  /api/vapi/generate  ──► Gemini generates questions ──► saved to Firestore
   │
   ├── Take interview ──► Agent component ◄──► Vapi (live voice conversation)
   │                              │
   │                              ▼ transcript
   └── Feedback ──► server action ──► Gemini evaluates answers
                                        │
                                        ▼
                         Zod validates the structured output ──► saved to Firestore
                                        │
                                        ▼
                              /interview/[id]/feedback page
```

**Why Zod?** LLM output can be inconsistent. Zod validates Gemini's response against a fixed schema (scores, strengths, improvements) so malformed feedback never reaches the UI or the database.

---

## 📁 Project Structure

```
PrepWise_AI_Mock_Interview/
├── app/
│   ├── (auth)/                  # Auth route group
│   │   ├── sign-in/page.tsx
│   │   └── sign-up/page.tsx
│   ├── (root)/                  # Main app route group
│   │   ├── page.tsx             # Home / dashboard
│   │   └── interview/
│   │       ├── page.tsx         # Create / start an interview
│   │       └── [id]/
│   │           ├── page.tsx     # Live interview session
│   │           └── feedback/page.tsx   # Feedback report
│   ├── api/vapi/generate/route.ts      # Generates interview questions for Vapi
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Agent.tsx                # Voice agent UI and call handling
│   ├── AuthForm.tsx             # Sign-in / sign-up form
│   ├── InterviewCard.tsx        # Interview summary card
│   ├── DisplayTechIcons.tsx     # Tech stack icons
│   ├── FormField.tsx
│   └── ui/                      # Shadcn UI primitives
├── firebase/
│   ├── client.ts                # Firebase client SDK (browser)
│   └── admin.ts                 # Firebase Admin SDK (server only)
├── lib/
│   ├── actions/
│   │   ├── auth.action.ts       # Auth server actions
│   │   └── general.action.ts    # Interview and feedback server actions
│   ├── vapi.sdk.ts              # Vapi client setup
│   └── utils.ts
├── constants/index.ts           # Interviewer config, feedback schema, tech mappings
└── types/                       # Shared TypeScript types
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- A Firebase project (Authentication and Firestore enabled)
- A [Vapi](https://vapi.ai) account
- A Google Gemini API key

### 1. Clone the repo

```bash
git clone https://github.com/Shivanshu-Jha/PrepWise_AI_Mock_Interview.git
cd PrepWise_AI_Mock_Interview
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create `.env.local` in the root:

```env
# Names below are examples; make sure they match the ones used in your code

# Firebase (client)
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# Firebase Admin (server only)
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

# Google Gemini
GOOGLE_GENERATIVE_AI_API_KEY=
```


### 4. Run the dev server

```bash
npm run dev
```
