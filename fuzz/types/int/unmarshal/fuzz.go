package int

import (
	"bytes"
	"fmt"

	"github.com/cosmos/cosmos-sdk/types"
)

func Fuzz(data []byte) int {
	in := new(types.Int)
	if err := in.Unmarshal(data); err == nil {
		return 1
	}

	rt, err := in.Marshal()
	if err != nil {
		panic(err)
	}

	fmtd := bytes.TrimPrefix(bytes.TrimSpace(data), []byte("0"))
	if !bytes.Equal(fmtd, rt) {
		panic(fmt.Sprintf("roundtrip mismatch\ngot:  %x\nwant: %x\n", rt, fmtd))
	}
	return 0
}
