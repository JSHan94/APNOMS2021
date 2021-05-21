
# Save Cosmos Key in .csv file

chain_name = "earth"
import os
os.system("planetd keys list --home ~/.{} > keys.txt".format(chain_name))

user_dict = {}
with open('keys.txt') as file:
    line = file.readline()
    name, address="",""
    while line:
        s = line.split()
        if len(s) == 0 :
            break
        if s[1] == "name:":
            name = s[2]
        if s[0] == "address:":
            address = s[1]
            user_dict[name] = address
        
        line=file.readline()

f = open("parsed_keys.csv","w")
f.write("name,address\n")
for name,address in user_dict.items():
    f.write(name+","+address+"\n")
f.close()