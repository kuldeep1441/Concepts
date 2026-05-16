# Big Picture

You already know basic Deep Learning, so think of these as layers built on top of it:
Deep Learning
   ↓
Large Language Models (LLMs)
   ↓
Generative AI (GenAI)
   ↓
RAG / Fine-tuning / MCP
   ↓
AI Agents
   ↓
Agentic AI (multi-step autonomous systems)


# Quick Definitions
| Term            | What it is (Simple)                                                   |
| --------------- | --------------------------------------------------------------------- |
| **LLM**         | A very large language model trained on huge text data                 |
| **GenAI**       | AI that generates content (text, image, code, video, audio)           |
| **RAG**         | Giving external knowledge to an LLM during runtime                    |
| **Fine-tuning** | Training an existing model on custom data                             |
| **MCP**         | Standard way for AI models to connect with tools/data                 |
| **AI Agent**    | AI system that can take actions using tools                           |
| **Agentic AI**  | More autonomous AI that plans, reasons, and executes multi-step goals |



# Main Difference Table


| Concept           | Main Purpose                    | Uses Training?        | Uses External Data?       | Can Take Actions?     | Example                    |
| ----------------- | ------------------------------- | --------------------- | ------------------------- | --------------------- | -------------------------- |
| **Deep Learning** | Learn patterns from data        | ✅ Yes                 | ❌ Usually no              | ❌ No                  | CNN for images             |
| **LLM**           | Understand/generate language    | ✅ Huge training       | ❌ Built-in knowledge only | ❌ No                  | OpenAI GPT                 |
| **GenAI**         | Generate content                | ✅ Usually             | Sometimes                 | ❌ Usually no          | Chatbots, image generation |
| **RAG**           | Add fresh/company data to LLM   | ❌ No retraining       | ✅ Yes                     | ❌ No                  | Chat with PDFs             |
| **Fine-tuning**   | Customize model behavior        | ✅ Additional training | ❌ Embedded into weights   | ❌ No                  | Medical chatbot            |
| **MCP**           | Connect AI to tools/systems     | ❌ No                  | ✅ Yes                     | ✅ Through tools       | AI accessing DB/API        |
| **AI Agent**      | Perform tasks automatically     | Maybe                 | ✅ Yes                     | ✅ Yes                 | AI booking meetings        |
| **Agentic AI**    | Autonomous goal-solving systems | Maybe                 | ✅ Yes                     | ✅ Advanced multi-step | Research assistant AI      |


AI ⇒ Deep Learning → LLM → GenAI → RAG / Fine-Tuning / MCP → Agents → Agentic AI



# Modern AI Stack — Concepts Documentation

## 1. Deep Learning
Deep Learning is the foundation of today’s advanced AI. It uses neural networks with many layers to learn representations from data.

In simple terms:
* Deep Learning = layered neural networks that learn patterns from examples.

Examples:
* Image recognition
* Speech recognition
* NLP models

Example flow:
* Input Image → Neural Network → Cat/Dog prediction

Common model families:
* CNN (convolutional networks)
* RNN (recurrent networks)
* Transformer

---

## 2. LLM (Large Language Model)

An LLM is a Deep Learning model trained on massive text (and sometimes multimodal) data. At its core it predicts the **next token** (word or sub-word).

Examples:
* OpenAI GPT
* Google Gemini
* Meta Llama

Core idea:
* Prompt: `"India is a ____ country"` → the model predicts completions such as *beautiful*, *developing*, and so on.

LLMs can:
1. Answer questions  
2. Summarize  
3. Write code  
4. Translate  

Limitations:
* They only “know” what was present in training (plus whatever you give them at runtime).
* They cannot access live or private data unless connected (tools, APIs, RAG, etc.).

---

## 3. Generative AI (GenAI)
GenAI is the broader category: **AI that generates new content** rather than only classifying or scoring inputs.

Types:
1. Text generation  
2. Image generation  
3. Video generation  
4. Audio generation  
5. Code generation  

Examples:
* OpenAI ChatGPT  
* Adobe Firefly  
* Midjourney  

Relationship:

* **LLM ⊂ GenAI** — every mainstream text LLM used for generation is a kind of GenAI, but not all GenAI is an LLM (e.g. diffusion image models).

---

## 4. RAG (Retrieval-Augmented Generation)
RAG combines an **LLM** with **external knowledge retrieval** so answers can be grounded in documents you control, without retraining the whole model.

Instead of retraining for every update:
1. Search relevant documents (or chunks).  
2. Pass those chunks into the LLM as context.  
3. The LLM produces an answer using that retrieved material.

Architecture (high level):
* User question → **Vector DB / search** → **Relevant chunks** → **LLM** → **Final answer**

Examples:

* Chat with company PDFs  
* Internal knowledge chatbot  
* Customer support bot grounded in policies  

Why RAG?
* Usually cheaper than full fine-tuning for keeping knowledge fresh  
* Works with **latest** data once the index is updated  
* Easy to update (swap or add documents / embeddings)

Popular stack:
* Embeddings  
* Vector database  
* Retriever  
* LLM  

Common vector databases:
* Pinecone  
* Weaviate  
* ChromaDB  

---

## 5. Fine-Tuning
Fine-tuning means **continuing training** an existing (often pretrained) model on **your** dataset so weights adapt to a domain or task.

Example:
* **Base model:** general English and broad capabilities  
* **Fine-tuned variants:** legal assistant, medical assistant, finance assistant, etc.

