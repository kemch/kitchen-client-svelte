<svelte:head>
	<title>recipes</title>
</svelte:head>

<script>
	import API_URL from '../../api.js';

	import { onMount } from 'svelte';
	console.log(API_URL)

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
			const res = await fetch(`${API_URL}/recipes`, {
			  method: "GET",
			  headers: {
			     'Content-Type': 'application/json'
			  },
			}).then(checkStatus)
	      .then(parseJSON);
			recipes = res
			console.log(recipes)
		} catch (e) {
			error = e
		}
	});
</script>
<div class="content">
	<h1>Recipes</h1>
	<ul>
		{#each recipes as recipe}
			<li><a href="/recipes/{recipe.id}">{recipe.Name}</a></li>
		{/each}
	</ul>
	
</div>