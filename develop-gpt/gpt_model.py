from gpt_constants import C

# libraries
import torch
import torch.nn as nn

class GPTLanguageModel(nn.Module):

    # n_embd defines a dimension for the 2 embedding tables
    # n_head defines the number of attention heads per self attention layer
    def __init__(self, vocab_size):
        super().__init__()

        # embedding tables are updated as the nn learns

        # each token is mapped to a vector creating a matrix
        self.token_embedding_table = nn.Embedding(vocab_size, C.n_embd)

        # each token location in the block is mapped to a vector creating a matrix
        self.position_embedding_table = nn.Embedding(C.block_size, C.n_embd)

        # loop n_layer times and create n_layer identical blocks with in our single transformer model
        # note that a list comprehension is created than unpacked into individual values for nn.Sequential
        # which creates a transformer consisting of 6 identical blocks
        self.blocks = nn.Sequential(*[Block(C.n_embd, n_head=C.n_head) for _ in range(C.n_layer)])

# A transformer contains multiple blocks
# A block contains 2 main sub-layers - self attention layer and feed forward layer
# A self attention layer contains multiple attention heads
class Block(nn.Module):
    """ Transformer block: communication followed by computation """

    def __init__(self, n_embd, n_head):
        super().__init__()

        # // performs integer division 384 / 6, perhaps just make a constant?
        head_size = n_embd // n_head
        self.sa = MultiHeadAttention(n_head, head_size)
        self.ffwd = FeedFoward(n_embd)
        self.ln1 = nn.LayerNorm(n_embd)
        self.ln2 = nn.LayerNorm(n_embd)

    def forward(self, x):
        x = x + self.sa(self.ln1(x))
        x = x + self.ffwd(self.ln2(x))
        return x

# attention is a mechanism that allows the model to selectively focus on specific parts of the input data when making predictions
class Head(nn.Module):

    # this is a docstring not a comment
    """ one head of self-attention """


# Will end up calling Head
class MultiHeadAttention(nn.Module):
    """ multiple heads of self-attention in parallel """

class FeedFoward(nn.Module):
    """ a simple linear layer followed by a non-linearity """
