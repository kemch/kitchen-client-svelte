<script context="module">
	import API_URL from '../../api.js';
	import Ingredient from '../../components/Ingredient.svelte';
	import IngredientsSectionHeading from '../../components/IngredientsSectionHeading.svelte';
	import Tag from '../../components/Tag.svelte';
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page

	export async function preload(page, session) {
		// the `id` parameter is available because this file
		// is called [id].svelte
		const { id } = page.params;

		// `this.fetch` is a wrapper around `fetch` that allows
		// you to make credentialled requests on both
		// server and client
		const res = await this.fetch(`${API_URL}/recipes/${id}`);
		const recipe = await res.json();
		console.log(recipe.IngredientList.length)
		console.log(recipe);
		return { recipe };
	}


</script>

<script>
	export let recipe;
	let tags = recipe.tags.length ? recipe.tags : null;
	let incrementing = false;
	let factor = 1;
	let increment = 1;
	function revealIncrementer() {
		incrementing = !incrementing;
	}
	function incrementUp() {
		factor = factor + increment;
	}
	function incrementDown() {
		if (factor > increment) {
			factor = factor - increment;
		} else {
			factor = increment;
		}
	}


</script>

<svelte:head>
	<title>{recipe.Name}</title>
</svelte:head>

<h1><a class="upward-nav" href="/"><img src="/chevron-left.svg" alt="Back"></a>{recipe.Name}</h1>

{#if tags}
	{#each tags as tag}
		<Tag tag={tag} />
	{/each}
{/if}

<div class="recipe__serving-size">
	<div class="flex--left">
		<div class="recipe__serving-size__label">Serving size</div>
		<button class="recipe__serving-size__stepper" on:click={incrementDown}> - </button>
		<input class="recipe__serving-size__input" type="text" bind:value={factor}>
		<button class="recipe__serving-size__stepper" on:click={incrementUp}> + </button>
	</div>
	<div class="flex--right">
		{#if incrementing}
			<div class="recipe__serving-size__label">Increment</div>
			<select class="recipe__serving-size__factor" bind:value={increment}>
				<option value={1}>by 1</option>
				<option value={0.5}>by 1/2</option>
				<option value={0.333}>by 1/3</option>
				<option value={0.25}}>by 1/4</option>
				<option value={0.125}>by 1/8</option>
			</select>
		{:else}
			<button on:click={revealIncrementer} class="overflow">by {increment}</button>
		{/if}
	</div>
</div>

{#if recipe.image}
	<img src="{recipe.image.url}" alternativeText="image">
	<img src="{recipe.image.formats.thumbnail.url}" alternativeText="image">
{/if}
<div class="recipe__section">
{#if recipe.IngredientList.length}
 	{#if recipe.IngredientList[0].HeadingOnly !== true}
		<h2>Ingredients</h2>
	{/if}
	{#each recipe.IngredientList as ingredient}
		{#if ingredient.HeadingOnly === true}
			<IngredientsSectionHeading
				heading="{ingredient.Heading}"
			>
			</IngredientsSectionHeading>
		{:else}
			<Ingredient
				bind:factor = {factor}
				quantity={ingredient.Quantity}
				unit={ingredient.Unit}
				ingredient={ingredient.ingredient.Name}
				preparation={ingredient.Preparation}
				>
			</Ingredient>
		{/if}
	{/each}
{/if}
<!-- 
{#if recipe.IngredientsList2.length}
	{#if recipe.IngredientSection2Heading}
		<h2>{recipe.IngredientSection2Heading}</h2>
	{/if}
{#each recipe.IngredientsList2 as ingredient}
<Ingredient
	quantity={ingredient.Quantity}
	unit={ingredient.Unit}
	ingredient={ingredient.ingredient.Name}
	preparation={ingredient.Preparation}
	>
</Ingredient>
{/each}
{/if}

{#if recipe.IngredientsList3.length}
	{#if recipe.IngredientSection3Heading}
		<h2>{recipe.IngredientSection3Heading}</h2>
	{/if}
{#each recipe.IngredientsList3 as ingredient}
<Ingredient
	quantity={ingredient.Quantity}
	unit={ingredient.Unit}
	ingredient={ingredient.ingredient.Name}
	preparation={ingredient.Preparation}
	>
</Ingredient>
{/each}
{/if} -->

</div>
<div class="recipe__section">
<h2>Instructions</h2>
<div class='content' style="white-space:pre-wrap;">
{@html recipe.Recipe}
</div>
</div>

<style>
	h1 {
		display: flex;
		align-items: center;
		width: 100%;
		flex: 0 0 100%;
	}
	.upward-nav {
		margin-right: 4px;
		display: block;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		background-color: #E0E0E0;
	}
	.recipe__section {
		margin: 24px auto;
	}
	.recipe__serving-size__label {
		line-height: 1.9;
		margin-right: 5px;
	}
	.recipe__serving-size {
		display:  flex;
		vertical-align: middle;
	}
	.recipe__serving-size__input {
		max-width: 25px;
		border:  0;
		/*padding-left: 10px;*/
		text-align:  center;
	}

	.recipe__serving-size__stepper {
		background: #E0E0E0;
		border:  0;
		width: 32px;
		height: 32px;
		border-radius:  50%;
		text-align:  center;
		/*line-height: 32px;*/
		font-size: 16px;
		padding:  0;
		margin:  0;
	}
	.overflow {
		background:  transparent;
		border:  0;
		color: #3870FF;
		font-weight: 600;
		width:  auto;
		font-size: 12px;
		padding-left: 10px;
		padding-right: 10px;
		border-radius: 5px;
	}
	.recipe__serving-size__stepper:active {
		background-color: #b8b8b8;
	}
	.flex--left,
	.flex--right {
		display:  flex;
	}
	.flex--right {
		margin-left:  auto;
		text-align:  right;
	}
</style>