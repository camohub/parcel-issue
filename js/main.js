
import ListItem from "./js/components/ListItem.vue"


var app = new Vue({
	data() {
		return {
			key: value
		}
	},

	el: '#app',
	
	data: {
		message: 'Juchuuuuuuuuuuuuuu Vueeeeeeeeeeeeeeee!',
		list: null,
		counter: 0,
		newListItem: '',
	},
	methods: {
		add() {
			this.list.push( this.newListItem );
		},
		isShort( item ) {
			return item.split( ' ' ).length < 2 ? true : false;
		},
		remove( item ) {
			this.list = this.list.filter( listItem => listItem !== item );
		},
	},
	created() {
		this.list = loadData();
	},
})


function loadData() {
	return ['aaaaaaaa', 'bbbbbbbb', 'cccccccccc', 'ddddddddddd'];
}


console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');