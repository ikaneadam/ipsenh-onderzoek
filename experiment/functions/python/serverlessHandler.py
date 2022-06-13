def fibonacci(num):
    if (num <= 1):
        return num
    return fibonacci(num - 1) + fibonacci(num - 2)


def serverlessHandler():
    fibonacci(35)
    print("hello world")


serverlessHandler()
