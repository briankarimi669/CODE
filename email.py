cmail="briankarimi669@gmail.com"
cpassword="123456"
imail=input("enter your email: ")
ipassword=input("enter your password: ")
if cmail==imail and cpassword==ipassword:
    print("logged in successfully")
elif cmail==imail and cpassword!=ipassword:
    print("password is wrong")
elif cmail!=imail and cpassword==ipassword:
    print("email is wrong")
else:
    print("Incorrect credentials")
