<script>
	export let recipe;

</script>

<li>
	<a href="/recipes/{recipe.id}"><img src="/book.svg" alt=""> {recipe.Name}</a>
</li>

<style>
	img {
		margin-right: 8px;
	}
	a {
		font-size: var(--text-size-md);
		font-weight: bold;
		display: flex;
		align-items: center;
		text-decoration: none;
		min-height: 44px;
		/*border-bottom: 1px solid #e4dada;*/
	}
</style>