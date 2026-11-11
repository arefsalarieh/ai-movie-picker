# 🎬 AI Movie Recommendation App

An AI-powered full-stack movie recommendation application built with **Next.js, React, TypeScript, Express.js, and LangChain**.

The application helps users discover movies based on their personal preferences, including genre, mood, and natural language descriptions. Powered by Large Language Models (LLMs), it generates personalized movie recommendations with structured information such as release year, cast, genres, ratings, and explanations for each recommendation.

This project also demonstrates practical LangChain concepts, including prompt engineering, model integration, LCEL, and structured AI outputs.

## ✨ Features

- **AI-Powered Recommendations:** Generate personalized movie recommendations using LLMs.
- **Natural Language Input:** Describe what you want to watch in your own words.
- **Genre Selection:** Choose from multiple movie genres, including Thriller, Comedy, Sci-Fi, Drama, Action, Horror, and Romance.
- **Mood-Based Recommendations:** Get suggestions based on your current mood.
- **Custom Recommendation Count:** Choose how many movies you want to discover.
- **Structured AI Responses:** Receive consistent, structured JSON responses using LangChain and Zod.
- **Multiple LLM Providers:** Switch between OpenAI and Google Gemini.
- **Interactive Movie Cards:** Explore movie details, including title, release year, genres, cast, rating, and recommendation explanations.
- **Responsive UI:** A modern and responsive interface built with Next.js and Tailwind CSS.
- **LangChain Concepts Showcase:** Explore the core LangChain concepts implemented in the project through a dedicated interactive page.

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** – React framework and application routing.
- **React 19** – UI development.
- **TypeScript** – Type safety.
- **Tailwind CSS 4** – Styling and responsive design.
- **shadcn/ui & Radix UI** – UI components.
- **Lucide React** – Icons.

### Backend

- **Node.js** – JavaScript runtime.
- **Express.js** – REST API development.
- **TypeScript** – Type-safe backend development.
- **LangChain.js** – LLM integration and AI pipeline orchestration.
- **Zod** – Schema definition and validation.

### AI & LLM Integration

- **OpenAI** – GPT models through LangChain.
- **Google Gemini** – Gemini models through LangChain.
- **LangChain Core** – Prompts, models, runnables, and LCEL.

## 🏗️ Architecture

The application follows a separated frontend/backend architecture.

```text
                  ┌──────────────────────┐
                  │       User           │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │   Next.js Frontend   │
                  │                      │
                  │  - Recommendation UI │
                  │  - User Preferences  │
                  │  - Movie Cards       │
                  └──────────┬───────────┘
                             │
                       HTTP POST
                             │
                             ▼
                  ┌──────────────────────┐
                  │   Express Backend    │
                  │                      │
                  │  - API Routes        │
                  │  - Controllers       │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │   LangChain Service  │
                  │                      │
                  │  ChatPromptTemplate  │
                  │         ↓            │
                  │      LLM Model       │
                  │         ↓            │
                  │ Structured Output    │
                  └──────────┬───────────┘
                             │
                             ▼
                  ┌──────────────────────┐
                  │   OpenAI / Gemini    │
                  └──────────────────────┘
```

### Recommendation Workflow

1. The user describes their movie preferences.
2. The frontend sends the preferences to the Express API.
3. The backend passes the input to the LangChain service.
4. `ChatPromptTemplate` constructs the system and human messages.
5. The selected LLM processes the prompt.
6. `withStructuredOutput()` generates a response matching the Zod schema.
7. The backend returns structured movie recommendations.
8. The frontend displays the results using reusable Movie Cards.

## 📚 LangChain Concepts Demonstrated

This project is also a practical introduction to building LLM-powered applications with LangChain.js.

| Concept | Implementation |
|---|---|
| Chat Models | `ChatOpenAI`, `ChatGoogle` |
| Prompt Templates | `ChatPromptTemplate` |
| System Messages | Define AI behavior and instructions |
| Human Messages | Pass dynamic user preferences |
| LCEL | Connect components using `.pipe()` |
| Runnable Interface | Execute chains using `.invoke()` |
| Structured Output | `withStructuredOutput()` |
| Zod Integration | Define and validate response schemas |
| Model Provider Switching | OpenAI / Google Gemini |

### LangChain Showcase

