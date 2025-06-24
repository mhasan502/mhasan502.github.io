---
date: 2025-06-18
---

# Understanding LeNet‑1: A Gentle Introduction
Implementing the first convolutional neural network for handwritten‑digit recognition (MNIST) in PyTorch from scratch.

### Motivation
Handwritten digits powered the first wave of real‑world neural network applications: bank‑check reading and postal sorting.
Yet in 1989, recognizing a fuzzy '9' or slanted '2' was far from trivial—traditional computer‑vision rules broke down on messy, human‑made data.

<!--truncate -->

### Background
| Concept                      | One‑liner                                                                 |
|------------------------------|---------------------------------------------------------------------------|
| **Pixel grid/tensors**       | An image as a 2‑D (or 3‑D with channels) array of numbers.                |
| **Convolution layer**        | Learns small kernels that slide over the image and detect local patterns. |
| **Sub‑sampling / Pooling**   | Reduces spatial resolution to gain invariance and shrink parameters.      |
| **Backpropagation**          | Algorithm to compute gradients of every parameter via the chain rule.     |
| **Softmax & Cross‑Entropy**  | Turns logits into probabilities and measures classification loss.         |

### Problem Statement & Contributions
Task: Classify a 16×16 gray‑scale image of a single digit (0‑9).

Paper contributions:
- First end‑to‑end CNN trained with gradient descent that outperformed previous methods that relied on manually designed features.
- It introduced weight sharing, which keeps the number of parameters very small (~3K), making the model more efficient.
- The network included sub-sampling layers, which we now refer to as average-pooling layers, to help the model be more tolerant to changes in the position of input images.
- It demonstrated the effectiveness of a training approach that combines supervised pre-training and fine-tuning, meaning it was trained in stages on different parts of the data.
- The result was a significant decrease in errors when recognizing handwritten digits from the USPS dataset, reducing the error rate from about 5% to just 1%.

### Deep Dive: How It Works
:::info[Essence]
Slide small learnable filters over the image, shrink the map, and feed flattened features into a tiny MLP
:::

#### 1. Preprocessing
- Linear scaling squeezes every digit into 16×16 while keeping the aspect ratio.
- Pixel intensities are mapped to [‑1, 1], so tanh units start near zero.

#### 2. Convolution Layers
A filter is like a tiny stencil that lights up when its shape (e.g., a stroke edge) matches part of the image.
$$
\text{Output}(k) = \sigma\left( \text{bias}(k) + \sum_{c=0}^{C_{\text{in}} - 1} \text{weight}(k, c) \star \text{input}(c) \right)
$$
- $\text{Output}(k)$: A 2D output feature map for the k<sup>th</sup> output channel.
- $\sigma$: The activation function is applied element-wise to the result. This introduces non-linearity into the network.
- $\text{bias}(k)$: A learnable scalar added to every position in the k<sup>th</sup> output map.
- $\text{weight}(k, c)$: The 2D kernel (filter) used to extract features from the c<sup>th</sup> input channel when building the k<sup>th</sup> output.
- $\text{input}(c)$: The c<sup>th</sup> input channel (feature map) from the input tensor.
- $\star$: A sliding dot product of the kernel over the input. This operator does not flip the kernel (DL frameworks
implement cross‑correlation but still call it 'convolution').

#### 3. Subsampling
"Zooming out" slightly blurs details but keeps the gist, so slight shifts of a digit don't flip the prediction.
$$
\text{Output}(i, j) = \sigma \left( \alpha \cdot \frac{1}{4} \sum_{u=0}^{1} \sum_{v=0}^{1} \text{input}(2i + u, 2j + v) + \beta \right)
$$
- $\text{Output}(i, j)$: The output value at position $(i, j)$ in the pooled feature map.
- $\sigma$: The activation function is applied element-wise to the result.
- $\alpha$: A learnable scalar that scales the result of average pooling.
- $\beta$: A learnable scalar bias added to the pooled value.
- $\text{input}(2i + u, 2j + v)$: A pixel from a 2x2 patch of the input feature map, starting at location $(2i, 2j)$.
  The pooling operation computes the average of all four such pixels.

#### 4. Fully Connected + Softmax
The final layer consists of a small MLP that processes the flattened pooled features and generates logits for each digit class.

### Code Walkthrough
```python
import torch
import torch.nn as nn

# LeNet‑1 model
class LeNet1(nn.Module):
    def __init__(self):
        super().__init__()
        self.conv1 = nn.Conv2d(1, 4, 5, padding=2)   # 16×16 → 16×16
        self.pool1 = nn.AvgPool2d(2)                 # 16×16 → 8×8
        self.conv2 = nn.Conv2d(4, 12, 5)             # 8×8 → 4×4
        self.pool2 = nn.AvgPool2d(2)                 # 4×4 → 2×2
        self.fc1   = nn.Linear(12*2*2, 30)
        self.fc2   = nn.Linear(30, 10)

    def forward(self, x):
        x = torch.tanh(self.conv1(x))
        x = torch.tanh(self.pool1(x))
        x = torch.tanh(self.conv2(x))
        x = torch.tanh(self.pool2(x))
        x = x.view(x.size(0), -1)    # flatten
        x = torch.tanh(self.fc1(x))
        return self.fc2(x)           # logits
```

## Critical Analysis & Extensions
#### Strengths
- Tiny model fits 1980s hardware.
- Handles little nudges automatically.
- Sparked the convolutional paradigm that is still dominant today.

#### Limitations
- Shallow; struggles on complex images.
- Avg‑pooling discards useful high‑freq details.
- Tanh saturates; training can be slow vs. ReLU.

## Original Paper
- [Handwritten Digit Recognition with a Back-Propagation Network](https://proceedings.neurips.cc/paper/1989/file/53c3bce66e43be4f209556518c2fcb54-Paper.pdf) by Yann LeCun et al. (1989)
:::tip
LeNet comes in several flavours (e.g., LeNet-3/4/5); each variant tweaks filter counts, pooling, and input size, but the underlying recipe of convolution + pooling + MLP stays the same.
:::
## Conclusion
LeNet-1 may appear modest by today's standards, but it established three key concepts—local receptive fields, weight
sharing, and hierarchical feature extraction—that remain fundamental to modern deep learning vision systems. By
implementing the network, you observed how approximately 3,000 parameters, tanh activations, and average pooling can
achieve near-human accuracy in recognizing handwritten digits.
