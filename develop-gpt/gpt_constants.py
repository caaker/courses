import torch

class C:

    # set the block size and batch size for faster parallel computation with GPU if it is available
    # a loss is collected eval_iters times for each stacked batch selected at random indices in the data
    batch_size = 4
    block_size = 8
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    eval_iters = 200

    # gpt language model parameters
    n_layer = 6
    n_embd = 384
    n_head = 6

    # originally created in Block and passed into Head and MultiHead
    head_size = n_embd // n_head

    # general
    max_iters = 5000
    eval_interval = 500
    learning_rate = 3e-4
    dropout = 0.2
