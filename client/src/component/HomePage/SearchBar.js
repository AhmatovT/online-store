import React from 'react';

function SearchBar(props) {
    return (
        <form className='gallery'>
            <div className='wrapper'>
                <div className='wrapper_block'>
                    <div className='search'>
                        <span className='icon_search'><i className="fa fa-solid fa-search"></i></span>
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <button>Search</button>
                </div>
            </div>
            
        </form>
    );
}

export default SearchBar;