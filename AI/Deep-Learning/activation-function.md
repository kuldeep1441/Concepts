### What is an Activation Function?
An **activation function** is a mathematical function applied to the output of a neuron in a neural network.

👉 In simple terms:
After computing
[z = wx + b]
the activation function decides **what the neuron should output**.

---

### Why do we need it?
Without activation functions, a neural network would behave like a **simple linear model**, no matter how many layers you add.

* Linear + Linear + Linear = still Linear ❌
* Real-world data is **non-linear** ✅
👉 Activation functions introduce **non-linearity**, which allows neural networks to:

* Learn complex patterns (images, speech, text)
* Make better decisions
---

### How does it work?
Flow inside a neuron:

1. Compute weighted sum:
   [z = wx + b]

2. Apply activation function:
   [a = f(z)]

👉 This (a) becomes input to the next layer.
---

### Common Activation Functions

#### 1. Sigmoid (output will be between 0 to 1, and at 0 give 0.5)
f(x) = 1/1+e^-x

* Output range: (0, 1)
  ✔ Good for probabilities
  ❌ Vanishing gradient problem
---

#### 2. Tanh   (output will be between -1 to 1 at 0 give 0 )
f(x) = e^x-e^-x / e^x + e^-x

* Output range: (-1, 1)
  ✔ Zero-centered
  ❌ Still has vanishing gradient
---

#### 3. ReLU (Rectified Linear Unit) (max of 0 and x)
f(x) = max(x,0);

* If x < 0 → 0
* If x > 0 → x

✔ Fast and widely used
❌ Can "die" for negative inputs
---

### Intuition (very important)
Think of activation function as a **decision maker**:

* Should this neuron fire strongly?
* Should it ignore the signal?
* Should it pass partial information?

---

### One-line Summary
👉 **Activation function = adds non-linearity so neural networks can learn complex patterns.**
---