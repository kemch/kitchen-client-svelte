<svelte:head>
	<title>recipes</title>
</svelte:head>

<script>

	import { onMount } from 'svelte';

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
			const res = await fetch('http://3.135.235.251:1337/recipes', {
			// const res = await fetch('http://192.168.1.5:1337/recipes', {
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
			<li><a href="/recipe/{recipe.id}">{recipe.Name}</a></li>
		{/each}
	</ul>
	
</div>