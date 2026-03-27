# 🤖 AI Mock Interview Platform

An intelligent platform that helps candidates prepare for interviews by simulating real‑world interview scenarios.  
Built with **Next.js**, **Firebase**, **Google Gemini AI**, and **Vapi**, it evaluates transcripts, generates structured feedback, and provides actionable insights.

## 🌐 Live Demo
Check it out here: [prepwise-ai-mock-interview](https://prepwise-ai-mock-interview-one.vercel.app/)
    
## 🚀 Features

- **AI‑Powered Interview Simulation**  
  Uses Google Gemini (`gemini-2.5-flash`) to generate realistic interview questions and analyze candidate responses and used     
  Vapi's voice agent.
  

- **Structured Feedback**  
  Feedback is validated against a Zod schema (`feedbackSchema`) with categories like:
  - Communication Skills
  - Technical Knowledge
  - Problem Solving
  - Cultural Fit
  - Confidence & Clarity

- **Firestore Integration**  
  Stores interviews and feedback securely in Firebase.

- **Server Actions (Next.js)**  
  Modern `"use server"` actions for clean backend logic.

- **Recruiter‑Friendly Dashboard**  
  Fetch latest interviews, view feedback, and track candidate progress.



## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router, Server Actions)
- **Backend**: Firebase Admin SDK
- **AI**: Google Gemini via `@ai-sdk/google`
- **Validation**: Zod schemas
- **Database**: Firestore



## 📂 Project Structure
interview_platform/
├── app/                # Next.js app router pages

├── components/         # UI components

├── constants/          # Zod schemas (feedbackSchema, etc.)

├── firebase/           # Firebase admin setup

├── lib/actions/        # Server actions (createFeedback, getInterviewById, etc.)

├── types/              # TypeScript types

└── README.md


## ⚙️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shivanshu-Jha/prepwise_ai_mock_interview.git
   cd interview_platform

2. **Install dependencies**
     ```bash
     npm install

3. **Create .env.local**
     ```bash
     NEXT_PUBLIC_VAPI_WEB_TOKEN=
     NEXT_PUBLIC_VAPI_WORKFLOW_ID=

    GOOGLE_GENERATIVE_AI_API_KEY=

    NEXT_PUBLIC_BASE_URL=

    NEXT_PUBLIC_FIREBASE_API_KEY=
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
    NEXT_PUBLIC_FIREBASE_APP_ID=

    FIREBASE_PROJECT_ID=
    FIREBASE_CLIENT_EMAIL=
    FIREBASE_PRIVATE_KEY=

4. **Run the dev server**
     ```bash
         npm run dev
