<template>
	<div>
		<div class="section">
			<mdc-list two-line>
				<mdc-list-item v-for="row in table" :key="row._id" :activated="isPromoted(row)">
					<span>{{row.item}}</span>
    			<span slot="secondary">{{row.currentPrice}}</span>
				</mdc-list-item>
		  </mdc-list>
      <mdc-fab icon="sort" fixed @click="sortTable"></mdc-fab>

    </div>
	</div>
</template>

<script>
import { ProductService } from '@/common/api.service';
import * as R from 'ramda'
export default {
  name: 'Home',
  data() {
    return {
      table: [],
      reverse: false
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
    },
    sortTable(){
      this.table = this.sortedTable()
    },
    sortedTable() {
      const sort = R.compose( R.sortBy( R.prop('currentPrice')), R.filter( R.__, this.table))
      const table =
        R.compose( 
          R.ifElse( R.always(this.reverse), 
            R.identity, 
            R.reverse
          ), sort
        )
      this.reverse = R.not(this.reverse)
      return R.concat(
          table(this.isPromoted),
          table(R.complement(this.isPromoted))
      )
    },
    isPromoted: item => item.currentPrice > item.originalPrice
  },
  created() {
    ( async () => {
      await this.getList()
      this.sortTable()
    })()
  }
};
</script>

<style>
table,
th,
td {
  margin-top: '10 px';
}
</style>