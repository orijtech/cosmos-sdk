package main

import (
	"encoding/binary"
	"fmt"
	"math"

	"github.com/cosmos/cosmos-sdk/crypto/types"
)

func main() {
    cba := &types.CompactBitArray{
        ExtraBitsStored: 0,
        Elems: make([]byte, (math.MaxInt32/8)+1),
    }
    println(cba.Count())
    cba.SetIndex(73, true)
}

func main1() {
	buf := make([]byte, binary.MaxVarintLen64)
	n := binary.PutUvarint(buf, math.MaxInt64/2)

	cba, err := types.CompactUnmarshal(buf[:n])
	if err != nil {
		panic(err)
	}
	fmt.Printf("Got it: %#v\n", cba)
}
