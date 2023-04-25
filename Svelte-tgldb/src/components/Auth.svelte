<!-- Auth.svelte -->
<script>
    let email = '';
    let password = '';
    let confirmPassword = '';

    const login = () => {
        if (email && password) {
            console.log("Logging in with email:", email, "and password:", password);
            // Implement your login logic here.
        } else {
            alert("Please fill in all fields for login.");
        }
    };

    const signUp = () => {
        if (email && password && confirmPassword) {
            if (password === confirmPassword) {
                console.log("Signing up with email:", email, "and password:", password);
                // Implement your sign-up logic here.
            } else {
                alert("Passwords do not match.");
            }
        } else {
            alert("Please fill in all fields for sign-up.");
        }
    };
</script>

<style>
    .auth-container {
        display: flex;
        justify-content: space-around;
    }

    .form-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    button {
        cursor: pointer;
    }
</style>

<div class="auth-container">
    <div class="form-container">
        <h2>Login</h2>
        <input type="email" bind:value="{email}" placeholder="Email" />
        <input type="password" bind:value="{password}" placeholder="Password" />
        <button on:click="{login}">Login</button>
    </div>
    <div class="form-container">
        <h2>Sign Up</h2>
        <input type="email" bind:value="{email}" placeholder="Email" />
        <input type="password" bind:value="{password}" placeholder="Password" />
        <input type="password" bind:value="{confirmPassword}" placeholder="Confirm Password" />
        <button on:click="{signUp}">Sign Up</button>
    </div>
</div>
