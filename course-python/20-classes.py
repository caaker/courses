
# python does not have access specifiers
class MySuperClass():

    def __init__(self):
        print("I'm a super constructor")

    def superMethod(self):
        print("I'm a super method")

class MyClass(MySuperClass):

    # self is required to instantiate
    def __init__(self):

        # calls constructor of the super class
        super().__init__()
        print("I'm a constructor")

    def method(self):
        print("I'm a method")

    def _private_method(self):
        print("This is intended to be a private method, but using an underscore is just convention")

Instance = MyClass()
Instance.method()
Instance.superMethod()
Instance._private_method()
