<!-- Navbar.svelte -->
<script>
    import { writable } from "svelte/store";
    import { Router, Link, Route } from 'svelte-routing';
    const activeSection = writable("Current");
</script>

<style>
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        background-color: #f3f3f3;
    }

    .navbar-left,
    .navbar-right {
        display: flex;
        align-items: center;
    }

    .nav-item {
        margin-right: 1rem;
        cursor: pointer;
    }

    .nav-item:last-child {
        margin-right: 0;
    }
</style>

<div class="navbar">
    <div class="navbar-left">
        <span class="nav-item" on:click={() => activeSection.set("Current")}>Current</span>
        <span class="nav-item" on:click={() => activeSection.set("Old")}>Old</span>
        <span class="nav-item" on:click={() => activeSection.set("About")}>About</span>
    </div>
    <div class="navbar-right">
        <span class="nav-item" on:click={() => activeSection.set("Login")}>Login</span>
    </div>
</div>