The application includes a dedicated page that visually explains the main LangChain concepts implemented in the backend.

Visit:

```text
http://localhost:3000/showcase
```

## 📁 Project Structure

```text
langchain-crash-course/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── recommended.controller.ts
│   │   │
│   │   ├── routes/
│   │   │   └── recommended.routes.ts
│   │   │
│   │   ├── schemas/
│   │   │   └── movie.schema.ts
│   │   │
│   │   ├── services/
│   │   │   └── langchain.service.ts
│   │   │
│   │   └── index.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── showcase/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── concepts-showcase.tsx
│   │   │   ├── movie-card.tsx
│   │   │   ├── movie-card-skeleton.tsx
│   │   │   └── recommendation-app.tsx
│   │   │
│   │   ├── lib/
│   │   │   ├── api.ts
│   │   │   └── utils.ts
│   │   │
│   │   └── types/
│   │       └── movie.ts
│   │
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js 20.9 or later
- npm
- An OpenAI API key or Google Gemini API key

### 1. Clone the Repository

```bash
git clone https://github.com/arefsalarieh/ai-movie-picker.git

cd ai-movie-picker
```

### 2. Configure the Backend

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=8000

LLM_PROVIDER=openai

OPENAI_API_KEY=your_openai_api_key
OPENAI_MODEL=gpt-4o-mini

GOOGLE_API_KEY=your_google_api_key
```

**LLM Provider Configuration**

To use OpenAI:

```env
LLM_PROVIDER=openai
OPENAI_MODEL=gpt-4o-mini
```

To use Google Gemini:

```env
LLM_PROVIDER=google
```

Note: The Gemini model is currently configured as `gemini-2.5-flash` in the backend service.

### 3. Start the Backend

```bash
npm run dev
```

The backend will be available at:

```text
http://localhost:8000
```

Health check:

```text
GET http://localhost:8000/health
```

### 4. Configure the Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### 5. Start the Frontend

```bash
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

## 🔌 API Reference

### Generate Movie Recommendations

**Endpoint**

```http
POST /api/recommend
```

**Request Body**

```json
{
  "userPrompt": "Suggest movies for a rainy night",
  "genre": "thriller",
  "mood": "relaxed",
  "count": 3
}
```

**Response Example**

```json
{
  "movies": [
    {
      "title": "Shutter Island",
      "year": 2010,
      "genre": ["Mystery", "Thriller"],
      "cast": [
        "Leonardo DiCaprio",
        "Mark Ruffalo",
        "Ben Kingsley"
      ],
      "reason": "A suspenseful psychological thriller that fits a quiet and mysterious evening.",
      "rating": 8.2
    }
  ]
}
```

The response is generated by the selected LLM and follows the application's Zod schema.

### Health Check

**Endpoint**

```http
GET /health
```

**Response**

```json
{
  "status": "ok"
}
```

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `LLM_PROVIDER` | Selects the LLM provider (`openai` or `google`) |
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENAI_MODEL` | OpenAI model name |
| `GOOGLE_API_KEY` | Google Gemini API key |
| `NEXT_PUBLIC_API_URL` | Backend API base URL used by the frontend |

**Security Note:** Never commit real API keys or environment files to GitHub. Keep your `.env` and `.env.local` files out of version control.

## 🖥️ Application Pages

### Movie Recommendation Page

The main application allows users to describe their preferences and receive AI-generated movie recommendations.

### LangChain Concepts Showcase

A dedicated educational page demonstrating the key LangChain building blocks and how they work together in the application.

## ⚠️ Limitations

- Movie recommendations are generated by an LLM and are not retrieved from a verified movie database.
- Movie ratings, cast information, and release dates should be independently verified.
- The application currently does not store user preferences or recommendation history.
- Only OpenAI and Google Gemini providers are currently configured.

## 🎯 Project Goals

The main goal of this project is to explore and demonstrate how LangChain.js can be integrated into a real-world full-stack application.

It focuses on:

- Building LLM-powered applications with TypeScript.
- Understanding prompt engineering and chat models.
- Connecting AI components using LCEL.
- Generating structured and predictable AI responses.
- Separating frontend, backend, and AI service responsibilities.
- Building a practical foundation for more advanced AI applications.

## 📄 License

This project is available for educational and personal learning purposes.
