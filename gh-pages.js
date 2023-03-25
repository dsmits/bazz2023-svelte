
import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:dsmits/bazz2023-svelte.git', // Update to point to your repository
        user: {
            name: 'Djura Smits', // update to use your name
            email: 'djura.smits@gmail.com' // Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);