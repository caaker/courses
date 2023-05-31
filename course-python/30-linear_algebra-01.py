# dot multiplication
# https://numpy.org/doc/stable/reference/generated/numpy.dot.html
# chat-gpt code, corrected by me

import numpy as np

# Create a vector
x = np.array([1, 2, 3])

# Create a matrix
A = np.array([[4, 5, 6],
              [7, 8, 9]])

# Perform matrix multiplication
y = np.dot(A, x)

# Print the result
print("Hello, World!")
print("Matrix A:")
print(A)
print("Vector x:")
print(x)
print("Matrix-vector multiplication A * x:")
print(y)
