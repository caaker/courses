from nn_constants import Cb as C
import torch

#
# Common
#

# analyze text
with open("input.txt", "r") as f:
    text = f.read()
chars = sorted(list(set(text)))
vocab_size = len(chars)
chtoi = { ch:i for i,ch in enumerate(chars) }
itoch = { i:ch for i,ch in enumerate(chars) }
encode = lambda str: [chtoi[ch] for ch in str]
decode = lambda arr: ''.join([itoch[i] for i in arr])

# make training and validation data tensors
data = torch.tensor(encode(text), dtype=torch.long)
n = int(0.9*len(data))
train_data = data[:n]
val_data = data[n:]

# get random chunks of data in stacks of batch_size ( B Dimension ) by block_size ( T Dimension )
# for both context ( x ) and target ( y )
torch.manual_seed(1337)
def get_batch(type):
    data = train_data if type == 'train' else val_data
    ix = torch.randint(len(data) - C.block_size, (C.batch_size,))
    x = torch.stack([data[i:i+C.block_size] for i in ix])
    y = torch.stack([data[i+1:i+C.block_size+1] for i in ix])
    x, y = x.to(C.device), y.to(C.device)
    return x, y

# run batch through forward pass of the neural network
@torch.no_grad()
def estimate_loss():
    out = {}
    model0.eval()
    for type in ['train', 'val']:
        losses = torch.zeros(C.eval_iters)
        for k in range(C.eval_iters):
            x, y = get_batch(type)
            logits, loss = model0(x, y)
            losses[k] = loss.item()
        out[type] = losses.mean()
    model0.train()
    return out

#
# Bigram Model
#

from nn_model_bigram import BigramLanguageModel
model0 = BigramLanguageModel(vocab_size)
model1 = model0.to(C.device)


#
# Bigram Model - Train
#

def train_model(model, learning_rate, max_iters, eval_interval):
    optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)
    for iter in range(max_iters):
        if iter % eval_interval == 0:
            losses = estimate_loss()
            print(f"step {iter}: train loss {losses['train']:.4f}, val loss {losses['val']:.4f}")
        xb, yb = get_batch('train')
        logits, loss = model(xb, yb)
        optimizer.zero_grad(set_to_none=True)
        loss.backward()
        optimizer.step()
train_model(model0, C.learning_rate, C.max_iters, C.eval_interval)

#
# Bigram Model - Generate
#

def generate_text():
    context = torch.zeros((1, 1), dtype=torch.long, device=C.device)
    test = model1.generate(context, max_new_tokens=500)
    print(decode(test[0].tolist()))
generate_text()
