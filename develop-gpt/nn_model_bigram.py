import torch
import torch.nn as nn
from gpt_constants import C1

# bigram model
class BigramLanguageModel(nn.Module):

    def __init__(self, vocab_size):
        super().__init__()
        self.token_embedding_table = nn.Embedding(vocab_size, vocab_size)


# instantiate the model
model = BigramLanguageModel(65)
m = model.to(C1.device)

# optimize the model using AdamW
# optimizer = torch.optim.AdamW(model.parameters(), lr=C1.learning_rate)

