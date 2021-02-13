import { onDestroy } from 'svelte';
import { stores } from '@sapper/app';


let token = '';
const { session } = stores();
const unsubscribe = session.subscribe(value => {
	token = value.API_URL;
});

const api = token
onDestroy(unsubscribe);

// console.log(token)

