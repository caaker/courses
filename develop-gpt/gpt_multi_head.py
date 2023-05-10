# libraries
import torch
import torch.nn as nn


# Will end up calling Head
class MultiHead(nn.Module):
    """ multiple heads of self-attention in parallel """


# attention is a mechanism that allows the model to selectively focus on specific parts of the input data when making predictions
class Head(nn.Module):

    # this is a docstring not a comment
    """ one head of self-attention """

    def __init__(self, head_size):
        super().__init__()
        self.key = nn.Linear(n_embd, head_size, bias=False)
        self.query = nn.Linear(n_embd, head_size, bias=False)
        self.value = nn.Linear(n_embd, head_size, bias=False)
        self.register_buffer('tril', torch.tril(torch.ones(block_size, block_size)))

        self.dropout = nn.Dropout(dropout)