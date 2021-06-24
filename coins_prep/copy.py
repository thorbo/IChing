

with open("coin2.txt", 'r') as file:
    coin = file.readlines()

with open("coin4.txt", 'w') as file:
    for line in coin:
        line = list(line[-2::-1])
        for i, c in enumerate(line):
            if c == '\\':
                line[i] = '/'
            elif c == '/':
                line[i] = '\\'
        file.write("".join(line) + '\n')
