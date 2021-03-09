package bank_test

import (
	_ "context"
	"path/filepath"
	"testing"
	"time"

	"github.com/stretchr/testify/require"
	abci "github.com/tendermint/tendermint/abci/types"
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
	tmtypes "github.com/tendermint/tendermint/types"
	dbm "github.com/tendermint/tm-db"

	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	"github.com/cosmos/cosmos-sdk/simapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/auth/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
	stakingtypes "github.com/cosmos/cosmos-sdk/x/staking/types"
	// "github.com/orijtech/oragent/exporter"
)

var moduleAccAddr = authtypes.NewModuleAddress(stakingtypes.BondedPoolName)

func BenchmarkOneBankSendTxPerBlock(b *testing.B) {
	b.ReportAllocs()
	// Add an account at genesis
	acc := authtypes.BaseAccount{
		Address: addr1.String(),
	}

	// construct genesis state
	genAccs := []types.GenesisAccount{&acc}
	benchmarkApp := simapp.SetupWithGenesisAccounts(genAccs)
	ctx := benchmarkApp.BaseApp.NewContext(false, tmproto.Header{})

	// some value conceivably higher than the benchmarks would ever go
	require.NoError(b, simapp.FundAccount(benchmarkApp, ctx, addr1, sdk.NewCoins(sdk.NewInt64Coin("foocoin", 100000000000))))

	benchmarkApp.Commit()
	txGen := simappparams.MakeTestEncodingConfig().TxConfig

	// Precompute all txs
	txs, err := simapp.GenSequenceOfTxs(txGen, []sdk.Msg{sendMsg1}, []uint64{0}, []uint64{uint64(0)}, b.N, priv1)
	require.NoError(b, err)

	height := int64(3)

	b.ResetTimer()
	// Run this with a profiler, so its easy to distinguish what time comes from
	// Committing, and what time comes from Check/Deliver Tx.
	for i := 0; i < b.N; i++ {
		benchmarkApp.BeginBlock(abci.RequestBeginBlock{Header: tmproto.Header{Height: height}})
		_, _, err := benchmarkApp.Check(txGen.TxEncoder(), txs[i])
		if err != nil {
			panic("something is broken in checking transaction")
		}

		_, _, err = benchmarkApp.Deliver(txGen.TxEncoder(), txs[i])
		require.NoError(b, err)
		benchmarkApp.EndBlock(abci.RequestEndBlock{Height: height})
		benchmarkApp.Commit()
		height++
	}
}

func BenchmarkOneBankMultiSendTxPerBlock(b *testing.B) {
	b.ReportAllocs()
	// Add an account at genesis
	acc := authtypes.BaseAccount{
		Address: addr1.String(),
	}

	// Construct genesis state
	genAccs := []authtypes.GenesisAccount{&acc}
	benchmarkApp := simapp.SetupWithGenesisAccounts(genAccs)

	benchmarkOneBankMultiSendTxPerBlock(b, benchmarkApp)
}

func benchmarkOneBankMultiSendTxPerBlock(b *testing.B, benchmarkApp *simapp.SimApp) {
	ctx := benchmarkApp.BaseApp.NewContext(false, tmproto.Header{})

	// some value conceivably higher than the benchmarks would ever go
	require.NoError(b, simapp.FundAccount(benchmarkApp, ctx, addr1, sdk.NewCoins(sdk.NewInt64Coin("foocoin", 100000000000))))

	benchmarkApp.Commit()
	txGen := simappparams.MakeTestEncodingConfig().TxConfig

	// Precompute all txs
	txs, err := simapp.GenSequenceOfTxs(txGen, []sdk.Msg{multiSendMsg1}, []uint64{0}, []uint64{uint64(0)}, b.N, priv1)
	require.NoError(b, err)
	b.ResetTimer()

	height := int64(3)

	// Run this with a profiler, so its easy to distinguish what time comes from
	// Committing, and what time comes from Check/Deliver Tx.
	for i := 0; i < b.N; i++ {
		benchmarkApp.BeginBlock(abci.RequestBeginBlock{Header: tmproto.Header{Height: height}})
		_, _, err := benchmarkApp.Check(txGen.TxEncoder(), txs[i])
		if err != nil {
			panic("something is broken in checking transaction")
		}

		_, _, err = benchmarkApp.Deliver(txGen.TxEncoder(), txs[i])
		require.NoError(b, err)
		benchmarkApp.EndBlock(abci.RequestEndBlock{Height: height})
		benchmarkApp.Commit()
		height++
	}
}

func BenchmarkOneBankMultiSendTxPerBlock100K(b *testing.B) {
    b.Skip("Unstable")
    /*
	exp, xerr := exporter.New(context.Background(), exporter.WithInsecureAddress(":8444"))
	if xerr != nil {
		panic(xerr)
	}
	defer exp.Stop()
    */

	dir := b.TempDir()

	startTime := time.Now()
	b.ReportAllocs()
	db, err := dbm.NewGoLevelDB("onebankmultisend100k", filepath.Join(dir, "db"))
	if err != nil {
		b.Fatal(err)
	}
	defer db.Close()

	// 1. Generate n validators.
	valSet, _ := tmtypes.RandValidatorSet(100, 1e6)
	println("generated validatorset", time.Since(startTime).String())

	// 2. Generate balances and accounts.
	addrs, _ := makeRandomAddressesAndPublicKeys(100000)
	println("generated random addresses and publickeys", time.Since(startTime).String())
	genTokens := sdk.TokensFromConsensusPower(67)
	genCoin := sdk.NewCoin("benchcoin", genTokens)
	var balances []banktypes.Balance
	var accounts []types.GenesisAccount
	coins := sdk.Coins{genCoin}

	for i, addr := range addrs {
		addrStr := addr.String()
		balances = append(balances, banktypes.Balance{
			Address: addrStr,
			Coins:   coins,
		})
		accounts = append(accounts, &authtypes.BaseAccount{
			Address:       addrStr,
			AccountNumber: uint64(i + 1),
		})
	}
	println("generated balances and accounts", time.Since(startTime).String())

	app := simapp.SetupWithGenesisValSetAndDB(b, db, valSet, accounts, balances...)
	println("finished generating the app", time.Since(startTime).String())
	benchmarkOneBankMultiSendTxPerBlock(b, app)
}

func makeRandomAddressesAndPublicKeys(n int) (accL []sdk.AccAddress, pkL []*ed25519.PubKey) {
	for i := 0; i < n; i++ {
		pk := ed25519.GenPrivKey().PubKey().(*ed25519.PubKey)
		pkL = append(pkL, pk)
		accL = append(accL, sdk.AccAddress(pk.Address()))
	}
	return accL, pkL
}
