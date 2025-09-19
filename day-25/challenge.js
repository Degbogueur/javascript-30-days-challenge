async function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                { id: 1, title: "Post One" },
                { id: 2, title: "Post Two" }
            ];
            resolve(data);
        }, 2000);
    });
}

async function fetchComments(postId) {
    const comments = [
        { postId: 1, text: "Nice post!" },
        { postId: 1, text: "Thanks for sharing" }
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(comments.filter(c => c.postId === postId));
        }, 1000);
    });
}

try {
    const posts = await fetchPosts();

    for (const post of posts) {
        const comments = await fetchComments(post.id);
        console.log(`${post.title}:`);
        if (comments.length > 0) {
            comments.forEach(comment => {
                console.log(`- ${comment.text}`);
            });
        } else {
            console.log('- (no comments)');
        }
    }
} catch (error) {
    console.error('Error fetching data:' + error);
}
