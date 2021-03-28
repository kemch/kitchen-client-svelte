<script context="module">
	import API_URL from '../../api.js';
	import Ingredient from '../../components/Ingredient.svelte';
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
		return { recipe };
	}

</script>

<script>
	// export let id;
	export let recipe;
	let tags = recipe.tags.length ? recipe.tags : null;
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

<div class="recipe__section">
{#if recipe.IngredientList.length}
	{#if recipe.IngredientSection1Heading}
		<h2>{recipe.IngredientSection1Heading}</h2>
	{:else}
		<h2>Ingredients</h2>
	{/if}

{#each recipe.IngredientList as ingredient}
<Ingredient
	quantity={ingredient.Quantity}
	unit={ingredient.Unit}
	ingredient={ingredient.ingredient.Name}
	preparation={ingredient.Preparation}
	>
</Ingredient>
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
</style>