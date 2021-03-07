<script>
	export let quantity;
	export let unit;
	export let ingredient;
	export let preparation;
</script>

<div class="ingredient">
	<div class="ingredient__bullet"></div>
	<div class="ingredient__quantity">{quantity}</div>
	<div class="ingredient__unit">{unit}</div>
	<div class="ingredient__name">{ingredient}</div>
	{#if preparation}
		<div class="ingredient__preparation">, {preparation}</div>
	{/if}
</div>

<style>
	.ingredient__bullet {
		width: 16px;
		height: 16px;
		border-radius: 2px;
		background-color: #E0E0E0;
		margin-right: 8px;
	}
	.ingredient {
		display: flex;
		min-height: 32px;
		align-items: center;
	}

	.ingredient__unit,
	.ingredient__quantity {
		font-weight: 700;
		font-size: var(--text-size-md);
	}
	.ingredient__unit {
		margin-right: 8px;
	}
</style>


