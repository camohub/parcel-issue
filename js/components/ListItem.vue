<script>

export default {

    props: [
		'item', 
		'index',
	],

	data() {
		return {

		}
	},
	
	methods: {
		isShort( item ) {
			return item.split( ' ' ).length < 2 ? true : false;
		},
	},
}
</script>


<template>
    <li @click="counter++" :key="index">
        {{item}}
        <small v-if="isShort(item)" :class="{'text-danger': isShort(item)}"> - shooooort</small>
	</li>
</template>

<style scoped>

</style>