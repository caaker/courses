import torch
import torch.nn as nn
from nn_constants import Cb as C
from torch.nn import functional as F


class BigramLanguageModel(nn.Module):

    def __init__(self, vocab_size):
        super().__init__()
        self.token_embedding_table = nn.Embedding(vocab_size, vocab_size)

    def forward(self, idx, targets=None):

        # logits are in the embedding table
        logits = self.token_embedding_table(idx)

        # if there are no targets, no loss can be calculated
        if targets is None:
            loss = None
        else:
            # logits is a 3 dimensional tensor of B x T x C
            B, T, C = logits.shape

            # change the shape of logits and targets for cross_entropy
            logits = logits.view(B*T, C)
            targets = targets.view(B*T)

            # loss is calculated in many ways, one of which is cross_entropy
            loss = F.cross_entropy(logits, targets)

        # a forward pass through the model returns logits and loss
        return logits, loss

    def generate(self, idx, max_new_tokens):
        for _ in range(max_new_tokens):

            # get the predictions
            logits, loss = self(idx)

            # focus only on the last time step
            logits = logits[:, -1, :] # becomes (B, C)

            # apply softmax to get probabilities
            probs = F.softmax(logits, dim=-1) # (B, C)

            # sample from the distribution
            idx_next = torch.multinomial(probs, num_samples=1) # (B, 1)

            # append sampled index to the running sequence
            idx = torch.cat((idx, idx_next), dim=1) # (B, T+1)

        return idx
