import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Breadcrumb() {
    const currentPath = useLocation().pathname;
    return (
        <ol className="arrows">
            <li>
                <Link to="/" className={(currentPath == "/" ? "current" : "")}>Todo List</Link>
            </li>
            <li>
                <Link to="/addTodo" className={`${currentPath == "/addTodo" ? "current" : ""}`}>Add Todo</Link>
            </li>
    </ol> 
    )
}
