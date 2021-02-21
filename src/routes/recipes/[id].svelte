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


{#each recipe.IngredientList as ingredient}
<Ingredient
	quantity={ingredient.Quantity}
	unit={ingredient.Unit}
	ingredient={ingredient.ingredient.Name}
	preparation={ingredient.Preparation}
	>
</Ingredient>
{/each}


<div class='content' style="white-space:pre-wrap;">
{@html recipe.Recipe}
</div>