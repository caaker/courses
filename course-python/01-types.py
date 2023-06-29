print("")
print("***************")
print("     types     ")
print("***************")
print("")

# an integer - <class 'int'>
i = 4
i1 = (4) # looks like tuple, but is an integer
print(type(i))

# a float - <class 'float'>
f = 4.0
print(type(f))

# a string - <class 'str'>
s = 'test'
print(type(s))

# an boolean - <class 'bool'>
b = True
print(type(b))

# a complex number - <class 'complex'>
c = 1 + 2j
print(type(c))

print("")
print("***************")
print("composite types")
print("***************")
print("")

# a tuple - <class 'tuple'>,
tuple = (4, 2)
tuple = (4, )
print(type(tuple))

# a dynamic array - <class 'list'>
list = [0]
print(type(list))

# a hash table - <class 'dict'>
dict = {'a': 0}
print(type(dict))

# a set - <class 'set'>
set = { 1, 2, 3 }
print(type(set))
