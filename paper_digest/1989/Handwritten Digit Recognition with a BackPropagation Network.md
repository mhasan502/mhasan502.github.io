---
date: 2025-06-18
slug: handwritten-digit-recognition-with-a-backpropagation-network
---

# Understanding LeNet‑1: A Gentle Introduction
In 1989, the introduction of the LeNet-1 neural network model marked a significant advancement in machine learning. This innovative model utilized a combination of weight-sharing filters and hyperbolic tangent (tanh) activations, all processed on a standard single CPU, to effectively recognize handwritten digits. This achievement outperformed traditional rule-based systems, which relied on manually crafted features. LeNet-1 provided compelling evidence that computers could independently identify patterns in data without human intervention, relying solely on data input and learnable filter parameters. This breakthrough laid the foundational groundwork for what we now refer to as deep learning, establishing a direct lineage to contemporary neural network architectures and techniques.

<!--truncate -->

### Motivation
The recognition of handwritten digits was essential for early neural network applications like bank check processing and postal sorting. However, by 1989, accurately identifying distorted characters, such as a fuzzy '9' or slanted '2,' remained challenging. Traditional computer vision techniques struggled with the variability of human handwriting, including ink smudges and different paper textures, underscoring the need for more advanced pattern recognition methods.

### Background
| Concept                      | One‑liner                                                                 |
|------------------------------|---------------------------------------------------------------------------|
| **Pixel grid/tensors**       | An image as a 2‑D (or 3‑D with channels) array of numbers.                |
| **Convolution layer**        | Learns small kernels that slide over the image and detect local patterns. |
| **Sub‑sampling / Pooling**   | Reduces spatial resolution to gain invariance and shrink parameters.      |
| **Backpropagation**          | Algorithm to compute gradients of every parameter via the chain rule.     |
| **Softmax & Cross‑Entropy**  | Turns logits into probabilities and measures classification loss.         |

### Problem Statement & Contributions
**Task**: Classify a 16×16 gray‑scale image of a single digit (0‑9).

Paper contributions:
- First end‑to‑end CNN trained with gradient descent that outperformed previous methods that relied on manually designed features.
- It introduced weight sharing, which keeps the number of parameters very small (~3K), making the model more efficient.
- The network included sub-sampling layers, which we now refer to as average-pooling layers, to help the model be more tolerant to changes in the position of input images.
- It demonstrated the effectiveness of a training approach that combines supervised pre-training and fine-tuning, meaning it was trained in stages on different parts of the data.
- The result was a significant decrease in errors when recognizing handwritten digits from the USPS dataset, reducing the error rate from about 5% to just 1%.

### Deep Dive: How It Works
:::info[Essence]
Slide small learnable filters over the image, shrink the map, and feed flattened features into a tiny MLP.
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
- $\text{input}(2i + u, 2j + v)$: A pixel from a 2x2 patch of the input feature map, starting at location $(2i, 2j)$. The pooling operation computes the average of all four such pixels.

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
- The model is small enough to run on 1980s hardware.
- It automatically adjusts to minor changes.
- It started the convolutional approach that is still widely used today.

#### Limitations
- The model is shallow and does not handle complex images well.
- Average pooling removes important high-frequency details.
- The Tanh function can slow down training compared to ReLU.

## Original Paper
- [Handwritten Digit Recognition with a Back-Propagation Network](https://proceedings.neurips.cc/paper/1989/file/53c3bce66e43be4f209556518c2fcb54-Paper.pdf) by Yann LeCun et al. (1989)

:::tip
LeNet comes in several flavors (e.g., LeNet-3/4/5); each variant tweaks filter counts, pooling, and input size, but the underlying recipe of convolution + pooling + MLP stays the same.
:::
## Conclusion
LeNet-1, although it may seem modest compared to today's advanced architectures, was groundbreaking in its introduction of three pivotal concepts that continue to shape the landscape of modern deep-learning vision systems. These concepts include local receptive fields, which allow the network to focus on specific regions of an input image; weight sharing, which ensures efficiency by using the same weights across different parts of the network; and hierarchical feature extraction, which enables the model to learn progressively more complex features at each layer.

In experimenting with this network, it becomes evident that utilizing approximately 3,000 parameters, combined with tanh activation functions and average pooling operations, can lead to an impressive accuracy in recognizing handwritten digits—often rivaling human performance. This remarkable capability underscores the foundational role LeNet-1 plays in the evolution of neural networks and their applications in visual recognition tasks.