import readline from 'readline';

// Create readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Global variables to store fetched posts and API call times
let posts = [];
let apiCallTimes = [];

// Function to display menu
function displayMenu() {
    console.log('\n=== MENU ===');
    console.log('1. Fetch 10 Posts');
    console.log('2. Display Post Statistics');
    console.log('3. Display API Performance Statistics');
    console.log('4. Exit');
    console.log('============\n');
}

// Helper function to get user input
function promptUser(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Option 1: Fetch posts
async function fetchPosts() {
    try {
        // 1. Print loading state
        console.log('\nLoading posts...');

        // 2. Track start time
        const startTime = Date.now();

        // 3. Make the fetch request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // 4. Track end time and calculate duration
        const endTime = Date.now();
        const duration = endTime - startTime;

        // 5. Store the duration in apiCallTimes array
        apiCallTimes.push(duration);

        // Store the posts in the global posts array
        posts = data;

        // Display success message
        console.log(`✓ Successfully fetched ${posts.length} posts!`);
        console.log(`\nPost Titles:`);

        // Print all post titles
        posts.forEach((post, index) => {
            console.log(`${index + 1}. ${post.title}`);
        });

    } catch (error) {
        console.error(`✗ Error fetching posts: ${error.message}`);
    }
}

// Option 2: Display post statistics
function displayPostStatistics() {
    // Check if posts have been fetched
    if (posts.length === 0) {
        console.log('\n✗ Error: No posts have been fetched yet. Please select option 1 first.');
        return;
    }

    console.log('\n=== Post Statistics ===');

    // Total number of posts
    console.log(`Total posts: ${posts.length}`);

    // Average body length
    const totalBodyLength = posts.reduce((sum, post) => sum + post.body.length, 0);
    const avgBodyLength = Math.round(totalBodyLength / posts.length);
    console.log(`Average body length: ${avgBodyLength} characters`);

    // Shortest post title
    const shortestTitle = posts.reduce((shortest, post) =>
        post.title.length < shortest.length ? post.title : shortest
    , posts[0].title);
    console.log(`Shortest title: "${shortestTitle}"`);

    // Longest post title
    const longestTitle = posts.reduce((longest, post) =>
        post.title.length > longest.length ? post.title : longest
    , posts[0].title);
    console.log(`Longest title: "${longestTitle}"`);
}

// Option 3: Display API performance statistics
function displayApiPerformance() {
    // Check if any API calls have been made
    if (apiCallTimes.length === 0) {
        console.log('\n✗ Error: No API calls have been made yet. Please select option 1 first.');
        return;
    }

    console.log('\n=== API Performance Statistics ===');

    // Total number of API calls
    console.log(`Total API calls made: ${apiCallTimes.length}`);

    // Average time per call
    const totalTime = apiCallTimes.reduce((sum, time) => sum + time, 0);
    const avgTime = Math.round(totalTime / apiCallTimes.length);
    console.log(`Average response time: ${avgTime}ms`);

    // Fastest call time
    const fastestCall = Math.min(...apiCallTimes);
    console.log(`Fastest call: ${fastestCall}ms`);

    // Slowest call time
    const slowestCall = Math.max(...apiCallTimes);
    console.log(`Slowest call: ${slowestCall}ms`);
}

// Main function to run the application
async function main() {
    let running = true;

    while (running) {
        displayMenu();
        const choice = await promptUser('Enter your choice (1-4): ');

        switch (choice) {
            case '1':
                await fetchPosts();
                break;
            case '2':
                displayPostStatistics();
                break;
            case '3':
                displayApiPerformance();
                break;
            case '4':
                console.log('Goodbye!');
                running = false;
                rl.close();
                break;
            default:
                console.log('Invalid choice. Please enter 1, 2, 3, or 4.');
        }
    }
}

// Run the application
main();
