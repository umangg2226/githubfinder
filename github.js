class GitHub {
    constructor() {
        this.client_id = 'a1ff0846445c4d0617c1';
        this.client_secret = '68252f1fa718231efe3bc33bb0a088b2d83b76d0';
        this.repos_count = 5;
        this.repos_sort = 'create: asc '
    }

    async getUser(user) {
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }

    }
}