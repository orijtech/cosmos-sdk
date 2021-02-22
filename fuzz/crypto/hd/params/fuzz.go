package params

import (
	"github.com/cosmos/cosmos-sdk/crypto/hd"
)

func Fuzz(b []byte) int {
	params, err := hd.NewParamsFromPath(string(b))
	if err != nil {
		return -1
	}
	if params == nil {
		panic("nil params yet nil error")
	}
	return 1
}
