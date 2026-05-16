Have to make readable like below:

I => Comression and Correlation

# Deep Learning — Basics Documentation

## 1. What is Deep Learning?
Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers (deep neural networks) to learn patterns from data.
It is inspired by the structure and function of the human brain and is especially powerful for handling large and complex datasets.

In simple terms:
Deep Learning = Using layered neural networks to automatically learn patterns from data.

---

## 2. Why Deep Learning?
Deep Learning is used because it can solve complex problems that traditional machine learning struggles with.

Key reasons:
1. Handles Unstructured Data
   Deep Learning works well with:
   * Images
   * Audio
   * Text
   * Video

2. Automatic Feature Extraction
   No need to manually define features. The model learns important patterns on its own.

3. High Accuracy
   Achieves state-of-the-art results in:

   * Image recognition
   * Natural Language Processing
   * Speech recognition

4. Scalability
   Performance improves with more data and computational power (GPUs/TPUs).

---

## 3. How Deep Learning Works?
Deep Learning models are built using Artificial Neural Networks (ANNs).

Basic structure:
1. Input Layer
   Takes raw input data.

2. Hidden Layers
   Multiple layers where computations and learning happen.

3. Output Layer
   Produces the final prediction or result.

Working process:
1. Input data is passed into the network
2. Each neuron applies weights, bias, and an activation function
3. Output is generated
4. Error is calculated using a loss function
5. Weights are updated using backpropagation

Core formula:
y = f(Wx + b)

Where:
* x = input
* W = weights
* b = bias
* f = activation function
* y = output

---

## 4. Key Components
Neural Network
A system of connected neurons that process information.

Activation Functions
Introduce non-linearity into the model. Examples:

* ReLU
* Sigmoid
* Tanh

Loss Function
Measures how far predictions are from actual values. Example:

* Mean Squared Error (MSE)
Optimizer
Updates model parameters to minimize loss. Examples:

* Gradient Descent
* Adam

---

## 5. Types of Deep Learning Models

1. Feedforward Neural Network (FNN)
   Basic neural network with no cycles.

2. Convolutional Neural Network (CNN)
   Used for image-related tasks.

3. Recurrent Neural Network (RNN)
   Used for sequential data like text and time series.

4. Transformers
   Advanced architecture used in modern AI systems (e.g., ChatGPT).

---

## 6. Real-World Applications
* Chatbots and virtual assistants
* Image and face recognition
* Speech recognition
* Self-driving cars
* Recommendation systems

---

## 7. Advantages
* High accuracy
* Handles complex data
* Learns features automatically

---

## 8. Limitations
* Requires large datasets
* Needs high computational power
* Difficult to interpret (black-box nature)

---

## 9. Summary
Deep Learning is a powerful technique that uses multi-layer neural networks to learn patterns from data automatically. It is widely used in modern AI applications and continues to evolve with advancements in computing and data availability.
