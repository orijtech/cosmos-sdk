package cache

import (
	"testing"

	"github.com/cosmos/cosmos-sdk/store/mem"
	"github.com/cosmos/cosmos-sdk/store/types"
)

func freshMgr() *CommitKVStoreCacheManager {
	return &CommitKVStoreCacheManager{
		caches: map[string]types.CommitKVStore{
			"a1":           nil,
			"alalalalalal": nil,
		},
	}
}

func populate(mgr *CommitKVStoreCacheManager) {
	mgr.caches["this one"] = (types.CommitKVStore)(nil)
	mgr.caches["those ones are the ones"] = (types.CommitKVStore)(nil)
	mgr.caches["very huge key right here and there are we going to ones are the ones"] = (types.CommitKVStore)(nil)
}

func BenchmarkReset(b *testing.B) {
	b.ReportAllocs()
	mgr := freshMgr()

	b.ResetTimer()
	b.ReportAllocs()

	for i := 0; i < b.N; i++ {
		mgr.Reset()
		if len(mgr.caches) != 0 {
			b.Fatal("Reset failed")
		}
		populate(mgr)
		if len(mgr.caches) == 0 {
			b.Fatal("populate failed")
		}
		mgr.Reset()
		if len(mgr.caches) != 0 {
			b.Fatal("Reset failed")
		}
	}

	if mgr == nil {
		b.Fatal("Impossible condition")
	}
}

func BenchmarkCommitKVStore(b *testing.B) {
	b.ReportAllocs()
	kvL := []struct {
		key, value []byte
	}{
		{[]byte("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), []byte("value")},
		{[]byte("value"), []byte("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")},
		{[]byte("nil"), []byte("nil")},
		{[]byte("0"), []byte("1")},
		{[]byte("0"), []byte("nothing")},
		{[]byte("nothing"), []byte("0")},
		{[]byte{0x01, 0x12, 0x22, 0x77, 0x44, 0x7f, 0x1c}, []byte("0")},
		{[]byte("0"), []byte{0x01, 0x12, 0x22, 0x77, 0x44, 0x7f, 0x1c}},
		{[]byte{0x10, 0x11}, []byte{0x01, 0x12, 0x22, 0x77, 0x44, 0x7f, 0x1c}},
		{[]byte{0x10, 0x11}, []byte{0x11, 0x22, 0x22, 0x77, 0x44, 0xff, 0xcc}},
		{[]byte{0xff, 0x11}, []byte{0x11, 0x22, 0x22, 0x77, 0x44, 0xff, 0xcc}},
	}
	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		ms := mem.NewStore()
		ckv := NewCommitKVStoreCache(ms, 10)
		for _, kv := range kvL {
			ckv.Set(kv.key, kv.value)
		}
		for _, kv := range kvL {
			ckv.Get(kv.key)
			ckv.Get(kv.value)
		}
		for _, kv := range kvL {
			ckv.Delete(kv.key)
		}
		for _, kv := range kvL {
			ckv.Delete(kv.value)
		}
	}
}
