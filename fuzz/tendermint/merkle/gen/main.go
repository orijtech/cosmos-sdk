package main

import (
	"fmt"
        "bytes"
	"os"
)

func main() {
	samples := [][]byte{
		bytes.Join([][]byte{
			{61, 62, 63, 64, 65, 66},
			{67, 68, 69, 70, 71, 72},
			{67, 68, 69, 70, 71, 72, 67, 68, 69, 70, 71, 72, 61, 62, 63, 64, 65, 66},
		}, []byte(" ")),

		bytes.Join([][]byte{
			[]byte("f326493eceab4f2d9ffbc78c59432a0a005d6ea98392045c74df5d14a113be18"),
			[]byte("82e6cfce00453804379b53962939eaa7906b39904be0813fcadd31b100773c4b"),
			[]byte("6e340b9cffb37a989ca544e6bb780a2c78901d3fb33738768511a30617afa01d"),
			[]byte("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"),
			[]byte("e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"),
		}, []byte(" ")),
	}

	for i, sample := range samples {
		func() {
			f, err := os.Create(fmt.Sprintf("%d.txt", i))
			if err != nil {
				panic(err)
			}
			defer f.Close()
			f.Write(sample)
		}()
	}
}
