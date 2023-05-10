from gpt_constants import C
import torch
import torch.nn as nn

class GPTLanguageModel(nn.Module):
    # creates a transformer with 6 blocks
    # n_embd defines a dimension for the 2 embedding tables
    # n_head defines the number of attention heads per self attention layer
    def __init__(self, vocab_size):
        super().__init__()

        # create 2 embedding tables for each token and its position
        # these tables update as the nn learns
        self.token_embedding_table = nn.Embedding(vocab_size, C.n_embd)
        self.position_embedding_table = nn.Embedding(C.block_size, C.n_embd)

        # loop n_layer times and create n_layer identical blocks with in single transformer
        # note that a list comprehension is created then unpacked into individual values for nn.Sequential
        self.blocks = nn.Sequential(*[Block(C.n_embd, n_head=C.n_head) for _ in range(C.n_layer)])

    def forward(self, idx, targets=None):

        # unpack the tuple
        B, T = idx.shape

# A block contains 2 main layers - self attention layer and feed forward layer
# A self attention layer contains multiple attention heads
class Block(nn.Module):
    """ Transformer block: communication followed by computation """

    def __init__(self, n_embd, n_head):
        super().__init__()

        self.sa = MultiHeadAttention(n_head, C.head_size)
        self.ffwd = FeedFoward(n_embd)
        self.ln1 = nn.LayerNorm(n_embd)
        self.ln2 = nn.LayerNorm(n_embd)

    def forward(self, x):
        x = x + self.sa(self.ln1(x))
        x = x + self.ffwd(self.ln2(x))
        return x



class FeedFoward(nn.Module):
    """ a simple linear layer followed by a non-linearity """


# contains 2 classes - MultiHeadAttention and Head
from gpt_multi_head import MultiHeadAttention


