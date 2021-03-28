<script>
	import Tag from './Tag.svelte';
	export let recipe;

	let tags = recipe.tags.length ? recipe.tags : null;

</script>

<li>
	<a href="/recipes/{recipe.id}"><img src="/book.svg" alt=""> {recipe.Name}</a>

	{#if tags}
	<div class="tags">
		{#each tags as tag}
			<Tag tag={tag} size="short"/>
		{/each}
	</div>
	{/if}
</li>

<style>
	img {
		margin-right: 8px;
	}
	li {
		display: flex;
		align-items: center;
	}
	.tags {
		margin-left: auto;
		text-align: right;
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