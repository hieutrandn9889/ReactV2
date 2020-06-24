import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
               <div>
                   <nav className="navbar navbar-inverse">
                        <a className="navbar-brand" href="https://trello.com/b/koa0JzwW/prj-proxiboxpharma" target="#">Title</a>
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <a href="https://trello.com/b/koa0JzwW/prj-proxiboxpharma" target="#">Home</a>
                            </li>
                            <li>
                                <a href="https://trello.com/b/koa0JzwW/prj-proxiboxpharma" target="#">Danh Mục Mua Hàng</a>
                            </li>
                        </ul>
                    </nav>
               </div>
                 
        )
    }
}

export default Header;
