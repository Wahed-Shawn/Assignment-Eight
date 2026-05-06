#1.watermelon

w = int(input())

if w > 2 and w % 2 == 0 :
    print("YES")
else: 
    print("NO")

#2. Way Too Long Words

n = int(input())

for i in range(n):
    word = input()
    if len(word) <= 10:
        print(word)
    else:
        print(word[0] + str((len(word) - 2)) + word[-1])

#3.Team

n = int(input())
results = 0

for i in range(n):
    data = map(int,input().split())
    if sum(data) >= 2:
        results += 1

print(results)

#4.Bit++

n = int(input())
x = 0
for i in range(n):
    stat = input()
    if "+" in stat:
        x += 1
    else:
        x -= 1

print(x)

#5.Next Round

line_1 = list(map(int,input().split()))

k = line_1[1] - 1
adv = 0

scores =list( map(int,input().split()))

for i in scores:
    if i >= scores[k] and i > 0:
        adv += 1

print(adv)

#6.Domino piling

m,n = map(int,input().split())

print((m*n) // 2)

#7.Beautiful Matrix


for i in range(1,6):
    row = list(map(int,input().split()))

    if 1 in row:
        r = i 
        c = row.index(1) + 1
        moves = abs(r-3) + abs(c-3)
        print(moves)
        break


#8.Petya and Strings


