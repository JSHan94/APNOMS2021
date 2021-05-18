package keeper

import (
	"github.com/hello/planet/x/blog/types"
)

var _ types.QueryServer = Keeper{}
