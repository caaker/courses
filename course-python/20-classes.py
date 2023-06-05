class MySuperClass():

    def __init__(self):
        print("I'm a super constructor")

    def superMethod(self):
        print("I'm a super method");

class MyClass(MySuperClass):

    # self is required to instantiate
    def __init__(self):

        # calls constructor of the super class
        super().__init__()
        print("I'm a constructor")

    def method(self):
        print("I'm a method")

Instance = MyClass()
Instance.method()
Instance.superMethod()
