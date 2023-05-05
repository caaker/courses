import torch

class C:

    # set the block size and batch size for faster parallel computation with GPU
    batch_size = 4
    block_size = 8
    device = 'cuda' if torch.cuda.is_available() else 'cpu'

    # length of the losses vector
    eval_iters = 200

    # gpt language model parameters
    n_embd = 384
    n_head = 6
    n_layer = 6

    # general
    max_iters = 5000
    eval_interval = 500
    learning_rate = 3e-4
    dropout = 0.2
