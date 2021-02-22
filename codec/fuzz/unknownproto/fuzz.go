package unknownproto

import (
	"github.com/cosmos/cosmos-sdk/simapp"
)

func Fuzz(b []byte) int {
	cfg := simapp.MakeTestEncodingConfig()
	decoder := cfg.TxConfig.TxDecoder()
	tx, err := decoder(b)
	if err != nil {
		return 0
	}
	if tx == nil {
		panic("tx is nil")
	}
	return 1
}
