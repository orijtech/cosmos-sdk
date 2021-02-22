package main

import (
	"fmt"
	"io/ioutil"

	"github.com/cosmos/cosmos-sdk/types"
)

func main() {
	var values = []int64{
		-1,
		-(1 << 10),
		-(1<<10 - 3),
		-(1<<62 - 1),
		-(1<<32 - 7),
		-(1<<22 - 8),
		0,
		1,
		1 << 10,
		1<<10 - 3,
		1<<63 - 1,
		1<<32 - 7,
		1<<22 - 8,
	}

	for i, value := range values {
		func() {
			in := types.NewInt(value)
			blob, err := in.Marshal()
			if err != nil {
				panic(err)
			}
			filename := fmt.Sprintf("%d.txt", i)
			if err := ioutil.WriteFile(filename, blob, 0755); err != nil {
				panic(err)
			}
		}()
	}
}
