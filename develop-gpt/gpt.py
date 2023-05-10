from gpt_constants import C

# libraries
import torch
import torch.nn as nn

# read in text and create an array of unique sorted characters
with open("input.txt", "r") as f:
    text = f.read()
chars = sorted(list(set(text)))
vocab_size = len(chars)

# chtoi converts a character to an index and itoch does the opposite
chtoi = { ch:i for i,ch in enumerate(chars) }
itoch = { i:ch for i,ch in enumerate(chars) }

# decode takes a string and returns an array of integers, decode does the opposite
encode = lambda str: [chtoi[ch] for ch in str]
decode = lambda arr: ''.join([itoch[i] for i in arr])

# makes an integer vector from the text
data = torch.tensor(encode(text), dtype=torch.long)

# separate train data and validation data at a 90% cut of all data
n = int(0.9*len(data))
train_data = data[:n]
val_data = data[n:]

# manually seed the random number generator for testing / correlation
torch.manual_seed(1337)

# send tensors to the GPU, input data and target data via random indices in batches
def get_batch(type):
    data = train_data if type == 'train' else val_data

    # ix will contain 4 random indices
    ix = torch.randint(len(data) - C.block_size, (C.batch_size,))

    # x contains these 4 random blocks of data stacked together
    x = torch.stack([data[i:i+C.block_size] for i in ix])

    # y contains these 4 random blocks of data stacked together, offset by 1 from x to provide a target value
    y = torch.stack([data[i+1:i+C.block_size+1] for i in ix])

    # send the stacks to the device
    x, y = x.to(device), y.to(device)

    # return the stacks which are now loaded in the device
    return x, y

# @torch.no_grad and model.evel() are often used together to turn off certain training specific options
@torch.no_grad()
def estimate_loss():

    # define a hash
    out = {}

    # set the model to evaluation mode as opposed to training mode
    model.eval()

    # is training or validation data
    for type in ['train', 'val']:

        # create a vector of 200 zeros
        losses = torch.zeros(C.eval_iters)

        # set each value in the losses vector
        for k in range(C.eval_iters):

            # the stacked tensors, loaded into the device
            X, Y = get_batch(type)

            # this is not a constructor, it actually calls forward defined in model
            # logits contains the predictions for X
            # loss contains a scalar representing the accuracy of the model
            logits, loss = model(X, Y)

            # finally populate the losses vector after a forward pass of the model
            losses[k] = loss.item()

        # out contains an average of the losses for both train data and validation data
        out[type] = losses.mean()

    # train the model
    model.train()

    # return the losses
    return out

# instantiate the gpt language model
from gpt_model import GPTLanguageModel
model = GPTLanguageModel(vocab_size)

