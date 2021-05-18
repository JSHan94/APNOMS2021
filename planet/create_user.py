
user_num = int(input("생성할 유저 수를 입력하세요 : "))
f = open("config.yml",'w')

f.write("accounts:\n")
for i in range(user_num):
    user = "  - name: user"+str(i)+"\n"
    coin = "    coins: [\"100000000token\", \"100000000stake\"]\n"
    f.write(user)
    f.write(coin)

f.write("""validator:
  name: user0
  staked: "100000000stake"
genesis:
  chain_id: "venus"
init:
  home: "$HOME/.venus"
""")