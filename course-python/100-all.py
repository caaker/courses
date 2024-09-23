import random
from collections.abc import Iterable

def compositeTypes():
  # 4 common composite types
  print("Composite Types")
  print(isinstance((1, 2, 'a', 'red'), tuple))
  print(isinstance([1, 2, 'a'], list))
  print(isinstance({1, 2}, set))
  print(isinstance({'a': 1, 'b': 2}, dict))
  print(isinstance([1, 2], Iterable))

def types():
  # 4 common types
  print("Types")
  print(isinstance(1, int))
  print(isinstance(1.0, float))
  print(isinstance(float("1.0"), float))
  print(isinstance(True, bool))
  print(isinstance("string", str))

def io():
  a = input()
  print(a)
  
def functions():
  def f(x): return 2 * x

def strings():
  # upper = lambda string1: string1.upper()
  def upper(string1): return string1.upper()
  print(upper('A lambda function that makes uppercase strings'))
  a = 'test1'
  b = "test2"
  print(a)
  print(b)

# lists
def lists():
  words = ['amelia', 'harper', 'evelyn', 'chris', 'james', 'brian']
  words1 = words[:2]     # index 0 to 1
  words2 = words[2:]     # index 2 to end
  print(words)           # words has not changed
  print(words1)
  print(words2)

def loops():
  count = ["one", "two", "three"]
  for x in count:
    print(x)

def math():
  print(random.uniform(-1,1))

#
# choose which function to run
#

run = "types"
if run == "types":
  types()
elif run == "functions":
  functions()
elif run == "strings":
  strings()
elif run == "lists":
  lists()
elif run == "loops":
  loops()
else:
  print("Select a function to run")
