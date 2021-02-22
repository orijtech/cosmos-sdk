package armor

import (
	"strings"

	"github.com/cosmos/cosmos-sdk/crypto"
)

func Fuzz(b []byte) int {
	if strings.TrimSpace(crypto.ArmorInfoBytes(b)) == "" {
		return -1
	}
	return 1
}
