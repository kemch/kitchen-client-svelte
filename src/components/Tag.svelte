<script>
	export let tag;
	export let size = 'long';
</script>


<div class="tag tag--{tag.color}">
	{#if size === 'long'}
	<div class="tag__name">{tag.tag_name}</div>
	{/if}
	{#if size === 'short'}
	<div class="tag__name-short">{tag.tag_name_short}</div>
	{/if}
</div>

	<!-- easy -->
	<!-- quick -->
	<!-- vegan -->
	<!-- vegetarian -->
	<!-- instant-pot -->
	<!-- slow-cooker -->
<style>

	.tag {
		display: inline-flex;
		border-radius: 4px;
		font-size: var(--font-size-sm);
		font-weight: 600;
		padding: 2px 8px;
		background-color: #f3f3f3;
		color: #838383;
		margin-right: 4px;
	}

	.tag--green {
		background-color: #c4f796;
		color: #389a45;
	}
	.tag--orange {
		background-color: #fde1ae;
		color: #b95920;
	}
</style>