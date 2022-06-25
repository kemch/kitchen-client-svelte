<script>
	export let factor;
	export let quantity;
	export let unit;
	export let ingredient;
	export let preparation;

	const fractions = {
		'0.5': '½',
		'0.33': '⅓',
		'0.66': '⅔',
		'0.25': '¼',
		'0.125': '⅛',
		'0.375': '⅜',
		'0.625': '⅝',
		'0.875': '⅞',
	}

	function formatFraction(decimal) {
		if (fractions[decimal]) {
			return fractions[decimal];
		} else {
			return decimal;
		}
	}


	function adjustServingSize(quantity, factor) {
		console.log(quantity)
		return quantity * factor;
	}

	let quantityFormatted = formatFraction(quantity);
</script>

<div class="ingredient">
	<div class="ingredient__bullet"></div>
	<div class="ingredient__quantity" data-quantity={quantity}>{adjustServingSize(quantity, factor)}&nbsp;</div>
	<div class="ingredient__unit">{unit}&nbsp;</div>
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
		/*margin-right: 8px;*/
	}
</style>


