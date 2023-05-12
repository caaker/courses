def print_hello(text):
  print(text)

def greet(greeting = "Hello"):
  print(greeting)

def showBuiltIn(a = 1, b = 2):
    """I am a docstring """
    print("__name__:", __name__)
    print(showBuiltIn.__doc__)
    print(showBuiltIn.__defaults__)
    print(showBuiltIn.__code__)
    # globals, annotations


print_hello("Hello")
greet();
showBuiltIn()