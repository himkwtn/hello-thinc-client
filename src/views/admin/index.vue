<template>
	<div>
		<div class="section" v-if="loggedIn">
			<mdc-list two-line interactive>
				<mdc-list-item v-for="row in table" 
          :key="row._id"  @click="clicked(row._id)" 
          :selected="checkedItem.includes(row._id)"
          :class="[{red:isSold(row)},{green:isPromoted(row)}]"
        >
					<span>{{row.item}}</span>
    			<span slot="secondary">{{row.currentPrice}}</span>
					<mdc-checkbox  slot="end-detail" :value="row._id" v-model="checkedItem" :checked="checkedItem.includes(row._id)"/>
				</mdc-list-item>
			</mdc-list>
		</div>
			<mdc-dialog v-model="access" title="Alert" @change="onChange">
				Access Denied
			</mdc-dialog>
    <mdc-fab v-if="checkedItem.length > 0" icon="attach_money" fixed class="fab-2" @click="sell"></mdc-fab>
    <mdc-fab v-if="checkedItem.length > 0" icon="refresh"  fixed @click="reset" class="fab-3"></mdc-fab>
    <mdc-fab v-if="checkedItem.length > 0" icon="whatshot"  fixed @click="promote" class="fab-4"></mdc-fab>
    <mdc-fab icon="autorenew" fixed @click="resetAll"></mdc-fab>
	</div>
</template>

<script>
import { ProductService } from '@/common/api.service';
import * as R from 'ramda'
export default {
  name: 'Admin',
  props: ['loggedIn'],
  data() {
    return {
      table: '',
      checkedItem: [],
      access: !this.loggedIn
    };
  },
  sockets: {
    update() {
      this.getList();
    }
  },
  methods: {
    getList: async function() {
      this.table = await ProductService.getProductList();
      this.table = R.compose(R.reverse, R.sortBy(R.prop('currentPrice')))(this.table)
      this.checkedItem = []
    },
    sell() {
      ProductService.sellProducts( 
        this.update(this.checkedItem, 'currentPrice') 
      )
    },
    promote() {
      ProductService.promoteProducts(
        this.update(this.checkedItem, 'currentPrice') 
      );
    },
    resetAll() {
      ProductService.resetProducts(
        this.update(this.modified(this.table), 'originalPrice') 
      );
    },
    reset() {
      ProductService.resetProducts( 
        this.update(this.checkedItem, 'originalPrice')       
      );
    },
    clicked(_id) {
      if (this.checkedItem.includes(_id)) {
        this.checkedItem.splice(this.checkedItem.findIndex(v => v === _id), 1);
      } else {
        this.checkedItem.push(_id);
      }
    },
    onChange() {
      this.$router.push('/login');
    },
    getPrice: table => selected => field => 
      R.pipe(
        R.filter(row => selected.includes(row._id)),
        R.map(R.pick(['_id',field]))
      )(table)
    ,
    update(selected,field) {
      return this.getPrice(this.table)(selected)(field)
    },
    modified: table => {
      const changed = item => item.currentPrice != item.originalPrice
      return R.pipe(
        R.filter(changed), R.map(R.prop('_id'))
      )(table)
    },
    isPromoted: item => item.currentPrice > item.originalPrice,
    isSold: item => item.currentPrice < item.originalPrice


  },
  created() {
    this.getList();
    if (!this.loggedIn) {
    }
  }
};
</script>
<style>
@media (min-width: 1024px) {
  .fab-2 {
    bottom: 3rem !important;
    right: 9rem !important;
  }
  .fab-3 {
    bottom: 3rem !important;
    right: 13rem !important;
  }
  .fab-4 {
    bottom: 3rem !important;
    right: 17rem !important;
  }

}
.fab-2 {
  bottom: 5rem;
  right: 1rem;
}
.fab-3 {
  bottom: 9rem;
  right: 1rem;
}
.fab-4 {
  bottom: 13rem;
  right: 1rem;
}
.tile {
  overflow: default;
}
.mdc-grid-tile__primary {
  background-color: var(--mdc-theme-primary);
}

.checked .mdc-grid-tile__primary {
  background-color: var(--mdc-theme-secondary);
}
.green {
  color: green
}
.red {
  color: red
}
</style>