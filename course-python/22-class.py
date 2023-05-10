class SuperClass():

    def __init__(self):
        self.test = 1

    # arg2 is required
    def myMethodSuper(self, arg1, arg2):
        self.test = 2

class MyClass(SuperClass):

    def __init__(self, arg1):
        super().__init__()

    # arg2 is now optional as it has a default values
    def myMethod(self, arg1, arg2=None):
        self.test = 1

    def myStaticMethod(arg1):
        i = 0

# test the instance
Instance1 = MyClass(1)
Instance1.myMethod(1);
Instance1.myMethodSuper(1, 2);

# test the class
MyClass.myStaticMethod(1)