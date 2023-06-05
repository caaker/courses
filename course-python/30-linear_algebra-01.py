# dot multiplication
# https://numpy.org/doc/stable/reference/generated/numpy.dot.html
# chat-gpt code, corrected

import numpy as np

# Create a vector
x = np.array([1, 2, 3])

# Create a matrix
A = np.array([[4, 5, 6],
              [7, 8, 9]])

# Determine the dot product
y = np.dot(A, x)

# Print the result
print("Matrix A:")
print(A)
print("Vector x:")
print(x)
print("A dot x:")
print(y)
