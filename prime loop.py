i=2
while i<50:
    is_prime=True
    j=2
    while j<i:
        if i%j==0:
            is_prime=False
        j+=1
    if is_prime:
        print(i)
    i+=1
    