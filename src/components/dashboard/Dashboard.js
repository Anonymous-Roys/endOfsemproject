import React from 'react'
import './emp.css'
import ProductList from '../products/ProductList'

const Dashboard = () => {
  return (
    <div>
        <div class="dashboard">
        <aside class="sidebar">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Reports</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </aside>
        <div class="main-content">
            <header class="top-bar">
               
                <div class="search-bar">
                    <input type="text" placeholder="Search..."/>
                </div>
                <div class="user-info">
                    <span>Username</span>
                </div>
            </header>
            <main class="main">
                <h1>Welcome to the Dashboard</h1>
                <ProductList/>
            </main>
        </div>
    </div>
    </div>
  )
}

export default Dashboard