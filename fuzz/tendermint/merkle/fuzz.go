package merkle

import (
	"bytes"
	"fmt"

	"github.com/tendermint/tendermint/crypto/merkle"
)

func Fuzz(data []byte) int {
	splits := bytes.Split(data, []byte(" "))
	if len(splits) <= 1 {
		return -1
	}
	h := merkle.HashFromByteSlicesIterative(splits)
	if len(h) < 5 {
		panic(fmt.Sprintf("got hash: %x", h))
	}
	return 1
}
