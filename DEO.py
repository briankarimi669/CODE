math=int(input("Enter your marks in maths:"))
english=int(input("enter your marks in english"))
physics=int(input("enter your marks in physics"))
biology=int(input("enter your marks in biology"))
geography=int(input("enter your marks in geography"))
final=math+english+physics+biology+geography 
average=final/5
if average>=50:
    print("PASS")
else:
    print("FAIL")
print(f"{math} {english} {physics} {biology} {geography} {final}")
