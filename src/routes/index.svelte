<svelte:head>
	<title>Recipes</title>
</svelte:head>

<script>
	import API_URL from '../api.js';

	import { onMount } from 'svelte';
	import RecipeListItem from '../components/RecipeListItem.svelte';
	import Skeletal from '../components/Skeletal.svelte';

	let recipes = [];
	let error = null


	onMount(async () => {
		const parseJSON = (resp) => (resp.json ? resp.json() : resp);
		const checkStatus = (resp) => {
	    if (resp.status >= 200 && resp.status < 300) {
	      return resp;
	    }
	    return parseJSON(resp).then((resp) => {
	      throw resp;
	    });
	  };
	  const headers = {
	    'Content-Type': 'application/json',
	  };

		try {
			const res = await fetch(`${API_URL}/recipes?pagination[limit]=100`, {
			  method: "GET",
			  headers: {
			     'Content-Type': 'application/json'
			  },
			}).then(checkStatus)
	      .then(parseJSON);
			recipes = res
		} catch (e) {
			error = e
		}
	});
	console.log('recipes')
	console.log(recipes)
</script>
<div class="content">
	<h1>Recipes</h1>
	{#if typeof recipes == 'undefined' }
		<Skeletal />
		<Skeletal />
		<Skeletal />
		<Skeletal />
		<Skeletal />
		<Skeletal />
	{:else}
		{#if recipes.data}
			{#each recipes.data as recipe}
				<RecipeListItem recipe={recipe} />
			{/each}
		{/if}
	{/if}
	
</div>

<style>
	ul {
		padding-left: 0;
		list-style: none;
	}
</style>