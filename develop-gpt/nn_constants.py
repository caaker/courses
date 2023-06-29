import torch

# Cg for constants GPT
class Cg:

    # forward pass constants
    batch_size = 4
    block_size = 8
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    eval_iters = 200

    # general
    max_iters = 5000
    eval_interval = 500
    learning_rate = 3e-4

    # gpt - ?
    dropout = 0.2

    # gpt language model parameters
    n_layer = 6
    n_embd = 384
    n_head = 6
    head_size = n_embd // n_head

# Cb for Constants Bigram
class Cb:

    # forward pass constants
    batch_size = 32
    block_size = 8
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    eval_iters = 200

    # general
    max_iters = 3000
    eval_interval = 300
    learning_rate = 1e-2