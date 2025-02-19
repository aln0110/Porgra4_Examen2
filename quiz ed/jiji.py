def potencia(m, n):
    if n == 1:
        return m
    return m * potencia(m, n-1)

def esto(n):
    if (n>2):
        return 4* esto(n-1) + esto(n-2)
    elif (n==2):
        return -2
    elif (n==1):
        return 1