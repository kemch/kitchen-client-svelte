<script context="module">
	import API_URL from '../../api.js';
	import Ingredient from '../../components/Ingredient.svelte';
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
</script>

<svelte:head>
	<title>{recipe.Name}</title>
</svelte:head>

<h1>{recipe.Name}</h1>

{#if recipe.IngredientList.length}
	{#if recipe.IngredientSection1Heading}
		<h2>{recipe.IngredientSection1Heading}</h2>
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
{/if}


<div class='content' style="white-space:pre-wrap;">
{@html recipe.Recipe}
</div>