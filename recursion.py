def req_factorial(x):
    if x == 1:
        return x
    else:
        return x * req_factorial(x - 1)


print(req_factorial(100))
