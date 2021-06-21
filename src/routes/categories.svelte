<svelte:head>
	<title>Recipes</title>
</svelte:head>
<script>
	import API_URL from '../api.js';

	import { onMount } from 'svelte';

	let categories = [];
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
			const res = await fetch(`${API_URL}/categories`, {
			  method: "GET",
			  headers: {
			     'Content-Type': 'application/json'
			  },
			}).then(checkStatus)
	      .then(parseJSON);
			categories = res
			console.log(categories)

		} catch (e) {
			error = e
		}
	});
</script>


<h1>Categories</h1>