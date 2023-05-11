from nn_constants import C
import torch

# module 1 - textually analyze input for encode / decode
with open("input.txt", "r") as f:
    text = f.read()
chars = sorted(list(set(text)))
vocab_size = len(chars)
chtoi = { ch:i for i,ch in enumerate(chars) }
itoch = { i:ch for i,ch in enumerate(chars) }
encode = lambda str: [chtoi[ch] for ch in str]
decode = lambda arr: ''.join([itoch[i] for i in arr])

# module 2 - transform text to a vector of ints
data = torch.tensor(encode(text), dtype=torch.long)
n = int(0.9*len(data))
train_data = data[:n]
val_data = data[n:]

# module 3 - get batches of the vector data for ( input x ) and ( output y )
torch.manual_seed(1337)
def get_batch(type):
    data = train_data if type == 'train' else val_data
    ix = torch.randint(len(data) - C.block_size, (C.batch_size,))
    x = torch.stack([data[i:i+C.block_size] for i in ix])
    y = torch.stack([data[i+1:i+C.block_size+1] for i in ix])
    x, y = x.to(device), y.to(device)
    return x, y

# module 4 - run a model
@torch.no_grad()
def estimate_loss():
    out = {}
    model.eval()
    for type in ['train', 'val']:
        losses = torch.zeros(C.eval_iters)
        for k in range(C.eval_iters):
            X, Y = get_batch(type)
            logits, loss = model(X, Y)
            losses[k] = loss.item()
        out[type] = losses.mean()
    model.train()
    return out

# instantiate the gpt language model
from gpt_model import GPTLanguageModel
model = GPTLanguageModel(vocab_size)
