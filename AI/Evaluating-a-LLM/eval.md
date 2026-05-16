📘 LLM Evaluation — 4 Approaches (Sebastian Raschka)
🧠 What is LLM Evaluation?

LLM evaluation is the process of measuring how well a language model performs on different tasks like reasoning, coding, or conversation.

👉 The challenge:
Unlike traditional ML, LLM outputs are open-ended, so evaluation is not straightforward.

The article explains 4 core approaches used in practice:

1️⃣ Multiple-Choice Benchmarks
✅ What

Evaluate LLMs using fixed questions with predefined answers
(e.g., MMLU, HellaSwag)

🎯 Why
Easy to compare models
Standardized across research papers
Fast and cheap at scale
⚙️ How
Provide question + options
Model selects one answer
Compare with correct answer → compute accuracy
👍 Pros
Reproducible and objective
Good for benchmarking knowledge
👎 Cons
Tests memory, not real-world usage
Doesn’t capture reasoning depth
Can be gamed if models trained on dataset
2️⃣ Verifiers (Programmatic Evaluation)
✅ What

Use external tools or logic to verify correctness of model output
(e.g., run code, check math answer)

🎯 Why
Enables evaluation of free-form responses
Useful where ground truth exists
⚙️ How
Model generates answer
Verifier checks correctness (e.g., executes code)
Output = pass/fail or score
👍 Pros
Objective and automated
Works well for math, coding, structured tasks
Can evaluate intermediate steps (process-based)
👎 Cons
Limited to verifiable domains only
Hard to build good verifiers
Often ignores reasoning quality (only final answer)
3️⃣ Leaderboards (Human Preference)
✅ What

Rank models based on human judgments (which output is better)

🎯 Why
Captures real-world usefulness
Measures quality of open-ended responses
⚙️ How
Show users two model outputs
Ask: “Which is better?”
Aggregate preferences → ranking
👍 Pros
Reflects real user experience
Works for creative + subjective tasks
👎 Cons
Expensive and slow
Subjective (bias, inconsistency)
Hard to reproduce
4️⃣ LLM-as-a-Judge
✅ What

Use another LLM to evaluate and score outputs

🎯 Why
Scalable alternative to human evaluation
Faster than leaderboards
⚙️ How
Provide prompt + model output
Judge LLM evaluates using rubric
Returns score or comparison
👍 Pros
Scalable and automated
Consistent compared to humans
👎 Cons
Can be biased (same model family bias)
Sensitive to prompt and rubric
Less reproducible than benchmarks

⚖️ Key Comparison| Approach        | Best For               | Limitation             |
| --------------- | ---------------------- | ---------------------- |
| Multiple Choice | Quick benchmarking     | Not real-world         |
| Verifiers       | Math, code correctness | Limited scope          |
| Leaderboards    | Real user quality      | Expensive + subjective |
| LLM Judge       | Scalable evaluation    | Bias + instability     |


🧩 Key Insight (Most Important)

👉 There is NO single best evaluation method

Each approach measures different aspects:

Knowledge → Multiple choice
Correctness → Verifiers
User preference → Leaderboards
Scalable judgment → LLM judges

👉 In real systems, companies combine all 4.

🚀 Practical Takeaway (For You as Developer)

If you're building LLM apps:

🔹 Start simple
Use multiple-choice / basic tests for sanity check
🔹 Add correctness checks
Use verifiers for APIs, code, math
🔹 Evaluate real UX
Add human or LLM judge evaluation
🔹 Build evaluation pipeline
Combine methods → more reliable system
🧠 Final Mental Model

Think of LLM evaluation like this:
Knowledge     → Multiple Choice
Correctness   → Verifiers
Usefulness    → Leaderboards
Scalability   → LLM Judges