Important distinction:
* **Fine-tuning changes model weights.**  
* **RAG does not** — it supplies context at inference time.

### RAG vs Fine-Tuning
| Feature | RAG | Fine-Tuning |
| ------- | --- | ----------- |
| Adds latest data | ✅ Yes | ❌ No (unless you retrain again) |
| Requires training | ❌ No | ✅ Yes |
| Relative cost | Lower | Higher |
| Easy updates | ✅ Very easy (update corpus / index) | ❌ Retrain or iterate training |
| Great for company docs | ✅ Often best fit | ❌ Usually not the first choice |
| Changes intrinsic model behavior | ❌ No | ✅ Yes |

---

## 6. MCP (Model Context Protocol)
MCP is emerging as a **standard protocol** for connecting AI models to tools: APIs, databases, IDEs, filesystems, and other integrations.

Analogy:
* **USB‑C for AI tooling** — one predictable way to plug capabilities into assistants and agents.

Without MCP:
* Every integration tends to be custom-built and brittle.

With MCP:
* Standard request/response patterns between hosts (e.g. IDE, runtime) and **MCP servers** that expose resources and tools.

Example capabilities:
1. Read and search files  
2. Access GitHub or similar services  
3. Query databases  
4. Call HTTP APIs  

Popular in:
* AI coding assistants  
* AI agents  
* Enterprise AI platforms  

---

## 7. AI Agents
An **AI agent** is a system built around an LLM (or similar model) that can **reason about a goal**, **choose actions**, and **use tools** to change state in the world (bookings, tickets, PRs, etc.), not only emit text.

Compared to a plain LLM:
* **Normal LLM:** answers questions in chat.  
* **Agent:** can **do** things via tools and workflows.

Example goal:
* *User:* “Book the cheapest flight to Delhi tomorrow.”  
* *Agent may:* search flights → compare prices → confirm with user → complete booking.

Typical components:
1. LLM as the “brain”  
2. Memory (short-term conversation, optional long-term store)  
3. Tools (APIs, browsers, code execution, etc.)  
4. Planning / policy for next steps  
5. Execution layer that performs actions  

---

## 8. Agentic AI
**Agentic AI** describes more **autonomous**, often **long‑running** systems: stronger planning, multi-step workflows, sometimes **multiple agents** collaborating, and **dynamic** replanning when something fails or new information appears.

Compared with simpler agents:
1. **Multi-step reasoning** across many hops  
2. **Self-planning** toward a high-level objective  
3. **Long-running workflows** (minutes to hours, not one-shot replies)  
4. **Multi-agent collaboration** (specialist sub-agents)  
5. **Dynamic decision making** as the situation changes  

Example goal:
* *Objective:* Produce a market research report.

Agentic system might:
* Research competitors  
* Browse websites  
* Analyze trends  
* Create charts  
* Draft and refine the report  

…with **less** step-by-step micromanagement from a human.

### AI Agent vs Agentic AI
| Feature | AI Agent | Agentic AI |
| ------- | -------- | ---------- |
| Single-task focus | Usually | Sometimes |
| Multi-step planning | Basic | Advanced |
| Autonomy | Medium | High |
| Long workflows | Limited | Strong |
| Multiple tools | Yes | Yes |
| Multi-agent collaboration | Rare | Common |
| Human intervention | More frequent | Less frequent |

---

## 9. Real-World Stack Example
Imagine building an **AI coding assistant**:

| Layer | Technology | Role |
| ----- | ---------- | ---- |
| Base intelligence | LLM | Generate and explain code |
| Generation surface | GenAI | Creative edits, docs, tests |
| Private / repo knowledge | RAG | Ground answers in your codebase or docs |
| Tooling bridge | MCP | Files, Git, DBs, APIs in a standard way |
| Interactive autonomy | AI Agent | Multi-step fixes and refactors |
| Deep autonomy | Agentic AI | End-to-end debugging or large migration tasks |

---

## 10. Easy Analogies

| Concept | Analogy |
| ------- | ------- |
| Deep Learning | Brain learning patterns from repetition |
| LLM | Person who read millions of books |
| GenAI | Creative writer / artist |
| RAG | Open-book exam with allowed notes |
| Fine-tuning | Specialized vocational training |
| MCP | Universal adapter / dock for tools |
| AI Agent | Personal assistant who can act |
| Agentic AI | Autonomous employee or small team |

---

## 11. Recommended Learning Order

Since you already know Deep Learning:
1. Transformers  
2. LLM architecture  
3. Prompt engineering  
4. Embeddings  
5. Vector databases  
6. RAG  
7. Fine-tuning  
8. AI Agents  
9. MCP  
10. Agentic AI frameworks  

---

## 12. Most Important Practical Map

| If you want to… | Focus on learning |
| --------------- | ------------------- |
| Build a ChatGPT-like app | LLM + GenAI |
| Chat with PDFs / internal docs | RAG |
| Create a domain-specific model | Fine-tuning |
| Connect AI to tools and systems | MCP |
| Build autonomous workflows | AI Agents |
| Build self-operating, multi-step systems | Agentic AI |

---

## 13. Summary

Deep Learning supplies the models; LLMs specialize those models for language; GenAI is the umbrella for systems that **create** content; RAG and fine-tuning are two major ways to adapt behavior and knowledge; MCP standardizes **tool access**; agents and agentic systems move from **answering** to **acting** over longer horizons. Together they form the practical stack behind modern AI products.