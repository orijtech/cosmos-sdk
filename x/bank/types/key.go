package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/address"
)

const (
	// ModuleName defines the module name
	ModuleName = "bank"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// QuerierRoute defines the module's query routing key
	QuerierRoute = ModuleName
)

// KVStore keys
var (
	// BalancesPrefix is the for the account balances store. We use a byte
	// (instead of say `[]]byte("balances")` to save some disk space).
	BalancesPrefix      = []byte{0x02}
	SupplyKey           = []byte{0x00}
	DenomMetadataPrefix = []byte{0x1}
	InvalidKey          = []byte{0x00}
)

// DenomMetadataKey returns the denomination metadata key.
func DenomMetadataKey(denom string) []byte {
	d := []byte(denom)
	return append(DenomMetadataPrefix, d...)
}

// AddressFromBalancesStore returns an account address from a balances prefix
// store. The key must not contain the perfix BalancesPrefix as the prefix store
// iterator discards the actual prefix.
//
// If invalid key is passed, AddressFromBalancesStore returns InvalidKey.
func AddressFromBalancesStore(key []byte) sdk.AccAddress {
	if len(key) == 0 {
		return sdk.AccAddress(InvalidKey)
	}
	addrLen := key[0]
	if len(key[1:]) < int(addrLen) {
		return sdk.AccAddress(InvalidKey)
	}
	addr := key[1 : addrLen+1]

	return sdk.AccAddress(addr)
}

// CreateAccountBalancesPrefix creates the prefix for an account's balances.
func CreateAccountBalancesPrefix(addr []byte) []byte {
	return append(BalancesPrefix, address.MustLengthPrefix(addr)...)
}
