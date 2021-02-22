package main

import (
        "os"
	"io/ioutil"

	"github.com/cosmos/cosmos-sdk/types"
)

func main() {
	blob, err := ioutil.ReadFile(os.Args[1])
	if err != nil {
		panic(err)
	}

	in := new(types.Int)
	if err := in.Unmarshal(blob); err != nil {
		panic(err)
	}
}
