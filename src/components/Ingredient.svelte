<script>
	export let quantity;
	export let unit;
	export let ingredient;
	export let preparation;
console.log(quantity)
console.log(unit)
console.log(ingredient)
</script>
<table>
	<tr>
		<td>{quantity}</td>
		<td>{unit}</td>
		<td>{ingredient}</td>
		{#if preparation}
			, {preparation}
		{/if}
	</tr>
</table>