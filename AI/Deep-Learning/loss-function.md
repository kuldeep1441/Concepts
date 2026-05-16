# How Weights Are Learned (Linear Regression + MSE)

## 1. Model (Prediction)

For a single feature ( x ), a linear model predicts:

[
\hat{y} = wx + b
]

Where:

* ( w ) = weight (slope)
* ( b ) = bias (intercept)
* ( y ) = true value
* ( \hat{y} ) = predicted value

---

## 2. Error and Loss

For a single data point ( (x, y) ):

[
e = \hat{y} - y
]

Squared error loss:

[
\ell(w, b) = (\hat{y} - y)^2 = (wx + b - y)^2
]

For a dataset ( {(x_i, y_i)}_{i=1}^{N} ), the **Mean Squared Error (MSE)** is:

[
L(w, b) = \frac{1}{N} \sum_{i=1}^{N} (wx_i + b - y_i)^2
]

**Goal:** Find ( w ) and ( b ) that minimize ( L(w, b) ).

---

## 3. Gradient Descent (Learning Weights)

Gradient descent updates parameters step-by-step to reduce loss.

### Step 1: Initialize

[
w = w_0,\quad b = b_0
]

### Step 2: Predictions

[
\hat{y}_i = wx_i + b
]

### Step 3: Compute Loss

[
L(w, b)
]

### Step 4: Compute Gradients

[
\frac{\partial L}{\partial w} = \frac{2}{N} \sum_{i=1}^{N} (wx_i + b - y_i)x_i
]

[
\frac{\partial L}{\partial b} = \frac{2}{N} \sum_{i=1}^{N} (wx_i + b - y_i)
]

### Step 5: Update Parameters

[
w \leftarrow w - \eta \frac{\partial L}{\partial w}
]

[
b \leftarrow b - \eta \frac{\partial L}{\partial b}
]

Where:

* ( \eta ) = learning rate

### Step 6: Repeat

Continue until loss stabilizes.

---

## 4. When Do We Stop?

Stop when gradients are near zero:

[
\frac{\partial L}{\partial w} \approx 0, \quad \frac{\partial L}{\partial b} \approx 0
]

---

## 5. Intuition (Geometry)

* Loss forms a surface over ( (w, b) )
* Gradient = direction of steepest increase
* Gradient descent = move **downhill** to minimum

---

## 6. Perfect Fit vs Real Data

* **Perfect fit:** ( L = 0 ) (rare, ideal case)
* **Real-world:** ( L > 0 ) due to noise

---

## 7. One-Line Summary

**Weights are learned by minimizing a loss function (MSE) using gradient descent.**
