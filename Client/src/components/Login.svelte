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

<div class="auth-container">
    <div class="form-container">
        <h2>Login</h2>
        <input type="email" bind:value="{email}" placeholder="Email" />
        <input type="password" bind:value="{password}" placeholder="Password" />
        <button on:click="{login}">Login</button>
    </div>
</div>
