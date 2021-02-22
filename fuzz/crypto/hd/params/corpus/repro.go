package main

import (
	"io/ioutil"
	"os"

	"github.com/cosmos/cosmos-sdk/crypto/hd"
)

func main() {
	blob, err := ioutil.ReadFile(os.Args[1])
	if err != nil {
		panic(err)
	}
        println(string(blob))
	params, err := hd.NewParamsFromPath(string(blob))
	if err != nil {
		panic(err)
	}
	_ = params
}
