#!/usr/bin

planetd tx bank send "$1" "$2" "$3" --home ~/.earth --chain-id earth > /dev/null

planetd query bank balances "$1" | grep "amount"