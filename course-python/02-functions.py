# basic function definition
def print_hello(text):
  print(text)

# default value
def greet(greeting = "Hello"):
  print(greeting)

# built in parameters
def showBuiltIn(a = 1, b = 2):
    """I am a docstring """
    # print("__name__:", __name__)
    # print(showBuiltIn.__doc__)
    # print(showBuiltIn.__defaults__)
    # print(showBuiltIn.__code__)
    # globals, annotations

# input is s, return is s
encode = lambda s: s

print_hello("Hello")
greet();
showBuiltIn()
print(encode("Hello"))