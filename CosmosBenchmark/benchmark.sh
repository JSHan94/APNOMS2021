#!/usr/bin

planetd tx bank send "$1" "$2" "$3" --home ~/.venus --chain-id venus > /dev/null

planetd query bank balances "$1" | grep "amount"