NUMCOINS = 4

for i in range(1, NUMCOINS+1):
    input = "coin" + str(i) + ".txt"
    coinreverse = "coinreverse" + str(i) + ".txt"
    coinforward = "coinforward" + str(i) + ".txt"

    with open(input, 'r') as file:
        coin = file.readlines()

    with open(coinreverse, 'w') as file:
        for line in coin:
            line = list(line[-2::-1])
            for i, c in enumerate(line):
                if c == '\\':
                    line[i] = '/'
                elif c == '/':
                    line[i] = '\\\\'
                elif c == ':':
                    line[i] = '$'
            file.write("".join(line) + '\\n')

    with open(coinforward, 'w') as file:
        for line in coin:
            line = list(line)
            for i, c in enumerate(line):
                if c == '\\':
                    line[i] = '\\\\'
                elif c == '\n':
                    line[i] = '\\n'
            file.write("".join(line))